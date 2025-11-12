'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Patriarch } from '@/lib/quiz-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
    ShieldCheck,
    CheckCircle,
    Clock,
    ArrowUp,
    Smartphone,
    Headphones,
    FileText,
    Star,
    CalendarCheck,
    BookUser,
    MessageSquareQuote,
    Sparkles,
    Check,
} from 'lucide-react';
import Countdown from 'react-countdown';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ResultScreenProps {
  patriarch: Patriarch;
  insight: string;
}

const testimonials = [
    {
        quote: "Nunca imaginé que entender las pruebas de Abraham me haría entender las mías.",
        author: "Carolina M., México",
        id: "testimonial-carolina"
    },
    {
        quote: "Este aplicativo llegó justo cuando más lo necesitaba.",
        author: "María José R., Colombia",
        id: "testimonial-maria"
    },
     {
        quote: "Cada página me hizo sentir más cerca de Dios.",
        author: "Andrés V., Perú",
        id: "testimonial-andres"
    },
    {
        quote: "Usarlo fue como volver a escuchar la voz de Dios después de años de silencio.",
        author: "José Miguel., Chile",
        id: "testimonial-andres-2"
    }
];

const faqItems = [
    {
        question: "¿Qué recibiré al comprar?",
        answer: "Recibirás acceso inmediato y personal al aplicativo Patriarcas y Profetas, para leer, escuchar y hacer anotaciones desde cualquier dispositivo."
    },
    {
        question: "¿Necesito descargar algo?",
        answer: "No. El acceso es directo desde tu navegador a través de nuestra app web, con tu propio inicio de sesión."
    },
    {
        question: "¿Qué diferencia hay entre el plan básico y el completo?",
        answer: "El plan completo desbloquea herramientas de crecimiento espiritual como las anotaciones personales, reflexiones diarias y comentarios del autor. Es una experiencia más profunda y guiada."
    },
    {
        question: "¿Y si no me gusta la experiencia?",
        answer: "Tienes 15 días de garantía total. Si no sientes un crecimiento espiritual, te devolvemos tu inversión sin preguntas."
    },
    {
        question: "¿Por qué hay una fecha límite?",
        answer: "Ofrecemos acceso con descuento por tiempo limitado para esta primera versión del aplicativo. Las licencias son limitadas para garantizar un soporte de calidad a los primeros usuarios."
    }
]

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed top-4 left-4 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      variant="outline"
      size="icon"
    >
      <ArrowUp className="h-4 w-4" />
      <span className="sr-only">Volver arriba</span>
    </Button>
  );
};


