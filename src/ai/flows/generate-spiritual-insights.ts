'use server';

/**
 * @fileOverview A flow to generate personalized spiritual insights based on quiz answers.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { getFirestore } from "firebase-admin/firestore";

// --- Firestore instance ---
const db = getFirestore();

// --- Função para salvar métricas ---
async function saveMetric(data: Record<string, any>) {
  await db.collection("metrics").add({
    ...data,
    timestamp: Date.now(),
  });
}

// --- INPUT SCHEMA ---
const GenerateSpiritualInsightsInputSchema = z.object({
  quizAnswers: z
    .array(z.string())
    .describe('An array of quiz answers provided by the user.'),
  patriarchOrProphet: z
    .enum(['Abraham', 'Daniel', 'Isaiah', 'Jeremiah', 'Jacob'])
    .describe('The patriarch or prophet associated with the user.'),
  session: z
    .string()
    .describe("Unique session ID for tracking metrics."),
});
export type GenerateSpiritualInsightsInput = z.infer<typeof GenerateSpiritualInsightsInputSchema>;

// --- OUTPUT SCHEMA ---
const GenerateSpiritualInsightsOutputSchema = z.object({
  spiritualInsight: z
    .string()
    .describe('A personalized spiritual insight based on the quiz answers and associated patriarch or prophet.'),
});
export type GenerateSpiritualInsightsOutput = z.infer<typeof GenerateSpiritualInsightsOutputSchema>;

// --- Prompt ---
const spiritualInsightsPrompt = ai.definePrompt({
  name: 'spiritualInsightsPrompt',
  input: { schema: GenerateSpiritualInsightsInputSchema },
  output: { schema: GenerateSpiritualInsightsOutputSchema },
  prompt: `
Eres un creador de experiencias interactivas espirituales, experto en UX, UI y storytelling bíblico contextualizado para el público latinoamericano (México, Colombia, Perú y Chile).

Genera una revelación espiritual personalizada basada en las respuestas del usuario y el patriarca/profeta asociado.

Utiliza un lenguaje profundo, emocional y poético, con un toque místico, sin sonar religioso dogmático.
Usa expresiones y giros típicos locales (“chevere”, “bacán”, “padre”, “genial”, “qué fuerte”, “te hace pensar”, etc.) sin regionalismos extremos.

Patriarca/Profeta: {{{patriarchOrProphet}}}
Respuestas del usuario: {{{quizAnswers}}}

Revelación espiritual:
`,
});

// --- FLOW ---
const generateSpiritualInsightsFlow = ai.defineFlow(
  {
    name: 'generateSpiritualInsightsFlow',
    inputSchema: GenerateSpiritualInsightsInputSchema,
    outputSchema: GenerateSpiritualInsightsOutputSchema,
  },
  async input => {

    // --- SALVAR MÉTRICAS DE ENTRADA ---
    await saveMetric({
      session: input.session,
      step: "quiz_submitted",
      answers: input.quizAnswers,
      patriarchOrProphet: input.patriarchOrProphet,
    });

    // --- EXECUTAR PROMPT ---
    const { output } = await spiritualInsightsPrompt(input);

    // --- SALVAR MÉTRICAS DA RESPOSTA ---
    await saveMetric({
      session: input.session,
      step: "insight_generated",
      spiritualInsight: output?.spiritualInsight,
    });

    return output!;
  }
);

// Export público
export async function generateSpiritualInsights(
  input: GenerateSpiritualInsightsInput
): Promise<GenerateSpiritualInsightsOutput> {
  return generateSpiritualInsightsFlow(input);
}
