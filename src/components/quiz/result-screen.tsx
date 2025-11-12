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
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from '@/components/ui/dialog';
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
    ShoppingCart,
    Gift,
    Book,
    Users
} from 'lucide-react';
import Countdown from 'react-countdown';
import { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';

interface ResultScreenProps {
  patriarch: Patriarch;
  insight: string;
  onRestart: () => void;
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
        answer: "El plan completo desbloquea herramientas de crecimiento espiritual como las anotaciones personales, reflexiones diarias, comentarios del autor y acceso a la comunidad y materiales extra. Es una experiencia más profunda y guiada."
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

const recentPurchases = [
    { name: 'Sofía L.', location: 'Bogotá, CO', plan: 'Plan Completo', time: 'hace 1 minuto' },
    { name: 'Mateo R.', location: 'CDMX, MX', plan: 'Plan Completo', time: 'hace 3 minutos' },
    { name: 'Valentina G.', location: 'Lima, PE', plan: 'Plan Completo', time: 'hace 5 minutos' },
    { name: 'Lucas F.', location: 'Santiago, CL', plan: 'Plan Básico', time: 'hace 8 minutos' },
    { name: 'Isabella C.', location: 'Medellín, CO', plan: 'Plan Completo', time: 'hace 10 minutos' },
];

const PurchaseNotification = ({ purchase, onClose }: { purchase: typeof recentPurchases[0], onClose: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-4 left-4 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-lg shadow-xl p-4 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <div className="bg-primary/10 text-primary p-2 rounded-full">
                <ShoppingCart className="h-6 w-6" />
            </div>
            <div>
                <p className="font-semibold text-sm text-foreground">{purchase.name} de {purchase.location}</p>
                <p className="text-xs text-muted-foreground">¡Compró el {purchase.plan} {purchase.time}!</p>
            </div>
        </div>
    );
};


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
      className={cn(
        'fixed bottom-4 right-4 z-50 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      variant="outline"
      size="icon"
    >
      <ArrowUp className="h-4 w-4" />
      <span className="sr-only">Volver arriba</span>
    </Button>
  );
};


export function ResultScreen({ patriarch, insight, onRestart }: ResultScreenProps) {
  const authorImage = PlaceHolderImages.find(img => img.id === 'author-portrait');
  const appMockupImage = PlaceHolderImages.find(img => img.id === 'app-mockup');
  const heroBookCoverImage = PlaceHolderImages.find(img => img.id === 'hero-book-cover');
  
  const [countdownDate, setCountdownDate] = useState<number>(0);

  useEffect(() => {
    // Set the countdown to 3 hours from when the component mounts.
    setCountdownDate(Date.now() + 3 * 60 * 60 * 1000);
  }, []);
  
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const [currentPurchase, setCurrentPurchase] = useState<typeof recentPurchases[0] | null>(null);
  const [purchaseIndex, setPurchaseIndex] = useState(0);

  const scrollToPricing = () => {
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentPurchase(recentPurchases[purchaseIndex]);
        setPurchaseIndex((prevIndex) => (prevIndex + 1) % recentPurchases.length);
    }, 12000); // Show a new notification every 12 seconds

    return () => clearInterval(interval);
  }, [purchaseIndex]);

  const CountdownRenderer = ({ hours, minutes, seconds, completed }: { hours: number; minutes: number; seconds: number; completed: boolean; }) => {
    if (completed) {
      return <span>¡Oferta terminada!</span>;
    } else {
      return (
        <span>
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      );
    }
  };


  return (
    <div className="w-full bg-white text-foreground animate-in fade-in duration-500">
        {currentPurchase && <PurchaseNotification purchase={currentPurchase} onClose={() => setCurrentPurchase(null)} />}
        <BackToTopButton />

      {/* SECCIÓN 1 — Hero */}
      <section className="text-center py-16 md:py-24 px-6 md:px-16 bg-gradient-to-b from-background to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground/90">
            ✨ Lo que los Patriarcas descubrieron puede transformar tu fe… incluso en estos tiempos.
          </h1>
          {heroBookCoverImage && (
            <div className="my-8 inline-block p-2 bg-card rounded-2xl shadow-2xl border-4 border-primary">
              <Image
                src={heroBookCoverImage.imageUrl}
                alt={heroBookCoverImage.description}
                width={1200}
                height={1824}
                className="rounded-lg mx-auto"
                data-ai-hint={heroBookCoverImage.imageHint}
                priority
              />
            </div>
          )}
          <p className="mt-6 text-lg md:text-xl text-foreground/70">
            No es solo un libro: es una experiencia digital guiada. Descubre los secretos que Abraham, Isaac y Jacob aprendieron cuando el silencio de Dios parecía definitivo y comprende el propósito detrás de cada prueba.
          </p>
          <Button size="lg" className="mt-10 cta-button w-full md:w-auto text-lg h-auto py-4" onClick={scrollToPricing}>
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
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">Acceso especial con <span className="text-red-600">50% OFF</span> se cierra en:</h2>
            </div>
            <div className="mt-6 flex justify-center items-center gap-2 text-4xl md:text-5xl font-bold text-red-600 tabular-nums">
                <Clock className="h-8 w-8" />
                {countdownDate > 0 && <Countdown date={countdownDate} renderer={CountdownRenderer} />}
            </div>
             <p className="mt-6 text-lg text-foreground/80 font-semibold">
                Esta no es una oferta más — es una oportunidad espiritual que muchos dejarán pasar sin darse cuenta.
            </p>
            <p className="mt-2 text-foreground/70">
                No esperes. Muchos ya se están uniendo en este momento.
            </p>
            <Button size="lg" className="mt-8 cta-button w-full md:w-auto text-lg h-auto py-4" onClick={scrollToPricing}>
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
              <div className="inline-block p-1 bg-card rounded-lg shadow-2xl border-2 border-primary">
                <Image
                    src={appMockupImage.imageUrl}
                    alt="Aplicativo Patriarcas y Profetas"
                    width={600}
                    height={450}
                    className="rounded-md mx-auto"
                    data-ai-hint={appMockupImage.imageHint}
                    loading="lazy"
                />
              </div>
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
              <div className="inline-block p-1 bg-card rounded-lg shadow-lg border-2 border-primary">
                <Image
                    src={authorImage.imageUrl}
                    alt="Dr. Samuel Ortega"
                    width={200}
                    height={200}
                    className="rounded-md"
                    style={{maxWidth: '200px'}}
                    data-ai-hint={authorImage.imageHint}
                    loading="lazy"
                />
              </div>
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
          <Button size="lg" className="mt-10 cta-button w-full md:w-auto text-lg h-auto py-4" onClick={scrollToPricing}>
            Comenzar mi estudio guiado
          </Button>
        </div>
      </section>

      {/* SECCIÓN 6 — Planes */}
        <section id="pricing-section" className="py-16 px-6 bg-background">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-12">Elige cómo comenzar tu viaje espiritual</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="text-center flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl">Plan Básico</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 flex flex-col flex-grow">
                            <p className="text-4xl font-bold">U$6,90</p>
                            <ul className="space-y-2 text-left text-foreground/80 flex-grow">
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Acceso completo al aplicativo</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Plan de lectura guiada</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Lectura y audio integrados</li>
                            </ul>
                            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary" onClick={() => setIsUpgradeModalOpen(true)}>Comenzar con el Básico</Button>
                        </CardContent>
                    </Card>
                    <Card className="border-2 border-primary relative card-glow flex flex-col">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                            Recomendado
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl">Plan Completo</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 flex flex-col flex-grow">
                             <div className="bg-primary/10 border-l-4 border-primary text-primary-foreground p-3 rounded-r-lg">
                                <p className="font-semibold text-sm text-center text-foreground/90">¡Más de 1895 personas ya eligieron este plano!</p>
                             </div>
                            <p className="text-4xl font-bold">U$11,90 <span className="text-xl line-through text-muted-foreground">U$25,90</span></p>
                             <ul className="space-y-2 text-left text-foreground/80 flex-grow">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Todo lo del Plan Básico</span></div></li>
                                <li className="flex items-start"><BookUser className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Módulo de anotaciones</span></div></li>
                                <li className="flex items-start"><MessageSquareQuote className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Comentarios del autor</span></div></li>
                                <li className="flex items-start"><Sparkles className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Reflexiones diarias guiadas</span></div></li>
                                <li className="flex items-start"><Gift className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">BÔNUS #1:</span> Comunidad VIP en Whatsapp <span className="text-xs line-through text-muted-foreground">(U$7)</span></div></li>
                                <li className="flex items-start"><Book className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">BÔNUS #2:</span> Ebook Los Códigos da Oración <span className="text-xs line-through text-muted-foreground">(U$7)</span></div></li>
                            </ul>
                             <p className="text-sm text-green-700 font-semibold"><Star className="inline-block h-4 w-4 mr-1" /> Ahorras U$14 en bônus. ¡Ideal para una experiencia profunda!</p>
                            <Button className="w-full cta-button text-base md:text-lg h-auto py-3 px-6 whitespace-nowrap" onClick={scrollToPricing}>Quiero el acceso completo al App</Button>
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
                                                <Avatar className="w-20 h-20 mb-4 border-4 border-primary">
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
          <Button size="lg" className="mt-10 cta-button text-lg h-auto py-4 w-full md:w-auto" onClick={scrollToPricing}>
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
             <p className="mt-2">¿Necesitas reiniciar el quiz? <Button variant="link" onClick={onRestart} className="text-gray-300 p-0 h-auto">Haz clic aquí</Button></p>
          </div>
      </footer>

        <Dialog open={isUpgradeModalOpen} onOpenChange={setIsUpgradeModalOpen}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-center font-bold text-primary">¡Espera! Una Oferta Única Para Ti</DialogTitle>
                    <DialogDescription className="text-center text-lg pt-2">
                        Vemos que tienes interés. Por eso, te ofrecemos un <strong className="text-primary font-bold">20% de DESCUENTO</strong> en el Plan Completo.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <p className="text-center text-5xl font-bold text-foreground">U$9,52 <span className="text-2xl line-through text-muted-foreground">U$11,90</span></p>
                    <p className="text-center text-green-600 font-semibold mt-2">¡Ahorras un 20% solo por hoy!</p>
                    <ul className="mt-6 space-y-2 text-muted-foreground">
                        <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Todo lo del Plan Básico</span> y mucho más.</div></li>
                        <li className="flex items-start"><BookUser className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Módulo de Anotaciones:</span> Guarda tus revelaciones personales.</div></li>
                        <li className="flex items-start"><MessageSquareQuote className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Comentarios del Autor:</span> Accede a una profundidad teológica única.</div></li>
                        <li className="flex items-start"><Sparkles className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Reflexiones Diarias:</span> Impulsa tu crecimiento espiritual cada día.</div></li>
                        <li className="flex items-start"><Users className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Bônus: Comunidad VIP</span></div></li>
                        <li className="flex items-start"><Book className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Bônus: Ebook Códigos da Oração</span></div></li>
                    </ul>
                </div>
                <DialogFooter className="sm:flex-col sm:space-x-0 gap-2">
                    <Button className="w-full cta-button text-lg h-auto py-3" onClick={scrollToPricing}>Sí, quiero el 20% de descuento</Button>
                    <Button variant="ghost" onClick={() => setIsUpgradeModalOpen(false)} className="w-full">No gracias, continuar con el Básico</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    </div>
  );
}