export function ResultScreen({ patriarch, insight }: ResultScreenProps) {
  const authorImage = PlaceHolderImages.find(img => img.id === 'author-portrait');
  const appMockupImage = PlaceHolderImages.find(img => img.id === 'app-mockup');
  const targetDate = new Date('2024-11-17T23:59:59');

  return (
    <div className="w-full bg-white text-foreground">
        <BackToTopButton />

      {/* SECCIÓN 1 — Hero */}
      <section className="text-center py-16 md:py-24 px-6 md:px-16 bg-gradient-to-b from-background to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground/90">
            ✨ Lo que los Patriarcas descubrieron puede transformar tu fe… incluso en estos tiempos.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/70">
            No es solo un libro: es una experiencia digital guiada. Descubre los secretos que Abraham, Isaac y Jacob aprendieron cuando el silencio de Dios parecía definitivo y comprende el propósito detrás de cada prueba.
          </p>
          <Button size="lg" className="mt-10 cta-button w-full md:w-auto text-lg h-auto py-4">
            Acceder al App ahora
          </Button>
          <p className="mt-6 text-sm text-foreground/60">
            Más de 27,000 lectores en toda América Latina ya han sentido este despertar espiritual.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2 — Escasez */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center items-center gap-3">
                <Clock className="h-8 w-8 text-primary/80" />
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">Acceso especial limitado</h2>
            </div>
            <p className="mt-4 text-foreground/70">
                Por motivos de derechos de distribución, el acceso a esta edición especial del aplicativo <strong className="font-semibold">Patriarcas y Profetas</strong> estará disponible solo hasta el domingo 17 de noviembre o hasta agotar las licencias actuales.
            </p>
            <div className="mt-6 text-3xl md:text-4xl font-bold text-primary tabular-nums">
                <Countdown date={targetDate} />
            </div>
             <p className="mt-6 text-lg text-foreground/80 font-semibold">
                Esta no es una oferta más — es una oportunidad espiritual que muchos dejarán pasar sin darse cuenta.
            </p>
            <p className="mt-2 text-foreground/70">
                No esperes. Muchos ya se están uniendo en este momento.
            </p>
            <Button size="lg" className="mt-8 cta-button w-full md:w-auto text-lg h-auto py-4">
                Asegurar mi acceso ahora
            </Button>
        </div>
      </section>
      
      {/* SECCIÓN 3 - Mockup App */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-4">Una experiencia espiritual moderna y exclusiva</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
               A través del aplicativo exclusivo Patriarcas y Profetas, podrás leer, escuchar, anotar tus reflexiones y seguir un plan de estudio personalizado. Todo en un solo lugar.
            </p>
             {appMockupImage && (
              <Image
                src={appMockupImage.imageUrl}
                alt="Aplicativo Patriarcas y Profetas"
                width={600}
                height={450}
                className="rounded-lg shadow-2xl mx-auto"
                data-ai-hint={appMockupImage.imageHint}
              />
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12 text-center">
                <div className="flex flex-col items-center"><BookUser className="h-8 w-8 text-primary/80" /><p className="mt-2 text-sm font-medium">Lectura guiada</p></div>
                <div className="flex flex-col items-center"><Headphones className="h-8 w-8 text-primary/80" /><p className="mt-2 text-sm font-medium">Versión en audio</p></div>
                <div className="flex flex-col items-center"><FileText className="h-8 w-8 text-primary/80" /><p className="mt-2 text-sm font-medium">Notas personales</p></div>
                <div className="flex flex-col items-center"><Star className="h-8 w-8 text-primary/80" /><p className="mt-2 text-sm font-medium">Reflexiones diarias</p></div>
                <div className="flex flex-col items-center"><CalendarCheck className="h-8 w-8 text-primary/80" /><p className="mt-2 text-sm font-medium">Plan de 21 días</p></div>
                <div className="flex flex-col items-center"><Smartphone className="h-8 w-8 text-primary/80" /><p className="mt-2 text-sm font-medium">Acceso móvil</p></div>
            </div>
        </div>
      </section>

      {/* SECCIÓN 4 — Autoridad */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            {authorImage && (
              <Image
                src={authorImage.imageUrl}
                alt="Dr. Samuel Ortega"
                width={200}
                height={200}
                className="rounded-xl shadow-lg"
                style={{maxWidth: '200px'}}
                data-ai-hint={authorImage.imageHint}
              />
            )}
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-foreground/90">Dr. Samuel Ortega</h3>
            <p className="text-lg text-primary font-medium">Historiador bíblico y teólogo latinoamericano</p>
            <p className="mt-4 text-foreground/70">
              Con más de 20 años investigando los textos antiguos, el Dr. Ortega muestra cómo las luchas de los patriarcas reflejan los desafíos espirituales de hoy. Su trabajo ha inspirado a miles a conectar la fe antigua con la vida moderna.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — Urgencia Emocional */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Cada día que pasa sin comprender el propósito de tus pruebas, tu fe se enfría un poco más.
            No dejes que el ruido del mundo apague lo que Dios aún quiere revelarte.
            Esta experiencia fue diseñada para momentos como este.
          </p>
          <p className="mt-8 text-2xl font-semibold italic text-primary">
            🕯️ “A veces, perder el momento también es una decisión.”
          </p>
          <Button size="lg" className="mt-10 cta-button w-full md:w-auto text-lg h-auto py-4">
            Comenzar mi estudio guiado
          </Button>
        </div>
      </section>

      {/* SECCIÓN 6 — Planes */}
        <section className="py-16 px-6 bg-background">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-12">Elige cómo comenzar tu viaje espiritual</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="text-center">
                        <CardHeader>
                            <CardTitle className="text-2xl">Plan Básico</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-4xl font-bold">U$6,90</p>
                            <ul className="space-y-2 text-left text-foreground/80">
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Acceso completo al aplicativo</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Plan de lectura guiada</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Lectura y audio integrados</li>
                            </ul>
                            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary">Comenzar con el Básico</Button>
                        </CardContent>
                    </Card>
                    <Card className="border-2 border-primary shadow-2xl shadow-primary/20 relative">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                            Recomendado
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl">Plan Completo</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-4xl font-bold">U$11,90 <span className="text-xl line-through text-muted-foreground">U$18,90</span></p>
                             <ul className="space-y-2 text-left text-foreground/80">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Todo lo del Plan Básico</span></div></li>
                                <li className="flex items-start"><BookUser className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Módulo de anotaciones</span></div></li>
                                <li className="flex items-start"><MessageSquareQuote className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Comentarios del autor</span></div></li>
                                <li className="flex items-start"><Sparkles className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Reflexiones diarias guiadas</span></div></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Prioridad en actualizaciones</span></div></li>
                            </ul>
                             <p className="text-sm text-green-700 font-semibold"><Star className="inline-block h-4 w-4 mr-1" /> Ideal para una experiencia profunda.</p>
                            <Button className="w-full cta-button text-base md:text-lg h-auto py-3 px-6 whitespace-nowrap">Quiero el acceso completo al App</Button>
                            <p className="text-xs text-muted-foreground pt-2">🕊️ Muchos que comenzaron con el básico luego desearon haber elegido el completo desde el principio.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

      {/* SECCIÓN 7 — Garantía */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto" />
          <h3 className="mt-4 text-2xl font-semibold">Garantía total de 15 días</h3>
          <p className="mt-2 text-foreground/70">
            Si no sientes crecimiento espiritual con el aplicativo, te devolvemos el 100% sin preguntas.
          </p>
        </div>
      </section>

      {/* SECCIÓN 8 — Testimonios */}
        <section className="py-16 px-6 bg-background">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-12">Lo que dicen nuestros usuarios</h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => {
                            const image = PlaceHolderImages.find(img => img.id === testimonial.id);
                            return (
                            <CarouselItem key={index}>
                                <div className="p-2">
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                            {image && (
                                                <Avatar className="w-20 h-20 mb-4 border-4" style={{borderColor: '#C89D59'}}>
                                                    <AvatarImage src={image.imageUrl} alt={testimonial.author} className="object-cover" loading="lazy" />
                                                    <AvatarFallback>{testimonial.author.substring(0,2)}</AvatarFallback>
                                                </Avatar>
                                            )}
                                            <p className="text-lg italic">"{testimonial.quote}"</p>
                                            <p className="mt-4 font-semibold text-primary">— {testimonial.author}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )})}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </section>

      {/* SECCIÓN 9 — FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Preguntas frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-foreground/80">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECCIÓN 10 — Cierre */}
      <section className="py-16 px-6 text-center bg-background">
        <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-semibold italic text-primary">
                “Los Patriarcas también dudaron, también temieron... pero fueron transformados por su fe.”
            </p>
          <p className="mt-8 text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Hoy tú tienes la misma oportunidad de escuchar el llamado.
            No ignores esa voz interior que te trajo hasta aquí.
          </p>
          <Button size="lg" className="mt-10 cta-button text-lg h-auto py-4 w-full md:w-auto">
            Sí, quiero comenzar mi despertar espiritual
          </Button>
        </div>
      </section>

      {/* SECCIÓN 11 — Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                  <h4 className="font-semibold text-white">Sobre nosotros</h4>
                  <p className="mt-2 text-sm">Patriarcas y Profetas™ es un proyecto dedicado a la difusión de conocimiento espiritual a través de tecnología y estudio guiado.</p>
              </div>
              <div>
                  <h4 className="font-semibold text-white">Enlaces útiles</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                      <li><a href="#" className="hover:text-white">Política de privacidad</a></li>
                      <li><a href="#" className="hover:text-white">Contacto</a></li>
                      <li><a href="#" className="hover:text-white">Términos de uso</a></li>
                  </ul>
              </div>
              <div>
                  <h4 className="font-semibold text-white">Garantía y soporte</h4>
                   <p className="mt-2 text-sm">📧 ayuda@patriarcasprofetas.com</p>
                   <p className="mt-1 text-sm">🕊️ 15 días de garantía total</p>
              </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
             <p>© 2025 Patriarcas y Profetas. Todos los derechos reservados.</p>
          </div>
      </footer>
    </div>
  );
}

    
    