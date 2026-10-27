import { SentenceAnalysisItem } from './types.ts';

export const SENTENCE_ANALYSIS_DATA: SentenceAnalysisItem[] = [
  {
    id: 'sa-1',
    sentence: 'Mi hermano pequeño canta muy bien hoy.',
    translation: 'Իմ փոքր եղբայրը շատ լավ է երգում այսօր:',
    difficulty: 'facil',
    words: [
      {
        word: 'Mi',
        category: 'Determinante',
        genderNumber: 'Posesivo, 1 poseedor, masc./fem. sing.',
        explanation: {
          es: 'Acompaña al sustantivo "hermano" indicando posesión.',
          hy: 'Ուղեկցում է «hermano» գոյականին՝ ցույց տալով պատկանելություն (ստացական դետերմինատիվ):',
        },
      },
      {
        word: 'hermano',
        category: 'Sustantivo',
        genderNumber: 'Común, individual, concreto, masc. sing.',
        explanation: {
          es: 'Nombra a una persona; núcleo del sujeto.',
          hy: 'Անվանում է անձ (գոյական), ենթակայի կորիզն է:',
        },
      },
      {
        word: 'pequeño',
        category: 'Adjetivo',
        genderNumber: 'Calificativo, masc. sing.',
        explanation: {
          es: 'Expresa una cualidad de "hermano" y concuerda con él.',
          hy: 'Արտահայտում է «hermano»-ի որակը և համաձայնում է նրա հետ:',
        },
      },
      {
        word: 'canta',
        category: 'Verbo',
        genderNumber: '3.ª persona sing., presente indicativo',
        explanation: {
          es: 'Núcleo del predicado verbal (verbo cantar).',
          hy: 'Ստորոգյալի կորիզն է (cantar բայը):',
        },
      },
      {
        word: 'muy',
        category: 'Adverbio',
        genderNumber: 'Invariable, de cantidad',
        explanation: {
          es: 'Modifica y cuantifica al adverbio "bien".',
          hy: 'Լրացնում և քանակապես ուժեղացնում է «bien» մակբայը:',
        },
      },
      {
        word: 'bien',
        category: 'Adverbio',
        genderNumber: 'Invariable, de modo',
        explanation: {
          es: 'Indica cómo canta (complemento circunstancial de modo).',
          hy: 'Ցույց է տալիս, թե ինչպես է երգում (ձևի մակբայ):',
        },
      },
      {
        word: 'hoy',
        category: 'Adverbio',
        genderNumber: 'Invariable, de tiempo',
        explanation: {
          es: 'Indica cuándo ocurre la acción (tiempo).',
          hy: 'Ցույց է տալիս, թե երբ է կատարվում գործողությունը (ժամանակի մակբայ):',
        },
      },
    ],
  },
  {
    id: 'sa-2',
    sentence: 'Ayer nosotros vimos una emocionante película en el cine.',
    translation: 'Երեկ մենք մի հուզիչ ֆիլմ դիտեցինք կինոթատրոնում:',
    difficulty: 'medio',
    words: [
      {
        word: 'Ayer',
        category: 'Adverbio',
        genderNumber: 'Invariable, de tiempo',
        explanation: {
          es: 'Adverbio de tiempo invariable.',
          hy: 'Ժամանակի անփոփոխ մակբայ:',
        },
      },
      {
        word: 'nosotros',
        category: 'Pronombre',
        genderNumber: 'Personal tónico, 1.ª persona plural',
        explanation: {
          es: 'Sustituye a los hablantes; sujeto de la oración.',
          hy: 'Անձնական դերանուն 1-ին դեմք հոգնակի, նախադասության ենթական է:',
        },
      },
      {
        word: 'vimos',
        category: 'Verbo',
        genderNumber: '1.ª persona plural pretérito perfecto simple indicativo',
        explanation: {
          es: 'Núcleo del predicado del verbo "ver".',
          hy: '«Ver» (տեսնել) բայի ստորոգյալի կորիզը:',
        },
      },
      {
        word: 'una',
        category: 'Artículo',
        genderNumber: 'Indeterminado, fem. sing.',
        explanation: {
          es: 'Artículo indeterminado que acompaña a "película".',
          hy: 'Անորոշ հոդ, որն ուղեկցում է «película»-ին:',
        },
      },
      {
        word: 'emocionante',
        category: 'Adjetivo',
        genderNumber: 'Calificativo de una sola terminación, fem. sing.',
        explanation: {
          es: 'Describe una cualidad del sustantivo "película".',
          hy: 'Նկարագրում է «película» գոյականի հատկանիշը:',
        },
      },
      {
        word: 'película',
        category: 'Sustantivo',
        genderNumber: 'Común, individual, concreto, fem. sing.',
        explanation: {
          es: 'Sustantivo común femenino singular.',
          hy: 'Հասարակ գոյական, իգական, եզակի:',
        },
      },
      {
        word: 'en',
        category: 'Preposición',
        genderNumber: 'Invariable',
        explanation: {
          es: 'Preposición que introduce el lugar.',
          hy: 'Նախդիր, որը ներմուծում է տեղը:',
        },
      },
      {
        word: 'el',
        category: 'Artículo',
        genderNumber: 'Determinado, masc. sing.',
        explanation: {
          es: 'Artículo determinado masculino singular.',
          hy: 'Որոշյալ հոդ, արական, եզակի:',
        },
      },
      {
        word: 'cine',
        category: 'Sustantivo',
        genderNumber: 'Común, masc. sing.',
        explanation: {
          es: 'Sustantivo común que designa el edificio.',
          hy: 'Հասարակ գոյական, արական, եզակի:',
        },
      },
    ],
  },
  {
    id: 'sa-3',
    sentence: '¡Ojalá vengan todos mis amigos a la fiesta!',
    translation: 'Երանի՜ իմ բոլոր ընկերները գան երեկույթին:',
    difficulty: 'dificil',
    words: [
      {
        word: 'Ojalá',
        category: 'Interjección',
        genderNumber: 'Palabra desiderativa / interjectiva',
        explanation: {
          es: 'Expresa deseo vehemente; introduce modalidad desiderativa.',
          hy: 'Ցանկություն արտահայտող բառ, ներմուծում է ըղձական եղանակ:',
        },
      },
      {
        word: 'vengan',
        category: 'Verbo',
        genderNumber: '3.ª persona plural, presente de subjuntivo',
        explanation: {
          es: 'Forma del verbo venir en modo subjuntivo.',
          hy: '«Venir» (գալ) բայի ձևը ըղձական եղանակում:',
        },
      },
      {
        word: 'todos',
        category: 'Determinante',
        genderNumber: 'Indefinido, masc. plural',
        explanation: {
          es: 'Determinante indefinido cuantificador que acompaña a "amigos".',
          hy: 'Անորոշ դետերմինատիվ, որն ուղեկցում է «amigos»-ին:',
        },
      },
      {
        word: 'mis',
        category: 'Determinante',
        genderNumber: 'Posesivo, masc. plural',
        explanation: {
          es: 'Determinante posesivo de varios objetos poseídos.',
          hy: 'Ստացական դետերմինատիվ:',
        },
      },
      {
        word: 'amigos',
        category: 'Sustantivo',
        genderNumber: 'Común, individual, masc. plural',
        explanation: {
          es: 'Núcleo del sujeto.',
          hy: 'Ենթակայի կորիզ (գոյական):',
        },
      },
      {
        word: 'a',
        category: 'Preposición',
        genderNumber: 'Invariable',
        explanation: {
          es: 'Preposición de dirección o destino.',
          hy: 'Ուղղության կամ նպատակակետի նախդիր:',
        },
      },
      {
        word: 'la',
        category: 'Artículo',
        genderNumber: 'Determinado, fem. sing.',
        explanation: {
          es: 'Artículo determinado femenino.',
          hy: 'Որոշյալ հոդ իգական եզակի:',
        },
      },
      {
        word: 'fiesta',
        category: 'Sustantivo',
        genderNumber: 'Común, fem. sing.',
        explanation: {
          es: 'Sustantivo común.',
          hy: 'Հասարակ գոյական:',
        },
      },
    ],
  },
];
