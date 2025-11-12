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
    text: 'Cuando escuchas la palabra "fe", ¿qué sientes de verdad?',
    options: [
      { text: 'Una promesa lejana, pero que vale la pena esperar.', patriarch: 'Abraham' },
      { text: 'Un refugio en medio del caos y la confusión.', patriarch: 'Daniel' },
      { text: 'Un fuego interior que me impulsa a hablar, aunque duela.', patriarch: 'Jeremiah' },
      { text: 'Una lucha constante entre mi voluntad y un plan mayor.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 2,
    text: 'Ante una decisión que cambiará tu vida, ¿qué guía buscas primero?',
    options: [
      { text: 'Señales en el camino, pequeños susurros del universo.', patriarch: 'Abraham' },
      { text: 'La sabiduría escrita, buscando patrones en viejas historias.', patriarch: 'Daniel' },
      { text: 'La cruda verdad, aunque nadie más quiera verla.', patriarch: 'Isaiah' },
      { text: 'La negociación interna, buscando el mejor resultado posible.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 3,
    text: 'Si tuvieras que describir tu propósito, ¿cómo sonaría?',
    options: [
      { text: 'Construir algo que dure más allá de mi propia vida.', patriarch: 'Abraham' },
      { text: 'Mantener mi integridad en un mundo que la ha perdido.', patriarch: 'Daniel' },
      { text: 'Ser una voz que anuncia tanto la ruina como la esperanza.', patriarch: 'Isaiah' },
      { text: 'Sanar las heridas de mi linaje y encontrar mi lugar.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 4,
    text: 'El silencio de lo divino se siente como...',
    options: [
      { text: 'Una prueba a mi paciencia, un desierto necesario.', patriarch: 'Abraham' },
      { text: 'Una oportunidad para entender, no solo para escuchar.', patriarch: 'Daniel' },
      { text: 'Un dolor profundo que me conecta con el dolor del mundo.', patriarch: 'Jeremiah' },
      { text: 'Un momento de soledad para enfrentar mis propios demonios.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 5,
    text: '¿Qué es un "milagro" para ti?',
    options: [
      { text: 'Lo imposible que se hace tangible contra toda lógica.', patriarch: 'Abraham' },
      { text: 'La revelación de un orden superior en medio del desorden.', patriarch: 'Daniel' },
      { text: 'La transformación del corazón más duro.', patriarch: 'Isaiah' },
      { text: 'Una segunda oportunidad cuando creías que todo estaba perdido.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 6,
    text: 'Cuando te enfrentas a la injusticia, tu primer impulso es...',
    options: [
      { text: 'Confiar en que se hará justicia, aunque no la veas ahora.', patriarch: 'Daniel' },
      { text: 'Denunciarla con una voz potente, sin importar el costo.', patriarch: 'Isaiah' },
      { text: 'Llorar por el quebranto que causa en las personas.', patriarch: 'Jeremiah' },
      { text: 'Buscar una estrategia para revertir la situación a tu favor.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te relacionas con tu pasado?',
    options: [
      { text: 'Como el fundamento de la promesa que me sostiene hoy.', patriarch: 'Abraham' },
      { text: 'Como una serie de lecciones que iluminan mi presente.', patriarch: 'Daniel' },
      { text: 'Como una carga que me da autoridad para hablar de redención.', patriarch: 'Jeremiah' },
      { text: 'Como una batalla que tuve que librar para ser quien soy.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 8,
    text: 'La palabra "obediencia" te suena a...',
    options: [
      { text: 'Un viaje a ciegas hacia un destino prometido.', patriarch: 'Abraham' },
      { text: 'Fidelidad a principios inquebrantables, sin importar la presión.', patriarch: 'Daniel' },
      { text: 'Cumplir un llamado, incluso si te margina y te hace sufrir.', patriarch: 'Jeremiah' },
      { text: 'Una rendición difícil después de haberlo intentado todo a mi manera.', patriarch: 'Jacob' },
    ],
  },
    {
    id: 9,
    text: '¿Qué es más poderoso: una visión del futuro o una promesa para el futuro?',
    options: [
      { text: 'Una promesa, porque se arraiga en la confianza, no en la vista.', patriarch: 'Abraham' },
      { text: 'Una visión, porque revela el plan divino en detalle.', patriarch: 'Daniel' },
      { text: 'Ambas son caras de la misma moneda de esperanza.', patriarch: 'Isaiah' },
      { text: 'Ninguna, si no luchas por ellas en el presente.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 10,
    text: 'En momentos de soledad, ¿qué buscas?',
    options: [
      { text: 'Consuelo en las estrellas, recordando la inmensidad del pacto.', patriarch: 'Abraham' },
      { text: 'Claridad en la quietud, esperando que el conocimiento sea revelado.', patriarch: 'Daniel' },
      { text: 'Las palabras exactas para expresar el lamento de mi alma.', patriarch: 'Jeremiah' },
      { text: 'La fuerza para enfrentar mi propia sombra y salir transformado.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 11,
    text: 'El concepto de "legado" para ti es...',
    options: [
      { text: 'Dejar una descendencia que porte una bendición.', patriarch: 'Abraham' },
      { text: 'Un testimonio de fe que inspire a generaciones futuras.', patriarch: 'Daniel' },
      { text: 'Una advertencia y una esperanza grabadas en la historia.', patriarch: 'Isaiah' },
      { text: 'La superación de mis propias fallas para forjar un nuevo comienzo.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 12,
    text: '¿Qué te quebranta más el corazón?',
    options: [
      { text: 'La espera interminable por algo que se anhela profundamente.', patriarch: 'Abraham' },
      { text: 'La arrogancia de quienes se creen dioses en la tierra.', patriarch: 'Daniel' },
      { text: 'La ceguera de un pueblo que camina hacia su propia destrucción.', patriarch: 'Isaiah' },
      { text: 'La traición y el engaño, especialmente de aquellos a quienes amas.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 13,
    text: 'El "sacrificio" verdadero es...',
    options: [
      { text: 'Entregar lo que más amas, confiando en un propósito mayor.', patriarch: 'Abraham' },
      { text: 'Renunciar a los honores del mundo por mantenerte puro.', patriarch: 'Daniel' },
      { text: 'Ofrecer tu propia vida y reputación por un mensaje divino.', patriarch: 'Jeremiah' },
      { text: 'Dejar ir tu astucia y depender completamente de la gracia.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 14,
    text: '¿Qué tipo de esperanza te mueve?',
    options: [
      { text: 'La esperanza de ver una ciudad cuyas bases son eternas.', patriarch: 'Abraham' },
      { text: 'La esperanza de que el reino justo prevalecerá sobre los injustos.', patriarch: 'Daniel' },
      { text: 'La esperanza de que de los escombros nacerá un nuevo comienzo.', patriarch: 'Isaiah' },
      { text: 'La esperanza de reconciliación, tanto con Dios como con los hombres.', patriarch: 'Jacob' },
    ],
  },
  {
    id: 15,
    text: 'Finalmente, tu espíritu se siente más como...',
    options: [
      { text: 'Un peregrino en tierra extraña, caminando hacia su verdadero hogar.', patriarch: 'Abraham' },
      { text: 'Un sabio en una corte extranjera, fiel a su Dios en secreto y en público.', patriarch: 'Daniel' },
      { text: 'Un mensajero con carbones encendidos en los labios.', patriarch: 'Isaiah' },
      { text: 'Un luchador que no se rinde hasta recibir su bendición.', patriarch: 'Jacob' },
    ],
  }
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
