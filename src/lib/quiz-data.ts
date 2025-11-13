export type Patriarch = 'Abraham' | 'Daniel' | 'Isaiah' | 'Jeremiah' | 'Jacob';

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    patriarch: Patriarch;
  }[];
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: 'Cuando escuchas la palabra "fe", ¿qué sientes de verdad, en lo profundo?',
    options: [
      { text: 'Esperanza', patriarch: 'Abraham' },
      { text: 'Desconfianza… ya he visto demasiado en la vida', patriarch: 'Jeremiah' },
      { text: 'Un fuego interior que no puedo explicar', patriarch: 'Isaiah' },
      { text: 'Un llamado a obedecer aunque no entienda', patriarch: 'Daniel' },
    ],
  },
  {
    id: 2,
    text: '¿Alguna vez sentiste que Dios te prometió algo y luego todo quedó en silencio?',
    options: [
      { text: 'Sí, y aún espero', patriarch: 'Abraham' },
      { text: 'Sí, y dejé de creer en esas promesas', patriarch: 'Jeremiah' },
      { text: 'No, pero me da temor que pase', patriarch: 'Jacob' },
      { text: 'Sí, pero aprendí algo profundo en la espera', patriarch: 'Daniel' },
    ],
  },
  {
    id: 3,
    text: 'Si Abraham hubiera tenido tu vida, ¿crees que habría tomado las mismas decisiones?',
    options: [
      { text: 'No lo sé, su fe estaba en otro nivel', patriarch: 'Abraham' },
      { text: 'Sí, porque Dios también le hablaba directamente', patriarch: 'Daniel' },
      { text: 'No, porque yo he enfrentado cosas que él no', patriarch: 'Jacob' },
      { text: 'Tal vez… si hubiera entendido el plan como él lo entendió', patriarch: 'Isaiah' },
    ],
  },
  {
    id: 4,
    text: '¿Te ha pasado que sientes el silencio de Dios?',
    options: [
      { text: 'Sí, constantemente', patriarch: 'Jeremiah' },
      { text: 'A veces, en los momentos más difíciles', patriarch: 'Jacob' },
      { text: 'Raramente, pero cuando pasa me cuestiono todo', patriarch: 'Daniel' },
      { text: 'No, siempre siento Su presencia de alguna forma', patriarch: 'Abraham' },
    ],
  },
  {
    id: 5,
    text: 'Cuando piensas en las pruebas que has enfrentado, ¿cuál de estas frases te representa más?',
    options: [
      { text: '“¿Por qué a mí?”', patriarch: 'Jeremiah' },
      { text: '“Esto tiene que significar algo”', patriarch: 'Daniel' },
      { text: '“Ya no quiero más pruebas”', patriarch: 'Jacob' },
      { text: '“Cada prueba me acercó más a algo eterno”', patriarch: 'Abraham' },
    ],
  },
  {
    id: 6,
    text: '¿Qué dirías que es más difícil: tener fe cuando no entiendes, o perder la fe cuando comprendes demasiado?',
    options: [
      { text: 'Tener fe sin entender', patriarch: 'Abraham' },
      { text: 'Perder la fe cuando entiendes', patriarch: 'Jeremiah' },
      { text: 'Ambas son igual de difíciles', patriarch: 'Jacob' },
      { text: 'Ninguna, porque la fe va más allá de la comprensión', patriarch: 'Isaiah' },
    ],
  },
  {
    id: 7,
    text: 'Si Dios te pidiera sacrificar lo que más amas para cumplir un propósito mayor, ¿qué harías?',
    options: [
      { text: 'No podría… es demasiado', patriarch: 'Jacob' },
      { text: 'Lo intentaría, pero con mucho miedo', patriarch: 'Jeremiah' },
      { text: 'Confiaría en que hay un plan', patriarch: 'Abraham' },
      { text: 'Ya lo he hecho, y fue la decisión más dura de mi vida', patriarch: 'Daniel' },
    ],
  },
  {
    id: 8,
    text: '¿Alguna vez sentiste que tu historia espiritual se parece más a la de Jacob (luchando) que a la de Abraham (obedeciendo)?',
    options: [
      { text: 'Totalmente, he luchado toda mi vida', patriarch: 'Jacob' },
      { text: 'A veces lucho, a veces obedezco', patriarch: 'Daniel' },
      { text: 'No, siento que soy más como Abraham', patriarch: 'Abraham' },
      { text: 'No me identifico con ninguno de los dos', patriarch: 'Isaiah' },
    ],
  },
  {
    id: 9,
    text: '¿Crees que Dios permite el sufrimiento para revelarnos algo más grande?',
    options: [
      { text: 'Sí, pero no siempre lo entiendo', patriarch: 'Jacob' },
      { text: 'No, creo que el sufrimiento es parte de la vida', patriarch: 'Jeremiah' },
      { text: 'Sí, y por eso lo acepto aunque duela', patriarch: 'Daniel' },
      { text: 'No estoy seguro, aún busco respuestas', patriarch: 'Isaiah' },
    ],
  },
  {
    id: 10,
    text: 'Si pudieras hacerle una pregunta a Abraham, Isaac o Jacob, ¿cuál sería?',
    options: [
      { text: '¿Cómo mantuviste la fe cuando todo parecía imposible?', patriarch: 'Abraham' },
      { text: '¿Alguna vez dudaste de las promesas de Dios?', patriarch: 'Jeremiah' },
      { text: '¿Qué fue lo más difícil que enfrentaste?', patriarch: 'Jacob' },
      { text: '¿Cómo supiste que tu sufrimiento tenía propósito?', patriarch: 'Daniel' },
    ],
  },
  {
    id: 11,
    text: '¿Te gustaría descubrir qué sabían los patriarcas que tú aún no sabes?',
    options: [
      { text: 'Sí, necesito esas respuestas', patriarch: 'Daniel' },
      { text: 'Sí, pero no sé si estoy listo', patriarch: 'Jacob' },
      { text: 'No estoy seguro si eso cambiaría mi vida', patriarch: 'Jeremiah' },
      { text: 'Sí, y siento que este es el momento', patriarch: 'Abraham' },
    ],
  },
  {
    id: 12,
    text: '¿Cuál de estas frases resuena más contigo en este momento?',
    options: [
      { text: '“Busco respuestas que mi iglesia no me ha dado”', patriarch: 'Isaiah' },
      { text: '“Quiero reconectar con la fe de mi infancia”', patriarch: 'Abraham' },
      { text: '“Necesito entender por qué me siento distante de Dios”', patriarch: 'Jeremiah' },
      { text: '“Quiero una fe viva, no solo tradiciones”', patriarch: 'Daniel' },
    ],
  },
  {
    id: 13,
    text: 'Si los patriarcas tuvieran que elegir entre comodidad y propósito, ¿qué crees que elegirían?',
    options: [
      { text: 'Propósito, sin dudarlo', patriarch: 'Abraham' },
      { text: 'Comodidad, porque eran humanos como yo', patriarch: 'Jacob' },
      { text: 'Un equilibrio entre ambos', patriarch: 'Daniel' },
      { text: 'Lo que Dios les pidiera, sin importar qué', patriarch: 'Isaiah' },
    ],
  },
  {
    id: 14,
    text: '¿Sientes que tu vida tiene un propósito espiritual profundo, aunque no lo hayas descubierto del todo?',
    options: [
      { text: 'Sí, y quiero encontrarlo', patriarch: 'Abraham' },
      { text: 'A veces lo siento, pero se desvanece', patriarch: 'Jeremiah' },
      { text: 'No, me siento perdido', patriarch: 'Jacob' },
      { text: 'Sí, y este cuestionario me está acercando', patriarch: 'Isaiah' },
    ],
  },
  {
    id: 15,
    text: 'Si este libro pudiera mostrarte el verdadero significado detrás de las pruebas de los patriarcas (y las tuyas), ¿estarías dispuesto a leerlo?',
    options: [
      { text: 'Absolutamente, necesito eso', patriarch: 'Abraham' },
      { text: 'Sí, pero con algo de escepticismo', patriarch: 'Jeremiah' },
      { text: 'Tal vez, depende de lo que revele', patriarch: 'Jacob' },
      { text: 'Sí, siento que esto puede transformar mi fe', patriarch: 'Daniel' },
    ],
  },
];

