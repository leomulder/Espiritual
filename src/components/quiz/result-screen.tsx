import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { patriarchData } from '@/lib/quiz-data';
import type { Patriarch } from '@/lib/quiz-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, Award, BookOpen, Download, Sparkles } from 'lucide-react';

interface ResultScreenProps {
  patriarch: Patriarch;
  insight: string;
}

export function ResultScreen({ patriarch, insight }: ResultScreenProps) {
  const resultData = patriarchData[patriarch];
  const ebookImage = PlaceHolderImages.find(img => img.id === 'ebook-cover');

  return (
    <div className="w-full animate-in fade-in duration-1000">
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center max-w-3xl mx-auto py-16">
        <div className="p-8 rounded-lg bg-card/50 backdrop-blur-sm animate-in fade-in-zoom-in-95 duration-700">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-headline text-4xl md:text-5xl text-primary">{resultData.title}</h2>
          <p className="mt-4 text-lg md:text-xl text-foreground/80">{resultData.description}</p>
          <Card className="mt-8 bg-background/70 border-primary/30 shadow-inner">
            <CardContent className="pt-6">
              <p className="text-lg italic text-foreground/90 leading-relaxed">
                "{insight}"
              </p>
            </CardContent>
          </Card>
        </div>
        <Button asChild size="lg" variant="ghost" className="mt-12 text-accent hover:text-accent/80 animate-pulse">
            <a href="#transition">
                Descubre más <ArrowDown className="ml-2 h-5 w-5" />
            </a>
        </Button>
      </section>

      <div id="transition" className="bg-background/80 backdrop-blur-sm rounded-t-xl shadow-2xl">
        <section className="py-20 text-center max-w-3xl mx-auto px-4">
            <h3 className="font-headline text-3xl md:text-4xl text-foreground/90">Tu resultado revela que la fe dormida en ti está despertando.</h3>
            <p className="mt-4 text-lg text-foreground/70">Eso mismo ocurrió con los grandes Patriarcas y Profetas. En este libro descubrirás los secretos que ellos conocieron — y que el mundo moderno olvidó.</p>
            <Button asChild size="lg" variant="ghost" className="mt-8 text-accent hover:text-accent/80">
                <a href="#ebook-details">
                    Descubrir ahora <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
                </a>
            </Button>
        </section>

        <main id="ebook-details" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl text-foreground/90">Lo que Abraham, Isaías y Daniel vieron… ahora puede ser revelado a ti.</h1>
                <p className="mt-4 text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">Un viaje a través de las páginas más profundas de la historia bíblica que cambiará tu manera de entender la fe.</p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="font-headline text-2xl text-primary">Contenido del libro:</h3>
                    <ul className="space-y-4 text-lg text-foreground/80">
                        <li className="flex items-start"><BookOpen className="h-6 w-6 mr-3 mt-1 text-primary/70 shrink-0" /><span>Por qué Dios probó a Abraham más allá del sacrificio.</span></li>
                        <li className="flex items-start"><BookOpen className="h-6 w-6 mr-3 mt-1 text-primary/70 shrink-0" /><span>El secreto detrás de las visiones de Daniel.</span></li>
                        <li className="flex items-start"><BookOpen className="h-6 w-6 mr-3 mt-1 text-primary/70 shrink-0" /><span>Lo que Isaías entendió sobre el silencio de Dios.</span></li>
                        <li className="flex items-start"><BookOpen className="h-6 w-6 mr-3 mt-1 text-primary/70 shrink-0" /><span>Cómo los profetas reconocían los signos que hoy ignoramos.</span></li>
                        <li className="flex items-start"><BookOpen className="h-6 w-6 mr-3 mt-1 text-primary/70 shrink-0" /><span>El propósito que une a Patriarcas y creyentes actuales.</span></li>
                    </ul>
                </div>
                {ebookImage && (
                    <div className="flex justify-center">
                        <div className="relative shadow-2xl shadow-primary/20 rounded-lg transform transition-transform duration-300 hover:scale-105">
                             <Image
                                src={ebookImage.imageUrl}
                                alt={ebookImage.description}
                                width={400}
                                height={533}
                                className="rounded-lg"
                                data-ai-hint={ebookImage.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
                        </div>
                    </div>
                )}
            </div>

            <div className="text-center mt-20">
                <p className="font-headline text-2xl italic text-foreground/80">"Las historias son antiguas. Las lecciones, eternas."</p>
            </div>
            
            <section className="mt-20 text-center bg-card/50 rounded-xl p-10 shadow-lg">
                <h2 className="font-headline text-3xl text-foreground/90">Descarga el eBook "Patriarcas y Profetas" y deja que las páginas hablen a tu espíritu.</h2>
                <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 transform hover:scale-105 transition-transform duration-300">
                    <Download className="mr-2 h-5 w-5" />
                    Quiero mi revelación
                </Button>
            </section>
            
            <section className="mt-20 text-center max-w-3xl mx-auto">
                 <div className="flex justify-center mb-4">
                    <Award className="h-12 w-12 text-primary" />
                 </div>
                <h3 className="font-headline text-2xl text-foreground/80">Confianza y Autoridad</h3>
                <p className="mt-2 text-foreground/70">"Basado en los relatos sagrados, escritos con respeto y profundidad espiritual, este libro ha ayudado a miles a entender el plan divino en su vida cotidiana."</p>
            </section>
            
            <section className="mt-20 py-16 text-center border-t border-border/50">
                <h3 className="font-headline text-3xl text-foreground/80">¿Y si esta lectura fuera el inicio del propósito que buscabas?</h3>
                <Button size="lg" variant="link" className="mt-6 text-accent hover:text-accent/80 text-xl">
                    Comenzar ahora
                </Button>
            </section>
        </main>
      </div>
    </div>
  );
}
