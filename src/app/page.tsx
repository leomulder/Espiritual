'use client';

import { useState, useMemo, useCallback } from 'react';
import { StartScreen } from '@/components/quiz/start-screen';
import { QuestionCard } from '@/components/quiz/question-card';
import { ResultScreen } from '@/components/quiz/result-screen';
import { LoadingSpinner } from '@/components/quiz/loading-spinner';
import { quizQuestions } from '@/lib/quiz-data';
import type { Patriarch } from '@/lib/quiz-data';
import { getSpiritualInsightAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { registrarEvento } from "@/lib/metrics";
import { v4 as uuidv4 } from "uuid";


type QuizState = 'start' | 'in-progress' | 'loading' | 'result';
type Answer = { patriarch: Patriarch; answerText: string };

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<{ patriarch: Patriarch; insight: string } | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const { toast } = useToast();
  const [sessionId] = useState(() => uuidv4());


const handleStart = () => {
  registrarEvento(sessionId, "Inicio do Quiz"); // <-- NOVO
  setAnswers([]);
  setCurrentQuestionIndex(0);
  setResult(null);
  setQuizState('in-progress');
};


  const handleBack = () => {
    if (quizState === 'in-progress' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setAnswers(prev => prev.slice(0, -1));
    } else {
      setQuizState('start');
    }
  };

  const determineResult = useCallback((finalAnswers: Answer[]): Patriarch => {
    const counts: Record<string, number> = {
      Abraham: 0,
      Daniel: 0,
      Isaiah: 0,
      Jeremiah: 0,
      Jacob: 0,
    };

    finalAnswers.forEach(answer => {
      counts[answer.patriarch]++;
    });

    let maxCount = 0;
    let finalPatriarch: Patriarch = 'Abraham'; // Default fallback
    for (const patriarch in counts) {
      if (counts[patriarch as Patriarch] > maxCount) {
        maxCount = counts[patriarch as Patriarch];
        finalPatriarch = patriarch as Patriarch;
      }
    }
    
    return finalPatriarch;
  }, []);

  const handleAnswer = useCallback(async (patriarch: Patriarch, answerText: string) => {
    if (isAnswering) return;
    
    const newAnswers = [...answers, { patriarch, answerText }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
    } else {
        setIsAnswering(true);
        setQuizState('loading');
        const finalPatriarch = determineResult(newAnswers);
        const answerTexts = newAnswers.map(a => a.answerText);
        
        getSpiritualInsightAction(finalPatriarch, answerTexts)
            .then(insight => {
                setResult({ patriarch: finalPatriarch, insight });
                setQuizState('result');
            })
            .catch(err => {
                console.error(err);
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: 'No se pudo generar la revelación. Por favor, intenta de nuevo.',
                });
                setQuizState('start');
            }).finally(() => {
                setIsAnswering(false);
            });
    }
  }, [answers, currentQuestionIndex, determineResult, toast, isAnswering]);


  const currentQuestion = useMemo(() => quizQuestions[currentQuestionIndex], [currentQuestionIndex]);

  const renderContent = () => {
    switch (quizState) {
      case 'start':
        return <StartScreen onStart={handleStart} />;
      case 'in-progress':
        return (
          <QuestionCard
            question={currentQuestion}
            totalQuestions={quizQuestions.length}
            currentQuestionNumber={currentQuestionIndex + 1}
            onAnswer={handleAnswer}
            isAnswering={isAnswering}
          />
        );
      case 'loading':
        return <LoadingSpinner />;
      case 'result':
        if (result) {
          return <ResultScreen patriarch={result.patriarch} insight={result.insight} onRestart={handleStart} />;
        }
        setQuizState('start');
        return <StartScreen onStart={handleStart} />;
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-8 parchment-background">
      {quizState !== 'start' && quizState !== 'result' && (
        <Button 
          variant="ghost" 
          onClick={handleBack} 
          className="absolute top-4 left-4 z-20 text-foreground/70 hover:text-foreground hover:bg-transparent"
          aria-label="Volver"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      )}
      <div className="relative z-10 w-full">
          {renderContent()}
      </div>
    </main>
  );
}
