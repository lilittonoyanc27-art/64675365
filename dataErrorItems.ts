import { ErrorItem } from './types.ts';

export const ERROR_ITEMS_DATA: ErrorItem[] = [
  {
    id: 'err-1',
    topicId: 'figuras-morfosintacticas',
    statement: {
      es: 'En el verso "Volverán las oscuras golondrinas", hay una anáfora porque las palabras están en orden poético.',
      hy: '«Volverán las oscuras golondrinas» տողում կա անաֆորա, որովհետև բառերը բանաստեղծական շարադասությամբ են:',
    },
    hasError: true,
    correctionIfError: {
      es: 'La figura correcta es el HIPÉRBATON (alteración del orden sintáctico habitual). La anáfora consiste en repetir palabras al inicio de versos.',
      hy: 'Ճիշտ պատկերը ՀԻՊԵՐԲԱՏՈՆՆ է (սովորական շարադասության խախտում): Անաֆորան կայանում է տողասկզբում բառերի կրկնության մեջ:',
    },
    explanation: {
      es: 'No hay repetición al inicio de versos, sino desorden del orden gramatical lógico (Sujeto + Verbo).',
      hy: 'Տողասկզբում կրկնություն չկա, այլ քերականական տրամաբանական կարգի խախտում (Ենթակա + Բայ):',
    },
  },
  {
    id: 'err-2',
    topicId: 'figuras-fonicas',
    statement: {
      es: 'El verso "Verde que te quiero verde" es una aliteración porque repite la palabra "verde".',
      hy: '«Verde que te quiero verde» տողը ալիտերացիա է, որովհետև կրկնում է «verde» բառը:',
    },
    hasError: true,
    correctionIfError: {
      es: 'La figura correcta es la EPANADIPLOSIS (empezar y terminar el mismo verso con la misma palabra). La aliteración repite sonidos sueltos, no palabras completas al principio y al final.',
      hy: 'Ճիշտ պատկերը ԷՊԱՆԱԴԻՊԼՈՍԻՍՆ է (նույն տողը նույն բառով սկսել և ավարտել): Ալիտերացիան կրկնում է առանձին հնչյուններ, ոչ թե ամբողջական բառեր սկզբում և վերջում:',
    },
    explanation: {
      es: 'La epanadiplosis tiene la estructura de enmarcar el verso con el mismo vocablo.',
      hy: 'Էպանադիպլոսիսը տողը շրջանակում է նույն բառով:',
    },
  },
  {
    id: 'err-3',
    topicId: 'generos-formas-popular',
    statement: {
      es: 'El romance español se caracteriza por tener versos endecasílabos y rima consonante en todos sus versos.',
      hy: 'Իսպանական ռոմանսը բնութագրվում է 11-վանկանի տողերով և բոլոր տողերում կոնսոնանս հանգով:',
    },
    hasError: true,
    correctionIfError: {
      es: 'El romance tiene versos OCTOSÍLABOS (8 sílabas) y rima ASONANTE en los versos pares, quedando libres los impares.',
      hy: 'Ռոմանսն ունի ՈՒԹԱՎԱՆԿ (8 վանկ) տողեր և ԱՍՈՆԱՆՍ հանգ զույգ տողերում, իսկ կենտերը մնում են ազատ:',
    },
    explanation: {
      es: 'Confundir el romance con el soneto es un error típico en los exámenes de 1.º de ESO.',
      hy: 'Ռոմանսը սոնետի հետ շփոթելը 1.º de ESO-ի քննությունների տիպիկ սխալ է:',
    },
  },
  {
    id: 'err-4',
    topicId: 'figuras-semanticas',
    statement: {
      es: 'La frase "Tus ojos son como dos luceros" es una metáfora pura de estructura B en lugar de A.',
      hy: '«Tus ojos son como dos luceros» նախադասությունը մաքուր փոխաբերություն է՝ B-ն A-ի փոխարեն կառուցվածքով:',
    },
    hasError: true,
    correctionIfError: {
      es: 'Es una COMPARACIÓN (símil) porque lleva el nexo comparativo explícito "como". En la metáfora no se usa "como".',
      hy: 'Դա ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ է, որովհետև ունի բացահայտ համեմատական «como» (ինչպես) կապը: Փոխաբերության մեջ «como» չի օգտագործվում:',
    },
    explanation: {
      es: 'La presencia de "como" o "parece" convierte automáticamente la expresión en una comparación.',
      hy: '«Como» կամ «parece» բառերի առկայությունը արտահայտությունն ավտոմատ դարձնում է համեմատություն:',
    },
  },
  {
    id: 'err-5',
    topicId: 'categorias-gramaticales',
    statement: {
      es: 'En "Este coche corre muy rápido", la palabra "rápido" es un adjetivo porque describe una cualidad.',
      hy: '«Este coche corre muy rápido» նախադասության մեջ «rápido» բառը ածական է, որովհետև նկարագրում է հատկանիշ:',
    },
    hasError: true,
    correctionIfError: {
      es: 'Es un ADVERBIO de modo porque complementa al verbo "corre" y es invariable (si decimos "estos coches corren muy rápido", no cambia a plural).',
      hy: 'Դա ձևի ՄԱԿԲԱՅ է, որովհետև լրացնում է «corre» բային և անփոփոխ է (եթե ասենք «estos coches corren muy rápido», չի փոխվում հոգնակիի):',
    },
    explanation: {
      es: 'El adjetivo concuerda con el sustantivo ("coche rápido"); el adverbio modifica al verbo ("corre rápido").',
      hy: 'Ածականը համաձայնում է գոյականի հետ («coche rápido»), իսկ մակբայը լրացնում է բային («corre rápido»):',
    },
  },
  {
    id: 'err-6',
    topicId: 'funciones-lenguaje',
    statement: {
      es: 'La frase "¡Cierra la puerta inmediatamente!" tiene función expresiva porque lleva signos de exclamación.',
      hy: '«¡Cierra la puerta inmediatamente!» նախադասությունն ունի զգացմունքային գործառույթ, որովհետև ունի բացականչական նշաններ:',
    },
    hasError: true,
    correctionIfError: {
      es: 'Tiene FUNCIÓN APELATIVA o conativa, porque usa el imperativo ("cierra") para ordenar al receptor que actúe. Los signos de exclamación solo intensifican el mandato.',
      hy: 'Ունի ԱԶԴԵՑՈՒԹՅԱՆ (apelativa) գործառույթ, որովհետև օգտագործում է հրամայական («cierra»), որպեսզի լսողին հրամայի գործել: Բացականչական նշանները միայն ուժեղացնում են հրամանը:',
    },
    explanation: {
      es: 'La intención es que el oyente cierre la puerta, lo que pertenece a la función apelativa.',
      hy: 'Նպատակն այն է, որ լսողը փակի դուռը, ինչը պատկանում է ազդեցության գործառույթին:',
    },
  },
];
