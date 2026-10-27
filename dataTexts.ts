import { TextAnalysisItem } from './types.ts';

export const TEXT_ANALYSIS_DATA: TextAnalysisItem[] = [
  {
    id: 'text-romance-arnaldos',
    title: {
      es: 'Romance del conde Arnaldos (Literatura popular)',
      hy: 'Կոմս Արնալդոսի ռոմանսը (Ժողովրդական գրականություն)',
    },
    authorOrSource: 'Tradición popular anónima (Siglo XV)',
    genre: {
      es: 'Lírico-narrativo popular (Romance)',
      hy: 'Ժողովրդական քնարա-պատմողական (Ռոմանս)',
    },
    textParagraphs: [
      {
        es: '¡Quién hubiese tal ventura sobre las aguas del mar, como hubo el conde Arnaldos la mañana de San Juan!',
        hy: 'Երանի՜ նրան, ով կունենար այնպիսի բախտ ծովի ջրերի վրա, ինչպես ունեցավ կոմս Արնալդոսը Սուրբ Հովհաննեսի առավոտյան:',
      },
      {
        es: 'Con un halcón en la mano la caza iba a cazar; vio venir una galera que a tierra quiere llegar.',
        hy: 'Բազեն ձեռքին նա որսի էր գնում. տեսավ, որ մոտենում է մի նավ, որը ցանկանում է ափ հասնել:',
      },
      {
        es: 'Las velas traía de seda, la jarcia de un cendal; marinero que la manda diciendo viene un cantar, que la mar ponía en calma y a las aves hace posar.',
        hy: 'Առագաստները մետաքսից էին, պարանները՝ նուրբ գործվածքից. նավը ղեկավարող նավաստին գալիս էր երգ ասելով, որը ծովը հանդարտեցնում էր և թռչուններին վայրէջք կատարել տալիս:',
      },
      {
        es: 'Allí habló el conde Arnaldos, bien oiréis lo que dirá: "Por Dios te ruego, marinero, dígasme ora ese cantar".',
        hy: 'Այնժամ խոսեց կոմս Արնալդոսը, լավ լսեք, թե ինչ նա կասի. «Հանուն Աստծո աղաչում եմ քեզ, նավաստի՛, ասա՛ ինձ այժմ այդ երգը»:',
      },
      {
        es: 'Respondióle el marinero, tal respuesta le fue a dar: "Yo no digo esta canción sino a quien conmigo va".',
        hy: 'Պատասխանեց նրան նավաստին, այսպիսի պատասխան նրան տվեց. «Ես այս երգը չեմ ասում, բացի նրանից, ով ինձ հետ է գնում»:',
      },
    ],
    questions: [
      {
        id: 't-arn-1',
        prompt: {
          es: '¿A qué género y tipo de literatura pertenece este texto?',
          hy: 'Ո՞ր ժանրին և գրականության տեսակին է պատկանում այս տեքստը:',
        },
        options: [
          { id: 'opt-a', text: { es: 'Al romance tradicional de la literatura popular (autor anónimo, transmisión oral).', hy: 'Ժողովրդական գրականության ավանդական ռոմանսին (անանուն հեղինակ, բանավոր փոխանցում):' } },
          { id: 'opt-b', text: { es: 'A una novela culta renacentista firmada por Cervantes.', hy: 'Սերվանտեսի կողմից ստորագրված վերածննդի հեղինակային վեպին:' } },
          { id: 'opt-c', text: { es: 'A un mito sagrado sobre la creación del mundo.', hy: 'Աշխարհի ստեղծման մասին սրբազան առասպելին:' } },
          { id: 'opt-d', text: { es: 'A una noticia periodística contemporánea.', hy: 'Ժամանակակից լրագրային նորության:' } },
        ],
        correctOptionId: 'opt-a',
        explanation: {
          es: 'Es uno de los romances viejos más célebres de la tradición oral española medieval.',
          hy: 'Իսպանական միջնադարյան բանավոր ավանդույթի ամենահայտնի հին ռոմանսներից մեկն է:',
        },
      },
      {
        id: 't-arn-2',
        prompt: {
          es: '¿Cuál es la medida de los versos y el tipo de rima característicos del romance?',
          hy: 'Ո՞րն է ռոմանսին բնորոշ տողերի չափը և հանգի տեսակը:',
        },
        options: [
          { id: 'opt-a', text: { es: 'Versos octosílabos (8 sílabas) con rima asonante en los versos pares.', hy: 'Ութավանկ տողեր (8 վանկ)՝ զույգ տողերի ասոնանս հանգով:' } },
          { id: 'opt-b', text: { es: 'Versos endecasílabos (11 sílabas) con rima consonante.', hy: 'Տասնմեկավանկ տողեր՝ կոնսոնանս հանգով:' } },
          { id: 'opt-c', text: { es: 'Prosa rimada sin cómputo de sílabas.', hy: 'Հանգավորված արձակ՝ առանց վանկերի հաշվարկի:' } },
          { id: 'opt-d', text: { es: 'Alejandrinos de 14 sílabas.', hy: '14 վանկանի ալեքսանդրյան տողեր:' } },
        ],
        correctOptionId: 'opt-a',
        explanation: {
          es: 'Todo romance español consta de una tirada indefinida de versos de 8 sílabas con rima asonante en los versos pares (mar, Juan, cazar, cantar, dar).',
          hy: 'Յուրաքանչյուր իսպանական ռոմանս բաղկացած է 8-վանկանի տողերի շարքից՝ զույգ տողերի ասոնանս հանգով (mar, Juan, cazar, cantar, dar):',
        },
      },
      {
        id: 't-arn-3',
        prompt: {
          es: 'En la frase del conde: "Por Dios te ruego, marinero, dígasme ora ese cantar", ¿qué modalidad oracional y función del lenguaje predominan?',
          hy: 'Կոմսի խոսքում. «Por Dios te ruego, marinero, dígasme ora ese cantar», ո՞ր նախադասության եղանակը և լեզվական գործառույթն են գերիշխում:',
        },
        options: [
          { id: 'opt-a', text: { es: 'Modalidad exhortativa (ruego/petición) y función apelativa (dirigida al marinero).', hy: 'Հորդորական եղանակ (խնդրանք) և ազդեցության գործառույթ (ուղղված նավաստուն):' } },
          { id: 'opt-b', text: { es: 'Modalidad enunciativa negativa y función metalingüística.', hy: 'Ժխտական պատմողական եղանակ և մետալեզվական գործառույթ:' } },
          { id: 'opt-c', text: { es: 'Modalidad dubitativa y función fática.', hy: 'Տարակուսական եղանակ և կապի գործառույթ:' } },
          { id: 'opt-d', text: { es: 'Modalidad exclusivamente interrogativa directa.', hy: 'Բացառապես ուղղակի հարցական եղանակ:' } },
        ],
        correctOptionId: 'opt-a',
        explanation: {
          es: 'El conde ruega con vocativo ("marinero") y le pide que actúe contándole el secreto de su cantar.',
          hy: 'Կոմսը խնդրում է կոչականով («marinero») և պահանջում գործել՝ իրեն պատմելով իր երգի գաղտնիքը:',
        },
      },
    ],
  },
  {
    id: 'text-monte-animas',
    title: {
      es: 'El Monte de las Ánimas (Leyenda culta)',
      hy: 'Հոգիների լեռը (Հեղինակային լեգենդ)',
    },
    authorOrSource: 'Gustavo Adolfo Bécquer (Siglo XIX)',
    genre: {
      es: 'Leyenda romántica (Literatura culta)',
      hy: 'Ռոմանտիկ լեգենդ (Հեղինակային գրականություն)',
    },
    textParagraphs: [
      {
        es: 'La noche de difuntos me despertó a no sé qué hora el doble de las campanas; su tañido monótono y eterno me trajo a las mientes esta tradición que oí hace poco en Soria.',
        hy: 'Մեռելոցի գիշերը ինձ արթնացրեց չգիտեմ որ ժամին զանգերի ղողանջը. նրա միապաղաղ և հավերժական հնչյունն իմ մտքում արթնացրեց այս ավանդազրույցը, որը վերջերս լսեցի Սորիայում:',
      },
      {
        es: 'Ese monte que hoy llaman de las Ánimas pertenecía a los Templarios, cuyos caballeros guerreros y religiosos murieron todos en una sangrienta lucha contra los nobles de Soria.',
        hy: 'Այդ լեռը, որն այսօր կոչում են Հոգիների լեռ, պատկանում էր Տաճարականներին (տեմպլիերներին), որոնց ռազմիկ և կրոնավոր ասպետները բոլորը զոհվեցին Սորիայի ազնվականների դեմ արյունալի մարտում:',
      },
      {
        es: 'Desde entonces dicen que cuando llega la noche de difuntos se oye doblar sola la campana de la capilla, y los esqueletos de los muertos, envueltos en jirones de sus sudarios, corren como en una cacería infernal.',
        hy: 'Այդ ժամանակից ի վեր ասում են, որ երբ գալիս է ննջեցյալների գիշերը, լսվում է, թե ինչպես է ինքն իրեն ղողանջում մատուռի զանգը, և մեռյալների կմախքները՝ պատանների պատառոտվածքների մեջ փաթաթված, վազում են ինչպես դժոխային որսի ժամանակ:',
      },
    ],
    questions: [
      {
        id: 't-mon-1',
        prompt: {
          es: '¿Por qué este texto es una LEYENDA y no un mito?',
          hy: 'Ինչո՞ւ է այս տեքստը ԼԵԳԵՆԴ և ոչ թե առասպել:',
        },
        options: [
          { id: 'opt-a', text: { es: 'Porque se sitúa en un lugar geográfico real (Soria, monte real) con base histórica (los Templarios) a la que se suman apariciones fantásticas.', hy: 'Քանի որ այն տեղադրված է իրական աշխարհագրական վայրում (Սորիա, իրական լեռ)՝ պատմական հիմքով (տաճարականներ), որին գումարվում են ֆանտաստիկ ուրվականներ:' } },
          { id: 'opt-b', text: { es: 'Porque sus protagonistas son dioses del Olimpo como Zeus y Poseidón.', hy: 'Քանի որ նրա հերոսներն են Օլիմպոսի աստվածները, ինչպիսիք են Զևսը և Պոսեյդոնը:' } },
          { id: 'opt-c', text: { es: 'Porque está compuesto exclusivamente en verso octosílabo.', hy: 'Քանի որ կազմված է բացառապես ութավանկ տողերով:' } },
          { id: 'opt-d', text: { es: 'Porque es una noticia real comprobada por los jueces.', hy: 'Քանի որ դատավորների կողմից ստուգված իրական լուր է:' } },
        ],
        correctOptionId: 'opt-a',
        explanation: {
          es: 'Las leyendas siempre mezclan un marco real conocido (Soria) y personajes históricos con sucesos mágicos o sobrenaturales.',
          hy: 'Լեգենդները միշտ խառնում են ծանոթ իրական միջավայրը (Սորիա) և պատմական կերպարները կախարդական կամ գերբնական դեպքերի հետ:',
        },
      },
      {
        id: 't-mon-2',
        prompt: {
          es: '¿Pertenece este texto a la literatura popular o a la culta?',
          hy: 'Այս տեքստը պատկանո՞ւմ է ժողովրդական, թե՞ հեղինակային գրականությանը:',
        },
        options: [
          { id: 'opt-a', text: { es: 'A la literatura culta, porque fue escrita por un autor conocido (Gustavo Adolfo Bécquer) con lenguaje cuidado.', hy: 'Հեղինակային գրականությանը, քանի որ այն գրվել է հայտնի հեղինակի (Բեկեր) կողմից՝ մշակված լեզվով:' } },
          { id: 'opt-b', text: { es: 'A la popular, porque es anónima y no tiene autor registrado.', hy: 'Ժողովրդականին, քանի որ անանուն է և չունի գրանցված հեղինակ:' } },
          { id: 'opt-c', text: { es: 'A un cantar de gesta cantado por un juglar.', hy: 'Խուգլարի երգած հերոսական պոեմին:' } },
          { id: 'opt-d', text: { es: 'A un trabalenguas popular.', hy: 'Ժողովրդական շուտասելուկին:' } },
        ],
        correctOptionId: 'opt-a',
        explanation: {
          es: 'Bécquer recoge leyendas tradicionales y las recrea como literatura culta escrita y firmada por él.',
          hy: 'Բեկերը վերցնում է ավանդական լեգենդները և վերստեղծում դրանք որպես իր կողմից գրված և ստորագրված հեղինակային գրականություն:',
        },
      },
    ],
  },
  {
    id: 'text-whatsapp-escolar',
    title: {
      es: 'Situación cotidiana: Mensaje de WhatsApp escolar',
      hy: 'Առօրյա իրավիճակ՝ դպրոցական WhatsApp հաղորդագրություն',
    },
    authorOrSource: 'Comunicación de la vida real (1.º de ESO)',
    genre: {
      es: 'Texto comunicativo cotidiano (Chat digital)',
      hy: 'Առօրյա հաղորդակցական տեքստ (Թվային չաթ)',
    },
    textParagraphs: [
      {
        es: 'Lucía: "¡Hola, Pablo! ¿Me lees? Mañana el examen de Lengua empieza a las 9:00 en el aula magna. ¡No te olvides del estuche y de los bolígrafos azul y negro! ¡Qué nervios tengo!"',
        hy: 'Լուսիա. «Ողջո՜ւյն, Պաբլո: Կարդո՞ւմ ես ինձ: Վաղը իսպաներենի քննությունը սկսվում է ժամը 9:00-ին մեծ դահլիճում: Չմոռանա՛ս գրչատուփը և կապույտ ու սև գրիչները: Ի՜նչ նյարդային եմ»:',
      },
      {
        es: 'Pablo: "¡Hola, Lucía! Sí, te leo perfectamente. Gracias por avisarme. Ojalá saquemos los dos un sobresaliente. Nos vemos mañana en la puerta."',
        hy: 'Պաբլո. «Ողջո՜ւյն, Լուսիա: Այո, կատարյալ կարդում եմ քեզ: Շնորհակալ եմ զգուշացնելու համար: Երանի՜ երկուսս էլ գերազանց ստանանք: Կտեսնվենք վաղը դռան մոտ»:',
      },
    ],
    questions: [
      {
        id: 't-wa-1',
        prompt: {
          es: 'Identifica el CÓDIGO y el CANAL en esta comunicación:',
          hy: 'Որոշիր ԿՈԴԸ և ԿԱՊՈՒՂԻՆ այս հաղորդակցության մեջ:',
        },
        options: [
          { id: 'opt-a', text: { es: 'Código: la lengua española escrita. Canal: internet, red móvil y pantallas táctiles.', hy: 'Կոդ՝ իսպաներեն գրավոր լեզու: Կապուղի՝ ինտերնետ, բջջային ցանց և սենսորային էկրաններ:' } },
          { id: 'opt-b', text: { es: 'Código: las ondas sonoras del aire. Canal: el idioma español.', hy: 'Կոդ՝ օդի ձայնային ալիքներ: Կապուղի՝ իսպաներեն լեզու:' } },
          { id: 'opt-c', text: { es: 'Código: el aula magna. Canal: el examen de Lengua.', hy: 'Կոդ՝ մեծ դահլիճ: Կապուղի՝ իսպաներենի քննություն:' } },
          { id: 'opt-d', text: { es: 'Código: el estuche. Canal: los bolígrafos.', hy: 'Կոդ՝ գրչատուփ: Կապուղի՝ գրիչներ:' } },
        ],
        correctOptionId: 'opt-a',
        explanation: {
          es: 'El código es el idioma (español escrito) y el canal es el soporte técnico a través del cual viajan los datos (móvil/red).',
          hy: 'Կոդը լեզուն է (գրավոր իսպաներեն), իսկ կապուղին՝ տեխնիկական կրիչը, որով ճամփորդում են տվյալները (հեռախոս/ցանց):',
        },
      },
      {
        id: 't-wa-2',
        prompt: {
          es: 'En la frase de Pablo: "Ojalá saquemos los dos un sobresaliente", ¿qué modalidad oracional y función del lenguaje hay?',
          hy: 'Պաբլոյի խոսքում. «Ojalá saquemos los dos un sobresaliente», ո՞ր նախադասության եղանակը և լեզվական գործառույթն են առկա:',
        },
        options: [
          { id: 'opt-a', text: { es: 'Modalidad desiderativa y función expresiva o emotiva.', hy: 'Ըղձական եղանակ և զգացմունքային (հուզական) գործառույթ:' } },
          { id: 'opt-b', text: { es: 'Modalidad imperativa y función apelativa.', hy: 'Հրամայական եղանակ և ազդեցության գործառույթ:' } },
          { id: 'opt-c', text: { es: 'Modalidad enunciativa afirmativa y función poética.', hy: 'Հաստատական պատմողական եղանակ և բանաստեղծական գործառույթ:' } },
          { id: 'opt-d', text: { es: 'Modalidad interrogativa y función metalingüística.', hy: 'Հարցական եղանակ և մետալեզվական գործառույթ:' } },
        ],
        correctOptionId: 'opt-a',
        explanation: {
          es: '"Ojalá" expresa el deseo del emisor (desiderativa), lo que se corresponde con la función emotiva/expresiva.',
          hy: '«Ojalá»-ն արտահայտում է խոսողի ցանկությունը (ըղձական), ինչը համապատասխանում է զգացմունքային գործառույթին:',
        },
      },
    ],
  },
];
