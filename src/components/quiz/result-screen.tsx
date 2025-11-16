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
    Headphones,
    FileText,
    Gift,
    Book,
    Users,
    MessageSquareQuote,
    Sparkles,
    Check,
    BookUser,
    ShoppingCart
} from 'lucide-react';
import Countdown from 'react-countdown';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ResultScreenProps {
  patriarch: Patriarch;
  insight: string;
  onRestart: () => void;
}

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

      {/* Encabezado Heroico */}
      <section className="text-center py-16 md:py-24 px-6 md:px-16 bg-gradient-to-b from-background to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground/90">
            Cuando Dios parece en silencio… es porque está formando tu fe.
          </h1>
           <p className="mt-6 text-lg md:text-xl text-foreground/70">
            Descubre lo que Abraham, Isaac y Jacob aprendieron cuando el cielo parecía cerrado.
          </p>
          {heroBookCoverImage && (
            <div className="my-8 inline-block p-2 bg-card rounded-2xl shadow-2xl border-4 border-primary">
              <Image
                src={heroBookCoverImage.imageUrl}
                alt={heroBookCoverImage.description}
                width={1200}
                height={1824}
                className="rounded-lg mx-auto w-full max-w-[600px] h-auto"
                data-ai-hint={heroBookCoverImage.imageHint}
                priority
              />
            </div>
          )}
          <Button size="lg" className="mt-10 cta-button w-full md:w-auto text-lg h-auto py-4" onClick={scrollToPricing}>
            Acceder al App ahora
          </Button>
          <p className="mt-6 text-sm text-foreground/60">
            Más de 27,000 lectores en toda América Latina ya han sentido este despertar espiritual.
          </p>
        </div>
      </section>

      {/* Sección 1 – La Herida (golpe emocional inmediato) */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">Son las 11:17 de la noche.</h2>
            <p className="mt-6 text-lg text-foreground/80">
                Cierras los ojos y te preguntas otra vez:
            </p>
             <p className="mt-4 text-2xl md:text-3xl text-foreground/90 font-semibold italic">
               “¿Por qué nada cambia… si sigo creyendo?”
            </p>
            <p className="mt-6 text-lg text-foreground/70">
                El silencio de Dios pesa.<br/>
                Pero ¿y si este silencio es el mismo que escuchó Abraham antes de colocar a Isaac en el altar?<br/>
                ¿Y si lo que llamas “espera” es justo el momento en que Dios está forjando tu fe?
            </p>
        </div>
      </section>
      
      {/* Sección 2 – La Promesa Oculta */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-4">Los Patriarcas no eran héroes perfectos.</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
               Eran hombres y mujeres como tú: cansados, heridos, muchas veces dudando. Pero había algo distinto: no se rendían cuando Dios callaba.
            </p>
            <p className="text-lg text-foreground/80 font-semibold max-w-3xl mx-auto mb-12">
               Este aplicativo espiritual te revela lo que ellos descubrieron en medio del desierto:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary/80 mt-1 shrink-0" /><p className="text-lg">Por qué Dios tarda cuando todo parece perdido</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary/80 mt-1 shrink-0" /><p className="text-lg">El verdadero propósito detrás de la prueba de Abraham</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary/80 mt-1 shrink-0" /><p className="text-lg">Cómo convertir el silencio en dirección</p></div>
                <div className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-primary/80 mt-1 shrink-0" /><p className="text-lg">Y cómo recuperar esa voz interior que el mundo quiso apagar</p></div>
            </div>
        </div>
      </section>
      
      {/* SECCIÓN AUTORIDAD */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="md:grid md:grid-cols-3 md:items-center md:gap-12 text-center md:text-left">
            {authorImage && (
              <div className="md:col-span-1 flex justify-center">
                 <div className="inline-block p-2 bg-card rounded-2xl shadow-2xl border-4 border-primary">
                    <Image
                      src={authorImage.imageUrl}
                      alt={authorImage.description}
                      width={250}
                      height={250}
                      className="rounded-lg mx-auto"
                      data-ai-hint={authorImage.imageHint}
                      loading="lazy"
                    />
                </div>
              </div>
            )}
            <div className="md:col-span-2 mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold text-foreground/90">Una guía de alguien que ya recorrió este camino</h3>
              <p className="mt-4 text-lg text-foreground/70">
                Esta experiencia fue creada por Juan Esteban, un teólogo y autor con más de 15 años de experiencia ayudando a personas a redescubrir una fe genuina y profunda. Su enfoque no es religioso, sino espiritual y transformador, basado en los principios eternos que guiaron a los patriarcas.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Sección 3 – El Puente Espiritual Moderno */}
       <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-4">No es solo un libro.<br/>Es una experiencia espiritual guiada, hecha para tu tiempo, tu ritmo, tu vida.</h2>
             {appMockupImage && (
              <div className="inline-block p-1 my-8 bg-card rounded-lg shadow-2xl border-2 border-primary">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center max-w-3xl mx-auto">
                <div className="flex flex-col items-center"><BookUser className="h-8 w-8 text-primary/80" /><p className="mt-2 text-sm font-medium">Lectura guiada</p></div>
                <div className="flex flex-col items-center"><Headphones className="h-8 w-8 text-primary/80" /><p className="mt-2 text-sm font-medium">Versión en audio</p></div>
                <div className="flex flex-col items-center"><Sparkles className="h-8 w-8 text-primary/80" /><p className="mt-2 text-sm font-medium">Reflexiones diarias personalizadas</p></div>
                <div className="flex flex-col items-center"><FileText className="h-8 w-8 text-primary/80" /><p className="mt-2 text-sm font-medium">Notas y estudio dentro de la app</p></div>
            </div>
            <p className="mt-12 text-lg text-foreground/70">
                Más de 27,000 cristianos en toda Latinoamérica ya han vivido este despertar.<br/> Muchos dicen que fue como escuchar la voz de Dios de nuevo.
            </p>
        </div>
      </section>

      {/* Sección 4 – El Llamado */}
      <section className="py-16 px-6 text-center bg-background">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Cada día que pasa sin entender el propósito de tus pruebas… tu fe se enfría un poco.
          </p>
           <p className="mt-4 text-xl md:text-2xl text-foreground/80 leading-relaxed">
             No dejes que eso te pase.
          </p>
          <p className="mt-8 text-2xl font-semibold italic text-primary">
            “A veces, dejar pasar el momento… también es una elección.”
          </p>
          <Button size="lg" className="mt-10 cta-button w-full md:w-auto text-lg h-auto py-4" onClick={scrollToPricing}>
            👉 Inicia tu Estudio Guiado Ahora
          </Button>
        </div>
      </section>

      {/* Sección 5 – Planes */}
        <section id="pricing-section" className="py-16 px-6 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 mb-12">Elige cómo comenzar tu viaje espiritual</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="text-center flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl">💡 Plan Básico</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 flex flex-col flex-grow">
                            <p className="text-4xl font-bold">$6.90 USD</p>
                            <ul className="space-y-2 text-left text-foreground/80 flex-grow">
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Acceso completo a la app</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Lectura + audio integrados</li>
                                <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-green-600" /> Plan de estudio guiado de 21 días</li>
                            </ul>
                             <p className="text-sm text-muted-foreground">Perfecto para comenzar tu camino espiritual.</p>
                             <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary whitespace-normal h-auto" onClick={() => setIsUpgradeModalOpen(true)}>Comenzar con el Básico</Button>
                        </CardContent>
                    </Card>
                    <Card className="border-2 border-primary relative card-glow flex flex-col">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                            Recomendado
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl">🔥 Plan Completo</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 flex flex-col flex-grow">
                            <p className="text-4xl font-bold">$11.90 USD <span className="text-xl line-through text-muted-foreground">U$25,90</span></p>
                            <div className="bg-primary/10 border-l-4 border-primary text-primary-foreground p-3 rounded-r-lg space-y-2">
                                <p className="text-center text-foreground/90 text-sm">💬 “Nunca imaginé que entender las pruebas de Abraham me ayudaría a entender las mías.” <span className="font-semibold">— Carolina M., México</span></p>
                                <p className="text-center text-foreground/90 text-sm">💬 “Esta app llegó justo cuando más lo necesitaba.” <span className="font-semibold">— María José R., Colombia</span></p>
                            </div>
                             <ul className="space-y-2 text-left text-foreground/80 flex-grow">
                                <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Incluye TODO lo del Plan Básico +:</span></div></li>
                                <li className="flex items-start"><Sparkles className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Reflexiones guiadas cada día</span></div></li>
                                <li className="flex items-start"><MessageSquareQuote className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Comentarios del autor</span></div></li>
                                <li className="flex items-start"><FileText className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="font-semibold text-foreground">Módulo de notas personales</span></div></li>
                                <li className="flex items-start font-semibold"><Gift className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div><span className="text-foreground">BONOS:</span></div></li>
                                <li className="flex items-start ml-4"><Book className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div>Comunidad VIP en WhatsApp <span className="text-xs line-through text-muted-foreground">($7)</span></div></li>
                                <li className="flex items-start ml-4"><Book className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-1" /> <div>E-book Los Códigos de la Oración <span className="text-xs line-through text-muted-foreground">($7)</span></div></li>
                            </ul>
                             <a href="https://pay.hotmart.com/K99537811Y?off=rtgmziqk&checkoutMode=10&bid=1762987298554" target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className="w-full cta-button text-base md:text-lg h-auto py-3 px-6">Quiero el acceso completo al App</Button>
                             </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

      {/* Sección 6 – Urgencia */}
      <section className="py-16 px-6 text-center bg-amber-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
              El acceso especial con <span className="text-red-600">50% de descuento</span> termina a las:
            </h2>
          </div>
          <div className="mt-6 flex justify-center items-center gap-2 text-4xl md:text-5xl font-bold text-red-600 tabular-nums">
            <Clock className="h-8 w-8" />
            {countdownDate > 0 && <Countdown date={countdownDate} renderer={CountdownRenderer} />}
          </div>
          <p className="mt-6 text-lg text-foreground/80 font-semibold">
            No es solo una oferta. Es un llamado espiritual.
          </p>
        </div>
      </section>

      {/* SECCIÓN 7 — Garantía */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <ShieldCheck className="h-12 w-12 text-primary mx-auto" />
          <h3 className="mt-4 text-2xl font-semibold">Garantía total de 15 días</h3>
          <p className="mt-2 text-foreground/70">
            Si no sientes crecimiento espiritual con el aplicativo, te devolvemos el 100% sin preguntas.
          </p>
        </div>
      </section>

      {/* SECCIÓN 9 — FAQ */}
      <section className="py-16 px-6 bg-background">
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

      {/* CTA Final */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-semibold italic text-primary">
               “Los patriarcas también dudaron y también temieron… pero fueron transformados por su fe.”
            </p>
          <p className="mt-8 text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Hoy, tú tienes la misma oportunidad.<br/>
            No ignores esa voz interior que te trajo hasta aquí.
          </p>
          <Button size="lg" className="mt-10 cta-button text-lg h-auto py-4 w-full md:w-auto" onClick={scrollToPricing}>
            🕊️ Quiero iniciar mi despertar espiritual ahora
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
                        Vemos que tienes interés. Por eso, te ofrecemos un <strong className="text-primary font-bold">DESCUENTO de casi 25%</strong> en el Plan Completo.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <p className="text-center text-5xl font-bold text-foreground">U$9,00 <span className="text-2xl line-through text-muted-foreground">U$11,90</span></p>
                    <p className="text-center text-green-600 font-semibold mt-2">¡Ahorra casi un 25% solo por hoy!</p>
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
                    <a href="https://pay.hotmart.com/K99537811Y?off=5suiqzrp&checkoutMode=10" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full cta-button text-lg h-auto py-3">Sí, quiero el descuento</Button>
                    </a>
                    <a href="https://pay.hotmart.com/K99537811Y?off=8h2ivhga&checkoutMode=10&bid=1762987180989" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="ghost" onClick={() => setIsUpgradeModalOpen(false)} className="w-full">No gracias, continuar con el Básico</Button>
                    </a>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    </div>
  );
}
