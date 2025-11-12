import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const startImage = PlaceHolderImages.find(img => img.id === 'quiz-start-image');

  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto p-4 animate-in fade-in duration-1000">
      <h1 className="font-headline text-4xl md:text-6xl text-foreground/90">
        ¿Qué Patriarca o Profeta Revela Tu Verdadero Espíritu?
      </h1>
      
      {startImage && (
        <div className="my-8">
          <Image
            src={startImage.imageUrl}
            alt="Patriarcas y Profetas"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
            data-ai-hint={startImage.imageHint}
            priority
          />
        </div>
      )}

      <p className="mt-4 text-lg md:text-xl text-foreground/70">
        Descubre el mensaje oculto que puede cambiar tu vida hoy.
      </p>
      <p className="mt-4 text-lg md:text-xl text-foreground/70">
        Cada respuesta revelará qué parte de tu fe ha estado dormida.
      </p>
      <p className="mt-4 text-lg md:text-xl text-foreground/70 italic">
        Responde con sinceridad — el resultado puede despertar algo que pensabas olvidado.
      </p>
      <Button 
        onClick={onStart} 
        size="lg" 
        className="mt-8 group bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Comenzar la revelación
        <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
      </Button>
    </div>
  );
}
