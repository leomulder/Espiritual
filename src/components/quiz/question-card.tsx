import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import type { Question, Patriarch } from '@/lib/quiz-data';

interface QuestionCardProps {
  question: Question;
  totalQuestions: number;
  currentQuestionNumber: number;
  onAnswer: (patriarch: Patriarch, answerText: string) => void;
  isAnswering: boolean;
}

export function QuestionCard({
  question,
  totalQuestions,
  currentQuestionNumber,
  onAnswer,
  isAnswering,
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-8 animate-in fade-in-zoom-in-95 duration-500">
      <div>
        <Progress value={(currentQuestionNumber / totalQuestions) * 100} className="h-2 bg-primary/20 [&>*]:bg-primary" />
        <p className="text-center text-sm text-foreground/60 mt-2 font-body">
          Pregunta {currentQuestionNumber} de {totalQuestions}
        </p>
      </div>
      <div className="text-center">
        <h2 className="font-headline text-2xl md:text-4xl text-foreground/90">{question.text}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            size="lg"
            className="h-auto py-4 text-base justify-start text-left whitespace-normal leading-snug hover:bg-accent/20 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-200 transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none"
            onClick={() => onAnswer(option.patriarch, option.text)}
            disabled={isAnswering}
          >
            <span className="mr-4 font-bold text-primary/80">{String.fromCharCode(65 + index)}.</span>
            <span>{option.text}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
