import { Question } from './types.ts';

export const EXTRA_QUESTIONS: Question[] = [
  // --- TEMA 1 MORE QUESTIONS ---
  {
    id: 'fl-extra-1',
    topicId: 'funciones-lenguaje',
    level: 'facil',
    type: 'true-false',
    prompt: {
      es: '¿Verdadero o falso?: La función fática se centra en el canal y sirve para iniciar, mantener o finalizar la comunicación.',
      hy: 'Ճի՞շտ է, թե՞ սխալ. կապի հաստատման (fática) գործառույթը կենտրոնանում է կապուղու վրա և ծառայում է հաղորդակցությունը սկսելուն, պահպանելուն կամ ավարտելուն:',
    },
    options: [
      { id: 'opt-v', text: { es: 'Verdadero.', hy: 'Ճիշտ է:' } },
      { id: 'opt-f', text: { es: 'Falso.', hy: 'Սխալ է:' } },
      { id: 'opt-c', text: { es: 'Solo se aplica a la poesía.', hy: 'Միայն պոեզիային է վերաբերում:' } },
      { id: 'opt-d', text: { es: 'Solo se aplica a los diccionarios.', hy: 'Միայն բառարաններին է վերաբերում:' } },
    ],
    correctOptionId: 'opt-v',
    explanation: {
      es: 'Es verdadero: la función fática comprueba y mantiene abierto el canal de contacto.',
      hy: 'Ճիշտ է. fática գործառույթը ստուգում և բաց է պահում շփման կապուղին:',
    },
  },
  {
    id: 'fl-extra-2',
    topicId: 'funciones-lenguaje',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué función predomina en un titular del periódico: "El Gobierno aprueba una nueva ley de educación"?',
      hy: 'Լեզվի ո՞ր գործառույթն է գերիշխում լրագրի վերնագրում. «El Gobierno aprueba una nueva ley de educación»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función referencial o representativa.', hy: 'Տեղեկատվական կամ ներկայացուցչական գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función expresiva.', hy: 'Զգացմունքային գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función poética.', hy: 'Բանաստեղծական գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función apelativa.', hy: 'Ազդեցության գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Informa objetivamente de una noticia real sin manifestar emociones subjetivas.',
      hy: 'Օբյեկտիվորեն տեղեկացնում է իրական լուրի մասին՝ առանց սուբյեկտիվ հույզեր արտահայտելու:',
    },
  },
  {
    id: 'fl-extra-3',
    topicId: 'funciones-lenguaje',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "¡Silencio, callaos de una vez!", ¿cuál es el rasgo que confirma la función apelativa?',
      hy: '«¡Silencio, callaos de una vez!» նախադասության մեջ ո՞ր հատկանիշն է հաստատում ազդեցության գործառույթը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'El uso del imperativo ("callaos") para obligar a actuar al receptor.', hy: 'Հրամայականի կիրառումը («callaos»)՝ լսողին գործել ստիպելու համար:' } },
      { id: 'opt-b', text: { es: 'La presencia de una rima consonante.', hy: 'Կոնսոնանս հանգի առկայությունը:' } },
      { id: 'opt-c', text: { es: 'El análisis de una categoría gramatical.', hy: 'Խոսքի մասի վերլուծությունը:' } },
      { id: 'opt-d', text: { es: 'La descripción objetiva de un paisaje.', hy: 'Բնապատկերի օբյեկտիվ նկարագրությունը:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El modo imperativo busca directamente provocar una reacción en el oyente.',
      hy: 'Հրամայական եղանակն ուղղակիորեն ձգտում է արձագանք առաջացնել լսողի մոտ:',
    },
  },

  // --- TEMA 2 MORE QUESTIONS ---
  {
    id: 'mo-extra-1',
    topicId: 'modalidades-oracionales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué modalidad oracional tiene la frase: "¡Que tengas un maravilloso cumpleaños!"?',
      hy: 'Նախադասության ո՞ր եղանակն ունի հետևյալը. «¡Que tengas un maravilloso cumpleaños!»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Desiderativa (expresa un deseo sincero).', hy: 'Ըղձական (արտահայտում է անկեղծ ցանկություն):' } },
      { id: 'opt-b', text: { es: 'Dubitativa (expresa incertidumbre).', hy: 'Տարակուսական (անորոշություն է արտահայտում):' } },
      { id: 'opt-c', text: { es: 'Enunciativa negativa.', hy: 'Ժխտական պատմողական:' } },
      { id: 'opt-d', text: { es: 'Interrogativa directa.', hy: 'Ուղղակի հարցական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Que tengas..." con subjuntivo expresa el deseo del hablante para la otra persona.',
      hy: '«Que tengas...»-ը ըղձականով արտահայտում է խոսողի բարեմաղթանքը մյուս անձին:',
    },
  },
  {
    id: 'mo-extra-2',
    topicId: 'modalidades-oracionales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'La oración "Acaso llegue el cartero antes del mediodía" es de tipo:',
      hy: '«Acaso llegue el cartero antes del mediodía» նախադասությունը հետևյալ տիպի է.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Dubitativa ("acaso" indica duda o posibilidad).', hy: 'Տարակուսական («acaso»-ն ցույց է տալիս կասկած կամ հնարավորություն):' } },
      { id: 'opt-b', text: { es: 'Exhortativa.', hy: 'Հորդորական:' } },
      { id: 'opt-c', text: { es: 'Enunciativa afirmativa.', hy: 'Հաստատական պատմողական:' } },
      { id: 'opt-d', text: { es: 'Exclamativa.', hy: 'Բացականչական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Acaso" es un adverbio clásico de duda que rige modo subjuntivo ("llegue").',
      hy: '«Acaso»-ն (գուցե) կասկածի դասական մակբայ է, որը պահանջում է ըղձական եղանակ («llegue»):',
    },
  },
  {
    id: 'mo-extra-3',
    topicId: 'modalidades-oracionales',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Si un profesor dice: "¿Quieres hacer el favor de sentarte?", formalmente es interrogativa pero en realidad tiene intención:',
      hy: 'Եթե ուսուցիչն ասում է. «¿Quieres hacer el favor de sentarte?», ձևականորեն այն հարցական է, բայց իրականում ունի հետևյալ նպատակը.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Exhortativa o de mandato cortés.', hy: 'Հորդորական կամ քաղաքավարի հրամանի:' } },
      { id: 'opt-b', text: { es: 'Desiderativa de sorpresa.', hy: 'Զարմանքի ըղձական:' } },
      { id: 'opt-c', text: { es: 'Exclusivamente referencial.', hy: 'Բացառապես տեղեկատվական:' } },
      { id: 'opt-d', text: { es: 'Dubitativa de ignorancia.', hy: 'Անտեղյակության տարակուսական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Es una petición o mandato indirecto formulado por cortesía como pregunta.',
      hy: 'Դա խնդրանք կամ անուղղակի հրաման է՝ քաղաքավարության նպատակով ձևակերպված որպես հարց:',
    },
  },

  // --- TEMA 3 MORE QUESTIONS ---
  {
    id: 'com-extra-1',
    topicId: 'comunicacion-elementos',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Una campana del colegio suena a las 11:00 para anunciar el recreo. ¿Cuál es el CÓDIGO?',
      hy: 'Դպրոցի զանգը հնչում է ժամը 11:00-ին՝ դասամիջոցն ազդարարելու համար: Ո՞րն է ԿՈԴԸ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'El sonido convencional de la campana que la comunidad escolar conoce y entiende.', hy: 'Զանգի պայմանական ձայնը, որը դպրոցական համայնքը գիտի և հասկանում է:' } },
      { id: 'opt-b', text: { es: 'El patio con los árboles.', hy: 'Բակը՝ ծառերով:' } },
      { id: 'opt-c', text: { es: 'El reloj de pared de la sala de profesores.', hy: 'Ուսուցչանոցի պատի ժամացույցը:' } },
      { id: 'opt-d', text: { es: 'Los alumnos que corren.', hy: 'Վազող աշակերտները:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El código es el significado convenido que todos asignan a ese toque sonoro: "hora de salir al recreo".',
      hy: 'Կոդն այն պայմանավորված իմաստն է, որը բոլորը վերագրում են այդ ձայնին՝ «դասամիջոցի դուրս գալու ժամն է»:',
    },
  },
  {
    id: 'com-extra-2',
    topicId: 'comunicacion-elementos',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Si dos navegantes se comunican por la noche mediante destellos de luz con una linterna usando puntos y rayas, ¿cuál es el CÓDIGO y cuál el CANAL?',
      hy: 'Եթե երկու նավաստիներ գիշերը հաղորդակցվում են լապտերի լույսի բռնկումներով՝ օգտագործելով կետեր և գծիկներ, ո՞րն է ԿՈԴԸ և ո՞րը ԿԱՊՈՒՂԻՆ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Código: el alfabeto Morse / Canal: la luz y el aire.', hy: 'Կոդ՝ Մորզեի այբուբեն / Կապուղի՝ լույսը և օդը:' } },
      { id: 'opt-b', text: { es: 'Código: el barco / Canal: el mar.', hy: 'Կոդ՝ նավ / Կապուղի՝ ծով:' } },
      { id: 'opt-c', text: { es: 'Código: la noche / Canal: la linterna.', hy: 'Կոդ՝ գիշեր / Կապուղի՝ լապտեր:' } },
      { id: 'opt-d', text: { es: 'Código: la lengua española / Canal: la voz humana.', hy: 'Կոդ՝ իսպաներեն լեզու / Կապուղի՝ մարդկային ձայն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El código son los puntos y rayas del morse; el canal físico es la luz que viaja por el aire en la oscuridad.',
      hy: 'Կոդը Մորզեի կետերն ու գծիկներն են, իսկ ֆիզիկական կապուղին՝ մթության մեջ օդով տարածվող լույսը:',
    },
  },

  // --- TEMA 4 MORE QUESTIONS ---
  {
    id: 'cg-extra-1',
    topicId: 'categorias-gramaticales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "Las flores rojas perfuman el jardín", ¿qué categoría es "rojas"?',
      hy: '«Las flores rojas perfuman el jardín» նախադասության մեջ խոսքի ո՞ր մասն է «rojas» բառը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Adjetivo calificativo femenino plural.', hy: 'Որակական ածական, իգական, հոգնակի:' } },
      { id: 'opt-b', text: { es: 'Sustantivo propio.', hy: 'Հատուկ գոյական:' } },
      { id: 'opt-c', text: { es: 'Adverbio de color.', hy: 'Գույնի մակբայ:' } },
      { id: 'opt-d', text: { es: 'Pronombre posesivo.', hy: 'Ստացական դերանուն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Expresa una cualidad de las flores y concuerda con ellas en género y número (femenino plural).',
      hy: 'Արտահայտում է ծաղիկների հատկանիշ և համաձայնում է նրանց հետ սեռով և թվով (իգական հոգնակի):',
    },
  },
  {
    id: 'cg-extra-2',
    topicId: 'categorias-gramaticales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál de las siguientes palabras es INVARIABLE (nunca cambia de género ni de número)?',
      hy: 'Հետևյալ բառերից ո՞րն է ԱՆՓՈՓՈԽ (երբեք չի փոխում սեռը կամ թիվը):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Ayer (adverbio).', hy: 'Ayer (երեկ - մակբայ):' } },
      { id: 'opt-b', text: { es: 'Alto (adjetivo).', hy: 'Alto (բարձր - ածական):' } },
      { id: 'opt-c', text: { es: 'Gato (sustantivo).', hy: 'Gato (կատու - գոյական):' } },
      { id: 'opt-d', text: { es: 'Nosotros (pronombre).', hy: 'Nosotros (մենք - դերանուն):' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Los adverbios, las preposiciones y las conjunciones son clases de palabras invariables.',
      hy: 'Մակբայները, նախդիրները և շաղկապները անփոփոխ խոսքի մասեր են:',
    },
  },
  {
    id: 'cg-extra-3',
    topicId: 'categorias-gramaticales',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase "Ella come MUCHO pan pero duerme POCO", ¿a qué categoría pertenecen "mucho" y "poco" respectivamente?',
      hy: '«Ella come MUCHO pan pero duerme POCO» նախադասության մեջ խոսքի ո՞ր մասերին են պատկանում «mucho» և «poco» բառերը համապատասխանաբար:',
    },
    options: [
      { id: 'opt-a', text: { es: '"Mucho" es determinante indefinido (acompaña a "pan"); "poco" es adverbio de cantidad (modifica al verbo "duerme").', hy: '«Mucho»-ն անորոշ դետերմինատիվ է (ուղեկցում է «pan»-ին), իսկ «poco»-ն՝ չափ ու քանակի մակբայ (լրացնում է «duerme» բային):' } },
      { id: 'opt-b', text: { es: 'Ambas son adjetivos calificativos.', hy: 'Երկուսն էլ որակական ածականներ են:' } },
      { id: 'opt-c', text: { es: 'Ambas son pronombres personales.', hy: 'Երկուսն էլ անձնական դերանուններ են:' } },
      { id: 'opt-d', text: { es: '"Mucho" es verbo y "poco" es sustantivo.', hy: '«Mucho»-ն բայ է, իսկ «poco»-ն՝ գոյական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Al acompañar a un sustantivo ("pan"), "mucho" funciona como determinante; al modificar a un verbo ("duerme"), "poco" es adverbio.',
      hy: 'Ուղեկցելով գոյականին («pan»)՝ «mucho»-ն գործում է որպես դետերմինատիվ, իսկ լրացնելով բային («duerme»)՝ «poco»-ն մակբայ է:',
    },
  },

  // --- TEMA 5 MORE QUESTIONS ---
  {
    id: 'lpc-extra-1',
    topicId: 'literatura-popular-culta',
    level: 'facil',
    type: 'true-false',
    prompt: {
      es: '¿Verdadero o falso?: La literatura culta se transmite principalmente de boca en boca y sufre constantes cambios según quien la recite.',
      hy: 'Ճի՞շտ է, թե՞ սխալ. հեղինակային գրականությունը փոխանցվում է գլխավորապես բերանացի և կրում է մշտական փոփոխություններ՝ կախված արտասանողից:',
    },
    options: [
      { id: 'opt-f', text: { es: 'Falso (esa es la literatura popular; la culta es escrita y con texto fijado).', hy: 'Սխալ է (դա ժողովրդական գրականությունն է. հեղինակայինը գրավոր է և ֆիքսված տեքստով):' } },
      { id: 'opt-v', text: { es: 'Verdadero.', hy: 'Ճիշտ է:' } },
      { id: 'opt-c', text: { es: 'Solo es cierto en las canciones de Navidad.', hy: 'Ճիշտ է միայն Սուրբ Ծննդյան երգերում:' } },
      { id: 'opt-d', text: { es: 'Depende del siglo.', hy: 'Կախված է դարից:' } },
    ],
    correctOptionId: 'opt-f',
    explanation: {
      es: 'La afirmación es falsa: la literatura con autor conocido y transmisión escrita inalterable es la culta.',
      hy: 'Պնդումը սխալ է. հայտնի հեղինակով և անփոփոխ գրավոր փոխանցմամբ գրականությունը հեղինակայինն է:',
    },
  },

  // --- TEMA 6 MORE QUESTIONS ---
  {
    id: 'gfp-extra-1',
    topicId: 'generos-formas-popular',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Si un romance tiene 20 versos octosílabos, ¿cuáles de sus versos deben rimar en asonante?',
      hy: 'Եթե ռոմանսն ունի 20 ութավանկ տող, նրա ո՞ր տողերը պետք է հանգավորվեն ասոնանսով:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Los versos pares: 2, 4, 6, 8, 10, 12, 14, 16, 18 y 20.', hy: 'Զույգ տողերը՝ 2, 4, 6, 8, 10, 12, 14, 16, 18 և 20:' } },
      { id: 'opt-b', text: { es: 'Los versos impares: 1, 3, 5, 7, 9...', hy: 'Կենտ տողերը՝ 1, 3, 5, 7, 9...:' } },
      { id: 'opt-c', text: { es: 'Todos los versos deben rimar con la misma consonante.', hy: 'Բոլոր տողերը պետք է հանգավորվեն նույն կոնսոնանսով:' } },
      { id: 'opt-d', text: { es: 'Ningún verso rima en el romance.', hy: 'Ռոմանսում ոչ մի տող չի հանգավորվում:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'En el romance, la rima asonante se mantiene exclusivamente en los versos pares, quedando libres los impares.',
      hy: 'Ռոմանսում ասոնանս հանգը պահպանվում է բացառապես զույգ տողերում, իսկ կենտերը մնում են ազատ:',
    },
  },
  {
    id: 'gfp-extra-2',
    topicId: 'generos-formas-popular',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Las canciones tradicionales que se entonan durante las fiestas navideñas en España se llaman:',
      hy: 'Ավանդական երգերը, որոնք երգվում են Իսպանիայում Սուրբ Ծննդյան տոների ժամանակ, կոչվում են.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Villancicos.', hy: 'Վիլյանսիկոներ (Villancicos):' } },
      { id: 'opt-b', text: { es: 'Nanas.', hy: 'Նանաներ (օրորոցայիններ):' } },
      { id: 'opt-c', text: { es: 'Romances épicos.', hy: 'Էպիկական ռոմանսներ:' } },
      { id: 'opt-d', text: { es: 'Mitos cosmogónicos.', hy: 'Տիեզերածնական առասպելներ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Los villancicos son composiciones populares líricas tradicionalmente cantadas en Navidad.',
      hy: 'Վիլյանսիկոները ժողովրդական քնարական երգեր են, որոնք ավանդաբար երգվում են Սուրբ Ծննդին:',
    },
  },

  // --- TEMA 7 MORE QUESTIONS ---
  {
    id: 'lpv-extra-1',
    topicId: 'lenguaje-prosa-verso',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cómo se llama la coincidencia de sonidos entre dos palabras a partir de la última vocal acentuada?',
      hy: 'Ինչպե՞ս է կոչվում երկու բառերի միջև հնչյունների համընկնումը՝ սկսած վերջին շեշտված ձայնավորից:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Rima.', hy: 'Հանգ (Rima):' } },
      { id: 'opt-b', text: { es: 'Párrafo.', hy: 'Պարբերություն:' } },
      { id: 'opt-c', text: { es: 'Sinalefa.', hy: 'Սինալեֆա:' } },
      { id: 'opt-d', text: { es: 'Estrofa.', hy: 'Տուն (բանաստեղծական):' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La rima es la repetición periódica de fonemas finales a partir del último acento prosódico.',
      hy: 'Հանգը վերջնահնչյունների պարբերական կրկնությունն է՝ սկսած վերջին շեշտից:',
    },
  },
  {
    id: 'lpv-extra-2',
    topicId: 'lenguaje-prosa-verso',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué es una SINALEFA en el cómputo métrico de un verso en español?',
      hy: 'Ի՞նչ է ՍԻՆԱԼԵՖԱՆ (sinalefa) իսպաներեն բանաստեղծական տողի վանկերի հաշվարկում:',
    },
    options: [
      { id: 'opt-a', text: { es: 'La unión en una sola sílaba métrica de la vocal final de una palabra y la inicial de la siguiente.', hy: 'Մեկ բառի վերջին ձայնավորի և հաջորդ բառի սկզբնական ձայնավորի միավորումը մեկ չափական վանկի մեջ:' } },
      { id: 'opt-b', text: { es: 'La separación obligatoria de todas las vocales.', hy: 'Բոլոր ձայնավորների պարտադիր բաժանումը:' } },
      { id: 'opt-c', text: { es: 'Un tipo de rima donde solo riman las consonantes.', hy: 'Հանգի տեսակ, որտեղ հանգավորվում են միայն բաղաձայնները:' } },
      { id: 'opt-d', text: { es: 'Una estrofa de ocho versos endecasílabos.', hy: 'Ութ 11-վանկանի տողերով տուն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Por ejemplo, en "de oro", las voceles "e-o" se funden en una única sílaba métrica por sinalefa.',
      hy: 'Օրինակ՝ «de oro» արտահայտության մեջ «e-o» ձայնավորները սինալեֆայի շնորհիվ ձուլվում են մեկ չափական վանկի մեջ:',
    },
  },

  // --- TEMA 8 MORE QUESTIONS ---
  {
    id: 'ff-extra-1',
    topicId: 'figuras-fonicas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En el verso: "Bajo el ala aleve del leve abanico", ¿qué figura fónica destaca por la repetición de los sonidos "l" y "b/v"?',
      hy: '«Bajo el ala aleve del leve abanico» տողում ո՞ր հնչյունական պատկերն է աչքի ընկնում «l» և «b/v» հնչյունների կրկնությամբ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Aliteración.', hy: 'Բաղաձայնույթ / Ալիտերացիա:' } },
      { id: 'opt-b', text: { es: 'Onomatopeya.', hy: 'Բնաձայնություն:' } },
      { id: 'opt-c', text: { es: 'Pleonasmo.', hy: 'Պլեոնազմ:' } },
      { id: 'opt-d', text: { es: 'Hipérbaton.', hy: 'Հիպերբատոն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La reiteración de consonantes suaves ("l", "b") crea un efecto de levedad y ritmo: aliteración.',
      hy: 'Մեղմ բաղաձայնների («l», «b») կրկնությունը ստեղծում է թեթևության և ռիթմի էֆեկտ՝ ալիտերացիա:',
    },
  },
  {
    id: 'ff-extra-2',
    topicId: 'figuras-fonicas',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué figura literaria fónica emplea el refrán popular: "Quien no se arriesga no pasa la mar; quien no comparte no sabe amar"?',
      hy: 'Ի՞նչ հնչյունական գրական պատկեր է կիրառում հետևյալ ժողովրդական ասացվածքը (mar/amar):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Paronomasia (juego con palabras de sonido semejante "mar / amar").', hy: 'Հարանունություն / Պարոնոմազիա (խաղ «mar / amar» նմանահունչ բառերով):' } },
      { id: 'opt-b', text: { es: 'Onomatopeya animal.', hy: 'Կենդանական բնաձայնություն:' } },
      { id: 'opt-c', text: { es: 'Asíndeton desordenado.', hy: 'Խառնաշփոթ ասինդետոն:' } },
      { id: 'opt-d', text: { es: 'Hipérbaton latino.', hy: 'Լատինական հիպերբատոն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La proximidad de términos fonéticamente afines con significados distintos es paronomasia.',
      hy: 'Տարբեր իմաստ ունեցող հնչյունաբանորեն նման եզրույթների մոտ դրվելը պարոնոմազիա է:',
    },
  },

  // --- TEMA 9 MORE QUESTIONS ---
  {
    id: 'fm-extra-1',
    topicId: 'figuras-morfosintacticas',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "Canta, baila, salta, ríe", ¿qué figura retórica suprime las conjunciones para dar rapidez?',
      hy: '«Canta, baila, salta, ríe» նախադասության մեջ ո՞ր գրական պատկերն է վերացնում շաղկապները արագություն հաղորդելու համար:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Asíndeton.', hy: 'Ասինդետոն / Անշաղկապություն:' } },
      { id: 'opt-b', text: { es: 'Polisíndeton.', hy: 'Պոլիսինդետոն:' } },
      { id: 'opt-c', text: { es: 'Pleonasmo.', hy: 'Պլեոնազմ:' } },
      { id: 'opt-d', text: { es: 'Hipérbaton.', hy: 'Հիպերբատոն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Los verbos van separados solo por comas sin la conjunción "y": es un asíndeton.',
      hy: 'Բայերը բաժանված են միայն ստորակետերով՝ առանց «y» շաղկապի. դա ասինդետոն է:',
    },
  },
  {
    id: 'fm-extra-2',
    topicId: 'figuras-morfosintacticas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "Ni come ni bebe ni duerme ni descansa", la repetición continua de "ni" es:',
      hy: '«Ni come ni bebe ni duerme ni descansa» նախադասության մեջ «ni»-ի շարունակական կրկնությունը հետևյալն է.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Polisíndeton.', hy: 'Պոլիսինդետոն / Բազմաշաղկապություն:' } },
      { id: 'opt-b', text: { es: 'Asíndeton.', hy: 'Ասինդետոն:' } },
      { id: 'opt-c', text: { es: 'Aliteración.', hy: 'Ալիտերացիա:' } },
      { id: 'opt-d', text: { es: 'Epanadiplosis.', hy: 'Էպանադիպլոսիս:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La reiteración de la conjunción negativa "ni" delante de cada elemento constituye un polisíndeton.',
      hy: '«Ni» ժխտական շաղկապի կրկնությունը յուրաքանչյուր տարրից առաջ կազմում է պոլիսինդետոն:',
    },
  },
  {
    id: 'fm-extra-3',
    topicId: 'figuras-morfosintacticas',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Identifica el hipérbaton en el siguiente verso de Góngora: "De este, pues, venerable monte, la más alta cumbre". ¿Cuál sería el orden lógico habitual?',
      hy: 'Որոշիր հիպերբատոնը Գոնգորայի հետևյալ տողում. «De este, pues, venerable monte, la más alta cumbre»: Ո՞րը կլիներ սովորական տրամաբանական կարգը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'La cumbre más alta de este monte venerable.', hy: 'Այս հարգարժան լեռան ամենաբարձր գագաթը (La cumbre más alta de este monte venerable):' } },
      { id: 'opt-b', text: { es: 'Venerable cumbre monte más alta.', hy: 'Հարգարժան գագաթ լեռ ամենաբարձր:' } },
      { id: 'opt-c', text: { es: 'Monte de la cumbre este alta.', hy: 'Գագաթի լեռ այս բարձր:' } },
      { id: 'opt-d', text: { es: 'No hay hipérbaton alguno.', hy: 'Ոչ մի հիպերբատոն չկա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El orden habitual sitúa primero el núcleo ("La cumbre más alta") y luego el complemento ("de este monte venerable").',
      hy: 'Սովորական շարադասությունը սկզբում դնում է գլխավոր անդամը («La cumbre más alta»), ապա լրացումը («de este monte venerable»):',
    },
  },

  // --- TEMA 10 MORE QUESTIONS ---
  {
    id: 'fs-extra-1',
    topicId: 'figuras-semanticas',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la metáfora "El cielo es un mar azul", ¿cuál es el término imaginario (B)?',
      hy: '«El cielo es un mar azul» (Երկինքը կապույտ ծով է) փոխաբերության մեջ ո՞րն է պատկերավոր տարրը (B):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Un mar azul (término B con el que se identifica el cielo).', hy: 'Un mar azul (կապույտ ծով՝ B պատկերավոր տարրը, որի հետ նույնացվում է երկինքը):' } },
      { id: 'opt-b', text: { es: 'El cielo (término real A).', hy: 'El cielo (երկինք՝ իրական A տարրը):' } },
      { id: 'opt-c', text: { es: 'El verbo "es".', hy: '«Es» բայը:' } },
      { id: 'opt-d', text: { es: 'Ninguno, es una comparación.', hy: 'Ոչ մեկը, դա համեմատություն է:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El cielo es la realidad física observada (A) y el "mar azul" es la metáfora imaginaria aplicada (B).',
      hy: 'Երկինքը դիտարկվող ֆիզիկական իրականությունն է (A), իսկ «mar azul»-ը՝ կիրառված պատկերավոր փոխաբերությունը (B):',
    },
  },
  {
    id: 'fs-extra-2',
    topicId: 'figuras-semanticas',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "Las nieves del tiempo han plateado sus sienes", ¿qué significa metafóricamente "las nieves del tiempo"?',
      hy: '«Las nieves del tiempo han plateado sus sienes» նախադասության մեջ ի՞նչ է փոխաբերաբար նշանակում «las nieves del tiempo» (ժամանակի ձյուները):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Las canas y el envejecimiento causados por el paso de los años.', hy: 'Ճերմակ մազերը (ալեհերությունը) և ծերացումը՝ առաջացած տարիների անցնելուց:' } },
      { id: 'opt-b', text: { es: 'Una tormenta de nieve invernal que cayó sobre su casa.', hy: 'Ձմեռային ձնաբուք, որը տեղացել է նրա տան վրա:' } },
      { id: 'opt-c', text: { es: 'Un helado que comió rápidamente.', hy: 'Պաղպաղակ, որը նա արագ կերավ:' } },
      { id: 'opt-d', text: { es: 'Un viaje a una pista de esquí.', hy: 'Ճամփորդություն դահուկային հանգստավայր:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La blancura fría de la nieve se identifica poéticamente con el pelo blanco (canas) que trae la edad.',
      hy: 'Ձյան սառը սպիտակությունը բանաստեղծորեն նույնացվում է սպիտակ մազերի (ալեհերության) հետ, որ բերում է տարիքը:',
    },
  },
  {
    id: 'fs-extra-3',
    topicId: 'figuras-semanticas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Convierte la comparación "El lago parecía un espejo" en una metáfora de estructura "A es B":',
      hy: 'Վերածիր «El lago parecía un espejo» համեմատությունը «A-ն B է» կառուցվածքով փոխաբերության.',
    },
    options: [
      { id: 'opt-a', text: { es: 'El lago es un espejo.', hy: 'El lago es un espejo. (Լիճը հայելի է):' } },
      { id: 'opt-b', text: { es: 'El espejo del lago reflejaba el cielo.', hy: 'El espejo del lago reflejaba el cielo (դա B de A կառուցվածքն է):' } },
      { id: 'opt-c', text: { es: 'El lago es como un espejo brillante.', hy: 'El lago es como un espejo (դա դեռ համեմատություն է):' } },
      { id: 'opt-d', text: { es: 'Un lago muy limpio.', hy: 'Un lago muy limpio:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Para convertirla en metáfora "A es B", se elimina el verbo de comparación ("parecía") y se identifica con el verbo ser: "El lago (A) es un espejo (B)".',
      hy: '«A-ն B է» փոխաբերության վերածելու համար հեռացվում է համեմատության բայը («parecía») և նույնացվում «ser» բայով՝ «El lago (A) es un espejo (B)»:',
    },
  },
];
