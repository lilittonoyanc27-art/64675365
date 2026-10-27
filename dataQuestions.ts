import { Question } from './types.ts';

export const QUESTIONS_DATA: Question[] = [
  // =========================================================================
  // TEMA 1: LAS FUNCIONES DEL LENGUAJE (Questions 1 - 22)
  // =========================================================================
  {
    id: 'fl-1',
    topicId: 'funciones-lenguaje',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿En qué elemento de la comunicación se centra la función expresiva o emotiva?',
      hy: 'Հաղորդակցման ո՞ր տարրի վրա է կենտրոնանում զգացմունքային (արտահայտչական) գործառույթը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'En el emisor, porque transmite sus sentimientos y estados de ánimo.', hy: 'Հաղորդողի (խոսողի) վրա, քանի որ փոխանցում է իր զգացմունքներն ու տրամադրությունը:' } },
      { id: 'opt-b', text: { es: 'En el receptor, porque busca darle una orden directa.', hy: 'Լսողի վրա, քանի որ ձգտում է նրան ուղղակի հրաման տալ:' } },
      { id: 'opt-c', text: { es: 'En el canal, porque comprueba si la línea está abierta.', hy: 'Կապուղու վրա, որովհետև ստուգում է՝ արդյոք կապը բաց է:' } },
      { id: 'opt-d', text: { es: 'En el código, porque explica reglas gramaticales.', hy: 'Կոդի վրա, քանի որ բացատրում է քերականական կանոններ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La función expresiva se centra en el emisor, quien manifiesta sus emociones, opiniones o deseos subjetivos.',
      hy: 'Զգացմունքային գործառույթը կենտրոնանում է հաղորդողի (խոսողի) վրա, ով արտահայտում է իր զգացմունքները, կարծիքները կամ սուբյեկտիվ ցանկությունները:',
    },
  },
  {
    id: 'fl-2',
    topicId: 'funciones-lenguaje',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'Identifica la función predominante en la frase: "La temperatura en el aula es de 21 grados".',
      hy: 'Որոշիր գերիշխող գործառույթը հետևյալ նախադասության մեջ. «La temperatura en el aula es de 21 grados»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función referencial o representativa.', hy: 'Տեղեկատվական կամ ներկայացուցչական գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función poética o estética.', hy: 'Բանաստեղծական կամ գեղագիտական գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función fática o de contacto.', hy: 'Կապի հաստատման կամ շփման գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función apelativa o conativa.', hy: 'Ազդեցության կամ կոչական գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Es referencial porque comunica un dato objetivo sobre la realidad exterior sin juicios de valor ni sentimientos.',
      hy: 'Տեղեկատվական է, որովհետև հաղորդում է օբյեկտիվ փաստ արտաքին իրականության մասին՝ առանց գնահատականների կամ զգացմունքների:',
    },
  },
  {
    id: 'fl-3',
    topicId: 'funciones-lenguaje',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué función del lenguaje predomina en el enunciado: "¡Haz los deberes antes de encender la consola!"?',
      hy: 'Լեզվի ո՞ր գործառույթն է գերիշխում հետևյալ արտահայտության մեջ. «¡Haz los deberes antes de encender la consola!»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función apelativa o conativa.', hy: 'Ազդեցության կամ կոչական գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función expresiva o emotiva.', hy: 'Զգացմունքային կամ հուզական գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función metalingüística.', hy: 'Մետալեզվական գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función referencial.', hy: 'Տեղեկատվական գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Es apelativa porque usa el modo imperativo ("haz") para influir en la conducta del receptor exigiéndole una acción.',
      hy: 'Ազդեցության է, քանի որ օգտագործում է հրամայական եղանակ («haz»), որպեսզի ազդի լսողի վարքի վրա՝ նրանից գործողություն պահանջելով:',
    },
  },
  {
    id: 'fl-4',
    topicId: 'funciones-lenguaje',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Cuando alguien descuelga el teléfono y dice: "¿Diga? ¿Me escuchas?", ¿qué función del lenguaje está utilizando principalmente?',
      hy: 'Երբ որևէ մեկը վերցնում է հեռախոսափողը և ասում. «¿Diga? ¿Me escuchas?» (Լսո՞ւմ եմ: Լսո՞ւմ ես ինձ), լեզվի ո՞ր գործառույթն է գլխավորապես օգտագործում:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función fática o de contacto.', hy: 'Կապի հաստատման կամ շփման գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función metalingüística.', hy: 'Մետալեզվական գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función poética.', hy: 'Բանաստեղծական գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función referencial.', hy: 'Տեղեկատվական գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La función fática sirve para abrir el canal de comunicación o verificar que sigue abierto y funcionando.',
      hy: 'Կապի հաստատման գործառույթը ծառայում է հաղորդակցման կապուղին բացելուն կամ ստուգելուն, որ այն շարունակում է բաց լինել և գործել:',
    },
  },
  {
    id: 'fl-5',
    topicId: 'funciones-lenguaje',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Señala qué función del lenguaje cumple la oración: "Los adjetivos son palabras variables que concuerdan en género y número con el sustantivo".',
      hy: 'Նշիր, թե լեզվի որ գործառույթն է կատարում նախադասությունը. «Los adjetivos son palabras variables que concuerdan en género y número con el sustantivo»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función metalingüística.', hy: 'Մետալեզվական գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función referencial.', hy: 'Տեղեկատվական գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función expresiva.', hy: 'Զգացմունքային գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función poética.', hy: 'Բանաստեղծական գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Es metalingüística porque se utiliza el propio idioma español para explicar las reglas y conceptos gramaticales de la lengua.',
      hy: 'Մետալեզվական է, որովհետև իսպաներեն լեզուն օգտագործվում է հենց իր քերականական կանոններն ու հասկացությունները բացատրելու համար:',
    },
  },
  {
    id: 'fl-6',
    topicId: 'funciones-lenguaje',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Lee el siguiente verso: "En el silencio solo se escuchaba un susurro de abejas que sonaba". ¿Cuál es la función del lenguaje dominante y en qué elemento se centra?',
      hy: 'Կարդա հետևյալ տողը. «En el silencio solo se escuchaba un susurro de abejas que sonaba»: Ո՞րն է գերիշխող լեզվական գործառույթը և ո՞ր տարրի վրա է այն կենտրոնանում:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función poética; se centra en el mensaje.', hy: 'Բանաստեղծական գործառույթ. կենտրոնանում է հաղորդագրության վրա:' } },
      { id: 'opt-b', text: { es: 'Función referencial; se centra en el contexto.', hy: 'Տեղեկատվական գործառույթ. կենտրոնանում է համատեքստի վրա:' } },
      { id: 'opt-c', text: { es: 'Función expresiva; se centra en el emisor.', hy: 'Զգացմունքային գործառույթ. կենտրոնանում է հաղորդողի վրա:' } },
      { id: 'opt-d', text: { es: 'Función apelativa; se centra en el receptor.', hy: 'Ազդեցության գործառույթ. կենտրոնանում է ընդունողի վրա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La función poética busca la belleza y armonía del mensaje mismo mediante figuras como la aliteración del sonido "s".',
      hy: 'Բանաստեղծական գործառույթը ձգտում է հենց հաղորդագրության գեղեցկությանը և ներդաշնակությանը այնպիսի պատկերների միջոցով, ինչպիսին «s» հնչյունի ալիտերացիան է:',
    },
  },
  {
    id: 'fl-7',
    topicId: 'funciones-lenguaje',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Por qué la frase "¡Ojalá apruebe el examen de Lengua!" tiene función expresiva y no apelativa?',
      hy: 'Ինչո՞ւ «¡Ojalá apruebe el examen de Lengua!» արտահայտությունն ունի զգացմունքային, այլ ոչ թե ազդեցության գործառույթ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Porque exterioriza un anhelo íntimo del emisor sin pedir nada al oyente.', hy: 'Որովհետև արտահայտում է խոսողի ներքին իղձը՝ առանց լսողից որևէ բան պահանջելու:' } },
      { id: 'opt-b', text: { es: 'Porque utiliza signos de interrogación.', hy: 'Որովհետև օգտագործում է հարցական նշաններ:' } },
      { id: 'opt-c', text: { es: 'Porque da una orden estricta a un compañero.', hy: 'Որովհետև խիստ հրաման է տալիս դասընկերոջը:' } },
      { id: 'opt-d', text: { es: 'Porque define una regla del libro de texto.', hy: 'Որովհետև սահմանում է դասագրքի որևէ կանոն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Al expresar un deseo personal del emisor (con "ojalá"), la función es expresiva o emotiva.',
      hy: 'Արտահայտելով խոսողի անձնական ցանկությունը («ojalá»-ով), գործառույթը զգացմունքային է կամ հուզական:',
    },
  },
  {
    id: 'fl-8',
    topicId: 'funciones-lenguaje',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál de los siguientes enunciados cumple una función metalingüística?',
      hy: 'Հետևյալ արտահայտություններից ո՞րն է կատարում մետալեզվական գործառույթ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'La palabra "canción" lleva tilde por ser aguda terminada en "n".', hy: '«Canción» բառն ունի շեշտ, քանի որ վերջին վանկի շեշտով բառ է և ավարտվում է «n»-ով:' } },
      { id: 'opt-b', text: { es: '¡Qué bonita canción están cantando en el coro!', hy: 'Ի՜նչ գեղեցիկ երգ են երգում երգչախմբում:' } },
      { id: 'opt-c', text: { es: 'Por favor, canta un poco más alto para que te oiga.', hy: 'Խնդրում եմ, մի փոքր ավելի բարձր երգիր, որպեսզի քեզ լսեմ:' } },
      { id: 'opt-d', text: { es: 'La canción dura tres minutos y cuarenta segundos.', hy: 'Երգը տևում է երեք րոպե և քառասուն վայրկյան:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Explica una regla ortográfica de acentuación de las palabras, por lo que su función es metalingüística.',
      hy: 'Բացատրում է բառերի շեշտադրության ուղղագրական կանոն, ուստի նրա գործառույթը մետալեզվական է:',
    },
  },
  {
    id: 'fl-9',
    topicId: 'funciones-lenguaje',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'Un anuncio publicitario que dice: "¡Cómpralo ya y disfruta de la mejor calidad!", ¿qué función del lenguaje utiliza principalmente?',
      hy: 'Գովազդային հայտարարությունը, որն ասում է. «¡Cómpralo ya y disfruta de la mejor calidad!», լեզվի ո՞ր գործառույթն է գլխավորապես կիրառում:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función apelativa o conativa.', hy: 'Ազդեցության կամ կոչական գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función metalingüística.', hy: 'Մետալեզվական գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función fática.', hy: 'Կապի հաստատման գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función referencial.', hy: 'Տեղեկատվական գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La publicidad busca persuadir al receptor para que compre un producto, utilizando imperativos ("cómpralo", "disfruta").',
      hy: 'Գովազդը ձգտում է համոզել սպառողին գնել ապրանքը՝ օգտագործելով հրամայականներ («cómpralo», «disfruta»):',
    },
  },
  {
    id: 'fl-10',
    topicId: 'funciones-lenguaje',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué función predomina en la frase: "¡Buenos días a todos los asistentes!"?',
      hy: 'Լեզվի ո՞ր գործառույթն է գերիշխում «¡Buenos días a todos los asistentes!» արտահայտության մեջ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función fática o de contacto.', hy: 'Կապի հաստատման կամ շփման գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función poética.', hy: 'Բանաստեղծական գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función referencial.', hy: 'Տեղեկատվական գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función metalingüística.', hy: 'Մետալեզվական գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Los saludos sirven para iniciar el contacto comunicativo entre las personas, lo cual es propio de la función fática.',
      hy: 'Ողջույնները ծառայում են մարդկանց միջև հաղորդակցական շփումը սկսելուն, ինչը բնորոշ է կապի հաստատման գործառույթին:',
    },
  },
  {
    id: 'fl-11',
    topicId: 'funciones-lenguaje',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Relaciona cada función con su elemento: la función referencial se vincula con el...',
      hy: 'Կապիր յուրաքանչյուր գործառույթ իր տարրի հետ. տեղեկատվական գործառույթը կապված է...-ի հետ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Contexto o referente.', hy: 'Համատեքստի կամ ռեֆերենտի հետ:' } },
      { id: 'opt-b', text: { es: 'Emisor.', hy: 'Հաղորդողի հետ:' } },
      { id: 'opt-c', text: { es: 'Canal.', hy: 'Կապուղու հետ:' } },
      { id: 'opt-d', text: { es: 'Código.', hy: 'Կոդի հետ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La función referencial o representativa se enfoca directamente en el contexto o referente exterior sobre el que se informa.',
      hy: 'Տեղեկատվական կամ ներկայացուցչական գործառույթն ուղղակիորեն կենտրոնանում է համատեքստի կամ արտաքին առարկայի վրա, որի մասին տեղեկացվում է:',
    },
  },
  {
    id: 'fl-12',
    topicId: 'funciones-lenguaje',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En el eslogan: "El chocolate que te hace sonreír y soñar", ¿qué función del lenguaje destaca por su búsqueda de ritmo y belleza?',
      hy: '«El chocolate que te hace sonreír y soñar» կարգախոսում լեզվի ո՞ր գործառույթն է առանձնանում ռիթմի և գեղեցկության ձգտմամբ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función poética o estética.', hy: 'Բանաստեղծական կամ գեղագիտական գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función metalingüística.', hy: 'Մետալեզվական գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función fática.', hy: 'Կապի հաստատման գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función referencial.', hy: 'Տեղեկատվական գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Muchos eslóganes emplean la función poética combinando rima y ritmo para hacer el mensaje memorable y atractivo.',
      hy: 'Շատ կարգախոսներ օգտագործում են բանաստեղծական գործառույթը՝ միավորելով հանգն ու ռիթմը, որպեսզի ուղերձը լինի հիշվող և գրավիչ:',
    },
  },
  {
    id: 'fl-13',
    topicId: 'funciones-lenguaje',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'Si un amigo te pregunta: "¿Entendiste lo que dijo el profesor?", la intención es conseguir una respuesta tuya. ¿Qué función es?',
      hy: 'Եթե ընկերդ հարցնում է քեզ. «¿Entendiste lo que dijo el profesor?», նպատակը քեզանից պատասխան ստանալն է: Ի՞նչ գործառույթ է դա:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función apelativa o conativa.', hy: 'Ազդեցության կամ կոչական գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función metalingüística.', hy: 'Մետալեզվական գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función poética.', hy: 'Բանաստեղծական գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función expresiva.', hy: 'Զգացմունքային գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Las preguntas formuladas al receptor para obtener una respuesta forman parte de la función apelativa.',
      hy: 'Լսողին ուղղված հարցերը՝ նրանից պատասխան ստանալու նպատակով, ազդեցության գործառույթի մաս են կազմում:',
    },
  },
  {
    id: 'fl-14',
    topicId: 'funciones-lenguaje',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "¡Qué pena más grande siento en el alma!", ¿qué elementos lingüísticos demuestran que es función expresiva?',
      hy: '«¡Qué pena más grande siento en el alma!» նախադասության մեջ ո՞ր լեզվական տարրերն են ապացուցում, որ դա զգացմունքային գործառույթ է:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Signos de admiración, verbo en 1.ª persona ("siento") y vocabulario emotivo ("pena grande").', hy: 'Բացականչական նշաններ, բայը 1-ին դեմքում («siento») և հուզական բառապաշար («pena grande»):' } },
      { id: 'opt-b', text: { es: 'Verbo en imperativo y una orden dirigida a alguien.', hy: 'Բայը հրամայականում և որևէ մեկին ուղղված հրաման:' } },
      { id: 'opt-c', text: { es: 'Terminología gramatical y reglas ortográficas.', hy: 'Քերականական տերմինաբանություն և ուղղագրական կանոններ:' } },
      { id: 'opt-d', text: { es: 'Datos científicos comprobables y números exactos.', hy: 'Ստուգելի գիտական տվյալներ և ճշգրիտ թվեր:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La primera persona, la entonación exclamativa y el léxico valorativo o sentimental son los rasgos esenciales de la función expresiva.',
      hy: 'Առաջին դեմքը, բացականչական հնչերանգը և գնահատող կամ զգացմունքային բառապաշարը զգացմունքային գործառույթի էական հատկանիշներն են:',
    },
  },
  {
    id: 'fl-15',
    topicId: 'funciones-lenguaje',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué función del lenguaje aparece cuando un profesor dice: "En español, los verbos terminados en -ger y -gir se escriben con g"?',
      hy: 'Լեզվի ո՞ր գործառույթն է հանդես գալիս, երբ ուսուցիչն ասում է. «En español, los verbos terminados en -ger y -gir se escriben con g»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función metalingüística.', hy: 'Մետալեզվական գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función poética.', hy: 'Բանաստեղծական գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función fática.', hy: 'Կապի հաստատման գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función expresiva.', hy: 'Զգացմունքային գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Habla sobre las reglas ortográficas del propio código lingüístico español.',
      hy: 'Խոսում է հենց իսպաներեն լեզվական կոդի ուղղագրական կանոնների մասին:',
    },
  },
  {
    id: 'fl-16',
    topicId: 'funciones-lenguaje',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'Una persona diciendo: "Sí, sí... ya veo... entiendo... claro..." durante una llamada telefónica está utilizando la función:',
      hy: 'Հեռախոսազրույցի ժամանակ «Sí, sí... ya veo... entiendo... claro...» ասող մարդն օգտագործում է հետևյալ գործառույթը.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Fática o de contacto.', hy: 'Կապի հաստատման կամ շփման:' } },
      { id: 'opt-b', text: { es: 'Metalingüística.', hy: 'Մետալեզվական:' } },
      { id: 'opt-c', text: { es: 'Apelativa.', hy: 'Ազդեցության:' } },
      { id: 'opt-d', text: { es: 'Poética.', hy: 'Բանաստեղծական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Las muletillas de confirmación sirven para demostrar al emisor que el canal sigue funcionando y se le sigue oyendo.',
      hy: 'Հաստատող միջանկյալ բառերը ծառայում են հաղորդողին ցույց տալու, որ կապուղին շարունակում է գործել, և նրան լսում են:',
    },
  },
  {
    id: 'fl-17',
    topicId: 'funciones-lenguaje',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál es la función del lenguaje predominante en un libro de texto de Biología y Geología?',
      hy: 'Ո՞րն է լեզվի գերիշխող գործառույթը Կենսաբանության և Երկրաբանության դասագրքում:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Función referencial o representativa.', hy: 'Տեղեկատվական կամ ներկայացուցչական գործառույթ:' } },
      { id: 'opt-b', text: { es: 'Función expresiva o emotiva.', hy: 'Զգացմունքային կամ հուզական գործառույթ:' } },
      { id: 'opt-c', text: { es: 'Función poética.', hy: 'Բանաստեղծական գործառույթ:' } },
      { id: 'opt-d', text: { es: 'Función apelativa.', hy: 'Ազդեցության գործառույթ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Los libros de ciencias exponen conocimientos objetivos de la realidad con lenguaje denotativo y sin opiniones subjetivas.',
      hy: 'Գիտական դասագրքերը շարադրում են իրականության օբյեկտիվ գիտելիքները օբյեկտիվ բառապաշարով՝ առանց սուբյեկտիվ կարծիքների:',
    },
  },
  {
    id: 'fl-18',
    topicId: 'funciones-lenguaje',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Distingue entre estas dos oraciones: 1) "Son las diez en punto". 2) "¡Las diez ya, qué tarde se me ha hecho!". ¿Qué funciones representan respectivamente?',
      hy: 'Տարբերիր այս երկու նախադասությունները. 1) «Son las diez en punto»: 2) «¡Las diez ya, qué tarde se me ha hecho!»: Ո՞ր գործառույթներն են դրանք համապատասխանաբար:',
    },
    options: [
      { id: 'opt-a', text: { es: '1: Referencial / 2: Expresiva.', hy: '1՝ Տեղեկատվական / 2՝ Զգացմունքային:' } },
      { id: 'opt-b', text: { es: '1: Expresiva / 2: Apelativa.', hy: '1՝ Զգացմունքային / 2՝ Ազդեցության:' } },
      { id: 'opt-c', text: { es: '1: Metalingüística / 2: Fática.', hy: '1՝ Մետալեզվական / 2՝ Կապի:' } },
      { id: 'opt-d', text: { es: '1: Poética / 2: Referencial.', hy: '1՝ Բանաստեղծական / 2՝ Տեղեկատվական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La primera solo da la hora objetivamente (referencial); la segunda manifiesta la inquietud y agobio del hablante por la hora (expresiva).',
      hy: 'Առաջինը միայն օբյեկտիվորեն հայտնում է ժամը (տեղեկատվական). երկրորդն արտահայտում է խոսողի անհանգստությունը ժամի ուշացման պատճառով (զգացմունքային):',
    },
  },
  {
    id: 'fl-19',
    topicId: 'funciones-lenguaje',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En una carta de despedida a un compañero, la frase "¡Hasta pronto, buen amigo!" cumple una función principalmente:',
      hy: 'Ընկերոջը հրաժեշտի նամակում «¡Hasta pronto, buen amigo!» նախադասությունը կատարում է գլխավորապես հետևյալ գործառույթը.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Fática (cierra o mantiene el contacto comunicativo).', hy: 'Կապի հաստատման (ավարտում կամ պահպանում է հաղորդակցական շփումը):' } },
      { id: 'opt-b', text: { es: 'Metalingüística (analiza las palabras).', hy: 'Մետալեզվական (վերլուծում է բառերը):' } },
      { id: 'opt-c', text: { es: 'Referencial (informa de un experimento).', hy: 'Տեղեկատվական (տեղեկացնում է փորձի մասին):' } },
      { id: 'opt-d', text: { es: 'Poética (crea un soneto).', hy: 'Բանաստեղծական (ստեղծում է սոնետ):' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Las despedidas son fórmulas fáticas que sirven para cerrar o pausar el contacto comunicativo.',
      hy: 'Հրաժեշտի արտահայտությունները կապի գործառույթ ունեցող կայուն բանաձևեր են, որոնք ծառայում են շփումը փակելուն կամ դադարեցնելուն:',
    },
  },
  {
    id: 'fl-20',
    topicId: 'funciones-lenguaje',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál de las siguientes oraciones contiene simultáneamente función expresiva y apelativa?',
      hy: 'Հետևյալ նախադասություններից ո՞րն է միաժամանակ պարունակում զգացմունքային և ազդեցության գործառույթներ:',
    },
    options: [
      { id: 'opt-a', text: { es: '"¡Estoy furioso contigo, vete de mi habitación inmediatamente!"', hy: '«¡Estoy furioso contigo, vete de mi habitación inmediatamente!» (Կատաղած եմ քեզ վրա, դո՛ւրս եկ իմ սենյակից անմիջապես):' } },
      { id: 'opt-b', text: { es: '"El agua se congela a cero grados Celsius."', hy: '«El agua se congela a cero grados Celsius»:' } },
      { id: 'opt-c', text: { es: '"El sustantivo es el núcleo del sintagma nominal."', hy: '«El sustantivo es el núcleo del sintagma nominal»:' } },
      { id: 'opt-d', text: { es: '"¿Hola? ¿Hay alguien ahí?"', hy: '«¿Hola? ¿Hay alguien ahí?»:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Estoy furioso" manifiesta la emoción del emisor (expresiva) y "vete inmediatamente" da una orden tajante al receptor (apelativa).',
      hy: '«Estoy furioso»-ն արտահայտում է խոսողի հույզը (զգացմունքային), իսկ «vete inmediatamente»-ն կտրուկ հրաման է տալիս լսողին (ազդեցության):',
    },
  },

  // =========================================================================
  // TEMA 2: LAS MODALIDADES ORACIONALES (Questions 21 - 42)
  // =========================================================================
  {
    id: 'mo-1',
    topicId: 'modalidades-oracionales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿A qué modalidad oracional pertenece: "Hoy el viento sopla con fuerza"?',
      hy: 'Նախադասության ո՞ր եղանակին է պատկանում հետևյալը. «Hoy el viento sopla con fuerza»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Enunciativa afirmativa.', hy: 'Հաստատական պատմողական:' } },
      { id: 'opt-b', text: { es: 'Desiderativa.', hy: 'Ըղձական:' } },
      { id: 'opt-c', text: { es: 'Exhortativa o imperativa.', hy: 'Հորդորական կամ հրամայական:' } },
      { id: 'opt-d', text: { es: 'Dubitativa.', hy: 'Տարակուսական (կասկածական):' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Afirma un hecho objetivo de la realidad sin negaciones, deseos ni órdenes.',
      hy: 'Հաստատում է իրականության օբյեկտիվ փաստ առանց ժխտումների, ցանկությունների կամ հրամանների:',
    },
  },
  {
    id: 'mo-2',
    topicId: 'modalidades-oracionales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'Identifica la modalidad oracional en: "No hemos encontrado todavía la mochila de deporte".',
      hy: 'Որոշիր նախադասության եղանակը. «No hemos encontrado todavía la mochila de deporte»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Enunciativa negativa.', hy: 'Ժխտական պատմողական:' } },
      { id: 'opt-b', text: { es: 'Interrogativa indirecta.', hy: 'Անուղղակի հարցական:' } },
      { id: 'opt-c', text: { es: 'Dubitativa.', hy: 'Տարակուսական:' } },
      { id: 'opt-d', text: { es: 'Exclamativa.', hy: 'Բացականչական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Niega la realización de la acción mediante el adverbio de negación "no".',
      hy: 'Ժխտում է գործողության կատարումը «no» ժխտական մակբայի միջոցով:',
    },
  },
  {
    id: 'mo-3',
    topicId: 'modalidades-oracionales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál de las siguientes oraciones es DESIDERATIVA?',
      hy: 'Հետևյալ նախադասություններից ո՞րն է ԸՂՁԱԿԱՆ (ցանկություն արտահայտող):',
    },
    options: [
      { id: 'opt-a', text: { es: '¡Ojalá apruebes con buena nota el examen!', hy: '¡Ojalá apruebes con buena nota el examen! (Երանի՜ լավ գնահատականով հանձնես քննությունը):' } },
      { id: 'opt-b', text: { es: 'Quizás apruebes el examen si estudias.', hy: 'Quizás apruebes el examen si estudias. (Գուցե հանձնես քննությունը, եթե սովորես):' } },
      { id: 'opt-c', text: { es: '¡Aprueba el examen de una vez!', hy: '¡Aprueba el examen de una vez! (Հանձնի՛ր քննությունը վերջապես):' } },
      { id: 'opt-d', text: { es: '¿Has aprobado ya el examen de Lengua?', hy: '¿Has aprobado ya el examen de Lengua? (Արդեն հանձնե՞լ ես իսպաներենի քննությունը):' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Las oraciones desiderativas expresan un deseo utilizando nexos como "ojalá" seguidos de verbo en subjuntivo.',
      hy: 'Ըղձական նախադասություններն արտահայտում են ցանկություն՝ օգտագործելով այնպիսի բառեր, ինչպիսին «ojalá»-ն է՝ ըղձական եղանակի բայով:',
    },
  },
  {
    id: 'mo-4',
    topicId: 'modalidades-oracionales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'La oración "Tal vez vengan mis primos este fin de semana" pertenece a la modalidad:',
      hy: '«Tal vez vengan mis primos este fin de semana» նախադասությունը պատկանում է հետևյալ եղանակին.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Dubitativa.', hy: 'Տարակուսական (կասկածական):' } },
      { id: 'opt-b', text: { es: 'Desiderativa.', hy: 'Ըղձական:' } },
      { id: 'opt-c', text: { es: 'Exhortativa.', hy: 'Հորդորական:' } },
      { id: 'opt-d', text: { es: 'Enunciativa afirmativa.', hy: 'Հաստատական պատմողական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El adverbio "tal vez" introduce una duda o probabilidad sobre si vendrán o no.',
      hy: '«Tal vez» (թերևս, գուցե) մակբայը կասկած կամ հավանականություն է ներմուծում նրանց գալու կամ չգալու վերաբերյալ:',
    },
  },
  {
    id: 'mo-5',
    topicId: 'modalidades-oracionales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué modalidad oracional tiene la frase: "¡Guarda tus libros y sal al patio ahora mismo!"?',
      hy: 'Նախադասության ո՞ր եղանակն ունի «¡Guarda tus libros y sal al patio ahora mismo!» նախադասությունը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Exhortativa o imperativa.', hy: 'Հորդորական կամ հրամայական:' } },
      { id: 'opt-b', text: { es: 'Exclamativa pura.', hy: 'Զուտ բացականչական:' } },
      { id: 'opt-c', text: { es: 'Desiderativa.', hy: 'Ըղձական:' } },
      { id: 'opt-d', text: { es: 'Enunciativa afirmativa.', hy: 'Հաստատական պատմողական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Aunque lleve signos de admiración, expresa una orden directa mediante verbos en imperativo ("guarda", "sal").',
      hy: 'Թեև ունի բացականչական նշաններ, արտահայտում է ուղղակի հրաման հրամայական բայերի միջոցով («guarda», «sal»):',
    },
  },
  {
    id: 'mo-6',
    topicId: 'modalidades-oracionales',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cómo transformas la oración enunciativa "Tú estudias para el examen" en una oración EXHORTATIVA?',
      hy: 'Ինչպե՞ս կփոխակերպես «Tú estudias para el examen» պատմողական նախադասությունը ՀՈՐԴՈՐԱԿԱՆ-ՀՐԱՄԱՅԱԿԱՆ նախադասության:',
    },
    options: [
      { id: 'opt-a', text: { es: '¡Estudia para el examen!', hy: '¡Estudia para el examen! (Սովորի՛ր քննության համար):' } },
      { id: 'opt-b', text: { es: '¿Estudias para el examen?', hy: '¿Estudias para el examen? (Սովորո՞ւմ ես քննության համար):' } },
      { id: 'opt-c', text: { es: 'Ojalá estudies para el examen.', hy: 'Ojalá estudies para el examen. (Երանի սովորես քննության համար):' } },
      { id: 'opt-d', text: { es: 'Quizás estudies para el examen.', hy: 'Quizás estudies para el examen. (Գուցե սովորես քննության համար):' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Se utiliza el verbo en modo imperativo ("estudia") para dar una orden o mandato al receptor.',
      hy: 'Օգտագործվում է բայը հրամայական եղանակում («estudia»), որպեսզի լսողին հրաման կամ կարգադրություն տրվի:',
    },
  },
  {
    id: 'mo-7',
    topicId: 'modalidades-oracionales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "Dime a qué hora llega el tren de Barcelona", ¿qué tipo de oración interrogativa tenemos?',
      hy: '«Dime a qué hora llega el tren de Barcelona» նախադասության մեջ հարցական նախադասության ո՞ր տեսակն ունենք:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Interrogativa indirecta.', hy: 'Անուղղակի հարցական:' } },
      { id: 'opt-b', text: { es: 'Interrogativa directa.', hy: 'Ուղղակի հարցական:' } },
      { id: 'opt-c', text: { es: 'Exclamativa retórica.', hy: 'Հռետորական բացականչական:' } },
      { id: 'opt-d', text: { es: 'Dubitativa parcial.', hy: 'Մասնակի տարակուսական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Es interrogativa indirecta porque formula una pregunta subordinada a un verbo ("dime") sin usar signos de interrogación (¿ ?).',
      hy: 'Անուղղակի հարցական է, քանի որ հարցը տրվում է բային ստորադասված («dime»)՝ առանց հարցական նշանների (¿ ?):',
    },
  },
  {
    id: 'mo-8',
    topicId: 'modalidades-oracionales',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál es la diferencia de intención entre "¡Ojalá apruebes!" y "Quizás apruebes"?',
      hy: 'Ի՞նչ տարբերություն կա նպատակի մեջ «¡Ojalá apruebes!»-ի և «Quizás apruebes»-ի միջև:',
    },
    options: [
      { id: 'opt-a', text: { es: '"Ojalá apruebes" expresa un deseo vehemente; "Quizás apruebes" expresa duda o posibilidad.', hy: '«Ojalá apruebes»-ն արտահայտում է ջերմեռանդ ցանկություն, իսկ «Quizás apruebes»-ը՝ կասկած կամ հնարավորություն:' } },
      { id: 'opt-b', text: { es: 'La primera es una orden y la segunda es una pregunta.', hy: 'Առաջինը հրաման է, իսկ երկրորդը՝ հարց:' } },
      { id: 'opt-c', text: { es: 'Ambas son oraciones enunciativas afirmativas.', hy: 'Երկուսն էլ հաստատական պատմողական նախադասություններ են:' } },
      { id: 'opt-d', text: { es: 'No hay ninguna diferencia gramatical ni de sentido.', hy: 'Չկա ոչ մի քերականական կամ իմաստային տարբերություն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La modalidad desiderativa manifiesta un deseo ("ojalá"), mientras que la dubitativa introduce incertidumbre ("quizás").',
      hy: 'Ըղձական եղանակն արտահայտում է ցանկություն («ojalá»), իսկ տարակուսականը ներմուծում է անորոշություն («quizás»):',
    },
  },
  {
    id: 'mo-9',
    topicId: 'modalidades-oracionales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué signo ortográfico es OBLIGATORIO al inicio de una oración interrogativa directa en español?',
      hy: 'Ո՞ր կետադրական նշանն է ՊԱՐՏԱԴԻՐ իսպաներենում ուղղակի հարցական նախադասության ՍԿԶԲՈՒՄ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'El signo de apertura de interrogación: ¿', hy: 'Հարցական բացման նշանը՝ ¿:' } },
      { id: 'opt-b', text: { es: 'El signo de apertura de exclamación: ¡', hy: 'Բացականչական բացման նշանը՝ ¡:' } },
      { id: 'opt-c', text: { es: 'Un punto y coma: ;', hy: 'Կետ-ստորակետը՝ ;:' } },
      { id: 'opt-d', text: { es: 'Un guion largo: —', hy: 'Երկար գիծը՝ —:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'En español, a diferencia de otros idiomas, las preguntas directas deben abrir obligatoriamente con el signo "¿".',
      hy: 'Իսպաներենում, ի տարբերություն այլ լեզուների, ուղղակի հարցականները պետք է պարտադիր սկսվեն «¿» նշանով:',
    },
  },
  {
    id: 'mo-10',
    topicId: 'modalidades-oracionales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'La oración "¡Qué alegría tan inmensa me da verte de nuevo!" expresa emoción intensa. Es una oración:',
      hy: '«¡Qué alegría tan inmensa me da verte de nuevo!» նախադասությունն արտահայտում է ուժգին հույզ: Դա հետևյալ նախադասությունն է.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Exclamativa.', hy: 'Բացականչական:' } },
      { id: 'opt-b', text: { es: 'Dubitativa.', hy: 'Տարակուսական:' } },
      { id: 'opt-c', text: { es: 'Enunciativa afirmativa.', hy: 'Հաստատական պատմողական:' } },
      { id: 'opt-d', text: { es: 'Exhortativa.', hy: 'Հորդորական:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Comunica sorpresa o alegría intensa del hablante mediante signos de admiración y un determinante enfático ("qué alegría").',
      hy: 'Հաղորդում է խոսողի մեծ ուրախությունը բացականչական նշանների և շեշտադրող բառի միջոցով («qué alegría»):',
    },
  },

  // =========================================================================
  // TEMA 3: LA COMUNICACIÓN Y SUS ELEMENTOS (Questions 41 - 60)
  // =========================================================================
  {
    id: 'com-1',
    topicId: 'comunicacion-elementos',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la situación: "María envía un mensaje de WhatsApp a Carlos para avisarle del examen de mañana", ¿quién es el EMISOR?',
      hy: '«Մարիան WhatsApp հաղորդագրություն է ուղարկում Կառլոսին՝ վաղվա քննության մասին զգուշացնելու համար» իրավիճակում ո՞վ է ՀԱՂՈՐԴՈՂԸ (emisor):',
    },
    options: [
      { id: 'opt-a', text: { es: 'María.', hy: 'Մարիան:' } },
      { id: 'opt-b', text: { es: 'Carlos.', hy: 'Կառլոսը:' } },
      { id: 'opt-c', text: { es: 'El teléfono móvil.', hy: 'Բջջային հեռախոսը:' } },
      { id: 'opt-d', text: { es: 'El examen de Lengua.', hy: 'Իսպաներենի քննությունը:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El emisor es quien produce y envía el mensaje; en este caso, María.',
      hy: 'Հաղորդողն այն անձն է, ով ստեղծում և ուղարկում է հաղորդագրությունը. տվյալ դեպքում՝ Մարիան:',
    },
  },
  {
    id: 'com-2',
    topicId: 'comunicacion-elementos',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En esa misma situación (María envía un WhatsApp a Carlos), ¿cuál es el CANAL?',
      hy: 'Նույն այդ իրավիճակում (Մարիան WhatsApp է ուղարկում Կառլոսին), ո՞րն է ԿԱՊՈՒՂԻՆ (canal):',
    },
    options: [
      { id: 'opt-a', text: { es: 'El teléfono móvil, la red de internet y las ondas.', hy: 'Բջջային հեռախոսը, ինտերնետային ցանցը և ալիքները:' } },
      { id: 'opt-b', text: { es: 'La lengua española escrita.', hy: 'Իսպաներեն գրավոր լեզուն:' } },
      { id: 'opt-c', text: { es: 'El aviso del examen de mañana.', hy: 'Վաղվա քննության մասին զգուշացումը:' } },
      { id: 'opt-d', text: { es: 'Carlos que lee el mensaje.', hy: 'Կառլոսը, որ կարդում է հաղորդագրությունը:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El canal es el medio físico o técnico por el que viaja la información (la red de telefonía / internet / ondas electromagnéticas).',
      hy: 'Կապուղին այն ֆիզիկական կամ տեխնիկական միջոցն է, որով ճամփորդում է տեղեկությունը (հեռախոսակապը / ինտերնետը / էլեկտրամագնիսական ալիքները):',
    },
  },
  {
    id: 'com-3',
    topicId: 'comunicacion-elementos',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Un árbitro pita con su silbato para señalar penalti durante la final. ¿Cuál es el CÓDIGO utilizado?',
      hy: 'Մրցավարը սուլում է իր սուլիչով՝ եզրափակչի ժամանակ 11-մետրանոց նշանակելու համար: Ո՞րն է կիրառված ԿՈԴԸ (código):',
    },
    options: [
      { id: 'opt-a', text: { es: 'El sistema de sonidos y pitidos reglamentarios del fútbol.', hy: 'Ֆուտբոլի կանոնակարգային ձայների և սուլոցների համակարգը:' } },
      { id: 'opt-b', text: { es: 'El silbato metálico.', hy: 'Մետաղական սուլիչը:' } },
      { id: 'opt-c', text: { es: 'El césped del estadio.', hy: 'Մարզադաշտի խոտածածկը:' } },
      { id: 'opt-d', text: { es: 'El público que aplaude.', hy: 'Ծափահարող հանդիսատեսը:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El código es el sistema convenido de signos (los pitidos y su significado dentro del reglamento).',
      hy: 'Կոդը նշանների պայմանավորված համակարգն է (սուլոցները և դրանց իմաստը կանոնակարգի շրջանակներում):',
    },
  },
  {
    id: 'com-4',
    topicId: 'comunicacion-elementos',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué es el CONTEXTO o situación comunicativa?',
      hy: 'Ի՞նչ է ՀԱՄԱՏԵՔՍՏԸ կամ հաղորդակցական իրավիճակը (contexto):',
    },
    options: [
      { id: 'opt-a', text: { es: 'El conjunto de circunstancias de espacio, tiempo y relación social que rodean el acto de comunicación.', hy: 'Տարածության, ժամանակի և սոցիալական փոխհարաբերությունների հանգամանքների ամբողջությունը, որոնք շրջապատում են հաղորդակցական ակտը:' } },
      { id: 'opt-b', text: { es: 'El idioma en el que está escrito el texto.', hy: 'Այն լեզուն, որով գրված է տեքստը:' } },
      { id: 'opt-c', text: { es: 'La persona que recibe la carta.', hy: 'Այն անձը, ով ստանում է նամակը:' } },
      { id: 'opt-d', text: { es: 'El soporte físico de papel o pantalla.', hy: 'Թղթի կամ էկրանի ֆիզիկական կրիչը:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El contexto incluye el lugar, la hora, la cultura y la relación entre emisor y receptor que dan sentido al mensaje.',
      hy: 'Համատեքստը ներառում է վայրը, ժամը, մշակույթը և հաղորդողի ու ընդունողի փոխհարաբերությունները, որոնք իմաստ են հաղորդում ուղերձին:',
    },
  },
  {
    id: 'com-5',
    topicId: 'comunicacion-elementos',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Un semáforo se pone en rojo frente a un conductor. ¿Cuál es el MENSAJE transmitido?',
      hy: 'Լուսացույցը միանում է կարմիր լույսով վարորդի դիմաց: Ո՞րն է փոխանցված ՀԱՂՈՐԴԱԳՐՈՒԹՅՈՒՆԸ (mensaje):',
    },
    options: [
      { id: 'opt-a', text: { es: 'La orden obligatoria de detener el vehículo (prohibido pasar).', hy: 'Մեքենան կանգնեցնելու պարտադիր կարգադրությունը (անցումն արգելվում է):' } },
      { id: 'opt-b', text: { es: 'La bombilla de color rojo encendida.', hy: 'Կարմիր գույնի միացված լամպը:' } },
      { id: 'opt-c', text: { es: 'El ayuntamiento de la ciudad.', hy: 'Քաղաքի քաղաքապետարանը:' } },
      { id: 'opt-d', text: { es: 'El aire a través del cual viaja la luz.', hy: 'Օդը, որով տարածվում է լույսը:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El mensaje es la información o significado que se transmite: en este caso, la prohibición de continuar la marcha.',
      hy: 'Հաղորդագրությունը փոխանցվող տեղեկությունն է կամ իմաստը. տվյալ դեպքում՝ ընթացքը շարունակելու արգելքը:',
    },
  },
  {
    id: 'com-6',
    topicId: 'comunicacion-elementos',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Por qué es necesario que el emisor y el receptor compartan el mismo CÓDIGO?',
      hy: 'Ինչո՞ւ է անհրաժեշտ, որ հաղորդողը և ընդունողն ունենան նույն ԿՈԴԸ (código):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Para que el receptor pueda descodificar y comprender el mensaje.', hy: 'Որպեսզի ընդունողը կարողանա ապակոդավորել և հասկանալ հաղորդագրությունը:' } },
      { id: 'opt-b', text: { es: 'Para que el canal no sufra averías técnicas.', hy: 'Որպեսզի կապուղին տեխնիկական խափանումներ չունենա:' } },
      { id: 'opt-c', text: { es: 'Para que el mensaje sea siempre poético.', hy: 'Որպեսզի հաղորդագրությունը միշտ լինի բանաստեղծական:' } },
      { id: 'opt-d', text: { es: 'Para hablar siempre en primera persona.', hy: 'Միշտ առաջին դեմքով խոսելու համար:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Si no conocen el mismo código (por ejemplo, si uno habla japonés y el otro solo español), la comunicación fracasa.',
      hy: 'Եթե նրանք չգիտեն նույն կոդը (օրինակ՝ մեկը խոսում է ճապոներեն, իսկ մյուսը՝ միայն իսպաներեն), ապա հաղորդակցությունը ձախողվում է:',
    },
  },
  {
    id: 'com-7',
    topicId: 'comunicacion-elementos',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En una conversación cara a cara en el patio del instituto, ¿cuál es el CANAL principal?',
      hy: 'Դպրոցի բակում առերես զրույցի ժամանակ ո՞րն է հիմնական ԿԱՊՈՒՂԻՆ (canal):',
    },
    options: [
      { id: 'opt-a', text: { es: 'El aire y las ondas sonoras que transmiten la voz.', hy: 'Օդը և ձայնային ալիքները, որոնք փոխանցում են ձայնը:' } },
      { id: 'opt-b', text: { es: 'El teléfono móvil de los alumnos.', hy: 'Աշակերտների բջջային հեռախոսը:' } },
      { id: 'opt-c', text: { es: 'La lengua española hablada.', hy: 'Իսպաներեն բանավոր լեզուն:' } },
      { id: 'opt-d', text: { es: 'El patio del colegio durante el recreo.', hy: 'Դպրոցի բակը դասամիջոցի ընթացքում:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'En la comunicación oral directa, la voz viaja a través del aire mediante ondas sonoras.',
      hy: 'Ուղղակի բանավոր հաղորդակցման ժամանակ ձայնը ճամփորդում է օդի միջով՝ ձայնային ալիքների օգնությամբ:',
    },
  },
  {
    id: 'com-8',
    topicId: 'comunicacion-elementos',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Si un alumno lee en su habitación una novela escrita en el siglo XVII por Miguel de Cervantes, ¿quién es el RECEPTOR?',
      hy: 'Եթե աշակերտը իր սենյակում կարդում է 17-րդ դարում Միգել դե Սերվանտեսի գրած վեպը, ո՞վ է ԸՆԴՈՒՆՈՂԸ (receptor):',
    },
    options: [
      { id: 'opt-a', text: { es: 'El alumno lector.', hy: 'Ընթերցող աշակերտը:' } },
      { id: 'opt-b', text: { es: 'Miguel de Cervantes.', hy: 'Միգել դե Սերվանտեսը:' } },
      { id: 'opt-c', text: { es: 'Don Quijote de la Mancha.', hy: 'Դոն Կիխոտը:' } },
      { id: 'opt-d', text: { es: 'El libro de papel.', hy: 'Թղթե գիրքը:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El receptor es quien recibe e interpreta el mensaje en el momento de la lectura: el alumno.',
      hy: 'Ընդունողն այն անձն է, ով ստանում և մեկնաբանում է հաղորդագրությունը ընթերցման պահին՝ աշակերտը:',
    },
  },

  // =========================================================================
  // TEMA 4: LAS CATEGORÍAS GRAMATICALES (Questions 61 - 90)
  // =========================================================================
  {
    id: 'cg-1',
    topicId: 'categorias-gramaticales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la oración: "Mi hermano pequeño canta muy bien", ¿qué categoría gramatical tiene la palabra "hermano"?',
      hy: '«Mi hermano pequeño canta muy bien» նախադասության մեջ խոսքի ո՞ր մասն է «hermano» բառը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Sustantivo común.', hy: 'Հասարակ գոյական:' } },
      { id: 'opt-b', text: { es: 'Adjetivo calificativo.', hy: 'Որակական ածական:' } },
      { id: 'opt-c', text: { es: 'Pronombre personal.', hy: 'Անձնական դերանուն:' } },
      { id: 'opt-d', text: { es: 'Determinante posesivo.', hy: 'Ստացական դետերմինատիվ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Hermano" nombra a una persona y tiene género masculino y número singular: es un sustantivo.',
      hy: '«Hermano»-ն անվանում է անձ, ունի արական սեռ և եզակի թիվ. դա գոյական է:',
    },
  },
  {
    id: 'cg-2',
    topicId: 'categorias-gramaticales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En esa misma oración ("Mi hermano pequeño canta muy bien"), ¿qué categoría gramatical tiene "mi"?',
      hy: 'Նույն այդ նախադասության մեջ («Mi hermano pequeño canta muy bien») խոսքի ո՞ր մասն է «mi» բառը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Determinante posesivo.', hy: 'Ստացական դետերմինատիվ:' } },
      { id: 'opt-b', text: { es: 'Pronombre personal.', hy: 'Անձնական դերանուն:' } },
      { id: 'opt-c', text: { es: 'Adjetivo calificativo.', hy: 'Որակական ածական:' } },
      { id: 'opt-d', text: { es: 'Preposición.', hy: 'Նախդիր:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Mi" acompaña al sustantivo "hermano" indicando posesión, por tanto es un determinante posesivo.',
      hy: '«Mi»-ն ուղեկցում է «hermano» գոյականին՝ ցույց տալով պատկանելություն, հետևաբար այն ստացական դետերմինատիվ է:',
    },
  },
  {
    id: 'cg-3',
    topicId: 'categorias-gramaticales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "Carlos come mucho y corre muy rápido", ¿qué categoría gramatical tiene la palabra "muy"?',
      hy: '«Carlos come mucho y corre muy rápido» նախադասության մեջ խոսքի ո՞ր մասն է «muy» բառը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Adverbio de cantidad.', hy: 'Չափ ու քանակի մակբայ:' } },
      { id: 'opt-b', text: { es: 'Adjetivo calificativo.', hy: 'Որակական ածական:' } },
      { id: 'opt-c', text: { es: 'Determinante indefinido.', hy: 'Անորոշ դետերմինատիվ:' } },
      { id: 'opt-d', text: { es: 'Conjunción copulativa.', hy: 'Միավորական շաղկապ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Muy" es un adverbio invariable de cantidad que intensifica al adverbio "rápido".',
      hy: '«Muy»-ն քանակի անփոփոխ մակբայ է, որն ուժեղացնում է «rápido» մակբայը:',
    },
  },
  {
    id: 'cg-4',
    topicId: 'categorias-gramaticales',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Distingue entre: 1) "Este libro es interesante". 2) "Este es el mío". ¿Qué categoría tiene "este" en cada frase?',
      hy: 'Տարբերիր. 1) «Este libro es interesante»: 2) «Este es el mío»: Խոսքի ո՞ր մասն է «este»-ն յուրաքանչյուր նախադասության մեջ:',
    },
    options: [
      { id: 'opt-a', text: { es: '1: Determinante demostrativo / 2: Pronombre demostrativo.', hy: '1՝ Ցուցական դետերմինատիվ / 2՝ Ցուցական դերանուն:' } },
      { id: 'opt-b', text: { es: '1: Pronombre / 2: Determinante.', hy: '1՝ Դերանուն / 2՝ Դետերմինատիվ:' } },
      { id: 'opt-c', text: { es: 'Ambos son adjetivos calificativos.', hy: 'Երկուսն էլ որակական ածականներ են:' } },
      { id: 'opt-d', text: { es: 'Ambos son sustantivos comunes.', hy: 'Երկուսն էլ հասարակ գոյականներ են:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'En la 1 acompaña a "libro" (determinante); en la 2 va solo al lado del verbo y sustituye al nombre (pronombre).',
      hy: '1-ինում այն ուղեկցում է «libro» գոյականին (դետերմինատիվ), իսկ 2-րդում հանդես է գալիս մենակ բայի մոտ և փոխարինում է անվանը (դերանուն):',
    },
  },
  {
    id: 'cg-5',
    topicId: 'categorias-gramaticales',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuáles de las siguientes palabras son PREPOSICIONES en español?',
      hy: 'Հետևյալ բառերից որո՞նք են ՆԱԽԴԻՐՆԵՐ (preposiciones) իսպաներենում:',
    },
    options: [
      { id: 'opt-a', text: { es: 'a, con, de, en, por, para, sobre.', hy: 'a, con, de, en, por, para, sobre:' } },
      { id: 'opt-b', text: { es: 'y, pero, aunque, porque, si.', hy: 'y, pero, aunque, porque, si:' } },
      { id: 'opt-c', text: { es: 'el, la, los, un, una.', hy: 'el, la, los, un, una:' } },
      { id: 'opt-d', text: { es: 'ayer, hoy, aquí, bien, mucho.', hy: 'ayer, hoy, aquí, bien, mucho:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Pertenecen a la lista oficial de 19 preposiciones del español (a, ante, bajo, con, contra, de, desde, etc.).',
      hy: 'Պատկանում են իսպաներենի 19 նախդիրների պաշտոնական ցանկին (a, ante, bajo, con, contra, de, desde և այլն):',
    },
  },
  {
    id: 'cg-6',
    topicId: 'categorias-gramaticales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En la oración: "Compré manzanas y peras pero no encontré plátanos", ¿a qué categoría pertenecen "y" y "pero"?',
      hy: '«Compré manzanas y peras pero no encontré plátanos» նախադասության մեջ խոսքի ո՞ր մասին են պատկանում «y»-ը և «pero»-ն:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Conjunciones.', hy: 'Շաղկապներ (conjunciones):' } },
      { id: 'opt-b', text: { es: 'Preposiciones.', hy: 'Նախդիրներ:' } },
      { id: 'opt-c', text: { es: 'Adverbios.', hy: 'Մակբայներ:' } },
      { id: 'opt-d', text: { es: 'Pronombres.', hy: 'Դերանուններ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Y" (copulativa) y "pero" (adversativa) son conjunciones que unen palabras u oraciones.',
      hy: '«Y»-ը (միավորական) և «pero»-ն (ներհակական) շաղկապներ են, որոնք միացնում են բառեր կամ նախադասություններ:',
    },
  },
  {
    id: 'cg-7',
    topicId: 'categorias-gramaticales',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Por qué la palabra "rápidamente" es un ADVERBIO y no un adjetivo?',
      hy: 'Ինչո՞ւ է «rápidamente» բառը ՄԱԿԲԱՅ, ոչ թե ածական:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Porque es invariable: no tiene género ni número y modifica a un verbo.', hy: 'Քանի որ այն անփոփոխ է. չունի սեռ կամ թիվ և լրացնում է բային:' } },
      { id: 'opt-b', text: { es: 'Porque siempre concuerda en femenino con el sujeto.', hy: 'Քանի որ միշտ համաձայնում է իգական սեռով ենթակայի հետ:' } },
      { id: 'opt-c', text: { es: 'Porque sustituye a un sustantivo.', hy: 'Քանի որ փոխարինում է գոյականին:' } },
      { id: 'opt-d', text: { es: 'Porque une dos oraciones subordinadas.', hy: 'Քանի որ միացնում է երկու ստորադաս նախադասություն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Los adverbios son invariables; terminan muchas veces en "-mente" y expresan el modo en que se realiza la acción verbal.',
      hy: 'Մակբայներն անփոփոխ են. դրանք հաճախ վերջանում են «-mente»-ով և արտահայտում են բայական գործողության կատարման ձևը:',
    },
  },
  {
    id: 'cg-8',
    topicId: 'categorias-gramaticales',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "¡Ay, qué daño!", la palabra "¡Ay!" es:',
      hy: '«¡Ay, qué daño!» արտահայտության մեջ «¡Ay!» բառը հետևյալն է.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Una interjección propia.', hy: 'Բուն ձայնարկություն (interjección propia):' } },
      { id: 'opt-b', text: { es: 'Un adverbio de dolor.', hy: 'Ցավի մակբայ:' } },
      { id: 'opt-c', text: { es: 'Una conjunción causal.', hy: 'Պատճառական շաղկապ:' } },
      { id: 'opt-d', text: { es: 'Un verbo en imperativo.', hy: 'Հրամայական եղանակի բայ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"¡Ay!" es una interjección propia que expresa dolor o queja súbita de forma espontánea.',
      hy: '«¡Ay!»-ը բուն ձայնարկություն է, որն ինքնաբուխ կերպով արտահայտում է հանկարծակի ցավ կամ բողոք:',
    },
  },

  // =========================================================================
  // TEMA 5: LA LITERATURA POPULAR Y LA LITERATURA CULTA (Questions 91 - 110)
  // =========================================================================
  {
    id: 'lpc-1',
    topicId: 'literatura-popular-culta',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál es una característica fundamental de la LITERATURA POPULAR?',
      hy: 'Ո՞րն է ԺՈՂՈՎՐԴԱԿԱՆ ԳՐԱԿԱՆՈՒԹՅԱՆ հիմնարար հատկանիշը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Su autoría es anónima y se transmite de forma oral.', hy: 'Նրա հեղինակն անանուն է, և այն փոխանցվում է բանավոր կերպով:' } },
      { id: 'opt-b', text: { es: 'Tiene un autor conocido que firma la obra con su nombre.', hy: 'Ունի հայտնի հեղինակ, ով ստորագրում է ստեղծագործությունն իր անունով:' } },
      { id: 'opt-c', text: { es: 'Se conserva siempre por escrito sin ningún cambio en el texto.', hy: 'Միշտ պահպանվում է գրավոր՝ առանց տեքստում որևէ փոփոխության:' } },
      { id: 'opt-d', text: { es: 'Utiliza un vocabulario exclusivo para nobles y reyes.', hy: 'Օգտագործում է բացառիկ բառապաշար ազնվականների և թագավորների համար:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La literatura popular o tradicional pertenece al pueblo, es de autor anónimo y se transmite oralmente de generación en generación.',
      hy: 'Ժողովրդական կամ ավանդական գրականությունը պատկանում է ժողովրդին, ունի անանուն հեղինակ և բանավոր փոխանցվում է սերնդեսերունդ:',
    },
  },
  {
    id: 'lpc-2',
    topicId: 'literatura-popular-culta',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Quién escribió la célebre novela culta "Don Quijote de la Mancha"?',
      hy: 'Ո՞վ է գրել «Դոն Կիխոտ» հայտնի հեղինակային վեպը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Miguel de Cervantes.', hy: 'Միգել դե Սերվանտեսը:' } },
      { id: 'opt-b', text: { es: 'Un autor anónimo de la Edad Media.', hy: 'Միջնադարի մի անանուն հեղինակ:' } },
      { id: 'opt-c', text: { es: 'Gustavo Adolfo Bécquer.', hy: 'Գուստավո Ադոլֆո Բեկերը:' } },
      { id: 'opt-d', text: { es: 'Federico García Lorca.', hy: 'Ֆեդերիկո Գարսիա Լորկան:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Miguel de Cervantes es el autor conocido de "Don Quijote", obra cumbre de la literatura culta española.',
      hy: 'Միգել դե Սերվանտեսը «Դոն Կիխոտ»-ի հայտնի հեղինակն է, որը իսպանական գրավոր գրականության գագաթնակետն է:',
    },
  },
  {
    id: 'lpc-3',
    topicId: 'literatura-popular-culta',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Por qué existen diferentes versiones o variantes de un mismo romance o cuento popular?',
      hy: 'Ինչո՞ւ գոյություն ունեն նույն ռոմանսի կամ ժողովրդական հեքիաթի տարբեր տարբերակներ (վարիանտներ):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Porque al transmitirse oralmente de memoria, cada narrador añadía, quitaba o cambiaba detalles.', hy: 'Քանի որ բանավոր՝ հիշողությամբ փոխանցվելիս յուրաքանչյուր պատմող ավելացնում, հանում կամ փոխում էր մանրամասներ:' } },
      { id: 'opt-b', text: { es: 'Porque el autor original publicó diez libros diferentes.', hy: 'Որովհետև սկզբնական հեղինակը հրատարակել էր տասը տարբեր գրքեր:' } },
      { id: 'opt-c', text: { es: 'Porque los reyes prohibían recordar los textos idénticos.', hy: 'Որովհետև թագավորներն արգելում էին նույնական տեքստեր հիշել:' } },
      { id: 'opt-d', text: { es: 'Porque se traducían obligatoriamente al latín.', hy: 'Որովհետև դրանք պարտադիր թարգմանվում էին լատիներեն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La transmisión oral provoca que los textos no sean fijos, dando lugar a variantes regionales y familiares.',
      hy: 'Բանավոր փոխանցումը պատճառ է դառնում, որ տեքստերը ֆիքսված չլինեն՝ առաջ բերելով տարածաշրջանային և ընտանեկան տարբերակներ:',
    },
  },
  {
    id: 'lpc-4',
    topicId: 'literatura-popular-culta',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Completa la comparación: Mientras que la literatura culta tiene un texto ________, la literatura popular presenta ________.',
      hy: 'Լրացրու համեմատությունը. Մինչդեռ հեղինակային գրականությունն ունի ________ տեքստ, ժողովրդական գրականությունը ներկայացնում է ________:',
    },
    options: [
      { id: 'opt-a', text: { es: 'fijado e inalterable / variantes y modificaciones.', hy: 'ֆիքսված և անփոփոխ / տարբերակներ և փոփոխություններ:' } },
      { id: 'opt-b', text: { es: 'oral y cantado / textos siempre en prosa.', hy: 'բանավոր և երգվող / միշտ արձակ տեքստեր:' } },
      { id: 'opt-c', text: { es: 'anónimo / firma de autor.', hy: 'անանուն / հեղինակի ստորագրություն:' } },
      { id: 'opt-d', text: { es: 'improvisado / reglas fijas.', hy: 'իմպրովիզացված / ֆիքսված կանոններ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El texto culto se conserva inalterable tal como lo escribió su autor; el texto popular cambia con las generaciones.',
      hy: 'Հեղինակային տեքստը պահպանվում է անփոփոխ՝ ինչպես հեղինակն է գրել, իսկ ժողովրդական տեքստը փոխվում է սերունդների հետ:',
    },
  },
  {
    id: 'lpc-5',
    topicId: 'literatura-popular-culta',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál de las siguientes obras pertenece a la LITERATURA CULTA?',
      hy: 'Հետևյալ ստեղծագործություններից ո՞րն է պատկանում ՀԵՂԻՆԱԿԱՅԻՆ (culta) ԳՐԱԿԱՆՈՒԹՅԱՆԸ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Las "Rimas" de Gustavo Adolfo Bécquer.', hy: 'Գուստավո Ադոլֆո Բեկերի «Հանգեր» (Rimas) ժողովածուն:' } },
      { id: 'opt-b', text: { es: 'El "Romance del conde Arnaldos".', hy: '«Կոմս Արնալդոսի ռոմանսը» (ավանդական ռոմանս):' } },
      { id: 'opt-c', text: { es: 'Una nana anónima para dormir niños.', hy: 'Մանուկներին քնեցնելու անանուն օրորոցայինը:' } },
      { id: 'opt-d', text: { es: 'Un villancico tradicional campesino.', hy: 'Ավանդական գյուղական վիլյանսիկոն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Las "Rimas" tienen un autor individual conocido (Bécquer) y se transmitieron por escrito.',
      hy: '«Հանգեր»-ն ունի հայտնի անհատ հեղինակ (Բեկեր) և փոխանցվել է գրավոր ճանապարհով:',
    },
  },

  // =========================================================================
  // TEMA 6: LOS GÉNEROS Y FORMAS DE LA LITERATURA POPULAR (Questions 111 - 135)
  // =========================================================================
  {
    id: 'gfp-1',
    topicId: 'generos-formas-popular',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cómo se define métricamente un ROMANCE en la literatura española?',
      hy: 'Ինչպե՞ս է չափականորեն սահմանվում ՌՈՄԱՆՍԸ իսպանական գրականության մեջ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Poema de versos octosílabos con rima asonante en los versos pares y sueltos los impares.', hy: 'Ութավանկ տողերով բանաստեղծություն՝ զույգ տողերի ասոնանս հանգով և կենտ տողերի ազատությամբ:' } },
      { id: 'opt-b', text: { es: 'Poema de catorce versos endecasílabos con rima consonante.', hy: 'Տասնչորս 11-վանկանի տողերով բանաստեղծություն՝ կոնսոնանս հանգով (սոնետ):' } },
      { id: 'opt-c', text: { es: 'Narración en prosa dividida en capítulos sin ningún tipo de rima.', hy: 'Արձակ պատմություն՝ բաժանված գլուխների՝ առանց որևէ տեսակի հանգի:' } },
      { id: 'opt-d', text: { es: 'Estrofa de tres versos de arte mayor.', hy: 'Մեծ չափի երեք տողանի տուն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La estructura obligatoria del romance son versos de 8 sílabas (octosílabos), rima asonante en versos pares (2, 4, 6...) y versos impares libres.',
      hy: 'Ռոմանսի պարտադիր կառուցվածքն են 8-վանկանի տողերը, զույգ տողերի ասոնանս հանգը (2, 4, 6...) և կենտ տողերի ազատությունը:',
    },
  },
  {
    id: 'gfp-2',
    topicId: 'generos-formas-popular',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Un relato tradicional sobre dioses del Olimpo que explica cómo nació el invierno o el fuego es:',
      hy: 'Օլիմպոսի աստվածների մասին ավանդական պատմությունը, որը բացատրում է, թե ինչպես առաջացավ ձմեռը կամ կրակը, հետևյալն է.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Un mito.', hy: 'Առասպել (Mito):' } },
      { id: 'opt-b', text: { es: 'Una leyenda.', hy: 'Լեգենդ (Leyenda):' } },
      { id: 'opt-c', text: { es: 'Un romance.', hy: 'Ռոմանս (Romance):' } },
      { id: 'opt-d', text: { es: 'Una novela policíaca.', hy: 'Դետեկտիվ վեպ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Los mitos tienen carácter sagrado, están protagonizados por dioses o seres sobrenaturales y explican el origen del mundo.',
      hy: 'Առասպելներն ունեն սրբազան բնույթ, նրանց հերոսներն են աստվածները կամ գերբնական էակները և բացատրում են աշխարհի ծագումը:',
    },
  },
  {
    id: 'gfp-3',
    topicId: 'generos-formas-popular',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál es la principal diferencia entre una LEYENDA y un MITO?',
      hy: 'Ո՞րն է ԼԵԳԵՆԴԻ և ԱՌԱՍՊԵԼԻ միջև հիմնական տարբերությունը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'La leyenda parte de un lugar o hecho histórico real con elementos mágicos; el mito trata de dioses y el origen del universo.', hy: 'Լեգենդը ծագում է իրական վայրից կամ պատմական փաստից՝ կախարդական տարրերով. առասպելը վերաբերում է աստվածներին և տիեզերքի ծագմանը:' } },
      { id: 'opt-b', text: { es: 'La leyenda siempre está en verso y el mito en prosa.', hy: 'Լեգենդը միշտ չափածո է, իսկ առասպելը՝ արձակ:' } },
      { id: 'opt-c', text: { es: 'El mito tiene un autor contemporáneo con derechos de autor.', hy: 'Առասպելն ունի ժամանակակից հեղինակ՝ հեղինակային իրավունքներով:' } },
      { id: 'opt-d', text: { es: 'No hay ninguna diferencia; son exactamente la misma forma.', hy: 'Չկա ոչ մի տարբերություն. դրանք ճիշտ նույն ձևն են:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La leyenda tiene base histórica o geográfica local adornada con fantasía, mientras que el mito es sagrado y universal sobre dioses.',
      hy: 'Լեգենդն ունի տեղային պատմական կամ աշխարհագրական հիմք՝ զարդարված ֆանտազիայով, մինչդեռ առասպելը սրբազան է և համամարդկային՝ աստվածների մասին:',
    },
  },
  {
    id: 'gfp-4',
    topicId: 'generos-formas-popular',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuáles son las tres partes de la estructura clásica del CUENTO POPULAR?',
      hy: 'Որո՞նք են ԺՈՂՈՎՐԴԱԿԱՆ ՀԵՔԻԱԹԻ դասական կառուցվածքի երեք մասերը:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Planteamiento, nudo y desenlace.', hy: 'Սկիզբ (հանգույց), զարգացում (բուն կոնֆլիկտ) և լուծում (ավարտ):' } },
      { id: 'opt-b', text: { es: 'Introducción, verso y rima asonante.', hy: 'Ներածություն, տող և ասոնանս հանգ:' } },
      { id: 'opt-c', text: { es: 'Estrofa, estribillo y coro.', hy: 'Տուն, կրկներգ և երգչախումբ:' } },
      { id: 'opt-d', text: { es: 'Tesis, argumentos y conclusión.', hy: 'Թեզ, փաստարկներ և եզրակացություն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Todo cuento narrativo tradicional sigue el esquema: Planteamiento (presentación), Nudo (el conflicto) y Desenlace (la resolución).',
      hy: 'Յուրաքանչյուր ավանդական պատմողական հեքիաթ հետևում է սխեմային՝ Planteamiento (սկիզբ), Nudo (կոնֆլիկտ) և Desenlace (լուծում):',
    },
  },
  {
    id: 'gfp-5',
    topicId: 'generos-formas-popular',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'Una canción popular con ritmo suave y arrullador que canta una madre para que su bebé se duerma es:',
      hy: 'Մեղմ և օրորող ռիթմով ժողովրդական երգը, որը երգում է մայրը, որպեսզի իր փոքրիկը քնի, հետևյալն է.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Una nana.', hy: 'Օրորոցային (Nana):' } },
      { id: 'opt-b', text: { es: 'Un romance guerrero.', hy: 'Ռազմական ռոմանս:' } },
      { id: 'opt-c', text: { es: 'Un mito cosmogónico.', hy: 'Տիեզերածնական առասպել:' } },
      { id: 'opt-d', text: { es: 'Una leyenda épica.', hy: 'Էպիկական լեգենդ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Las nanas son canciones de cuna populares transmitidas oralmente para calmar y dormir a los niños pequeños.',
      hy: 'Նանաները (օրորոցայինները) ժողովրդական օրորներ են, որոնք բանավոր փոխանցվում են փոքրիկ երեխաներին հանգստացնելու և քնեցնելու համար:',
    },
  },
  {
    id: 'gfp-6',
    topicId: 'generos-formas-popular',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Si lees: "Había una vez en un lejano reino una princesa encantada...", ¿a qué género popular pertenece con total seguridad?',
      hy: 'Եթե կարդում ես. «Había una vez en un lejano reino una princesa encantada...», ո՞ր ժողովրդական ժանրին է այն պատկանում լիակատար վստահությամբ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Al cuento popular (fórmula inicial fija y tiempo indeterminado).', hy: 'Ժողովրդական հեքիաթին (սկսվելու կայուն բանաձև և անորոշ ժամանակ):' } },
      { id: 'opt-b', text: { es: 'Al romance octosílabo.', hy: 'Ութավանկ ռոմանսին:' } },
      { id: 'opt-c', text: { es: 'Al mito sagrado con dioses del Olimpo.', hy: 'Օլիմպոսի աստվածներով սրբազան առասպելին:' } },
      { id: 'opt-d', text: { es: 'A un soneto cultista.', hy: 'Հեղինակային սոնետին:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Había una vez" es la fórmula tradicional de apertura característica de los cuentos populares.',
      hy: '«Había una vez» (կար-չկար)-ը ժողովրդական հեքիաթների սկսվելու ավանդական բնորոշ բանաձևն է:',
    },
  },

  // =========================================================================
  // TEMA 7: EL LENGUAJE LITERARIO, LA PROSA Y EL VERSO (Questions 136 - 155)
  // =========================================================================
  {
    id: 'lpv-1',
    topicId: 'lenguaje-prosa-verso',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cuál es la finalidad primordial del lenguaje literario frente al cotidiano?',
      hy: 'Ո՞րն է գրական լեզվի առաջնային նպատակը՝ ի համեմատ առօրյա խոսքի:',
    },
    options: [
      { id: 'opt-a', text: { es: 'La finalidad estética: buscar la belleza y despertar emociones en el lector.', hy: 'Գեղագիտական նպատակը. գեղեցկության ձգտումը և ընթերցողի մեջ հույզեր արթնացնելը:' } },
      { id: 'opt-b', text: { es: 'Informar de forma rápida y objetiva sobre el tiempo meteorológico.', hy: 'Եղանակային պայմանների մասին արագ և օբյեկտիվ տեղեկացնելը:' } },
      { id: 'opt-c', text: { es: 'Ahorrar palabras para hablar en menos tiempo.', hy: 'Բառերը խնայելը՝ ավելի քիչ ժամանակում խոսելու համար:' } },
      { id: 'opt-d', text: { es: 'Vender obligatoriamente un producto comercial.', hy: 'Առևտրային արտադրանք պարտադիր վաճառելը:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El lenguaje literario no busca solo la utilidad informativa, sino crear arte y belleza a través de la palabra.',
      hy: 'Գրական լեզուն չի հետապնդում միայն տեղեկատվական օգուտ, այլ խոսքի միջոցով ստեղծում է արվեստ և գեղեցկություն:',
    },
  },
  {
    id: 'lpv-2',
    topicId: 'lenguaje-prosa-verso',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cómo se distingue visualmente la prosa del verso en una página impresa?',
      hy: 'Ինչպե՞ս է տպագիր էջում տեսողականորեն տարբերվում արձակը չափածոյից:',
    },
    options: [
      { id: 'opt-a', text: { es: 'La prosa ocupa todo el renglón y se organiza en párrafos; el verso se dispone en líneas cortas con ritmo.', hy: 'Արձակը զբաղեցնում է ողջ տողը և կազմված է պարբերություններից. չափածոն դասավորված է կարճ տողերով՝ ռիթմով:' } },
      { id: 'opt-b', text: { es: 'La prosa siempre rima y el verso nunca lleva rima.', hy: 'Արձակը միշտ հանգավորվում է, իսկ չափածոն երբեք հանգ չունի:' } },
      { id: 'opt-c', text: { es: 'La prosa se escribe al revés de derecha a izquierda.', hy: 'Արձակը գրվում է հակառակ՝ աջից ձախ:' } },
      { id: 'opt-d', text: { es: 'No hay ninguna diferencia visible en el papel.', hy: 'Թղթի վրա ոչ մի տեսանելի տարբերություն չկա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La prosa llena la línea hasta el margen derecho en párrafos; los versos son líneas independientes y cortas con ritmo y métrica.',
      hy: 'Արձակը լցնում է տողը մինչև աջ լուսանցքը պարբերություններում, իսկ չափածո տողերը կարճ և անկախ տողեր են՝ ռիթմով և չափով:',
    },
  },
  {
    id: 'lpv-3',
    topicId: 'lenguaje-prosa-verso',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Observa estas dos palabras al final de dos versos: "viento" y "siento". ¿Qué tipo de rima tienen?',
      hy: 'Դիտիր երկու տողերի վերջում գտնվող այս երկու բառերը. «viento» և «siento»: Ի՞նչ տեսակի հանգ ունեն դրանք:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Rima consonante (coinciden todas las vocales y consonantes desde la última vocal acentuada: -iento).', hy: 'Կոնսոնանս (լրիվ) հանգ (վերջին շեշտված ձայնավորից սկսած համընկնում են բոլոր ձայնավորներն ու բաղաձայնները՝ -iento):' } },
      { id: 'opt-b', text: { es: 'Rima asonante (solo coinciden las vocales).', hy: 'Ասոնանս հանգ (համընկնում են միայն ձայնավորները):' } },
      { id: 'opt-c', text: { es: 'Verso libre sin ninguna rima.', hy: 'Ազատ տող՝ առանց որևէ հանգի:' } },
      { id: 'opt-d', text: { es: 'Rima muda o silenciosa.', hy: 'Համր հանգ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Desde la vocal acentuada ("i"), coinciden exactamente todos los sonidos: i-e-n-t-o. Es rima consonante.',
      hy: 'Շեշտված ձայնավորից («i») սկսած ճշգրտորեն համընկնում են բոլոր հնչյունները՝ i-e-n-t-o: Դա կոնսոնանս հանգ է:',
    },
  },
  {
    id: 'lpv-4',
    topicId: 'lenguaje-prosa-verso',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: 'Observa ahora las palabras: "barco" y "plato". Desde la vocal acentuada "a", riman "a-o", pero la "rc" y la "t" son distintas. ¿Qué rima es?',
      hy: 'Հիմա դիտիր բառերը. «barco» և «plato»: Շեշտված «a» ձայնավորից սկսած հանգավորվում են «a-o»-ն, բայց «rc»-ն և «t»-ն տարբեր են: Ի՞նչ հանգ է դա:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Rima asonante.', hy: 'Ասոնանս (ձայնավորային) հանգ:' } },
      { id: 'opt-b', text: { es: 'Rima consonante.', hy: 'Կոնսոնանս (լրիվ) հանգ:' } },
      { id: 'opt-c', text: { es: 'Rima perfecta.', hy: 'Կատարյալ հանգ:' } },
      { id: 'opt-d', text: { es: 'Aliteración sintáctica.', hy: 'Շարահյուսական ալիտերացիա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'En la rima asonante solo coinciden las vocales (a-o) a partir de la última vocal con acento métrico.',
      hy: 'Ասոնանս հանգում վերջին շեշտված ձայնավորից հետո համընկնում են միայն ձայնավորները (a-o):',
    },
  },
  {
    id: 'lpv-5',
    topicId: 'lenguaje-prosa-verso',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En la métrica española, si la última palabra de un verso es AGUDA (acentuada en la última sílaba, ej.: "mar"), ¿qué se hace con el cómputo de sílabas?',
      hy: 'Իսպանական տաղաչափության մեջ, եթե տողի վերջին բառը վերջնաշեշտ է (AGUDA, օր.՝ «mar»), ի՞նչ է արվում վանկերի հաշվարկի հետ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Se suma una sílaba al conteo (+1).', hy: 'Վանկերի հաշվին գումարվում է մեկ վանկ (+1):' } },
      { id: 'opt-b', text: { es: 'Se resta una sílaba (-1).', hy: 'Վանկերի հաշվից հանվում է մեկ վանկ (-1):' } },
      { id: 'opt-c', text: { es: 'Se multiplica por dos.', hy: 'Բազմապատկվում է երկուսով:' } },
      { id: 'opt-d', text: { es: 'El número se queda exactamente igual.', hy: 'Թիվը մնում է ճիշտ նույնը:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Regla del acento final: si el verso acaba en palabra aguda se suma 1 (+1); si es llana se queda igual; si es esdrújula se resta 1 (-1).',
      hy: 'Վերջին շեշտի կանոնը. եթե տողն ավարտվում է aguda բառով, գումարվում է 1 (+1), եթե llana է՝ մնում է նույնը, եթե esdrújula է՝ հանվում է 1 (-1):',
    },
  },

  // =========================================================================
  // TEMA 8: FIGURAS LITERARIAS - NIVEL FÓNICO (Questions 156 - 175)
  // =========================================================================
  {
    id: 'ff-1',
    topicId: 'figuras-fonicas',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué figura literaria fónica aparece en el verso: "El ruido con que rueda la ronca tempestad"?',
      hy: 'Լեզվի ո՞ր հնչյունական պատկերն է առկա հետևյալ տողում. «El ruido con que rueda la ronca tempestad»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Aliteración (repetición insistente del sonido "r").', hy: 'Բաղաձայնույթ / Ալիտերացիա («r» հնչյունի համառ կրկնություն):' } },
      { id: 'opt-b', text: { es: 'Onomatopeya de campanas.', hy: 'Զանգերի բնաձայնություն:' } },
      { id: 'opt-c', text: { es: 'Paronomasia de verbos.', hy: 'Բայերի պարոնոմազիա:' } },
      { id: 'opt-d', text: { es: 'Asíndeton puro.', hy: 'Զուտ ասինդետոն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La reiteración del sonido vibrante "r" produce un efecto sonoro de fuerza y trueno: es una aliteración.',
      hy: 'Թրթռուն «r» հնչյունի կրկնությունը առաջացնում է ուժի և որոտի հնչյունային էֆեկտ. դա ալիտերացիա է:',
    },
  },
  {
    id: 'ff-2',
    topicId: 'figuras-fonicas',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "El tictac del reloj rompía el silencio de la medianoche", la palabra "tictac" es:',
      hy: '«El tictac del reloj rompía el silencio de la medianoche» նախադասության մեջ «tictac» բառը հետևյալն է.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Una onomatopeya (imita el sonido mecánico del reloj).', hy: 'Բնաձայնություն / Օնոմատոպեա (նմանակում է ժամացույցի մեխանիկական ձայնը):' } },
      { id: 'opt-b', text: { es: 'Un hipérbaton sintáctico.', hy: 'Շարահյուսական հիպերբատոն:' } },
      { id: 'opt-c', text: { es: 'Un pleonasmo redundante.', hy: 'Ավելորդաբանական պլեոնազմ:' } },
      { id: 'opt-d', text: { es: 'Una epanadiplosis métrica.', hy: 'Չափական էպանադիպլոսիս:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Una onomatopeya es la recreación o imitación lingüística de un sonido de la realidad.',
      hy: 'Օնոմատոպեան իրականության ձայնի լեզվական վերարտադրումն է կամ նմանակումը:',
    },
  },
  {
    id: 'ff-3',
    topicId: 'figuras-fonicas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "Vendado que me has vendido", ¿qué recurso fónico se basa en la semejanza de sonido entre "vendado" y "vendido"?',
      hy: '«Vendado que me has vendido» նախադասության մեջ ո՞ր հնչյունական հնարքն է հիմնված «vendado»-ի և «vendido»-ի հնչյունական նմանության վրա:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Paronomasia.', hy: 'Հարանունություն / Պարոնոմազիա (Paronomasia):' } },
      { id: 'opt-b', text: { es: 'Epanadiplosis.', hy: 'Էպանադիպլոսիս:' } },
      { id: 'opt-c', text: { es: 'Aliteración.', hy: 'Ալիտերացիա:' } },
      { id: 'opt-d', text: { es: 'Polisíndeton.', hy: 'Պոլիսինդետոն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La paronomasia utiliza palabras con sonido muy parecido pero significados completamente diferentes en proximidad.',
      hy: 'Պարոնոմազիան օգտագործում է հնչողությամբ շատ նման, բայց բոլորովին տարբեր իմաստ ունեցող բառեր իրար մոտ:',
    },
  },
  {
    id: 'ff-4',
    topicId: 'figuras-fonicas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Identifica la figura literaria en el famoso verso de Federico García Lorca: "Verde que te quiero verde".',
      hy: 'Որոշիր գրական պատկերը Ֆեդերիկո Գարսիա Լորկայի հայտնի տողում. «Verde que te quiero verde»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Epanadiplosis (empieza y termina el verso con la misma palabra).', hy: 'Էպանադիպլոսիս (տողը սկսվում և ավարտվում է նույն բառով):' } },
      { id: 'opt-b', text: { es: 'Anáfora (repite al inicio de varios versos).', hy: 'Անաֆորա (կրկնում է մի քանի տողերի սկզբում):' } },
      { id: 'opt-c', text: { es: 'Asíndeton (suprime conjunciones).', hy: 'Ասինդետոն (բաց է թողնում շաղկապները):' } },
      { id: 'opt-d', text: { es: 'Pleonasmo vulgar.', hy: 'Խոսակցական պլեոնազմ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La epanadiplosis consiste en comenzar y finalizar el mismo verso con la misma palabra exacta ("Verde... verde").',
      hy: 'Էպանադիպլոսիսը կայանում է նույն տողը նույն ճշգրիտ բառով սկսելու և ավարտելու մեջ («Verde... verde»):',
    },
  },
  {
    id: 'ff-5',
    topicId: 'figuras-fonicas',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: '¿En qué se diferencian la ALITERACIÓN y la ONOMATOPEYA?',
      hy: 'Ինչո՞վ են տարբերվում ԱԼԻՏԵՐԱՑԻԱՆ և ՕՆՈՄԱՏՈՊԵԱՆ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'La aliteración repite sonidos sueltos para sugerir una sensación; la onomatopeya es una palabra que imita directamente un ruido real.', hy: 'Ալիտերացիան կրկնում է առանձին հնչյուններ՝ զգացողություն առաջացնելու համար. օնոմատոպեան բառ է, որն ուղղակիորեն նմանակում է իրական ձայնը:' } },
      { id: 'opt-b', text: { es: 'La aliteración solo existe en la prosa y la onomatopeya solo en el verso.', hy: 'Ալիտերացիան գոյություն ունի միայն արձակում, իսկ օնոմատոպեան՝ միայն չափածոյում:' } },
      { id: 'opt-c', text: { es: 'La aliteración siempre rima en consonante y la onomatopeya en asonante.', hy: 'Ալիտերացիան միշտ հանգավորվում է կոնսոնանսով, իսկ օնոմատոպեան՝ ասոնանսով:' } },
      { id: 'opt-d', text: { es: 'Son dos nombres distintos para exactamente el mismo recurso.', hy: 'Դրանք երկու տարբեր անուններ են ճիշտ նույն հնարքի համար:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La aliteración es la repetición de un fonema ("s", "r"); la onomatopeya es una palabra completa como "miau", "zas", "clic".',
      hy: 'Ալիտերացիան որևէ հնչյունի կրկնությունն է («s», «r»), իսկ օնոմատոպեան ամբողջական բառ է, ինչպես «miau», «zas», «clic»:',
    },
  },

  // =========================================================================
  // TEMA 9: FIGURAS LITERARIAS - NIVEL MORFOSINTÁCTICO (Questions 176 - 200)
  // =========================================================================
  {
    id: 'fm-1',
    topicId: 'figuras-morfosintacticas',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En los versos de Miguel Hernández: "Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada", ¿qué figura retórica aparece al inicio de cada verso?',
      hy: 'Միգել Էրնանդեսի տողերում. «Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada», ո՞ր գրական պատկերն է առկա յուրաքանչյուր տողի սկզբում:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Anáfora.', hy: 'Անաֆորա (Anáfora):' } },
      { id: 'opt-b', text: { es: 'Epanadiplosis.', hy: 'Էպանադիպլոսիս:' } },
      { id: 'opt-c', text: { es: 'Hipérbaton.', hy: 'Հիպերբատոն:' } },
      { id: 'opt-d', text: { es: 'Polisíndeton.', hy: 'Պոլիսինդետոն:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La anáfora es la repetición de una misma palabra ("Temprano") al comienzo de versos consecutivos.',
      hy: 'Անաֆորան նույն բառի («Temprano») կրկնությունն է հաջորդական տողերի սկզբում:',
    },
  },
  {
    id: 'fm-2',
    topicId: 'figuras-morfosintacticas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué figura morfosintáctica consiste en alterar el orden lógico de las palabras en una oración?',
      hy: 'Ո՞ր ձևաբանական-շարահյուսական պատկերն է կայանում նախադասության մեջ բառերի տրամաբանական շարադասությունը խախտելու մեջ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Hipérbaton.', hy: 'Հիպերբատոն / Շրջադասություն (Hipérbaton):' } },
      { id: 'opt-b', text: { es: 'Polisíndeton.', hy: 'Պոլիսինդետոն:' } },
      { id: 'opt-c', text: { es: 'Asíndeton.', hy: 'Ասինդետոն:' } },
      { id: 'opt-d', text: { es: 'Pleonasmo.', hy: 'Պլեոնազմ:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El hipérbaton invierte el orden sintáctico habitual (como en "Cerca del río una casa vi" en vez de "Vi una casa cerca del río").',
      hy: 'Հիպերբատոնը շրջում է սովորական շարահյուսական կարգը (օր.՝ «Գետի մոտ մի տուն տեսա»՝ «Տեսա մի տուն գետի մոտ»-ի փոխարեն):',
    },
  },
  {
    id: 'fm-3',
    topicId: 'figuras-morfosintacticas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Observa la célebre frase de Julio César: "Llegué, vi, vencí". La ausencia voluntaria de conjunciones es un ejemplo de:',
      hy: 'Դիտիր Հուլիոս Կեսարի հայտնի խոսքը. «Llegué, vi, vencí» (Եկա, տեսա, հաղթեցի): Շաղկապների կամավոր բացակայությունը հետևյալի օրինակ է.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Asíndeton.', hy: 'Ասինդետոն / Անշաղկապություն (Asíndeton):' } },
      { id: 'opt-b', text: { es: 'Polisíndeton.', hy: 'Պոլիսինդետոն:' } },
      { id: 'opt-c', text: { es: 'Hipérbaton.', hy: 'Հիպերբատոն:' } },
      { id: 'opt-d', text: { es: 'Anáfora.', hy: 'Անաֆորա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El asíndeton elimina las conjunciones coordinantes para transmitir rapidez, ligereza e inmediatez.',
      hy: 'Ասինդետոնը վերացնում է համադասական շաղկապները՝ արագություն, թեթևություն և անմիջականություն հաղորդելու համար:',
    },
  },
  {
    id: 'fm-4',
    topicId: 'figuras-morfosintacticas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "Y ríe y canta y sueña y llora de alegría", la repetición reiterada de la conjunción "y" se llama:',
      hy: '«Y ríe y canta y sueña y llora de alegría» նախադասության մեջ «y» շաղկապի բազմիցս կրկնությունը կոչվում է.',
    },
    options: [
      { id: 'opt-a', text: { es: 'Polisíndeton.', hy: 'Պոլիսինդետոն / Բազմաշաղկապություն (Polisíndeton):' } },
      { id: 'opt-b', text: { es: 'Asíndeton.', hy: 'Ասինդետոն:' } },
      { id: 'opt-c', text: { es: 'Paronomasia.', hy: 'Պարոնոմազիա:' } },
      { id: 'opt-d', text: { es: 'Aliteración.', hy: 'Ալիտերացիա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El polisíndeton multiplica intencionadamente las conjunciones para dar lentitud, gravedad o insistencia al texto.',
      hy: 'Պոլիսինդետոնը միտումնավոր բազմապատկում է շաղկապները՝ տեքստին դանդաղություն, ծանրակշռություն կամ համառություն հաղորդելու համար:',
    },
  },
  {
    id: 'fm-5',
    topicId: 'figuras-morfosintacticas',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'La expresión: "Lo vi con mis propios ojos" utiliza palabras redundantes para dar énfasis. ¿Qué figura es?',
      hy: '«Lo vi con mis propios ojos» (տեսա իմ սեփական աչքերով) արտահայտությունն օգտագործում է ավելորդ բառեր շեշտադրման համար: Ի՞նչ պատկեր է դա:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Pleonasmo.', hy: 'Պլեոնազմ / Նույնաբանություն (Pleonasmo):' } },
      { id: 'opt-b', text: { es: 'Hipérbaton.', hy: 'Հիպերբատոն:' } },
      { id: 'opt-c', text: { es: 'Asíndeton.', hy: 'Ասինդետոն:' } },
      { id: 'opt-d', text: { es: 'Anáfora.', hy: 'Անաֆորա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'El pleonasmo añade términos que no aportan significado nuevo pero subrayan con gran fuerza la vivencia ("ver con los propios ojos").',
      hy: 'Պլեոնազմն ավելացնում է բառեր, որոնք նոր իմաստ չեն հաղորդում, բայց մեծ ուժով են ընդգծում ապրումը («տեսնել սեփական աչքերով»):',
    },
  },
  {
    id: 'fm-6',
    topicId: 'figuras-morfosintacticas',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: '¿En qué se diferencian una ENUMERACIÓN y un ASÍNDETON?',
      hy: 'Ինչո՞վ են տարբերվում ԹՎԱՐԿՈՒՄԸ (enumeración) և ԱՍԻՆԴԵՏՈՆԸ (asíndeton):',
    },
    options: [
      { id: 'opt-a', text: { es: 'La enumeración es la acumulación de elementos de una misma serie; el asíndeton es la supresión específica de conjunciones.', hy: 'Թվարկումը նույն շարքի տարրերի կուտակումն է, իսկ ասինդետոնը՝ շաղկապների հատուկ բացթողումը:' } },
      { id: 'opt-b', text: { es: 'La enumeración solo usa números y el asíndeton solo letras.', hy: 'Թվարկումն օգտագործում է միայն թվեր, իսկ ասինդետոնը՝ միայն տառեր:' } },
      { id: 'opt-c', text: { es: 'La enumeración es una figura fónica y el asíndeton es semántico.', hy: 'Թվարկումը հնչյունական պատկեր է, իսկ ասինդետոնը՝ իմաստային:' } },
      { id: 'opt-d', text: { es: 'Son términos sinónimos que significan exactamente lo mismo.', hy: 'Դրանք հոմանիշ եզրույթներ են, որոնք նշանակում են ճիշտ նույն բանը:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Una enumeración lista objetos o cualidades; si esa lista omite las conjunciones ("sillas, mesas, cuadros"), se combina con un asíndeton.',
      hy: 'Թվարկումը նշում է առարկաներ կամ հատկանիշներ. եթե այդ ցուցակը բաց է թողնում շաղկապները («աթոռներ, սեղաններ, նկարներ»), ապա այն համակցվում է ասինդետոնի հետ:',
    },
  },

  // =========================================================================
  // TEMA 10: FIGURAS SEMÁNTICAS - LA METÁFORA (Questions 201 - 225)
  // =========================================================================
  {
    id: 'fs-1',
    topicId: 'figuras-semanticas',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Qué es una METÁFORA en la literatura?',
      hy: 'Ի՞նչ է ՓՈԽԱԲԵՐՈՒԹՅՈՒՆԸ (metáfora) գրականության մեջ:',
    },
    options: [
      { id: 'opt-a', text: { es: 'La identificación de dos elementos (uno real A y otro imaginario B) basada en una relación de semejanza.', hy: 'Երկու տարրերի նույնացումը (մեկը իրական A, մյուսը՝ պատկերավոր B)՝ հիմնված նրանց նմանության կապի վրա:' } },
      { id: 'opt-b', text: { es: 'La repetición insistente de un sonido en el verso.', hy: 'Տողում որևէ հնչյունի համառ կրկնությունը:' } },
      { id: 'opt-c', text: { es: 'La alteración voluntaria del orden de las palabras.', hy: 'Բառերի շարադասության կամավոր խախտումը:' } },
      { id: 'opt-d', text: { es: 'Una narración breve sobre animales con moraleja final.', hy: 'Կարճ պատմություն կենդանիների մասին՝ վերջում խրատով:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La metáfora identifica directamente dos realidades porque comparten un rasgo común (ej.: "el tiempo es oro").',
      hy: 'Փոխաբերությունը ուղղակիորեն նույնացնում է երկու իրականություններ, որովհետև նրանք ունեն ընդհանուր հատկանիշ (օր.՝ «ժամանակը ոսկի է»):',
    },
  },
  {
    id: 'fs-2',
    topicId: 'figuras-semanticas',
    level: 'facil',
    type: 'multiple-choice',
    prompt: {
      es: 'En la metáfora: "Tus dientes son perlas", ¿cuál es el ELEMENTO REAL (A) y cuál el ELEMENTO IMAGINARIO (B)?',
      hy: '«Tus dientes son perlas» փոխաբերության մեջ ո՞րն է ԻՐԱԿԱՆ ՏԱՐՐԸ (A) և ո՞րը ՊԱՏԿԵՐԱՎՈՐ ՏԱՐՐԸ (B):',
    },
    options: [
      { id: 'opt-a', text: { es: 'Elemento real A = dientes; Elemento imaginario B = perlas.', hy: 'Իրական տարր A = dientes (ատամներ), Պատկերավոր տարր B = perlas (մարգարիտներ):' } },
      { id: 'opt-b', text: { es: 'Elemento real A = perlas; Elemento imaginario B = dientes.', hy: 'Իրական տարր A = perlas, Պատկերավոր տարր B = dientes:' } },
      { id: 'opt-c', text: { es: 'Ambos elementos son imaginarios.', hy: 'Երկու տարրերն էլ պատկերավոր են:' } },
      { id: 'opt-d', text: { es: 'No hay elemento imaginario, es una descripción científica.', hy: 'Պատկերավոր տարր չկա, դա գիտական նկարագրություն է:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La realidad física de la que se habla son los "dientes" (A), y la imagen poética con la que se identifican por su blancura son las "perlas" (B).',
      hy: 'Այն ֆիզիկական իրականությունը, որի մասին խոսվում է, «ատամներն» են (A), իսկ բանաստեղծական պատկերը, որի հետ նույնացվում են իրենց սպիտակությամբ, «մարգարիտներն» են (B):',
    },
  },
  {
    id: 'fs-3',
    topicId: 'figuras-semanticas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: '¿A cuál de las tres estructuras de la libreta corresponde: "Las perlas de su boca brillaban con la luz"?',
      hy: 'Տետրի երեք կառուցվածքներից ո՞ր մեկին է համապատասխանում. «Las perlas de su boca brillaban con la luz»:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Estructura 2: B en lugar de A (metáfora pura: el término real "dientes" desaparece).', hy: 'Կառուցվածք 2՝ B-ն A-ի փոխարեն (մաքուր փոխաբերություն. իրական «dientes» բառը բացակայում է):' } },
      { id: 'opt-b', text: { es: 'Estructura 1: A es B (metáfora impura con verbo ser).', hy: 'Կառուցվածք 1՝ A-ն B է («ser» բայով բացահայտ փոխաբերություն):' } },
      { id: 'opt-c', text: { es: 'Comparación con nexo explícito.', hy: 'Համեմատություն՝ բացահայտ կապով:' } },
      { id: 'opt-d', text: { es: 'Hipérbole exagerada.', hy: 'Չափազանցված հիպերբոլա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'Aparece únicamente el término figurado "perlas" sustituyendo por completo a los "dientes". El lector lo deduce por el contexto ("de su boca").',
      hy: 'Հայտնվում է միայն պատկերավոր «perlas» բառը՝ ամբողջությամբ փոխարինելով «dientes»-ին: Ընթերցողը կռահում է այն համատեքստից («de su boca»):',
    },
  },
  {
    id: 'fs-4',
    topicId: 'figuras-semanticas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'En la frase: "La serpiente de plata del río serpenteaba por la vega", ¿qué estructura de metáfora tenemos?',
      hy: '«La serpiente de plata del río serpenteaba por la vega» նախադասության մեջ փոխաբերության ո՞ր կառուցվածքն ունենք:',
    },
    options: [
      { id: 'opt-a', text: { es: 'Estructura 3: B de A (término imaginario B + de + término real A).', hy: 'Կառուցվածք 3՝ B de A (պատկերավոր տարր B + de + իրական տարր A):' } },
      { id: 'opt-b', text: { es: 'Estructura 1: A es B.', hy: 'Կառուցվածք 1՝ A-ն B է:' } },
      { id: 'opt-c', text: { es: 'Comparación con nexo "como".', hy: 'Համեմատություն՝ «como» կապով:' } },
      { id: 'opt-d', text: { es: 'Onomatopeya fónica.', hy: 'Հնչյունական օնոմատոպեա:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'B ("serpiente de plata") y A ("el río") van unidos mediante la preposición "de": estructura B de A.',
      hy: 'B-ն («serpiente de plata») և A-ն («el río») միացված են «de» նախդիրով՝ B de A կառուցվածքով:',
    },
  },
  {
    id: 'fs-5',
    topicId: 'figuras-semanticas',
    level: 'dificil',
    type: 'multiple-choice',
    prompt: {
      es: '¿Cómo distingues una METÁFORA de una COMPARACIÓN (símil)?',
      hy: 'Ինչպե՞ս ես տարբերում ՓՈԽԱԲԵՐՈՒԹՅՈՒՆԸ (metáfora) ՀԱՄԵՄԱՏՈՒԹՅՈՒՆԻՑ (comparación):',
    },
    options: [
      { id: 'opt-a', text: { es: 'La comparación usa nexos explícitos ("como", "parece", "igual que"); la metáfora identifica directamente sin nexo comparativo.', hy: 'Համեմատությունն օգտագործում է բացահայտ կապեր («como», «parece», «igual que»), իսկ փոխաբերությունը նույնացնում է ուղղակիորեն՝ առանց համեմատական կապի:' } },
      { id: 'opt-b', text: { es: 'La comparación solo se usa en poemas y la metáfora en cuentos.', hy: 'Համեմատությունն օգտագործվում է միայն բանաստեղծություններում, իսկ փոխաբերությունը՝ հեքիաթներում:' } },
      { id: 'opt-c', text: { es: 'La metáfora siempre rima en consonante y la comparación en asonante.', hy: 'Փոխաբերությունը միշտ հանգավորվում է կոնսոնանսով, իսկ համեմատությունը՝ ասոնանսով:' } },
      { id: 'opt-d', text: { es: 'No hay ninguna diferencia; son exactamente la misma figura.', hy: 'Ոչ մի տարբերություն չկա. դրանք ճիշտ նույն պատկերն են:' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: '"Tus ojos son como luceros" es comparación (lleva "como"); "Tus ojos son luceros" es metáfora (no lleva nexo).',
      hy: '«Tus ojos son como luceros»-ը համեմատություն է (ունի «como»), իսկ «Tus ojos son luceros»-ը փոխաբերություն է (կապ չունի):',
    },
  },
  {
    id: 'fs-6',
    topicId: 'figuras-semanticas',
    level: 'medio',
    type: 'multiple-choice',
    prompt: {
      es: 'Identifica cuál de las siguientes frases es una COMPARACIÓN y NO una metáfora:',
      hy: 'Որոշիր, թե հետևյալ նախադասություններից ո՞րն է ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ և ՈՉ ԹԵ փոխաբերություն.',
    },
    options: [
      { id: 'opt-a', text: { es: 'El atleta corría tan rápido como una gacela.', hy: 'El atleta corría tan rápido como una gacela. (Մարզիկը վազում էր այնքան արագ, ինչպես վիթը):' } },
      { id: 'opt-b', text: { es: 'El atleta era una gacela sobre el tartán.', hy: 'El atleta era una gacela sobre el tartán. (Մարզիկը վիթ էր վազքուղու վրա):' } },
      { id: 'opt-c', text: { es: 'La gacela de la pista cruzó la meta.', hy: 'La gacela de la pista cruzó la meta. (Վազքուղու վիթը հատեց վերջնագիծը):' } },
      { id: 'opt-d', text: { es: 'El tiempo es un ladrón silencioso.', hy: 'El tiempo es un ladrón silencioso. (Ժամանակը լուռ գող է):' } },
    ],
    correctOptionId: 'opt-a',
    explanation: {
      es: 'La opción A lleva el nexo comparativo explícito "como", por lo que es una comparación (o símil).',
      hy: 'A տարբերակն ունի բացահայտ համեմատական «como» (ինչպես) կապը, ուստի այն համեմատություն է:',
    },
  },
];
