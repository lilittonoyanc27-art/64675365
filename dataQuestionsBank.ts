import { Question, TopicId } from './types.ts';
import { QUESTIONS_DATA } from './dataQuestions.ts';
import { EXTRA_QUESTIONS } from './dataQuestionsExtra.ts';

// Additional curated high-yield question items to ensure complete 200+ bank
const CURATED_GENERATED_QUESTIONS: Question[] = [
  // Categories Gramaticales: Word analysis items
  {
    id: 'cg-gen-1',
    topicId: 'categorias-gramaticales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "Ayer los alumnos leyeron tres libros interesantes", ¿qué categoría es "tres"?',
      hy: '«Ayer los alumnos leyeron tres libros interesantes» նախադասության մեջ խոսքի ո՞ր մասն է «tres»-ը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Determinante numeral cardinal.', hy: 'Քանակական թվական դետերմինատիվ:' } },
      { id: 'opt-b', text: { es: 'Pronombre indefinido.', hy: 'Անորոշ դերանուն:' } },
      { id: 'opt-c', text: { es: 'Sustantivo propio.', hy: 'Հատուկ գոյական:' } },
      { id: 'opt-d', text: { es: 'Adverbio de tiempo.', hy: 'Ժամանակի մակբայ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Tres" acompaña al sustantivo "libros" concretando su cantidad exacta: determinante numeral.',
      hy: '«Tres»-ն ուղեկցում է «libros» գոյականին՝ հստակեցնելով նրա ճշգրիտ քանակը՝ թվական դետերմինատիվ:',
    },
  },
  {
    id: 'cg-gen-2',
    topicId: 'categorias-gramaticales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En la oración: "Nosotros estudiaremos con tranquilidad", ¿qué función y categoría tiene "tranquilidad"?',
      hy: '«Nosotros estudiaremos con tranquilidad» նախադասության մեջ ի՞նչ պաշտոն և կարգ ունի «tranquilidad» բառը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Sustantivo abstracto femenino singular.', hy: 'Վերացական գոյական, իգական, եզակի:' } },
      { id: 'opt-b', text: { es: 'Adjetivo calificativo.', hy: 'Որակական ածական:' } },
      { id: 'opt-c', text: { es: 'Adverbio de modo.', hy: 'Ձևի մակբայ:' } },
      { id: 'opt-d', text: { es: 'Verbo en subjuntivo.', hy: 'Բայ ըղձականում:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Tranquilidad" es un sustantivo abstracto (la tranquilidad). Va precedido de la preposición "con".',
      hy: '«Tranquilidad»-ն վերացական գոյական է (la tranquilidad): Այն նախորդվում է «con» նախդիրով:',
    },
  },
  {
    id: 'cg-gen-3',
    topicId: 'categorias-gramaticales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál de los siguientes sustantivos es COLECTIVO?',
      hy: 'Հետևյալ գոյականներից ո՞րն է ՀԱՎԱՔԱԿԱՆ (sustantivo colectivo):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Jauría (conjunto de perros de caza).', hy: 'Jauría (որսորդական շների ոհմակ/խումբ):' } },
      { id: 'opt-b', text: { es: 'Perros (plural de perro).', hy: 'Perros (շներ - հոգնակի):' } },
      { id: 'opt-c', text: { es: 'Cazador (individuo).', hy: 'Cazador (որսորդ):' } },
      { id: 'opt-d', text: { es: 'Bosque alto.', hy: 'Bosque alto (ածականով):' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Un sustantivo colectivo designa en singular a un conjunto de seres u objetos de la misma especie (jauría, rebaño, arboleda).',
      hy: 'Հավաքական գոյականը եզակի թվով անվանում է նույն տեսակի էակների կամ առարկաների ամբողջություն (jauría, rebaño, arboleda):',
    },
  },
  {
    id: 'cg-gen-4',
    topicId: 'categorias-gramaticales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "Aquellos chicos son muy amables", ¿qué categoría es "aquellos"?',
      hy: '«Aquellos chicos son muy amables» նախադասության մեջ խոսքի ո՞ր մասն է «aquellos»-ը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Determinante demostrativo de lejanía.', hy: 'Հեռավորության ցուցական դետերմինատիվ:' } },
      { id: 'opt-b', text: { es: 'Pronombre personal.', hy: 'Անձնական դերանուն:' } },
      { id: 'opt-c', text: { es: 'Adjetivo calificativo.', hy: 'Որակական ածական:' } },
      { id: 'opt-d', text: { es: 'Artículo indeterminado.', hy: 'Անորոշ հոդ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Aquellos" acompaña al sustantivo "chicos" indicando lejanía en el espacio o tiempo.',
      hy: '«Aquellos»-ն ուղեկցում է «chicos» գոյականին՝ ցույց տալով տարածական կամ ժամանակային հեռավորություն:',
    },
  },
  {
    id: 'cg-gen-5',
    topicId: 'categorias-gramaticales',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: '¿En cuál de las siguientes frases la palabra "bastante" funciona como ADJETIVO/DETERMINANTE y no como adverbio?',
      hy: 'Հետևյալ նախադասություններից որո՞ւմ է «bastante» բառը գործում որպես ԱԾԱԿԱՆ/ԴԵՏԵՐՄԻՆԱՏԻՎ, այլ ոչ թե մակբայ:',
    },
    options: [
      { id: 'opt-a', text: { es: '"Tengo bastantes problemas que resolver hoy".', hy: '«Tengo bastantes problemas que resolver hoy» (փոխվում է հոգնակիի՝ bastantes problemas):' } },
      { id: 'opt-b', text: { es: '"Ella corre bastante rápido por las mañanas".', hy: '«Ella corre bastante rápido por las mañanas» (լրացնում է մակբայի):' } },
      { id: 'opt-c', text: { es: '"Hemos descansado bastante".', hy: '«Hemos descansado bastante» (լրացնում է բային):' } },
      { id: 'opt-d', text: { es: '"Están bastante cansados".', hy: '«Están bastante cansados» (լրացնում է ածականի):' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'En la opción A, concuerda en plural con el sustantivo "problemas" ("bastantes"), lo que demuestra que es determinante indefinido.',
      hy: 'A տարբերակում այն համաձայնում է հոգնակիով «problemas» գոյականի հետ («bastantes»), ինչն ապացուցում է, որ այն անորոշ դետերմինատիվ է:',
    },
  },

  // Modalidades oracionales extra
  {
    id: 'mo-gen-1',
    topicId: 'modalidades-oracionales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'La oración "¿Quién te ha dicho semejante noticia?" es:',
      hy: '«¿Quién te ha dicho semejante noticia?» նախադասությունը հետևյալն է.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Interrogativa directa parcial.', hy: 'Ուղղակի մասնակի հարցական:' } },
      { id: 'opt-b', text: { es: 'Enunciativa negativa.', hy: 'Ժխտական պատմողական:' } },
      { id: 'opt-c', text: { es: 'Desiderativa.', hy: 'Ըղձական:' } },
      { id: 'opt-d', text: { es: 'Exhortativa.', hy: 'Հորդորական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Lleva signos de interrogación y pronombre interrogativo ("quién"); pregunta por una parte de la información.',
      hy: 'Ունի հարցական նշաններ և հարցական դերանուն («quién»). հարցնում է տեղեկության մի մասի մասին:',
    },
  },
  {
    id: 'mo-gen-2',
    topicId: 'modalidades-oracionales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Transforma la oración afirmativa "El autobús llega a las tres" en DUBITATIVA:',
      hy: 'Վերածիր «El autobús llega a las tres» հաստատական նախադասությունը ՏԱՐԱԿՈՒՍԱԿԱՆ (կասկածական) նախադասության.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Quizás el autobús llegue a las tres.', hy: 'Quizás el autobús llegue a las tres. (Գուցե ավտոբուսը ժամանի ժամը երեքին):' } },
      { id: 'opt-b', text: { es: '¡Que llegue el autobús a las tres!', hy: '¡Que llegue el autobús a las tres! (Թող ավտոբուսը ժամանի ժամը երեքին):' } },
      { id: 'opt-c', text: { es: '¡Autobús, llega a las tres!', hy: '¡Autobús, llega a las tres! (Ավտոբո՛ւս, արի ժամը երեքին):' } },
      { id: 'opt-d', text: { es: 'El autobús no llega a las tres.', hy: 'El autobús no llega a las tres:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Se añade un adverbio de duda ("quizás") y el verbo en subjuntivo ("llegue").',
      hy: 'Ավելացվում է կասկածի մակբայ («quizás») և բայը ըղձական եղանակում («llegue»):',
    },
  },

  // Figuras fónicas & morfosintácticas extra
  {
    id: 'ff-gen-1',
    topicId: 'figuras-fonicas',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué figura retórica se encuentra en el trabalenguas: "Pablito clavó un clavito en la calva de un calvito"?',
      hy: 'Ո՞ր գրական պատկերն է առկա շուտասելուկում. «Pablito clavó un clavito en la calva de un calvito»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Aliteración (repetición de sonidos "cl", "l", "p").', hy: 'Բաղաձայնույթ / Ալիտերացիա («cl», «l», «p» հնչյունների կրկնություն):' } },
      { id: 'opt-b', text: { es: 'Hipérbaton.', hy: 'Հիպերբատոն:' } },
      { id: 'opt-c', text: { es: 'Asíndeton.', hy: 'Ասինդետոն:' } },
      { id: 'opt-d', text: { es: 'Pleonasmo.', hy: 'Պլեոնազմ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Los trabalenguas se construyen deliberadamente mediante aliteraciones acústicas.',
      hy: 'Շուտասելուկները միտումնավոր կառուցվում են հնչյունական ալիտերացիաների միջոցով:',
    },
  },
  {
    id: 'fm-gen-1',
    topicId: 'figuras-morfosintacticas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En los versos: "Por ti el silencio de la selva umbría, / por ti la esquividad y apartamiento", ¿qué figura se repite al inicio?',
      hy: '«Por ti el silencio de la selva umbría, / por ti la esquividad y apartamiento» տողերում ո՞ր պատկերն է կրկնվում սկզբում:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Anáfora ("Por ti").', hy: 'Անաֆորա («Por ti»):' } },
      { id: 'opt-b', text: { es: 'Epanadiplosis.', hy: 'Էպանադիպլոսիս:' } },
      { id: 'opt-c', text: { es: 'Onomatopeya.', hy: 'Օնոմատոպեա:' } },
      { id: 'opt-d', text: { es: 'Paronomasia.', hy: 'Պարոնոմազիա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La anáfora repite las palabras "Por ti" al principio de cada verso.',
      hy: 'Անաֆորան կրկնում է «Por ti» բառերը յուրաքանչյուր տողի սկզբում:',
    },
  },
  {
    id: 'fs-gen-1',
    topicId: 'figuras-semanticas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Identifica el elemento real (A) y el imaginario (B) en la frase: "Las perlas del rocío brillaban sobre la hierba verde".',
      hy: 'Որոշիր իրական (A) և պատկերավոր (B) տարրերը հետևյալ նախադասության մեջ. «Las perlas del rocío brillaban sobre la hierba verde»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Elemento real A = gotas de rocío; Elemento imaginario B = perlas.', hy: 'Իրական տարր A = ցողի կաթիլներ (rocío), Պատկերավոր տարր B = մարգարիտներ (perlas):' } },
      { id: 'opt-b', text: { es: 'Elemento real A = perlas; Elemento imaginario B = hierba.', hy: 'Իրական տարր A = perlas, Պատկերավոր տարր B = hierba:' } },
      { id: 'opt-c', text: { es: 'Ambos son elementos reales de una joyería.', hy: 'Երկուսն էլ ոսկերչական խանութի իրական տարրեր են:' } },
      { id: 'opt-d', text: { es: 'No es una metáfora, es una aliteración.', hy: 'Փոխաբերություն չէ, այլ ալիտերացիա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Se habla del rocío matutino (A) y se embellece identificándolo con perlas brillantes (B) mediante estructura B de A.',
      hy: 'Խոսվում է առավոտյան ցողի մասին (A) և այն գեղեցկացվում է փայլուն մարգարիտների հետ նույնացմամբ (B)՝ B de A կառուցվածքով:',
    },
  },
  {
    id: 'fs-gen-2',
    topicId: 'figuras-semanticas',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál de las siguientes expresiones contiene una METÁFORA?',
      hy: 'Հետևյալ արտահայտություններից ո՞րն է պարունակում ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ:',
    },
    options: [
      { id: 'opt-a', text: { es: '"El tiempo es oro".', hy: '«El tiempo es oro» (Ժամանակը ոսկի է):' } },
      { id: 'opt-b', text: { es: '"El tiempo corre como un río rápido".', hy: '«El tiempo corre como un río rápido» (ունի como = համեմատություն):' } },
      { id: 'opt-c', text: { es: '"Ayer perdimos dos horas de tiempo".', hy: '«Ayer perdimos dos horas de tiempo» (ուղիղ իմաստ):' } },
      { id: 'opt-d', text: { es: '"El reloj marca las doce".', hy: '«El reloj marca las doce» (ուղիղ իմաստ):' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"El tiempo es oro" es la clásica metáfora de estructura "A es B", identificando el tiempo con el metal más precioso.',
      hy: '«El tiempo es oro»-ն «A-ն B է» կառուցվածքով դասական փոխաբերություն է, որը նույնացնում է ժամանակը ամենաթանկարժեք մետաղի հետ:',
    },
  },
  {
    id: 'gfp-gen-1',
    topicId: 'generos-formas-popular',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Por qué la historia de "Los amantes de Teruel" se clasifica como LEYENDA y no como mito?',
      hy: 'Ինչո՞ւ «Տերուելի սիրահարները» պատմությունը դասակարգվում է որպես ԼԵԳԵՆԴ և ոչ թե որպես առասպել:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Porque se sitúa en una ciudad real concreta (Teruel) y trata de personajes humanos históricos, no de dioses.', hy: 'Քանի որ այն տեղադրված է իրական կոնկրետ քաղաքում (Տերուել) և վերաբերում է պատմական մարդկային կերպարների, ոչ թե աստվածների:' } },
      { id: 'opt-b', text: { es: 'Porque está escrita en versos alejandrinos.', hy: 'Քանի որ գրված է ալեքսանդրյան տողերով:' } },
      { id: 'opt-c', text: { es: 'Porque explica el origen del planeta Tierra.', hy: 'Քանի որ բացատրում է Երկիր մոլորակի ծագումը:' } },
      { id: 'opt-d', text: { es: 'Porque la inventó un científico en el siglo XXI.', hy: 'Քանի որ այն հորինել է 21-րդ դարի մի գիտնական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Las leyendas tienen anclaje geográfico e histórico local concreto con protagonistas humanos y adornos tradicionales.',
      hy: 'Լեգենդներն ունեն կոնկրետ տեղային աշխարհագրական և պատմական հիմք՝ մարդկային հերոսներով և ավանդական զարդարանքներով:',
    },
  },
  {
    id: 'gfp-gen-2',
    topicId: 'generos-formas-popular',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué es una COPLA en la poesía popular española?',
      hy: 'Ի՞նչ է ԿՈՊԼԱՆ (copla) իսպանական ժողովրդական պոեզիայում:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Una estrofa popular de cuatro versos octosílabos con rima asonante en los pares.', hy: 'Չորս ութավանկ տողերով ժողովրդական տուն՝ զույգերի ասոնանս հանգով:' } },
      { id: 'opt-b', text: { es: 'Una novela en prosa de quinientas páginas.', hy: 'Հինգ հարյուր էջանոց արձակ վեպ:' } },
      { id: 'opt-c', text: { es: 'Un diccionario de sinónimos.', hy: 'Հոմանիշների բառարան:' } },
      { id: 'opt-d', text: { es: 'Un poema de amor de catorce versos endecasílabos.', hy: 'Տասնչորս 11-վանկանի տողերով սիրային բանաստեղծություն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La copla es una estrofa popular breve de cuatro versos de arte menor muy frecuente en cantares y folklore.',
      hy: 'Կոպլան չորս փոքր չափի տողերով կարճ ժողովրդական տուն է, որը շատ տարածված է երգերում և ֆոլկլորում:',
    },
  },
];

export const ALL_QUESTIONS: Question[] = [
  ...QUESTIONS_DATA,
  ...EXTRA_QUESTIONS,
  ...CURATED_GENERATED_QUESTIONS,
];

export function getQuestionsByTopic(topicId: TopicId): Question[] {
  return ALL_QUESTIONS.filter((q) => q.topicId === topicId);
}

export function getQuestionsByLevel(level: 'facil' | 'medio' | 'dificil'): Question[] {
  return ALL_QUESTIONS.filter((q) => q.level === level);
}
