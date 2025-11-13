'use server';

/**
 * @fileOverview A flow to generate personalized spiritual insights based on quiz answers.
 *
 * - generateSpiritualInsights - A function that generates spiritual insights.
 * - GenerateSpiritualInsightsInput - The input type for the generateSpiritualInsights function.
 * - GenerateSpiritualInsightsOutput - The return type for the generateSpiritualInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSpiritualInsightsInputSchema = z.object({
  quizAnswers: z
    .array(z.string())
    .describe('An array of quiz answers provided by the user.'),
  patriarchOrProphet: z
    .enum(['Abraham', 'Daniel', 'Isaiah', 'Jeremiah', 'Jacob'])
    .describe('The patriarch or prophet associated with the user.'),
});
export type GenerateSpiritualInsightsInput = z.infer<typeof GenerateSpiritualInsightsInputSchema>;

const GenerateSpiritualInsightsOutputSchema = z.object({
  spiritualInsight: z
    .string()
    .describe('A personalized spiritual insight based on the quiz answers and associated patriarch or prophet.'),
});
export type GenerateSpiritualInsightsOutput = z.infer<typeof GenerateSpiritualInsightsOutputSchema>;

export async function generateSpiritualInsights(input: GenerateSpiritualInsightsInput): Promise<GenerateSpiritualInsightsOutput> {
  return generateSpiritualInsightsFlow(input);
}

const spiritualInsightsPrompt = ai.definePrompt({
  name: 'spiritualInsightsPrompt',
  input: {schema: GenerateSpiritualInsightsInputSchema},
  output: {schema: GenerateSpiritualInsightsOutputSchema},
  prompt: `Eres un creador de experiencias interactivas espirituales, experto en UX, UI y storytelling bíblico contextualizado para el público latinoamericano (México, Colombia, Perú y Chile).

  Genera una revelación espiritual personalizada basada en las respuestas del usuario y el patriarca/profeta asociado.

  Utiliza un lenguaje profundo, emocional y poético, con un toque místico, sin sonar religioso dogmático.
  Usa expresiones y giros típicos locales (“chevere”, “bacán”, “padre”, “genial”, “qué fuerte”, “te hace pensar”, etc.) sin regionalismos extremos.

  Patriarca/Profeta: {{{patriarchOrProphet}}}
  Respuestas del usuario: {{{quizAnswers}}}

  Revelación espiritual:`,
});

const generateSpiritualInsightsFlow = ai.defineFlow(
  {
    name: 'generateSpiritualInsightsFlow',
    inputSchema: GenerateSpiritualInsightsInputSchema,
    outputSchema: GenerateSpiritualInsightsOutputSchema,
  },
  async input => {
    const {output} = await spiritualInsightsPrompt(input);
    return output!;
  }
);
