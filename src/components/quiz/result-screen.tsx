'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { patriarchData } from '@/lib/quiz-data';
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
  HeartHandshake,
  BookOpen,
  Eye,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Clock,
  Download,
  BookUser,
  Headphones,
  FileText,
  Star,
  ArrowUp
} from 'lucide-react';
import Countdown from 'react-countdown';
import { useEffect, useState } from 'react';

interface ResultScreenProps {
  patriarch: Patriarch;
  insight: string;
}

const testimonials = [
    {
        quote: "Nunca imaginé que entender las pruebas de Abraham me haría entender las mías.",
        author: "Carolina M., México"
    },
    {
        quote: "Cada página me hizo sentir más cerca de Dios.",
        author: "Luis A., Perú"
    },
    {
        quote: "Este libro llegó justo cuando más lo necesitaba.",
        author: "María José R., Colombia"
    },
    {
        quote: "Leerlo fue como volver a escuchar la voz de Dios después de años de silencio.",
        author: "Andrés V., Chile"
    }
];

const faqItems = [
    {
        question: "¿En qué formato recibiré el libro?",
        answer: "Lo recibirás en formato digital (PDF + EPUB) con acceso inmediato por correo."
    },
    {
        question: "¿Necesito conocimientos previos de teología?",
        answer: "No. Está escrito con lenguaje claro y humano."
    },
    {
        question: "¿Qué incluye el Plan Completo?",
        answer: "Ebook + guía de estudio + versión en audio + notas del autor."
    },
    {
        question: "¿Y si no me gusta el contenido?",
        answer: "Tienes 15 días de garantía total. Sin preguntas."
    },
    {
        question: "¿Por qué hay una fecha límite?",
        answer: "Por licencias de distribución y derechos digitales regionales."
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
            Este libro revela los secretos que Abraham, Isaac y Jacob aprendieron cuando el silencio de Dios parecía definitivo.
            Ahora tú también puedes comprender el propósito detrás de cada prueba.
          </p>
          <Button size="lg" className="mt-10 cta-button w-full md:w-auto">
            Descargar ahora — Comienza tu viaje espiritual
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
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">Atención espiritual limitada</h2>
            </div>
            <p className="mt-4 text-foreground/70">
                Por motivos de derechos de distribución, esta edición digital especial de <strong className="font-semibold">Patriarcas y Profetas</strong> estará disponible solo hasta el domingo 17 de noviembre o hasta agotar las licencias actuales.
            </p>
            <div className="mt-6 text-3xl md:text-4xl font-bold text-primary tabular-nums">
                <Countdown date={targetDate} />
            </div>
             <p className="mt-6 text-lg text-foreground/80 font-semibold">
                Esta no es una oferta más — es una oportunidad espiritual que muchos dejarán pasar sin darse cuenta.
            </p>
            <p className="mt-2 text-foreground/70">
                No esperes. Muchos ya lo están descargando en este momento.
            </p>
            <Button size="lg" className="mt-8 cta-button w-full md:w-auto">
                Asegurar mi copia ahora
            </Button>
        </div>
      </section>

      {/* SECCIÓN 3 — Autoridad */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="flex justify-center md:justify-end">
            {authorImage && (
              <Image
                src={authorImage.imageUrl}
                alt="Dr. Samuel Ortega"
                width={180}
                height={180}
                className="rounded-full border-4 border-primary/50 shadow-lg"
                data-ai-hint={authorImage.imageHint}
              />
            )}
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-foreground/90">Dr. Samuel Ortega</h3>
            <p className="text-lg text-primary font-medium">Historiador bíblico y teólogo latinoamericano</p>
            <p className="mt-4 text-foreground/70">
              Con más de 20 años investigando los textos antiguos del Antiguo Testamento, el Dr. Ortega muestra cómo las luchas de los patriarcas reflejan los desafíos espirituales de hoy.
              Conocido por su claridad al conectar la fe antigua con la vida moderna, su trabajo ha inspirado a miles en toda América Latina.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — Beneficios */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-12">Lo que descubrirás en este libro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <HeartHandshake className="h-10 w-10 text-primary/80" />
              <h4 className="mt-4 font-semibold text-lg">Comprender el propósito detrás del sufrimiento</h4>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="h-10 w-10 text-primary/80" />
              <h4 className="mt-4 font-semibold text-lg">Redescubrir la voz de Dios en el silencio</h4>
            </div>
            <div className="flex flex-col items-center">
              <Eye className="h-10 w-10 text-primary/80" />
              <h4 className="mt-4 font-semibold text-lg">Aprender cómo los Patriarcas mantuvieron su fe</h4>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="h-10 w-10 text-primary/80" />
              <h4 className="mt-4 font-semibold text-lg">Fortalecer tu fe con una nueva comprensión</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — Urgencia Emocional */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Cada día que pasa sin comprender el propósito de tus pruebas, tu fe se enfría un poco más.
            No dejes que el ruido del mundo apague lo que Dios aún quiere revelarte.
            Este libro fue escrito para momentos como este — cuando el alma siente el llamado, pero la mente duda.
          </p>
          <p className="mt-8 text-2xl font-semibold italic text-primary">
            🕯️ “A veces, perder el momento también es una decisión.”
          </p>
          <Button size="lg" className="mt-10 cta-button w-full md:w-auto">
            Descubrir ahora lo que los Patriarcas sabían
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
                            <ul className="space-y-2 text-left">
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Ebook completo</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Acceso inmediato</li>
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
                             <ul className="space-y-2 text-left">
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold">Ebook completo</span></div></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold">Guía de estudio</span></div></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold">Notas del autor</span></div></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold">Versión en audio</span></div></li>
                            </ul>
                             <p className="text-sm text-green-700 font-semibold"><Star className="inline-block h-4 w-4 mr-1" /> Ahorra 35% y recibe el contenido extendido</p>
                            <Button className="w-full cta-button">Elijo el Plan Completo</Button>
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
            Si no sientes crecimiento espiritual, te devolvemos el 100% sin preguntas.
          </p>
        </div>
      </section>

      {/* SECCIÓN 8 — Testimonios */}
        <section className="py-16 px-6 bg-background">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-12">Lo que dicen nuestros lectores</h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
                                <div className="p-2">
                                    <Card>
                                        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                            <p className="text-lg italic">"{testimonial.quote}"</p>
                                            <p className="mt-4 font-semibold text-primary">— {testimonial.author}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
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
            Sí, quiero comenzar mi despertar espiritual — Descargar ahora
          </Button>
        </div>
      </section>

      {/* SECCIÓN 11 — Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                  <h4 className="font-semibold text-white">Sobre nosotros</h4>
                  <p className="mt-2 text-sm">Patriarcas y Profetas™ es un proyecto dedicado a la difusión de conocimiento espiritual basado en las Escrituras.</p>
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
