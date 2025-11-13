'use server';

import { generateSpiritualInsights } from '@/ai/flows/generate-spiritual-insights';
import type { Patriarch } from '@/lib/quiz-data';

export async function getSpiritualInsightAction(patriarch: Patriarch, answers: string[]): Promise<string> {
  try {
    const result = await generateSpiritualInsights({
      patriarchOrProphet: patriarch,
      quizAnswers: answers,
    });
    return result.spiritualInsight;
  } catch (error) {
    console.error("Error generating spiritual insight:", error);
    // Return a fallback message in case of an error with the AI service
    return "En este momento, los cielos están en silencio, pero tu viaje no ha terminado. Reflexiona sobre tus respuestas y busca la sabiduría en tu interior. La revelación llegará a su debido tiempo.";
  }
}
