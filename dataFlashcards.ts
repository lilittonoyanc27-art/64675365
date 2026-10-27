import { Flashcard } from './types.ts';

export const FLASHCARDS_DATA: Flashcard[] = [
  // --- TEMA 1: FUNCIONES DEL LENGUAJE ---
  {
    id: 'fc-fl-1',
    topicId: 'funciones-lenguaje',
    term: {
      es: 'Función referencial o representativa',
      hy: 'Տեղեկատվական կամ ներկայացուցչական գործառույթ',
    },
    definition: {
      es: 'Transmite información objetiva sobre la realidad sin mostrar opiniones ni emociones. Se centra en el contexto o referente.',
      hy: 'Հաղորդում է օբյեկտիվ տեղեկատվություն իրականության մասին՝ առանց կարծիքների կամ հույզերի: Կենտրոնանում է համատեքստի վրա:',
    },
    example: {
      es: 'El río Ebro desemboca en el mar Mediterráneo.',
      hy: 'Էբրո գետը թափվում է Միջերկրական ծովը:',
    },
    clue: {
      es: 'Oraciones enunciativas, 3.ª persona, modo indicativo.',
      hy: 'Պատմողական նախադասություններ, 3-րդ դեմք, սահմանական եղանակ:',
    },
  },
  {
    id: 'fc-fl-2',
    topicId: 'funciones-lenguaje',
    term: {
      es: 'Función expresiva o emotiva',
      hy: 'Զգացմունքային կամ հուզական գործառույթ',
    },
    definition: {
      es: 'Exterioriza los sentimientos, sensaciones, emociones o valoraciones personales del emisor.',
      hy: 'Արտահայտում է խոսողի անձնական զգացմունքները, զգացողությունները, հույզերը կամ գնահատականները:',
    },
    example: {
      es: '¡Qué alegría tan grande verte aquí hoy!',
      hy: 'Ի՜նչ մեծ ուրախություն է քեզ այստեղ տեսնել այսօր:',
    },
    clue: {
      es: '1.ª persona (yo), exclamaciones (¡ !), adjetivos valorativos.',
      hy: '1-ին դեմք (ես), բացականչություններ (¡ !), գնահատող ածականներ:',
    },
  },
  {
    id: 'fc-fl-3',
    topicId: 'funciones-lenguaje',
    term: {
      es: 'Función apelativa o conativa',
      hy: 'Ազդեցության կամ կոչական գործառույթ',
    },
    definition: {
      es: 'Busca influir en el receptor para que actúe, responda o modifique su conducta.',
      hy: 'Ձգտում է ազդել լսողի վրա, որպեսզի նա գործի, պատասխանի կամ փոխի իր վարքագիծը:',
    },
    example: {
      es: 'Por favor, abre la ventana y escucha.',
      hy: 'Խնդրում եմ, բաց պատուհանը և լսիր:',
    },
    clue: {
      es: 'Imperativos ("ven"), 2.ª persona (tú), preguntas directas.',
      hy: 'Հրամայականներ («արի»), 2-րդ դեմք (դու), ուղղակի հարցեր:',
    },
  },
  {
    id: 'fc-fl-4',
    topicId: 'funciones-lenguaje',
    term: {
      es: 'Función fática o de contacto',
      hy: 'Կապի հաստատման կամ շփման գործառույթ',
    },
    definition: {
      es: 'Inicia, comprueba, prolonga o interrumpe la comunicación a través del canal físico.',
      hy: 'Սկսում է, ստուգում, շարունակում կամ ընդհատում հաղորդակցությունը ֆիզիկական կապուղու միջոցով:',
    },
    example: {
      es: '¿Hola? ¿Me oyes bien por el teléfono?',
      hy: 'Ալո՞: Լա՞վ ես ինձ լսում հեռախոսով:',
    },
    clue: {
      es: 'Saludos ("¡hola!"), despedidas ("adiós"), muletillas ("¿eh?").',
      hy: 'Ողջույններ («բարև»), հրաժեշտներ («ցտեսություն»), միջանկյալ բառեր («հա՞»):',
    },
  },
  {
    id: 'fc-fl-5',
    topicId: 'funciones-lenguaje',
    term: {
      es: 'Función metalingüística',
      hy: 'Մետալեզվական գործառույթ',
    },
    definition: {
      es: 'Utiliza la propia lengua para explicar, aclarar o reflexionar sobre las reglas del código o idioma.',
      hy: 'Օգտագործում է հենց նույն լեզուն՝ կոդի կամ լեզվի կանոնները բացատրելու, պարզաբանելու կամ դրանց շուրջ խորհելու համար:',
    },
    example: {
      es: 'Los verbos tienen tiempo, persona, número y modo.',
      hy: 'Բայերն ունեն ժամանակ, դեմք, թիվ և եղանակ:',
    },
    clue: {
      es: 'Términos gramaticales, ortografía, diccionarios.',
      hy: 'Քերականական եզրույթներ, ուղղագրություն, բառարաններ:',
    },
  },
  {
    id: 'fc-fl-6',
    topicId: 'funciones-lenguaje',
    term: {
      es: 'Función poética o estética',
      hy: 'Բանաստեղծական կամ գեղագիտական գործառույթ',
    },
    definition: {
      es: 'Atrae la atención sobre la forma y la belleza del propio mensaje mediante recursos estilísticos.',
      hy: 'Ուշադրություն է հրավիրում հենց հաղորդագրության ձևի և գեղեցկության վրա՝ ոճական միջոցների օգնությամբ:',
    },
    example: {
      es: 'Caminante, no hay camino, se hace camino al andar.',
      hy: 'Ճամփո՛րդ, ճանապարհ չկա, ճանապարհը հարթվում է քայլելիս:',
    },
    clue: {
      es: 'Rima, ritmo, métrica, metáforas, juegos sonoros.',
      hy: 'Հանգ, ռիթմ, չափ, փոխաբերություններ, հնչյունախաղեր:',
    },
  },

  // --- TEMA 2: MODALIDADES ORACIONALES ---
  {
    id: 'fc-mo-1',
    topicId: 'modalidades-oracionales',
    term: {
      es: 'Oración enunciativa afirmativa',
      hy: 'Հաստատական պատմողական նախադասություն',
    },
    definition: {
      es: 'Afirma un hecho objetivo de la realidad con entonación serena.',
      hy: 'Հաստատում է իրականության օբյեկտիվ փաստ հանգիստ հնչերանգով:',
    },
    example: {
      es: 'Hoy es martes y tenemos clase de Educación Física.',
      hy: 'Այսօր երեքշաբթի է, և մենք ունենք ֆիզկուլտուրայի դաս:',
    },
    clue: {
      es: 'Modo indicativo, sin palabras negativas.',
      hy: 'Սահմանական եղանակ, առանց ժխտական բառերի:',
    },
  },
  {
    id: 'fc-mo-2',
    topicId: 'modalidades-oracionales',
    term: {
      es: 'Oración enunciativa negativa',
      hy: 'Ժխտական պատմողական նախադասություն',
    },
    definition: {
      es: 'Niega la realidad o el cumplimiento de un hecho mediante adverbios de negación.',
      hy: 'Ժխտում է որևէ փաստի իրականությունը կամ կատարումը ժխտական մակբայների միջոցով:',
    },
    example: {
      es: 'No tengo ninguna duda sobre este ejercicio.',
      hy: 'Ես ոչ մի կասկած չունեմ այս վարժության վերաբերյալ:',
    },
    clue: {
      es: 'Lleva "no", "nunca", "jamás", "tampoco", "nadie".',
      hy: 'Պարունակում է «no», «nunca», «jamás», «tampoco», «nadie»:',
    },
  },
  {
    id: 'fc-mo-3',
    topicId: 'modalidades-oracionales',
    term: {
      es: 'Oración desiderativa',
      hy: 'Ըղձական նախադասություն',
    },
    definition: {
      es: 'Expresa un deseo o anhelo personal del emisor.',
      hy: 'Արտահայտում է խոսողի անձնական ցանկությունը կամ իղձը:',
    },
    example: {
      es: '¡Ojalá apruebe todos los exámenes del curso!',
      hy: 'Երանի՜ հանձնեմ ուսումնական տարվա բոլոր քննությունները:',
    },
    clue: {
      es: 'Palabras clave: "ojalá", "que..." seguido de subjuntivo.',
      hy: 'Հիմնաբառեր՝ «ojalá», «que...»՝ ըղձականով:',
    },
  },
  {
    id: 'fc-mo-4',
    topicId: 'modalidades-oracionales',
    term: {
      es: 'Oración dubitativa',
      hy: 'Տարակուսական (կասկածական) նախադասություն',
    },
    definition: {
      es: 'Expresa duda, incertidumbre o probabilidad sobre un acontecimiento.',
      hy: 'Արտահայտում է կասկած, անորոշություն կամ հավանականություն որևէ իրադարձության շուրջ:',
    },
    example: {
      es: 'Quizás mañana vayamos a la excursión escolar.',
      hy: 'Գուցե վաղը գնանք դպրոցական էքսկուրսիային:',
    },
    clue: {
      es: 'Adverbios: "quizás", "tal vez", "acaso", "probablemente".',
      hy: 'Մակբայներ՝ «quizás», «tal vez», «acaso», «probablemente»:',
    },
  },
  {
    id: 'fc-mo-5',
    topicId: 'modalidades-oracionales',
    term: {
      es: 'Oración exhortativa o imperativa',
      hy: 'Հորդորական կամ հրամայական նախադասություն',
    },
    definition: {
      es: 'Transmite una orden, ruego, petición o prohibición dirigida al receptor.',
      hy: 'Փոխանցում է լսողին ուղղված հրաման, խնդրանք, աղերս կամ արգելք:',
    },
    example: {
      es: 'Escucha atentamente lo que te digo, por favor.',
      hy: 'Ուշադրությամբ լսիր այն, ինչ ասում եմ քեզ, խնդրում եմ:',
    },
    clue: {
      es: 'Modo imperativo ("escucha", "haz", "ven").',
      hy: 'Հրամայական եղանակ («լսիր», «արա», «եկ»):',
    },
  },

  // --- TEMA 4: CATEGORÍAS GRAMATICALES ---
  {
    id: 'fc-cg-1',
    topicId: 'categorias-gramaticales',
    term: {
      es: 'Sustantivo o nombre',
      hy: 'Գոյական (Sustantivo)',
    },
    definition: {
      es: 'Palabra variable con género y número que designa seres, cosas, lugares, sentimientos o ideas.',
      hy: 'Սեռով և թվով փոփոխական բառ, որն անվանում է էակներ, իրեր, վայրեր, զգացմունքներ կամ գաղափարներ:',
    },
    example: {
      es: 'El perro corre por el parque con alegría.',
      hy: 'Շունը վազում է պուրակով ուրախությամբ:',
    },
    clue: {
      es: 'Admite artículos delante (el gato, la mesa, la bondad).',
      hy: 'Իրենից առաջ ընդունում է հոդեր (el gato, la mesa, la bondad):',
    },
  },
  {
    id: 'fc-cg-2',
    topicId: 'categorias-gramaticales',
    term: {
      es: 'Pronombre',
      hy: 'Դերանուն (Pronombre)',
    },
    definition: {
      es: 'Palabra que sustituye al sustantivo para no repetirlo y va sola (nunca acompaña a un nombre).',
      hy: 'Բառ, որը փոխարինում է գոյականին՝ այն չկրկնելու համար, և հանդես է գալիս մենակ:',
    },
    example: {
      es: 'Carlos no vino porque él estaba enfermo.',
      hy: 'Կառլոսը չեկավ, որովհետև նա (él) հիվանդ էր:',
    },
    clue: {
      es: 'Si va solo al lado del verbo, es pronombre ("Él vino", "Esto me gusta").',
      hy: 'Եթե բայի կողքին մենակ է՝ դերանուն է («Él vino», «Esto me gusta»):',
    },
  },
  {
    id: 'fc-cg-3',
    topicId: 'categorias-gramaticales',
    term: {
      es: 'Determinante',
      hy: 'Դետերմինատիվ (Determinante)',
    },
    definition: {
      es: 'Palabra que acompaña a un sustantivo para delimitarlo o concretarlo (posesivos, demostrativos, etc.).',
      hy: 'Բառ, որն ուղեկցում է գոյականին՝ այն սահմանափակելու կամ կոնկրետացնելու համար:',
    },
    example: {
      es: 'Este cuaderno pertenece a mi prima.',
      hy: 'Այս (este) տետրը պատկանում է իմ (mi) զարմուհուն:',
    },
    clue: {
      es: 'Va SIEMPRE acompañando a un sustantivo ("mi libro", "aquella casa").',
      hy: 'ՄԻՇՏ ուղեկցում է որևէ գոյականի («mi libro», «aquella casa»):',
    },
  },
  {
    id: 'fc-cg-4',
    topicId: 'categorias-gramaticales',
    term: {
      es: 'Adverbio',
      hy: 'Մակբայ (Adverbio)',
    },
    definition: {
      es: 'Palabra INVARIABLE que complementa a un verbo, a un adjetivo o a otro adverbio.',
      hy: 'ԱՆՓՈՓՈԽ բառ, որը լրացնում է բային, ածականին կամ մեկ այլ մակբայի:',
    },
    example: {
      es: 'El atleta corre muy rápidamente.',
      hy: 'Մարզիկը վազում է շատ (muy) արագորեն (rápidamente):',
    },
    clue: {
      es: 'Nunca tiene plural ni femenino; indica lugar, tiempo, modo, cantidad.',
      hy: 'Երբեք չունի հոգնակի կամ իգական. ցույց է տալիս տեղ, ժամանակ, ձև, քանակ:',
    },
  },
  {
    id: 'fc-cg-5',
    topicId: 'categorias-gramaticales',
    term: {
      es: 'Preposición',
      hy: 'Նախդիր (Preposición)',
    },
    definition: {
      es: 'Palabra invariable que une o subordina palabras entre sí dentro de la oración.',
      hy: 'Անփոփոխ բառ, որը միացնում կամ ստորադասում է բառերը նախադասության մեջ:',
    },
    example: {
      es: 'Viajamos desde Madrid hasta Barcelona en tren.',
      hy: 'Մենք ճամփորդեցինք Մադրիդից (desde) մինչև (hasta) Բարսելոնա գնացքով (en):',
    },
    clue: {
      es: 'Lista de 19: a, ante, bajo, con, contra, de, desde, durante, en, entre...',
      hy: '19-ի ցանկ՝ a, ante, bajo, con, contra, de, desde, durante, en, entre...:',
    },
  },

  // --- TEMA 6: FORMAS LITERATURA POPULAR ---
  {
    id: 'fc-gfp-1',
    topicId: 'generos-formas-popular',
    term: {
      es: 'El romance',
      hy: 'Ռոմանս (Romance)',
    },
    definition: {
      es: 'Poema narrativo de versos octosílabos con rima asonante en los versos pares y versos impares sueltos.',
      hy: 'Պատմողական բանաստեղծություն՝ ութավանկ տողերով, զույգ տողերի ասոնանս հանգով և կենտ տողերի ազատությամբ:',
    },
    example: {
      es: 'Que por mayo era, por mayo, cuando hace la calor...',
      hy: 'Մայիսին էր, մայիսին, երբ շոգ է անում...',
    },
    clue: {
      es: '8 sílabas, rima en pares (2, 4, 6, 8...).',
      hy: '8 վանկ, հանգը զույգերում (2, 4, 6, 8...):',
    },
  },
  {
    id: 'fc-gfp-2',
    topicId: 'generos-formas-popular',
    term: {
      es: 'La leyenda',
      hy: 'Լեգենդ (Leyenda)',
    },
    definition: {
      es: 'Relato tradicional basado en un lugar o hecho histórico real al que se incorporan elementos fantásticos.',
      hy: 'Ավանդական պատմություն՝ հիմնված իրական վայրի կամ պատմական փաստի վրա, որին ավելացվում են ֆանտաստիկ տարրեր:',
    },
    example: {
      es: 'La leyenda de Bécquer sobre el Monte de las Ánimas.',
      hy: 'Բեկերի լեգենդը Հոգիների լեռան մասին:',
    },
    clue: {
      es: 'Lugar real + personajes históricos + sucesos mágicos/misteriosos.',
      hy: 'Իրական վայր + պատմական կերպարներ + կախարդական/առեղծվածային դեպքեր:',
    },
  },
  {
    id: 'fc-gfp-3',
    topicId: 'generos-formas-popular',
    term: {
      es: 'El mito',
      hy: 'Առասպել (Mito)',
    },
    definition: {
      es: 'Relato sagrado protagonizado por dioses o seres sobrenaturales que explica el origen del mundo o de la naturaleza.',
      hy: 'Սրբազան պատմություն՝ աստվածների կամ գերբնական էակների մասնակցությամբ, որը բացատրում է աշխարհի կամ բնության ծագումը:',
    },
    example: {
      es: 'El mito de Prometeo entregando el fuego a la humanidad.',
      hy: 'Պրոմեթևսի առասպելը, որը կրակը նվիրեց մարդկությանը:',
    },
    clue: {
      es: 'Dioses, origen del universo, tiempo remoto sagrado.',
      hy: 'Աստվածներ, տիեզերքի ծագում, հնագույն սրբազան ժամանակ:',
    },
  },

  // --- FIGURAS RETÓRICAS ---
  {
    id: 'fc-fig-1',
    topicId: 'figuras-fonicas',
    term: {
      es: 'Aliteración',
      hy: 'Բաղաձայնույթ / Ալիտերացիա (Aliteración)',
    },
    definition: {
      es: 'Repetición intencionada de un mismo sonido (generalmente consonántico) para lograr un efecto acústico.',
      hy: 'Նույն հնչյունի (սովորաբար բաղաձայնի) միտումնավոր կրկնություն՝ ձայնային էֆեկտ ստանալու համար:',
    },
    example: {
      es: 'En el silencio solo se escuchaba un susurro de abejas que sonaba.',
      hy: 'Լռության մեջ լսվում էր միայն մեղուների մի շշուկ, որ հնչում էր (կրկնվում է "s"-ը):',
    },
    clue: {
      es: 'Repite letras o sonidos (la "s" del viento, la "r" del trueno).',
      hy: 'Կրկնում է տառեր կամ հնչյուններ (քամու «s»-ը, որոտի «r»-ը):',
    },
  },
  {
    id: 'fc-fig-2',
    topicId: 'figuras-fonicas',
    term: {
      es: 'Epanadiplosis',
      hy: 'Էպանադիպլոսիս (Epanadiplosis)',
    },
    definition: {
      es: 'Figura fónica que consiste en empezar y terminar el mismo verso con la misma palabra exacta.',
      hy: 'Հնչյունական պատկեր, որը կայանում է նույն տողը նույն ճշգրիտ բառով սկսելու և ավարտելու մեջ:',
    },
    example: {
      es: 'Verde que te quiero verde.',
      hy: 'Կանա՜չ, որ քեզ սիրում եմ կանաչ («Verde... verde»):',
    },
    clue: {
      es: 'Misma palabra al PRINCIPIO y al FINAL del mismo verso.',
      hy: 'Նույն բառը նույն տողի ՍԿԶԲՈՒՄ և ՎԵՐՋՈՒՄ:',
    },
  },
  {
    id: 'fc-fig-3',
    topicId: 'figuras-morfosintacticas',
    term: {
      es: 'Anáfora',
      hy: 'Անաֆորա (Anáfora)',
    },
    definition: {
      es: 'Repetición de una o más palabras al comienzo de varios versos o frases consecutivos.',
      hy: 'Մեկ կամ ավելի բառերի կրկնություն մի քանի հաջորդական տողերի կամ նախադասությունների սկզբում:',
    },
    example: {
      es: 'Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada...',
      hy: 'Վաղ բարձրացրեց մահը թռիչքը, / վաղ լուսացավ լուսաբացը... («Temprano» տողասկզբում):',
    },
    clue: {
      es: 'Columna de palabras iguales al INICIO de varios versos seguidos.',
      hy: 'Նույն բառերի սյունակ մի քանի հաջորդական տողերի ՍԿԶԲՈՒՄ:',
    },
  },
  {
    id: 'fc-fig-4',
    topicId: 'figuras-morfosintacticas',
    term: {
      es: 'Asíndeton',
      hy: 'Ասինդետոն / Անշաղկապություն (Asíndeton)',
    },
    definition: {
      es: 'Supresión voluntaria de conjunciones ("y", "e", "ni") para aportar rapidez y agilidad.',
      hy: 'Շաղկապների («y», «e», «ni») կամավոր բացթողում՝ արագություն և ճկունություն հաղորդելու համար:',
    },
    example: {
      es: 'Llegué, vi, vencí.',
      hy: 'Եկա, տեսա, հաղթեցի (առանց շաղկապների):',
    },
    clue: {
      es: 'Comas rápidas, nada de "y".',
      hy: 'Արագ ստորակետեր, առանց «y»-ի:',
    },
  },
  {
    id: 'fc-fig-5',
    topicId: 'figuras-morfosintacticas',
    term: {
      es: 'Polisíndeton',
      hy: 'Պոլիսինդետոն / Բազմաշաղկապություն (Polisíndeton)',
    },
    definition: {
      es: 'Repetición deliberada de conjunciones ("y", "ni") para aportar lentitud, solemnidad o peso.',
      hy: 'Շաղկապների («y», «ni») միտումնավոր կրկնություն՝ դանդաղություն, հանդիսավորություն կամ կշիռ հաղորդելու համար:',
    },
    example: {
      es: 'Y sueña y ríe y canta y llora sin consuelo.',
      hy: 'Եվ երազում է, և ծիծաղում, և երգում, և լալիս առանց մխիթարության:',
    },
    clue: {
      es: 'Muchas conjunciones "y" o "ni" repetidas seguidas.',
      hy: 'Բազմաթիվ «y» կամ «ni» շաղկապներ՝ կրկնված իրար ետևից:',
    },
  },
  {
    id: 'fc-fig-6',
    topicId: 'figuras-morfosintacticas',
    term: {
      es: 'Hipérbaton',
      hy: 'Հիպերբատոն / Շրջադասություն (Hipérbaton)',
    },
    definition: {
      es: 'Alteración del orden sintáctico habitual y lógico de las palabras en la oración.',
      hy: 'Նախադասության մեջ բառերի սովորական և տրամաբանական շարահյուսական կարգի խախտում:',
    },
    example: {
      es: 'Volverán las oscuras golondrinas en tu balcón sus nidos a colgar.',
      hy: 'Կվերադառնան մութ ծիծեռնակները քո պատշգամբում իրենց բները կախելու:',
    },
    clue: {
      es: 'Palabras desordenadas poéticamente (verbo al final o complementos delante).',
      hy: 'Բանաստեղծորեն խառնված բառեր (բայը վերջում կամ լրացումները դիմացը):',
    },
  },
  {
    id: 'fc-fig-7',
    topicId: 'figuras-semanticas',
    term: {
      es: 'La Metáfora',
      hy: 'Փոխաբերություն (Metáfora)',
    },
    definition: {
      es: 'Identificación directa entre un elemento real (A) y otro imaginario (B) por su semejanza, sin usar nexos comparativos.',
      hy: 'Իրական (A) և պատկերավոր (B) տարրերի ուղղակի նույնացում նրանց նմանությամբ՝ առանց համեմատական կապերի:',
    },
    example: {
      es: 'Tus ojos son luceros; Las perlas de tu boca.',
      hy: 'Քո աչքերը լուսատուներ են. Քո բերանի մարգարիտները:',
    },
    clue: {
      es: 'Tres estructuras: A es B, B en lugar de A, B de A. ¡Nunca lleva "como"!',
      hy: 'Երեք կառուցվածք՝ A-ն B է, B-ն A-ի փոխարեն, B de A: Երբեք չունի «como»:',
    },
  },
];