export const patriarchData: Record<Patriarch, { title: string; description: string; spanishName: string }> = {
  Abraham: {
    spanishName: 'Abraham',
    title: 'Tu espíritu refleja la fe de Abraham.',
    description: 'Como él, sigues creyendo incluso cuando todo parece perdido. Lo que arde en ti no es duda… es un llamado a construir un legado que trasciende el tiempo.'
  },
  Daniel: {
    spanishName: 'Daniel',
    title: 'Tu espíritu refleja la sabiduría de Daniel.',
    description: 'En un mundo de caos, buscas el orden divino. Tu integridad es tu fortaleza, y tu capacidad para ver más allá de lo evidente es un don que ilumina a otros.'
  },
  Isaiah: {
    spanishName: 'Isaías',
    title: 'Tu espíritu refleja la visión de Isaías.',
    description: 'No temes mirar de frente tanto la oscuridad como la luz. Eres una voz que ve la ruina pero anuncia la restauración, un mensajero de la verdad compleja y redentora.'
  },
  Jeremiah: {
    spanishName: 'Jeremías',
    title: 'Tu espíritu refleja la compasión de Jeremías.',
    description: 'Sientes profundamente el dolor del mundo y el peso de la verdad. Tu corazón se quebranta, pero de esa vulnerabilidad nace una fuerza profética inmensa.'
  },
  Jacob: {
    spanishName: 'Jacob',
    title: 'Tu espíritu refleja la lucha de Jacob.',
    description: 'Tu vida es un campo de batalla donde tu voluntad y un plan mayor combaten. No te rindes. Luchas, te aferras y sales transformado, marcado por una bendición ganada.'
  }
};
