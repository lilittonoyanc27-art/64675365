import { Topic } from './types.ts';

export const TOPICS_DATA: Topic[] = [
  {
    id: 'funciones-lenguaje',
    number: 1,
    title: {
      es: 'Las funciones del lenguaje',
      hy: 'Լեզվի գործառույթները',
    },
    subtitle: {
      es: 'La intención del emisor al comunicarse y los seis propósitos del lenguaje',
      hy: 'Հաղորդակցման ժամանակ խոսողի նպատակը և լեզվի վեց գործառույթները',
    },
    iconName: 'MessageSquareQuote',
    accentColor: 'indigo',
    sections: [
      {
        title: {
          es: '¿Qué son las funciones del lenguaje?',
          hy: 'Ի՞նչ են լեզվի գործառույթները',
        },
        description: {
          es: 'Las funciones del lenguaje son los diferentes objetivos o intenciones con los que un emisor utiliza la lengua al comunicarse. Cada función se centra en un elemento de la comunicación.',
          hy: 'Լեզվի գործառույթները տարբեր նպատակներն են կամ մտադրությունները, որոնցով խոսողն օգտագործում է լեզուն հաղորդակցվելիս: Յուրաքանչյուր գործառույթ կենտրոնանում է հաղորդակցման որևէ տարրի վրա:',
        },
        items: [
          {
            name: {
              es: '1. Función referencial o representativa',
              hy: '1. Տեղեկատվական կամ ներկայացուցչական գործառույթ',
            },
            definition: {
              es: 'Sirve para transmitir información objetiva de la realidad, datos, hechos o ideas sin mostrar sentimientos ni opiniones.',
              hy: 'Ծառայում է իրականության մասին օբյեկտիվ տեղեկություններ, փաստեր կամ գաղափարներ հաղորդելուն՝ առանց զգացմունքներ կամ կարծիքներ արտահայտելու:',
            },
            usage: {
              es: 'Se utiliza en noticias, libros de texto escolares, textos científicos y descripciones objetivas. Se centra en el contexto o referente.',
              hy: 'Կիրառվում է լուրերում, դպրոցական դասագրքերում, գիտական տեքստերում և օբյեկտիվ նկարագրություններում: Կենտրոնանում է համատեքստի վրա:',
            },
            howToIdentify: {
              es: 'Modo indicativo, oraciones enunciativas, tercera persona gramatical, entonación neutra y vocabulario objetivo (denotativo).',
              hy: 'Սահմանական եղանակ, պատմողական նախադասություններ, երրորդ դեմք, չեզոք հնչերանգ և օբյեկտիվ բառապաշար:',
            },
            examples: [
              {
                es: 'La capital de España es Madrid.',
                hy: 'Իսպանիայի մայրաքաղաքը Մադրիդն է:',
              },
              {
                es: 'El agua hierve a cien grados centígrados.',
                hy: 'Ջուրը եռում է հարյուր աստիճան Ցելսիուսում:',
              },
              {
                es: 'Mañana el examen de Lengua empezará a las nueve.',
                hy: 'Վաղը իսպաներեն լեզվի քննությունը կսկսվի ժամը իննին:',
              },
              {
                es: 'La célula es la unidad básica de la vida.',
                hy: 'Բջիջը կյանքի հիմնական միավորն է:',
              },
              {
                es: 'Ayer llovió intensamente en toda la comarca.',
                hy: 'Երեկ ողջ շրջանում ուժգին անձրև եկավ:',
              },
            ],
            distinctionFromOthers: {
              es: 'A diferencia de la expresiva, no contiene adjetivos que juzguen ni emociones ("hace calor" es referencial; "¡qué calor insoportable!" es expresiva).',
              hy: 'Ի տարբերություն զգացմունքայինի, չի պարունակում գնահատող ածականներ կամ հույզեր («շոգ է»-ն տեղեկատվական է, իսկ «ինչպիսի՜ անտանելի շոգ է»-ն՝ զգացմունքային):',
            },
            examTip: {
              es: 'Si el enunciado solo cuenta un hecho comprobable sin que intervenga el estado de ánimo, la función es referencial.',
              hy: 'Եթե արտահայտությունը միայն պատմում է ստուգելի փաստ առանց տրամադրության միջամտության, ապա գործառույթը տեղեկատվական է:',
            },
          },
          {
            name: {
              es: '2. Función expresiva o emotiva',
              hy: '2. Զգացմունքային կամ հուզական գործառույթ',
            },
            definition: {
              es: 'Permite al emisor exteriorizar sus sentimientos, emociones, estados de ánimo, opiniones subjetivas o sensaciones físicas.',
              hy: 'Թույլ է տալիս խոսողին արտահայտել իր զգացմունքները, հույզերը, տրամադրությունը, սուբյեկտիվ կարծիքները կամ ֆիզիկական զգացողությունները:',
            },
            usage: {
              es: 'Se utiliza en diarios íntimos, opiniones personales, quejas, felicitaciones y exclamaciones. Se centra en el emisor.',
              hy: 'Կիրառվում է օրագրերում, անձնական կարծիքներում, բողոքներում, շնորհավորանքներում և բացականչություններում: Կենտրոնանում է խոսողի վրա:',
            },
            howToIdentify: {
              es: 'Uso de primera persona ("yo", "mi"), interjecciones ("¡ay!", "¡uf!"), oraciones exclamativas o desiderativas, y adjetivos valorativos ("horrible", "maravilloso").',
              hy: 'Առաջին դեմքի կիրառում («ես», «իմ»), ձայնարկություններ («վա՜յ», «ուֆ»), բացականչական նախադասություններ և գնահատող ածականներ («հրաշալի», «սարսափելի»):',
            },
            examples: [
              {
                es: '¡Qué alegría me da verte después de tanto tiempo!',
                hy: 'Ի՜նչ ուրախություն է քեզ տեսնել այսքան ժամանակ անց:',
              },
              {
                es: '¡Ay, me he golpeado fuerte en la rodilla!',
                hy: 'Վա՜յ, ծունկս ուժեղ հարվածեցի:',
              },
              {
                es: 'Estoy muy cansado de estudiar toda la tarde.',
                hy: 'Շատ հոգնած եմ ողջ կեսօրը սովորելուց:',
              },
              {
                es: 'Esa película me pareció absolutamente fantástica.',
                hy: 'Այդ ֆիլմն ինձ բացարձակապես հրաշալի թվաց:',
              },
              {
                es: '¡Ojalá consiga una buena nota en el examen!',
                hy: 'Երանի՜ լավ գնահատական ստանամ քննությունից:',
              },
            ],
            distinctionFromOthers: {
              es: 'Se centra en lo que siente el emisor, mientras que la apelativa busca cambiar la actitud del que escucha.',
              hy: 'Կենտրոնանում է խոսողի զգացածի վրա, մինչդեռ ազդեցության գործառույթը ձգտում է ազդել լսողի վարքի վրա:',
            },
            examTip: {
              es: 'Busca signos de admiración (¡!), verbos en primera persona ("siento", "opino") o adjetivos de valoración.',
              hy: 'Փնտրիր բացականչական նշաններ (¡!), առաջին դեմքի բայեր («զգում եմ», «կարծում եմ») կամ գնահատող ածականներ:',
            },
          },
          {
            name: {
              es: '3. Función apelativa o conativa',
              hy: '3. Ազդեցության կամ կոչական գործառույթ',
            },
            definition: {
              es: 'Tiene como objetivo influir en el receptor para que actúe, responda, cambie de opinión o haga algo.',
              hy: 'Նպատակ ունի ազդել լսողի վրա, որպեսզի նա գործի, պատասխանի, փոխի կարծիքը կամ որևէ բան անի:',
            },
            usage: {
              es: 'Aparece en órdenes, ruegos, preguntas directas, peticiones, publicidad y discursos persuasivos. Se centra en el receptor.',
              hy: 'Հանդիպում է հրամաններում, խնդրանքներում, հարցերում, գովազդում և համոզիչ ելույթներում: Կենտրոնանում է լսողի/ընդունողի վրա:',
            },
            howToIdentify: {
              es: 'Uso del modo imperativo ("ven", "escucha"), oraciones interrogativas directas, vocativos ("Carlos, ven") y segunda persona gramatical ("tú", "vosotros").',
              hy: 'Հրամայական եղանակ («եկ», «լսիր»), հարցական նախադասություններ, կոչականներ («Կառլո՛ս, արի») և երկրորդ դեմք («դու», «դուք»):',
            },
            examples: [
              {
                es: 'Por favor, abre la ventana que hace mucho calor.',
                hy: 'Խնդրում եմ, բաց պատուհանը, շատ շոգ է:',
              },
              {
                es: '¿Has terminado ya la tarea de matemáticas?',
                hy: 'Արդեն ավարտե՞լ ես մաթեմատիկայի տնային աշխատանքը:',
              },
              {
                es: '¡Cierra la puerta con cuidado!',
                hy: 'Դուռը զգուշությամբ փակի՛ր:',
              },
              {
                es: 'Compre este champú y lucirá un cabello brillante.',
                hy: 'Գնեք այս շամպունը և կունենաք փայլուն մազեր:',
              },
              {
                es: 'Escúchame atentamente cuando te hablo.',
                hy: 'Ուշադիր լսիր ինձ, երբ քեզ հետ խոսում եմ:',
              },
            ],
            distinctionFromOthers: {
              es: 'Aunque lleve signos de exclamación, si es una orden dirigida al oyente ("¡Cállate!"), es apelativa, no expresiva.',
              hy: 'Թեև կարող է ունենալ բացականչական նշաններ, եթե դա հրաման է լսողին («Լռի՛ր»), ապա այն ազդեցության է, ոչ թե զգացմունքային:',
            },
            examTip: {
              es: 'Si puedes responder con una acción o una respuesta dirigida al emisor, la función predominante es apelativa.',
              hy: 'Եթե կարող ես պատասխանել որևէ գործողությամբ կամ խոսողին ուղղված պատասխանով, գերիշխող գործառույթն ազդեցությանն է:',
            },
          },
          {
            name: {
              es: '4. Función fática o de contacto',
              hy: '4. Կապի հաստատման կամ շփման գործառույթ',
            },
            definition: {
              es: 'Se utiliza para iniciar, prolongar, verificar o interrumpir la comunicación a través del canal, asegurando que no se corte el contacto.',
              hy: 'Օգտագործվում է կապուղու միջոցով հաղորդակցությունը սկսելու, շարունակելու, ստուգելու կամ ավարտելու համար՝ ապահովելով շփման անխափանությունը:',
            },
            usage: {
              es: 'Saludos, despedidas, fórmulas de cortesía al teléfono y muletillas de confirmación. Se centra en el canal de comunicación.',
              hy: 'Ողջույններ, հրաժեշտներ, հեռախոսային քաղաքավարի արտահայտություններ և հաստատող բառեր: Կենտրոնանում է հաղորդակցման կապուղու վրա:',
            },
            howToIdentify: {
              es: 'Fórmulas fijas ("¡Hola!", "Adiós", "¿Diga?", "¿Me oyes?"), repeticiones y muletillas ("¿eh?", "¿vale?", "sí, sí").',
              hy: 'Կայուն արտահայտություններ («Բարև», «Ցտեսություն», «Լսո՞ւմ եք», «Լսո՞ւմ ես ինձ»), կրկնություններ և միջանկյալ բառեր («հա՞», «լա՞վ»):',
            },
            examples: [
              {
                es: '¿Diga? ¿Quién habla por teléfono?',
                hy: 'Լսո՞ւմ եմ: Ո՞վ է հեռախոսով:',
              },
              {
                es: '¡Hola! Buenos días a todos.',
                hy: 'Բարև՛ ձեզ: Բարի լույս բոլորին:',
              },
              {
                es: '¿Me escuchas bien desde el fondo de la clase?',
                hy: 'Լա՞վ ես լսում ինձ դասարանի վերջից:',
              },
              {
                es: 'Hasta luego, nos vemos mañana por la mañana.',
                hy: 'Առայժմ, կտեսնվենք վաղն առավոտյան:',
              },
              {
                es: 'Sí, claro... te sigo escuchando... ajá.',
                hy: 'Այո, իհարկե... շարունակում եմ լսել քեզ... ըհը:',
              },
            ],
            distinctionFromOthers: {
              es: 'Casi no aporta información nueva sobre el mundo; su único propósito es mantener el canal abierto.',
              hy: 'Գրեթե չի հաղորդում աշխարհի մասին նոր տեղեկություն. նրա միակ նպատակն է կապուղին բաց պահելը:',
            },
            examTip: {
              es: 'Pregúntate: ¿esta frase sirve para comprobar si el canal funciona o para saludar? Si es así, es fática.',
              hy: 'Հարցրու ինքդ քեզ. արդյո՞ք այս նախադասությունը ծառայում է կապի աշխատանքը ստուգելուն կամ ողջունելուն: Եթե այո, ապա այն կապի գործառույթ է:',
            },
          },
          {
            name: {
              es: '5. Función metalingüística',
              hy: '5. Մետալեզվական գործառույթ',
            },
            definition: {
              es: 'Se emplea cuando usamos el lenguaje para hablar, explicar o aclarar el propio código o idioma.',
              hy: 'Կիրառվում է այն ժամանակ, երբ լեզուն օգտագործում ենք հենց նույն կոդը կամ լեզուն բացատրելու կամ պարզաբանելու համար:',
            },
            usage: {
              es: 'En clases de lengua, diccionarios, gramáticas y preguntas sobre ortografía o significado de palabras. Se centra en el código.',
              hy: 'Լեզվի դասերին, բառարաններում, քերականություններում և ուղղագրության կամ բառերի իմաստի մասին հարցերում: Կենտրոնանում է կոդի (լեզվի) վրա:',
            },
            howToIdentify: {
              es: 'Palabras gramaticales (sustantivo, verbo, tilde, sílaba), definiciones de palabras y explicaciones ortográficas.',
              hy: 'Քերականական տերմիններ (գոյական, բայ, շեշտ, վանկ), բառերի սահմանումներ և ուղղագրական բացատրություններ:',
            },
            examples: [
              {
                es: 'La palabra "árbol" lleva tilde porque es llana y termina en consonante distinta de n o s.',
                hy: '«Árbol» բառն ունի շեշտ, որովհետև այն նախավերջին վանկի շեշտով բառ է և ավարտվում է n-ից կամ s-ից տարբեր բաղաձայնով:',
              },
              {
                es: 'Los sustantivos son palabras que nombran personas, animales, cosas o ideas.',
                hy: 'Գոյականները բառեր են, որոնք անվանում են անձեր, կենդանիներ, իրեր կամ գաղափարներ:',
              },
              {
                es: '¿Qué significa el término "anáfora"?',
                hy: 'Ի՞նչ է նշանակում «անաֆորա» տերմինը:',
              },
              {
                es: '"Cantábamos" es la primera persona del plural del pretérito imperfecto de indicativo.',
                hy: '«Cantábamos»-ը սահմանական եղանակի անկատար անցյալի առաջին դեմքի հոգնակին է:',
              },
              {
                es: 'En español, los adjetivos concuerdan en género y número con el sustantivo.',
                hy: 'Իսպաներենում ածականները համաձայնում են գոյականի հետ սեռով և թվով:',
              },
            ],
            distinctionFromOthers: {
              es: 'No habla de la realidad exterior, sino de las reglas y elementos de las palabras mismas.',
              hy: 'Չի խոսում արտաքին իրականության մասին, այլ հենց բառերի կանոնների և տարրերի մասին:',
            },
            examTip: {
              es: 'Si la frase define una palabra, explica ortografía o habla de gramática, es 100% metalingüística.',
              hy: 'Եթե նախադասությունը սահմանում է որևէ բառ, բացատրում է ուղղագրություն կամ խոսում քերականությունից, ապա այն 100% մետալեզվական է:',
            },
          },
          {
            name: {
              es: '6. Función poética o estética',
              hy: '6. Բանաստեղծական կամ գեղագիտական գործառույթ',
            },
            definition: {
              es: 'Se utiliza cuando el emisor busca llamar la atención sobre la belleza y la forma del mensaje mismo, utilizando recursos expresivos.',
              hy: 'Օգտագործվում է, երբ խոսողը ձգտում է ուշադրություն հրավիրել հենց հաղորդագրության գեղեցկության և ձևի վրա՝ կիրառելով արտահայտչամիջոցներ:',
            },
            usage: {
              es: 'En poesía, novelas, cuentos literarios, canciones, trabalenguas, refranes y en eslóganes publicitarios ingeniosos. Se centra en el mensaje.',
              hy: 'Պոեզիայում, վեպերում, գրական պատմվածքներում, երգերում, շուտասելուկներում, առածներում և հնարամիտ գովազդային կարգախոսներում: Կենտրոնանում է հաղորդագրության վրա:',
            },
            howToIdentify: {
              es: 'Rima, ritmo, métrica, figuras retóricas (metáforas, aliteraciones, personificaciones) y lenguaje connotativo.',
              hy: 'Հանգ, ռիթմ, չափ, գեղարվեստական պատկերավորման միջոցներ (փոխաբերություններ, բաղաձայնույթներ, անձնավորումներ) և փոխաբերական իմաստ:',
            },
            examples: [
              {
                es: 'En el silencio solo se escuchaba un susurro de abejas que sonaba.',
                hy: 'Լռության մեջ լսվում էր միայն մեղուների մի շշուկ, որ հնչում էր:',
              },
              {
                es: 'Tres tristes tigres tragan trigo en un trigal.',
                hy: 'Երեք տխուր վագր ցորեն են կուլ տալիս ցորենի արտում:',
              },
              {
                es: 'Caminante, no hay camino, se hace camino al andar.',
                hy: 'Ճամփո՛րդ, ճանապարհ չկա, ճանապարհը հարթվում է քայլելիս:',
              },
              {
                es: 'Tus ojos son dos luceros que iluminan mi sendero.',
                hy: 'Քո աչքերը երկու լուսատուներ են, որ լուսավորում են իմ ճամփան:',
              },
              {
                es: 'El viento de la noche gira en el cielo y canta.',
                hy: 'Գիշերային քամին պտտվում է երկնքում և երգում:',
              },
            ],
            distinctionFromOthers: {
              es: 'No solo importa qué se dice, sino cómo se dice de forma bella, artística o llamativa.',
              hy: 'Կարևոր է ոչ միայն այն, թե ինչ է ասվում, այլև այն, թե ինչպես է այն գեղեցիկ, գեղարվեստական կամ տպավորիչ կերպով մատուցվում:',
            },
            examTip: {
              es: 'Si detectas rima, juego de sonidos, metáfora o estilo poético, la función es poética.',
              hy: 'Եթե նկատում ես հանգ, հնչյունախաղ, փոխաբերություն կամ բանաստեղծական ոճ, ապա գործառույթը բանաստեղծական է:',
            },
          },
        ],
      },
    ],
    selfExplanationPrompt: {
      es: 'Explica con tus propias palabras qué diferencia hay entre la función referencial y la función poética, y pon un ejemplo de cada una.',
      hy: 'Բացատրիր քո բառերով, թե ինչ տարբերություն կա տեղեկատվական և բանաստեղծական գործառույթների միջև, և բեր օրինակ յուրաքանչյուրից:',
    },
    modelExplanation: {
      es: 'La función referencial transmite hechos objetivos de la realidad sin emociones ni adornos (ej.: "Hoy es martes"), mientras que la función poética busca la belleza y llamar la atención sobre la forma del mensaje usando figuras o rima (ej.: "La luna de plata navega en el río").',
      hy: 'Տեղեկատվական գործառույթը հաղորդում է իրականության օբյեկտիվ փաստեր առանց հույզերի կամ զարդարանքի (օր.՝ «Այսօր երեքշաբթի է»), մինչդեռ բանաստեղծական գործառույթը ձգտում է գեղեցկության և ուշադրություն է հրավիրում հաղորդագրության ձևի վրա՝ օգտագործելով պատկերավորման միջոցներ կամ հանգ (օր.՝ «Արծաթե լուսինը նավարկում է գետում»):',
    },
    evaluationCriteria: [
      {
        es: 'Menciona que la referencial se enfoca en la realidad/objetividad.',
        hy: 'Նշում է, որ տեղեկատվականը կենտրոնանում է իրականության/օբյեկտիվության վրա:',
      },
      {
        es: 'Menciona que la poética se enfoca en la belleza/forma del mensaje.',
        hy: 'Նշում է, որ բանաստեղծականը կենտրոնանում է գեղեցկության/հաղորդագրության ձևի վրա:',
      },
      {
        es: 'Aporta ejemplos correctos y coherentes para ambas funciones.',
        hy: 'Բերում է ճիշտ և տրամաբանական օրինակներ երկու գործառույթների համար էլ:',
      },
    ],
  },
  {
    id: 'modalidades-oracionales',
    number: 2,
    title: {
      es: 'Las modalidades oracionales',
      hy: 'Նախադասությունների եղանակները ըստ հաղորդակցման նպատակի',
    },
    subtitle: {
      es: 'La actitud e intención del hablante al emitir una oración',
      hy: 'Խոսողի վերաբերմունքը և նպատակը նախադասություն արտասանելիս',
    },
    iconName: 'Sparkles',
    accentColor: 'teal',
    sections: [
      {
        title: {
          es: '¿Qué es la modalidad oracional?',
          hy: 'Ի՞նչ է նախադասության հաղորդակցական եղանակը',
        },
        description: {
          es: 'La modalidad oracional refleja la actitud del emisor ante lo que dice: si informa, pregunta, expresa un deseo, manda, duda o se emociona.',
          hy: 'Նախադասության եղանակը արտացոլում է խոսողի վերաբերմունքն իր ասածի նկատմամբ՝ արդյոք նա տեղեկացնում է, հարցնում, ցանկություն արտահայտում, հրամայում, կասկածում, թե հուզվում:',
        },
        items: [
          {
            name: {
              es: '1. Oraciones enunciativas afirmativas',
              hy: '1. Հաստատական պատմողական նախադասություններ',
            },
            definition: {
              es: 'Afirman un hecho o una realidad de manera objetiva y serena.',
              hy: 'Հաստատում են որևէ փաստ կամ իրականություն օբյեկտիվ և հանգիստ կերպով:',
            },
            howToIdentify: {
              es: 'Verbo en modo indicativo, entonación descendente al final y ausencia de palabras negativas.',
              hy: 'Բայը սահմանական եղանակում է, վերջում իջնող հնչերանգ և ժխտական բառերի բացակայություն:',
            },
            examples: [
              {
                es: 'Hoy hace bastante frío en la calle.',
                hy: 'Այսօր փողոցում բավականին ցուրտ է:',
              },
              {
                es: 'Mi hermano practica baloncesto todos los martes.',
                hy: 'Իմ եղբայրը բասկետբոլ է պարապում ամեն երեքշաբթի:',
              },
              {
                es: 'El tren llegó a su hora.',
                hy: 'Գնացքը ժամանեց ժամանակին:',
              },
              {
                es: 'Hemos aprobado el examen con buena nota.',
                hy: 'Մենք քննությունը հանձնեցինք լավ գնահատականով:',
              },
              {
                es: 'La biblioteca abre a las cuatro de la tarde.',
                hy: 'Գրադարանը բացվում է կեսօրից հետո ժամը չորսին:',
              },
            ],
            examTip: {
              es: 'Comprueba que no contenga "no", "nunca", "jamás" ni signos de interrogación o exclamación.',
              hy: 'Ստուգիր, որ չլինեն «no», «nunca», «jamás» բառերը, ոչ էլ հարցական կամ բացականչական նշաններ:',
            },
          },
          {
            name: {
              es: '2. Oraciones enunciativas negativas',
              hy: '2. Ժխտական պատմողական նախադասություններ',
            },
            definition: {
              es: 'Niegan la existencia o el cumplimiento de un hecho o acción.',
              hy: 'Ժխտում են որևէ փաստի կամ գործողության գոյությունը կամ կատարումը:',
            },
            howToIdentify: {
              es: 'Presencia obligatoria de adverbios de negación como "no", "nunca", "jamás", "tampoco", "nada", "nadie".',
              hy: 'Ժխտական մակբայների պարտադիր առկայություն, ինչպիսիք են «no», «nunca», «jamás», «tampoco», «nada», «nadie»:',
            },
            examples: [
              {
                es: 'No tengo hambre en este momento.',
                hy: 'Այս պահին քաղցած չեմ:',
              },
              {
                es: 'Nadie vino a la reunión informativa.',
                hy: 'Ոչ ոք չեկավ տեղեկատվական հանդիպմանը:',
              },
              {
                es: 'Nunca he viajado en avión.',
                hy: 'Երբեք ինքնաթիռով չեմ ճամփորդել:',
              },
              {
                es: 'Tampoco nosotros sabíamos la respuesta correcta.',
                hy: 'Մենք նույնպես չգիտեինք ճիշտ պատասխանը:',
              },
              {
                es: 'No queda leche en la nevera.',
                hy: 'Սառնարանում կաթ չի մնացել:',
              },
            ],
            examTip: {
              es: 'Si informa de algo que NO ocurre usando "no" o "nunca", es enunciativa negativa.',
              hy: 'Եթե տեղեկացնում է ինչ-որ բանի մասին, որ ՉԻ կատարվում՝ օգտագործելով «no» կամ «nunca», ապա այն ժխտական պատմողական է:',
            },
          },
          {
            name: {
              es: '3. Oraciones interrogativas',
              hy: '3. Հարցական նախադասություններ',
            },
            definition: {
              es: 'Formulan una pregunta para obtener información del receptor o confirmar un dato.',
              hy: 'Տալիս են հարց՝ լսողից տեղեկություն ստանալու կամ որևէ փաստ հաստատելու համար:',
            },
            howToIdentify: {
              es: 'Signos de interrogación (¿ ?), pronombres o adverbios interrogativos (qué, quién, dónde, cuándo, cómo) o entonación ascendente.',
              hy: 'Հարցական նշաններ (¿ ?), հարցական դերանուններ կամ մակբայներ (qué, quién, dónde, cuándo, cómo) կամ բարձրացող հնչերանգ:',
            },
            examples: [
              {
                es: '¿Dónde está mi libro de Lengua?',
                hy: 'Որտե՞ղ է իմ իսպաներենի գիրքը:',
              },
              {
                es: '¿Has preparado el material para la clase de mañana?',
                hy: 'Պատրաստե՞լ ես նյութերը վաղվա դասի համար:',
              },
              {
                es: 'Dime cuántos alumnos vendrán a la excursión. (interrogativa indirecta)',
                hy: 'Ասա ինձ, թե քանի աշակերտ կգա էքսկուրսիային (անուղղակի հարցական):',
              },
              {
                es: '¿A qué hora sale el autobús hacia el museo?',
                hy: 'Ո՞ր ժամին է ավտոբուսը մեկնում դեպի թանգարան:',
              },
              {
                es: '¿Te gusta leer novelas de aventuras?',
                hy: 'Սիրո՞ւմ ես արկածային վեպեր կարդալ:',
              },
            ],
            examTip: {
              es: 'Recuerda que en español las interrogativas directas SIEMPRE abren con "¿" y cierran con "?".',
              hy: 'Հիշիր, որ իսպաներենում ուղղակի հարցական նախադասությունները ՄԻՇՏ սկսվում են «¿»-ով և ավարտվում «?»-ով:',
            },
          },
          {
            name: {
              es: '4. Oraciones exclamativas',
              hy: '4. Բացականչական նախադասություններ',
            },
            definition: {
              es: 'Expresan con intensidad una emoción súbita: sorpresa, admiración, enfado, alegría o susto.',
              hy: 'Մեծ ուժգնությամբ արտահայտում են հանկարծակի հույզ՝ զարմանք, հիացմունք, զայրույթ, ուրախություն կամ վախ:',
            },
            howToIdentify: {
              es: 'Signos de admiración (¡ !), entonación enfática y palabras exclamativas (¡qué...!, ¡cuánto...!).',
              hy: 'Բացականչական նշաններ (¡ !), շեշտված հնչերանգ և բացականչական բառեր (¡qué...!, ¡cuánto...!):',
            },
            examples: [
              {
                es: '¡Qué bonito es este lugar de la montaña!',
                hy: 'Ի՜նչ գեղեցիկ է լեռան այս վայրը:',
              },
              {
                es: '¡Cuánto me alegro de verte por fin!',
                hy: 'Որքա՜ն ուրախ եմ քեզ վերջապես տեսնելու համար:',
              },
              {
                es: '¡Qué susto nos hemos llevado con el trueno!',
                hy: 'Ինչպիսի՜ վախ ապրեցինք որոտից:',
              },
              {
                es: '¡Menudo golazo acaba de marcar el delantero!',
                hy: 'Ինչպիսի՜ գոլ հենց նոր խփեց հարձակվողը:',
              },
              {
                es: '¡Qué día tan caluroso hace hoy!',
                hy: 'Ի՜նչ շոգ օր է այսօր:',
              },
            ],
            examTip: {
              es: 'No confundas exclamativa con imperativa: si expresa emoción es exclamativa; si manda hacer algo es imperativa.',
              hy: 'Մի՛ շփոթիր բացականչականը հրամայականի հետ. եթե արտահայտում է հույզ, այն բացականչական է, իսկ եթե հրամայում է անել որևէ բան՝ հրամայական:',
            },
          },
          {
            name: {
              es: '5. Oraciones exhortativas o imperativas',
              hy: '5. Հորդորական կամ հրամայական նախադասություններ',
            },
            definition: {
              es: 'Expresan una orden, un mandato, un ruego, un consejo o una prohibición dirigida al receptor.',
              hy: 'Արտահայտում են լսողին ուղղված հրաման, կարգադրություն, խնդրանք, խորհուրդ կամ արգելք:',
            },
            howToIdentify: {
              es: 'Verbos en modo imperativo o en subjuntivo con "no" (para prohibiciones), fórmulas de cortesía ("por favor").',
              hy: 'Բայերը հրամայական եղանակում են կամ ըղձականում «no»-ով (արգելքների դեպքում), քաղաքավարի արտահայտություններ («խնդրում եմ»):',
            },
            examples: [
              {
                es: 'Cierra la puerta con suavidad, por favor.',
                hy: 'Փակի՛ր դուռը մեղմորեն, խնդրում եմ:',
              },
              {
                es: 'Haz los deberes antes de salir a jugar.',
                hy: 'Արա՛ տնային աշխատանքը խաղալու դուրս գալուց առաջ:',
              },
              {
                es: 'No cruces la calle con el semáforo en rojo.',
                hy: 'Մի՛ անցիր փողոցը լուսացույցի կարմիր լույսի տակ:',
              },
              {
                es: 'Escuchad con atención las explicaciones del profesor.',
                hy: 'Ուշադրությամբ լսե՛ք ուսուցչի բացատրությունները:',
              },
              {
                es: 'Guarda silencio en la sala de lectura.',
                hy: 'Լռությո՛ւն պահպանիր ընթերցասրահում:',
              },
            ],
            examTip: {
              es: 'Fíjate en el verbo: si te dice qué hacer o qué no hacer, es exhortativa o imperativa.',
              hy: 'Ուշադրություն դարձրու բային. եթե այն քեզ ասում է՝ ինչ անել կամ ինչ չանել, ապա այն հորդորական կամ հրամայական է:',
            },
          },
          {
            name: {
              es: '6. Oraciones desiderativas',
              hy: '6. Ըղձական նախադասություններ',
            },
            definition: {
              es: 'Expresan un deseo o anhelo del emisor sin pedir directamente al receptor que lo cumpla.',
              hy: 'Արտահայտում են խոսողի ցանկությունը կամ իղձը՝ առանց ուղղակիորեն լսողից պահանջելու այն իրականացնել:',
            },
            howToIdentify: {
              es: 'Verbos en modo subjuntivo acompañados de palabras como "ojalá", "que...", "así...", "quisiera".',
              hy: 'Բայերը ըղձական եղանակում են՝ ուղեկցվելով այնպիսի բառերով, ինչպիսիք են «ojalá» (երանի), «que...» (թող որ), «así...»:',
            },
            examples: [
              {
                es: '¡Ojalá apruebe el examen de Lengua con sobresaliente!',
                hy: 'Երանի՜ իսպաներենի քննությունը հանձնեմ գերազանցով:',
              },
              {
                es: '¡Que tengas un feliz viaje de vacaciones!',
                hy: 'Թո՛ղ որ ունենաս երջանիկ արձակուրդային ճամփորդություն:',
              },
              {
                es: 'Ojalá mañana haga sol y podamos ir a la playa.',
                hy: 'Երանի՜ վաղը արևոտ լինի և կարողանանք գնալ լողափ:',
              },
              {
                es: '¡Ojalá se recupere pronto de su resfriado!',
                hy: 'Երանի՜ նա շուտ ապաքինվի իր մրսածությունից:',
              },
              {
                es: '¡Que te mejores pronto!',
                hy: 'Շո՛ւտ առողջացիր (թող որ շուտ լավանաս):',
              },
            ],
            examTip: {
              es: 'La palabra clave más típica en los exámenes es "ojalá" o "que" seguido de subjuntivo ("que descanses").',
              hy: 'Քննություններում ամենաբնորոշ հիմնաբառը «ojalá»-ն է կամ «que»-ն՝ հաջորդող ըղձականով («que descanses»):',
            },
          },
          {
            name: {
              es: '7. Oraciones dubitativas',
              hy: '7. Կասկածական կամ տարակուսական նախադասություններ',
            },
            definition: {
              es: 'Expresan duda, probabilidad, posibilidad o incertidumbre sobre un acontecimiento.',
              hy: 'Արտահայտում են կասկած, հավանականություն, հնարավորություն կամ անորոշություն որևէ իրադարձության վերաբերյալ:',
            },
            howToIdentify: {
              es: 'Adverbios de duda como "quizás", "tal vez", "acaso", "probablemente", "posiblemente" o perífrasis de probabilidad ("debe de tener").',
              hy: 'Կասկածի մակբայներ, ինչպիսիք են «quizás», «tal vez» (գուցե, թերևս), «probablemente» (հավանաբար) կամ հավանականության կառույցներ:',
            },
            examples: [
              {
                es: 'Quizás venga mañana a visitarnos.',
                hy: 'Գուցե վաղը գա մեզ այցելելու:',
              },
              {
                es: 'Tal vez llueva esta tarde en la sierra.',
                hy: 'Թերևս այսօր կեսօրից հետո անձրևի լեռներում:',
              },
              {
                es: 'Probablemente lleguemos un poco tarde por el tráfico.',
                hy: 'Հավանաբար մի փոքր ուշանանք երթևեկության պատճառով:',
              },
              {
                es: 'Acaso no se acuerde de la cita.',
                hy: 'Գուցե նա չի հիշում հանդիպման մասին:',
              },
              {
                es: 'Posiblemente el profesor aplace la entrega.',
                hy: 'Հնարավոր է, որ ուսուցիչը հետաձգի հանձնումը:',
              },
            ],
            examTip: {
              es: 'Diferencia deseo de duda: "Ojalá venga" (deseo = desiderativa) vs "Quizás venga" (duda = dubitativa).',
              hy: 'Տարբերիր ցանկությունը կասկածից. «Ojalá venga» (ցանկություն = ըղձական) vs «Quizás venga» (կասկած = տարակուսական):',
            },
          },
        ],
      },
    ],
    selfExplanationPrompt: {
      es: '¿Cómo distinguirías una oración desiderativa de una dubitativa? Explica los conectores o palabras que suele usar cada una.',
      hy: 'Ինչպե՞ս կտարբերեիր ըղձական նախադասությունը տարակուսականից: Բացատրիր այն կապակցող բառերը, որոնք սովորաբար օգտագործում է յուրաքանչյուրը:',
    },
    modelExplanation: {
      es: 'La oración desiderativa expresa un deseo y usa palabras como "ojalá" o "que" con subjuntivo ("Ojalá apruebe"). La oración dubitativa expresa duda o probabilidad e introduce adverbios como "quizás", "tal vez" o "probablemente" ("Tal vez apruebe").',
      hy: 'Ըղձական նախադասությունն արտահայտում է ցանկություն և օգտագործում է բառեր, ինչպիսիք են «ojalá» կամ «que»-ն ըղձականով («Երանի հանձնեմ»): Տարակուսական նախադասությունն արտահայտում է կասկած կամ հավանականություն և ներմուծում է այնպիսի մակբայներ, ինչպիսիք են «quizás», «tal vez» կամ «probablemente» («Գուցե հանձնեմ»):',
    },
    evaluationCriteria: [
      {
        es: 'Identifica que desiderativa es un deseo y dubitativa es una duda.',
        hy: 'Ճանաչում է, որ ըղձականը ցանկություն է, իսկ տարակուսականը՝ կասկած:',
      },
      {
        es: 'Nombra "ojalá" para desiderativa y "quizás/tal vez" para dubitativa.',
        hy: 'Նշում է «ojalá»-ն ըղձականի համար և «quizás/tal vez»-ը տարակուսականի համար:',
      },
    ],
  },
  {
    id: 'comunicacion-elementos',
    number: 3,
    title: {
      es: 'La comunicación y sus elementos',
      hy: 'Հաղորդակցությունը և նրա տարրերը',
    },
    subtitle: {
      es: 'Emisor, receptor, mensaje, código, canal y contexto en situaciones reales',
      hy: 'Խոսող, լսող, հաղորդագրություն, կոդ, կապուղի և համատեքստ իրական իրավիճակներում',
    },
    iconName: 'Radio',
    accentColor: 'blue',
    sections: [
      {
        title: {
          es: '¿Qué es la comunicación y cuáles son sus elementos?',
          hy: 'Ի՞նչ է հաղորդակցությունը և որո՞նք են նրա տարրերը',
        },
        description: {
          es: 'La comunicación es el proceso mediante el cual un emisor transmite información a un receptor. Para que exista comunicación completa deben intervenir seis elementos fundamentales.',
          hy: 'Հաղորդակցությունն այն գործընթացն է, որի միջոցով խոսողը (հաղորդողը) տեղեկատվություն է փոխանցում լսողին (ընդունողին): Որպեսզի լիարժեք հաղորդակցություն գոյություն ունենա, պետք է մասնակցեն վեց հիմնարար տարրեր:',
        },
        items: [
          {
            name: {
              es: '1. Emisor',
              hy: '1. Հաղորդող (Emisor)',
            },
            definition: {
              es: 'Es la persona, animal o entidad que produce, codifica y emite el mensaje.',
              hy: 'Այն անձն է, կենդանին կամ կազմակերպությունը, ով ստեղծում, կոդավորում և ուղարկում է հաղորդագրությունը:',
            },
            howToIdentify: {
              es: 'Pregúntate: ¿Quién elabora y envía la información?',
              hy: 'Հարցրու ինքդ քեզ. ո՞վ է կազմում և ուղարկում տեղեկատվությունը:',
            },
            examples: [
              {
                es: 'María envía un WhatsApp a Carlos.',
                hy: 'Մարիան WhatsApp հաղորդագրություն է ուղարկում Կառլոսին (Հաղորդող = Մարիա):',
              },
              {
                es: 'El árbitro pita el final del partido.',
                hy: 'Մրցավարը սուլում է խաղի ավարտը (Հաղորդող = Մրցավար):',
              },
              {
                es: 'El profesor explica la lección en la pizarra.',
                hy: 'Ուսուցիչը բացատրում է դասը գրատախտակի մոտ (Հաղորդող = Ուսուցիչ):',
              },
              {
                es: 'Un semáforo se enciende en luz roja para los coches.',
                hy: 'Լուսացույցը միանում է կարմիր լույսով մեքենաների համար (Հաղորդող = Լուսացույցը / Երթևեկության ծառայությունը):',
              },
              {
                es: 'Un autor escribe una novela de aventuras.',
                hy: 'Հեղինակը գրում է արկածային վեպ (Հաղորդող = Հեղինակ):',
              },
            ],
            examTip: {
              es: 'El emisor no siempre habla con palabras: puede ser un semáforo, una campana del colegio o un árbitro con un silbato.',
              hy: 'Հաղորդողը միշտ չէ, որ բառերով է խոսում. այն կարող է լինել լուսացույց, դպրոցի զանգ կամ մրցավար՝ սուլիչով:',
            },
          },
          {
            name: {
              es: '2. Receptor',
              hy: '2. Ընդունող / Լսող (Receptor)',
            },
            definition: {
              es: 'Es quien recibe, descodifica e interpreta el mensaje.',
              hy: 'Նա է, ով ստանում, վերծանում (ապակոդավորում) և մեկնաբանում է հաղորդագրությունը:',
            },
            howToIdentify: {
              es: 'Pregúntate: ¿A quién va dirigida la información?',
              hy: 'Հարցրու ինքդ քեզ. ո՞ւմ է ուղղված տեղեկատվությունը:',
            },
            examples: [
              {
                es: 'Carlos lee el mensaje que le envió María.',
                hy: 'Կառլոսը կարդում է Մարիայի ուղարկած հաղորդագրությունը (Ընդունող = Կառլոս):',
              },
              {
                es: 'Los jugadores de fútbol escuchan el silbato.',
                hy: 'Ֆուտբոլիստները լսում են սուլիչը (Ընդունող = Խաղացողները):',
              },
              {
                es: 'Los alumnos de 1.º de ESO toman notas de la explicación.',
                hy: '1-ին դասարանի (ESO) աշակերտները գրի են առնում բացատրությունը (Ընդունող = Աշակերտները):',
              },
              {
                es: 'El conductor frena al ver el semáforo rojo.',
                hy: 'Վարորդը արգելակում է՝ տեսնելով կարմիր լույսը (Ընդունող = Վարորդը):',
              },
              {
                es: 'El lector disfruta del poema en su habitación.',
                hy: 'Ընթերցողը վայելում է բանաստեղծությունը իր սենյակում (Ընդունող = Ընթերցողը):',
              },
            ],
            examTip: {
              es: 'El receptor debe conocer el mismo código que el emisor para poder descodificar el mensaje.',
              hy: 'Ընդունողը պետք է իմանա նույն կոդը, ինչ հաղորդողը, որպեսզի կարողանա ապակոդավորել հաղորդագրությունը:',
            },
          },
          {
            name: {
              es: '3. Mensaje',
              hy: '3. Հաղորդագրություն (Mensaje)',
            },
            definition: {
              es: 'Es el contenido o conjunto de informaciones, ideas o sentimientos que se transmiten.',
              hy: 'Այն բովանդակությունն է կամ տեղեկությունների, գաղափարների կամ զգացմունքների ամբողջությունը, որը փոխանցվում է:',
            },
            howToIdentify: {
              es: 'Pregúntate: ¿Qué se dice exactamente en la comunicación?',
              hy: 'Հարցրու ինքդ քեզ. ի՞նչ է կոնկրետ ասվում հաղորդակցության մեջ:',
            },
            examples: [
              {
                es: '"Mañana tenemos examen de Lengua a primera hora."',
                hy: '«Վաղը առաջին ժամին ունենք իսպաներենի քննություն»:',
              },
              {
                es: 'La orden del árbitro: el partido ha finalizado.',
                hy: 'Մրցավարի կարգադրությունը. խաղն ավարտված է:',
              },
              {
                es: 'La explicación sobre cómo se clasifican los sustantivos.',
                hy: 'Բացատրությունն այն մասին, թե ինչպես են դասակարգվում գոյականները:',
              },
              {
                es: 'La señal luminosa que indica: prohibido el paso.',
                hy: 'Լուսային ազդանշանը, որը ցույց է տալիս. անցումն արգելվում է:',
              },
              {
                es: 'El texto del poema que describe el atardecer.',
                hy: 'Բանաստեղծության տեքստը, որը նկարագրում է մայրամուտը:',
              },
            ],
            examTip: {
              es: 'El mensaje es lo que se transmite, no el medio por el que viaja (el medio es el canal).',
              hy: 'Հաղորդագրությունն այն է, ինչ փոխանցվում է, այլ ոչ թե միջոցը, որով այն ճամփորդում է (միջոցը կապուղին է):',
            },
          },
          {
            name: {
              es: '4. Código',
              hy: '4. Կոդ (Código)',
            },
            definition: {
              es: 'Es el sistema estructurado de signos y reglas que utilizan el emisor y el receptor para entenderse.',
              hy: 'Նշանների և կանոնների կառուցվածքային համակարգն է, որն օգտագործում են հաղորդողը և ընդունողը միմյանց հասկանալու համար:',
            },
            howToIdentify: {
              es: 'Pregúntate: ¿Qué idioma, conjunto de símbolos o señales se está utilizando?',
              hy: 'Հարցրու ինքդ քեզ. ի՞նչ լեզու, նշանների համակարգ կամ ազդանշաններ են օգտագործվում:',
            },
            examples: [
              {
                es: 'La lengua española (código lingüístico verbal).',
                hy: 'Իսպաներեն լեզուն (լեզվական վերբալ կոդ):',
              },
              {
                es: 'El código de señales de tráfico (signos visuales).',
                hy: 'Ճանապարհային նշանների կոդը (տեսողական նշաններ):',
              },
              {
                es: 'El código morse (puntos y rayas sonoras o luminosas).',
                hy: 'Մորզեի կոդը (ձայնային կամ լուսային կետեր և գծիկներ):',
              },
              {
                es: 'La lengua de signos que usan las personas sordas.',
                hy: 'Ժեստերի լեզուն, որն օգտագործում են խուլ մարդիկ:',
              },
              {
                es: 'Los pitidos reglamentarios del silbato del árbitro.',
                hy: 'Մրցավարի սուլիչի կանոնակարգային ազդանշանները:',
              },
            ],
            examTip: {
              es: 'El código suele ser "la lengua española escrita" o "la lengua española oral".',
              hy: 'Կոդը սովորաբար «իսպաներեն գրավոր լեզուն» է կամ «իսպաներեն բանավոր լեզուն»:',
            },
          },
          {
            name: {
              es: '5. Canal',
              hy: '5. Կապուղի (Canal)',
            },
            definition: {
              es: 'Es el soporte o medio físico por el que viaja y se transmite el mensaje desde el emisor al receptor.',
              hy: 'Այն ֆիզիկական միջոցն է կամ կրիչը, որով ճամփորդում և փոխանցվում է հաղորդագրությունը հաղորդողից ընդունողին:',
            },
            howToIdentify: {
              es: 'Pregúntate: ¿Por dónde viaja el mensaje? ¿A través de qué medio físico?',
              hy: 'Հարցրու ինքդ քեզ. որտեղո՞վ է ճամփորդում հաղորդագրությունը: Ի՞նչ ֆիզիկական միջոցով:',
            },
            examples: [
              {
                es: 'Las ondas sonoras y el aire (en una conversación cara a cara).',
                hy: 'Ձայնային ալիքները և օդը (առերես զրույցի ժամանակ):',
              },
              {
                es: 'Internet y la pantalla del teléfono móvil (en WhatsApp).',
                hy: 'Ինտերնետը և բջջային հեռախոսի էկրանը (WhatsApp-ում):',
              },
              {
                es: 'El papel impreso y la tinta (en un libro de texto o carta).',
                hy: 'Տպագիր թուղթը և թանաքը (դասագրքում կամ նամակում):',
              },
              {
                es: 'Las ondas de radio o la línea telefónica.',
                hy: 'Ռադիոալիքները կամ հեռախոսագիծը:',
              },
              {
                es: 'La luz que viaja en el aire (en el caso de un faro o semáforo).',
                hy: 'Օդում տարածվող լույսը (փարոսի կամ լուսացույցի դեպքում):',
              },
            ],
            examTip: {
              es: 'No confundas código con canal: el español es el código; el aire o el móvil es el canal.',
              hy: 'Մի՛ շփոթիր կոդը կապուղու հետ. իսպաներենը կոդն է, իսկ օդը կամ հեռախոսը՝ կապուղին:',
            },
          },
          {
            name: {
              es: '6. Contexto o situación comunicativa',
              hy: '6. Համատեքստ կամ հաղորդակցական իրավիճակ (Contexto)',
            },
            definition: {
              es: 'Es el conjunto de circunstancias de espacio, tiempo y relación entre los interlocutores que rodean el acto comunicativo y permiten entenderlo adecuadamente.',
              hy: 'Տարածության, ժամանակի և զրուցակիցների միջև փոխհարաբերությունների հանգամանքների ամբողջությունն է, որը շրջապատում է հաղորդակցական ակտը և թույլ տալիս ճիշտ հասկանալ այն:',
            },
            howToIdentify: {
              es: 'Pregúntate: ¿Dónde, cuándo y en qué circunstancias ocurre la conversación?',
              hy: 'Հարցրու ինքդ քեզ. որտե՞ղ, ե՞րբ և ի՞նչ հանգամանքներում է տեղի ունենում զրույցը:',
            },
            examples: [
              {
                es: 'En el aula del instituto, durante la clase de Lengua por la mañana.',
                hy: 'Ինստիտուտի դասարանում, առավոտյան իսպաներենի դասի ժամանակ:',
              },
              {
                es: 'Dos amigos chateando por la tarde desde sus casas antes del examen.',
                hy: 'Երկու ընկեր չաթում են կեսօրին իրենց տներից քննությունից առաջ:',
              },
              {
                es: 'En un estadio de fútbol lleno de público en el minuto 90.',
                hy: 'Հանդիսատեսով լի ֆուտբոլային մարզադաշտում 90-րդ րոպեին:',
              },
              {
                es: 'En el paso de peatones de una avenida con mucho tráfico.',
                hy: 'Մեծ երթևեկությամբ պողոտայի հետիոտնային անցման վրա:',
              },
              {
                es: 'En la mesa del comedor durante la cena familiar.',
                hy: 'Ճաշասեղանի շուրջ ընտանեկան ընթրիքի ժամանակ:',
              },
            ],
            examTip: {
              es: 'El contexto incluye el lugar, la hora y quiénes participan (ej.: el tono cambia si hablas con un profesor o con tu amigo).',
              hy: 'Համատեքստը ներառում է վայրը, ժամը և մասնակիցներին (օր.՝ տոնայնությունը փոխվում է, եթե խոսում ես ուսուցչի կամ ընկերոջդ հետ):',
            },
          },
        ],
      },
    ],
    selfExplanationPrompt: {
      es: 'Imagina la situación: "Lucas le envía un audio de WhatsApp a Clara diciéndole que mañana no irá al entrenamiento". Identifica los 6 elementos de la comunicación.',
      hy: 'Պատկերացրու իրավիճակը. «Լուկասը WhatsApp-ով ձայնային հաղորդագրություն է ուղարկում Կլարային՝ ասելով, որ վաղը չի գնա մարզմանը»: Որոշիր հաղորդակցության 6 տարրերը:',
    },
    modelExplanation: {
      es: 'Emisor: Lucas. Receptor: Clara. Mensaje: que mañana no irá al entrenamiento. Código: lengua española hablada/oral. Canal: ondas electromagnéticas, internet y teléfono móvil. Contexto: dos compañeros de equipo comunicándose por la tarde sobre el entrenamiento.',
      hy: 'Հաղորդող՝ Լուկաս: Ընդունող՝ Կլարա: Հաղորդագրություն՝ որ վաղը չի գնա մարզմանը: Կոդ՝ իսպաներեն բանավոր լեզու: Կապուղի՝ էլեկտրամագնիսական ալիքներ, ինտերնետ և բջջային հեռախոս: Համատեքստ՝ թիմակից երկու ընկերներ, որոնք շփվում են կեսօրից հետո մարզման վերաբերյալ:',
    },
    evaluationCriteria: [
      {
        es: 'Identifica a Lucas como emisor y a Clara como receptor.',
        hy: 'Ճիշտ նշում է Լուկասին որպես հաղորդող և Կլարային որպես ընդունող:',
      },
      {
        es: 'Identifica el código como lengua española y el canal como móvil/internet.',
        hy: 'Ճիշտ նշում է կոդը որպես իսպաներեն և կապուղին որպես հեռախոս/ինտերնետ:',
      },
    ],
  },
  {
    id: 'categorias-gramaticales',
    number: 4,
    title: {
      es: 'Las categorías gramaticales',
      hy: 'Քերականական կարգերը (խոսքի մասերը)',
    },
    subtitle: {
      es: 'Clasificación de palabras: sustantivo, pronombre, adjetivo, verbo, adverbio, determinante, artículo, preposición, conjunción e interjección',
      hy: 'Բառերի դասակարգումը. գոյական, դերանուն, ածական, բայ, մակբայ, դետերմինատիվ, հոդ, նախդիր, շաղկապ և ձայնարկություն',
    },
    iconName: 'Layers',
    accentColor: 'emerald',
    sections: [
      {
        title: {
          es: 'Las diez clases de palabras en español',
          hy: 'Իսպաներենի խոսքի տասը մասերը',
        },
        description: {
          es: 'Las palabras se clasifican según su significado, su forma (variables o invariables) y la función que cumplen en la oración.',
          hy: 'Բառերը դասակարգվում են ըստ իրենց իմաստի, ձևի (փոփոխական կամ անփոփոխ) և նախադասության մեջ կատարած պաշտոնի:',
        },
        items: [
          {
            name: {
              es: '1. Sustantivo o nombre',
              hy: '1. Գոյական (Sustantivo)',
            },
            definition: {
              es: 'Palabra variable que nombra a personas, animales, objetos, lugares, sentimientos e ideas.',
              hy: 'Փոփոխական բառ, որն անվանում է անձեր, կենդանիներ, առարկաներ, վայրեր, զգացմունքներ և գաղափարներ:',
            },
            howToIdentify: {
              es: 'Tiene género (masculino/femenino) y número (singular/plural). Puede llevar un artículo delante (el gato, la mesa, la amistad).',
              hy: 'Ունի սեռ (արական/իգական) և թիվ (եզակի/հոգնակի): Կարող է իրենից առաջ ունենալ հոդ (el gato, la mesa, la amistad):',
            },
            examples: [
              {
                es: 'El perro ladra en el jardín de la casa.',
                hy: 'Շունը (perro) հաչում է տան (casa) պարտեզում (jardín):',
              },
              {
                es: 'La sinceridad es una virtud valiosa.',
                hy: 'Անկեղծությունը (sinceridad) թանկ արժանիք (virtud) է:',
              },
              {
                es: 'Madrid es una ciudad hermosa.',
                hy: 'Մադրիդը (Madrid - հատուկ) գեղեցիկ քաղաք (ciudad) է:',
              },
              {
                es: 'Una manada de lobos cruzó el bosque.',
                hy: 'Գայլերի (lobos) ոհմակը (manada - հավաքական) անցավ անտառով (bosque):',
              },
              {
                es: 'La música produce una profunda alegría.',
                hy: 'Երաժշտությունը (música) խորին ուրախություն (alegría - վերացական) է առաջացնում:',
              },
            ],
            distinctionFromOthers: {
              es: 'El adjetivo describe al sustantivo, mientras que el sustantivo tiene género propio independiente.',
              hy: 'Ածականը նկարագրում է գոյականին, մինչդեռ գոյականն ունի իր սեփական անկախ սեռը:',
            },
            examTip: {
              es: 'Si puedes ponerle "el" o "la" delante, se trata de un sustantivo.',
              hy: 'Եթե կարող ես դիմացը դնել «el» կամ «la», ապա դա գոյական է:',
            },
          },
          {
            name: {
              es: '2. Pronombre',
              hy: '2. Դերանուն (Pronombre)',
            },
            definition: {
              es: 'Palabra variable que sustituye al sustantivo para no repetirlo y realiza sus mismas funciones sintácticas.',
              hy: 'Փոփոխական բառ, որը փոխարինում է գոյականին՝ այն չկրկնելու համար, և կատարում է նրա նույն շարահյուսական պաշտոնները:',
            },
            howToIdentify: {
              es: 'Aparece SOLO, nunca acompaña a un sustantivo ("Él vino", "Quiero esto"). Tipos: personales (yo, tú, él), demostrativos, posesivos, indefinidos.',
              hy: 'Հանդես է գալիս ՄԵՆԱԿ, երբեք չի ուղեկցում գոյականին («Él vino», «Quiero esto»): Տեսակներ՝ անձնական, ցուցական, ստացական, անորոշ:',
            },
            examples: [
              {
                es: 'Carlos no vino ayer porque él estaba enfermo.',
                hy: 'Կառլոսը երեկ չեկավ, որովհետև նա (él) հիվանդ էր:',
              },
              {
                es: 'Me gusta tu coche, pero prefiero este.',
                hy: 'Ինձ դուր է գալիս քո մեքենան, բայց ես նախընտրում եմ սա (este - դերանուն):',
              },
              {
                es: 'Nosotros iremos al cine contigo.',
                hy: 'Մենք (nosotros) կգնանք կինո քեզ հետ (contigo):',
              },
              {
                es: 'Nadie sabe la respuesta correcta todavía.',
                hy: 'Ոչ ոք (nadie) դեռ չգիտի ճիշտ պատասխանը:',
              },
              {
                es: '¿Quién ha llamado a la puerta?',
                hy: 'Ո՞վ (quién) զանգեց դուռը:',
              },
            ],
            distinctionFromOthers: {
              es: 'Determinante vs Pronombre: "Este libro" = determinante (acompaña). "Este es mío" = pronombre (sustituye).',
              hy: 'Դետերմինատիվ vs Դերանուն. «Este libro» = դետերմինատիվ (ուղեկցում է): «Este es mío» = դերանուն (փոխարինում է):',
            },
            examTip: {
              es: 'Si lleva sustantivo detrás, es DETERMINANTE. Si va solo al lado de un verbo, es PRONOMBRE.',
              hy: 'Եթե իրենից հետո ունի գոյական, ապա ԴԵՏԵՐՄԻՆԱՏԻՎ է: Եթե մենակ է բայի կողքին, ապա ԴԵՐԱՆՈՒՆ է:',
            },
          },
          {
            name: {
              es: '3. Adjetivo calificativo',
              hy: '3. Որակական ածական (Adjetivo)',
            },
            definition: {
              es: 'Palabra variable que acompaña al sustantivo para expresar una cualidad o característica del mismo.',
              hy: 'Փոփոխական բառ, որն ուղեկցում է գոյականին՝ արտահայտելու նրա որևէ հատկանիշ կամ բնութագիր:',
            },
            howToIdentify: {
              es: 'Concuerda en género y número con el sustantivo al que acompaña (chico alto / chicas altas).',
              hy: 'Սեռով և թվով համաձայնում է այն գոյականի հետ, որին ուղեկցում է (chico alto / chicas altas):',
            },
            examples: [
              {
                es: 'El gato negro duerme en la alfombra suave.',
                hy: 'Սև (negro) կատուն քնում է փափուկ (suave) գորգի վրա:',
              },
              {
                es: 'Tuvimos una conversación interesante y amena.',
                hy: 'Մենք ունեցանք հետաքրքիր (interesante) և հաճելի (amena) զրույց:',
              },
              {
                es: 'Los árboles altos protegen la casa del viento.',
                hy: 'Բարձր (altos) ծառերը պաշտպանում են տունը քամուց:',
              },
              {
                es: 'Ella llevaba un vestido azul marino.',
                hy: 'Նա հագել էր մուգ կապույտ (azul) զգեստ:',
              },
              {
                es: 'Es un examen difícil pero asequible.',
                hy: 'Դժվար (difícil), բայց հաղթահարելի (asequible) քննություն է:',
              },
            ],
            distinctionFromOthers: {
              es: 'El adjetivo concuerda con el sustantivo ("rápida corredora"); el adverbio es invariable ("ella corre rápido").',
              hy: 'Ածականը համաձայնում է գոյականի հետ («rápida corredora»), իսկ մակբայն անփոփոխ է («ella corre rápido»):',
            },
            examTip: {
              es: 'Pregunta "¿cómo es?" o "¿cómo está?" el sustantivo: la respuesta es un adjetivo.',
              hy: 'Հարցրու՝ «ինչպիսի՞ն է» գոյականը. պատասխանը կլինի ածական:',
            },
          },
          {
            name: {
              es: '4. Verbo',
              hy: '4. Բայ (Verbo)',
            },
            definition: {
              es: 'Palabra variable que expresa una acción, estado, proceso o existencia en un tiempo determinado.',
              hy: 'Փոփոխական բառ, որն արտահայտում է գործողություն, վիճակ, գործընթաց կամ գոյություն որոշակի ժամանակում:',
            },
            howToIdentify: {
              es: 'Se conjuga: tiene persona (1ª, 2ª, 3ª), número (singular/plural), tiempo (presente, pasado, futuro) y modo (indicativo, subjuntivo, imperativo).',
              hy: 'Խոնարհվում է՝ ունի դեմք (1-ին, 2-րդ, 3-րդ), թիվ (եզակի/հոգնակի), ժամանակ (ներկա, անցյալ, ապառնի) և եղանակ:',
            },
            examples: [
              {
                es: 'Nosotros estudiamos lengua todas las mañanas.',
                hy: 'Մենք սովորում ենք (estudiamos) լեզուն ամեն առավոտ:',
              },
              {
                es: 'El agua del río fluía serenamente.',
                hy: 'Գետի ջուրը հոսում էր (fluía) հանդարտորեն:',
              },
              {
                es: 'Mañana ellos escribirán una redacción completa.',
                hy: 'Վաղը նրանք կգրեն (escribirán) ամբողջական շարադրություն:',
              },
              {
                es: 'Ella parece muy tranquila hoy.',
                hy: 'Նա այսօր շատ հանգիստ է թվում (parece):',
              },
              {
                es: '¡Abre la ventana!',
                hy: 'Բա՛ց արա (abre) պատուհանը:',
              },
            ],
            distinctionFromOthers: {
              es: 'Es el núcleo del predicado. Sin verbo conjugado no hay oración.',
              hy: 'Ստորոգյալի կորիզն է: Առանց խոնարհված բայի նախադասություն չկա:',
            },
            examTip: {
              es: 'Comprueba si puedes cambiarle el tiempo a ayer, hoy o mañana ("estudié", "estudio", "estudiaré").',
              hy: 'Ստուգիր, թե կարո՞ղ ես փոխել ժամանակը երեկվա, այսօրվա կամ վաղվա միջև:',
            },
          },
          {
            name: {
              es: '5. Adverbio',
              hy: '5. Մակբայ (Adverbio)',
            },
            definition: {
              es: 'Palabra INVARIABLE (no cambia de género ni de número) que complementa a un verbo, a un adjetivo o a otro adverbio.',
              hy: 'ԱՆՓՈՓՈԽ բառ (չունի սեռ կամ թիվ), որը լրացնում է բային, ածականին կամ մեկ այլ մակբայի:',
            },
            howToIdentify: {
              es: 'Nunca lleva -s de plural ni cambia de masculino a femenino. Clases: lugar (aquí, lejos), tiempo (ayer, hoy, después), modo (bien, mal, rápidamente), cantidad (muy, mucho, poco), afirmación (sí), negación (no, nunca), duda (quizás).',
              hy: 'Երբեք չունի հոգնակիի -s վերջավորություն, չի փոխվում արականի և իգականի: Տեսակներ՝ տեղի, ժամանակի, ձևի, չափ ու քանակի, հաստատական, ժխտական, կասկածի:',
            },
            examples: [
              {
                es: 'El atleta corre muy rápidamente.',
                hy: 'Մարզիկը վազում է շատ (muy - մակբայ) արագորեն (rápidamente - մակբայ):',
              },
              {
                es: 'Ellos viven bastante lejos de aquí.',
                hy: 'Նրանք ապրում են այստեղից (aquí) բավականին (bastante) հեռու (lejos):',
              },
              {
                es: 'Ayer comimos estupendamente en el restaurante.',
                hy: 'Երեկ (ayer) հիանալի կերպով (estupendamente) ճաշեցինք ռեստորանում:',
              },
              {
                es: 'Mi hermano pequeño canta muy bien.',
                hy: 'Իմ փոքր եղբայրը շատ (muy) լավ (bien) է երգում:',
              },
              {
                es: 'Quizás lleguemos a tiempo al concierto.',
                hy: 'Գուցե (quizás) ժամանակին հասնենք համերգին:',
              },
            ],
            distinctionFromOthers: {
              es: '"Mucho" como adjetivo concuerda: "muchas manzanas". Como adverbio es invariable: "trabajan mucho".',
              hy: '«Mucho»-ն որպես ածական համաձայնում է՝ «muchas manzanas»: Որպես մակբայ անփոփոխ է՝ «trabajan mucho»:',
            },
            examTip: {
              es: 'Si la palabra no cambia al pasar la frase a plural ("Él corre mucho" / "Ellos corren mucho"), es ADVERBIO.',
              hy: 'Եթե բառը չի փոխվում նախադասությունը հոգնակի դարձնելիս, ապա այն ՄԱԿԲԱՅ է:',
            },
          },
          {
            name: {
              es: '6. Determinante',
              hy: '6. Դետերմինատիվ (Determinante)',
            },
            definition: {
              es: 'Palabra variable que acompaña al sustantivo para concretarlo, delimitarlo y aportar información sobre su posesión, distancia, cantidad, etc.',
              hy: 'Փոփոխական բառ, որն ուղեկցում է գոյականին՝ այն կոնկրետացնելու, սահմանափակելու և նրա պատկանելության, հեռավորության, քանակի մասին տեղեկություն տալու համար:',
            },
            howToIdentify: {
              es: 'Va SIEMPRE junto a un sustantivo. Tipos: demostrativos (este, ese, aquel), posesivos (mi, tu, su, nuestro), numerales (dos, primer), indefinidos (algunos, varios).',
              hy: 'Գտնվում է ՄԻՇՏ գոյականի կողքին: Տեսակներ՝ ցուցական (este, ese, aquel), ստացական (mi, tu, su), թվականական (dos, primer), անորոշ (algunos, varios):',
            },
            examples: [
              {
                es: 'Este libro de aventuras pertenece a mi hermano.',
                hy: 'Արկածային այս (este - ցուցական) գիրքը պատկանում է իմ (mi - ստացական) եղբորը:',
              },
              {
                es: 'Aquella montaña nevada se ve desde aquí.',
                hy: 'Այն (aquella) ձյունածածկ լեռը երևում է այստեղից:',
              },
              {
                es: 'Tres alumnos consiguieron el primer premio.',
                hy: 'Երեք (tres - քանակական) աշակերտ շահեցին առաջին (primer - դասական) մրցանակը:',
              },
              {
                es: 'Algunos niños juegan en nuestra plaza.',
                hy: 'Որոշ (algunos - անորոշ) երեխաներ խաղում են մեր (nuestra) հրապարակում:',
              },
              {
                es: '¿Cuántos lápices tienes en tu estuche?',
                hy: 'Քանի՞ (cuántos) մատիտ ունես քո (tu) գրչատուփում:',
              },
            ],
            distinctionFromOthers: {
              es: 'Nunca va solo: siempre necesita un sustantivo al que acompañar.',
              hy: 'Երբեք մենակ չէ. միշտ ունի գոյական, որին ուղեկցում է:',
            },
            examTip: {
              es: 'Comprueba qué palabra va justo después: si es un sustantivo ("mi libro"), "mi" es determinante posesivo.',
              hy: 'Ստուգիր, թե որ բառն է գալիս անմիջապես հետո. եթե դա գոյական է («mi libro»), ապա «mi»-ն ստացական դետերմինատիվ է:',
            },
          },
          {
            name: {
              es: '7. Artículo',
              hy: '7. Հոդ (Artículo)',
            },
            definition: {
              es: 'Tipo especial de determinante que anuncia la presencia de un sustantivo y especifica si es conocido o desconocido.',
              hy: 'Դետերմինատիվի հատուկ տեսակ, որն ազդարարում է գոյականի առկայությունը և նշում՝ արդյոք այն ծանոթ է, թե անծանոթ:',
            },
            howToIdentify: {
              es: 'Determinados o definidos: el, la, los, las. Indeterminados o indefinidos: un, una, unos, unas. (También las formas contractas al = a + el; del = de + el).',
              hy: 'Որոշյալ՝ el, la, los, las: Անորոշ՝ un, una, unos, unas: (Նաև միաձուլված ձևերը՝ al, del):',
            },
            examples: [
              {
                es: 'El gato subió al tejado de la casa.',
                hy: 'Կատուն (el) բարձրացավ տան (la) տանիքին (al = a + el):',
              },
              {
                es: 'Un niño encontró una moneda en la acera.',
                hy: 'Մի տղա (un) մետաղադրամ (una) գտավ մայթին (la):',
              },
              {
                es: 'Las flores del jardín huelen de maravilla.',
                hy: 'Պարտեզի (del = de + el) ծաղիկները (las) հիանալի բուրում են:',
              },
              {
                es: 'Unos amigos vinieron a visitarme por sorpresa.',
                hy: 'Մի քանի ընկերներ (unos) եկան ինձ այցելելու անակնկալ կերպով:',
              },
              {
                es: 'El sol brilla en el cielo despejado.',
                hy: 'Արևը (el) փայլում է պարզ երկնքում (el):',
              },
            ],
            distinctionFromOthers: {
              es: 'El artículo "el" no lleva tilde; el pronombre "él" sí lleva tilde diacrítica.',
              hy: '«El» հոդը չունի շեշտ, իսկ «él» դերանունը ունի տարբերակիչ շեշտ:',
            },
            examTip: {
              es: 'En muchas clasificaciones escolares, el artículo se estudia como una clase de determinante.',
              hy: 'Շատ դպրոցական դասակարգումներում հոդն ուսումնասիրվում է որպես դետերմինատիվի ենթատեսակ:',
            },
          },
          {
            name: {
              es: '8. Preposición',
              hy: '8. Նախդիր (Preposición)',
            },
            definition: {
              es: 'Palabra INVARIABLE que sirve para unir o relacionar unas palabras con otras dentro de una oración.',
              hy: 'ԱՆՓՈՓՈԽ բառ, որը ծառայում է նախադասության մեջ բառերը միմյանց միացնելուն կամ կապելուն:',
            },
            howToIdentify: {
              es: 'Lista cerrada oficial: a, ante, bajo, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras.',
              hy: 'Պաշտոնական փակ ցանկ՝ a, ante, bajo, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, sobre, tras:',
            },
            examples: [
              {
                es: 'Fuimos al parque con mis primos durante la tarde.',
                hy: 'Մենք գնացինք պարկ իմ զարմիկների հետ (con) կեսօրվա ընթացքում (durante):',
              },
              {
                es: 'El libro de aventuras está sobre la mesa de madera.',
                hy: 'Արկածային գիրքը (de) փայտե սեղանի վրա է (sobre, de):',
              },
              {
                es: 'Caminamos hacia la playa sin prisa.',
                hy: 'Մենք քայլեցինք դեպի (hacia) լողափ առանց (sin) շտապելու:',
              },
              {
                es: 'Viajamos desde Madrid hasta Sevilla en tren.',
                hy: 'Մենք ճամփորդեցինք Մադրիդից (desde) մինչև (hasta) Սևիլյա գնացքով (en):',
              },
              {
                es: 'Lucharon contra las dificultades para conseguir el triunfo.',
                hy: 'Նրանք պայքարեցին դժվարությունների դեմ (contra) հաղթանակի հասնելու համար (para):',
              },
            ],
            distinctionFromOthers: {
              es: 'Introduce un sintagma preposicional (ej.: "en casa", "de oro").',
              hy: 'Ներմուծում է նախդրավոր կապակցություն (օր.՝ «en casa», «de oro»):',
            },
            examTip: {
              es: 'Aprende la lista oficial de memoria; es una de las preguntas fijas en el examen de 1.º de ESO.',
              hy: 'Անգիր սովորիր պաշտոնական ցանկը. դա 1-ին դասարանի (ESO) քննության մշտական հարցերից է:',
            },
          },
          {
            name: {
              es: '9. Conjunción',
              hy: '9. Շաղկապ (Conjunción)',
            },
            definition: {
              es: 'Palabra INVARIABLE que funciona como nexo para unir palabras u oraciones entre sí.',
              hy: 'ԱՆՓՈՓՈԽ բառ, որը գործում է որպես կապող միջոց՝ բառերը կամ նախադասությունները միմյանց միացնելու համար:',
            },
            howToIdentify: {
              es: 'Coordinantes: copulativas (y, e, ni), disyuntivas (o, u), adversativas (pero, sino). Subordinantes: causales (porque), condicionales (si), etc.',
              hy: 'Համադասական՝ միավորական (y, e, ni), տրոհական (o, u), ներհակական (pero, sino): Ստորադասական՝ պատճառական (porque), պայմանական (si) և այլն:',
            },
            examples: [
              {
                es: 'Compré manzanas y peras pero no encontré plátanos.',
                hy: 'Գնեցի խնձորներ և (y) տանձեր, բայց (pero) չգտա բանաններ:',
              },
              {
                es: '¿Prefieres estudiar ahora o descansar un poco?',
                hy: 'Նախընտրում ես հիմա սովորե՞լ, թե՞ (o) մի փոքր հանգստանալ:',
              },
              {
                es: 'No vino a clase porque tenía fiebre alta.',
                hy: 'Չեկավ դասի, որովհետև (porque) բարձր ջերմություն ուներ:',
              },
              {
                es: 'Si estudias con dedicación, aprobarás sin problemas.',
                hy: 'Եթե (si) ջանասիրությամբ սովորես, կհանձնես առանց խնդիրների:',
              },
              {
                es: 'No quiero té sino chocolate caliente.',
                hy: 'Չեմ ուզում թեյ, այլ (sino) տաք շոկոլադ:',
              },
            ],
            distinctionFromOthers: {
              es: 'La conjunción une elementos del mismo nivel o proposiciones enteras; la preposición subordina un término.',
              hy: 'Շաղկապը միացնում է նույն մակարդակի տարրեր կամ ամբողջական նախադասություններ, իսկ նախդիրը ստորադասում է մեկ բառ:',
            },
            examTip: {
              es: '"Y", "pero", "porque", "si" y "o" son las conjunciones más comunes.',
              hy: '«Y», «pero», «porque», «si» և «o»-ն ամենատարածված շաղկապներն են:',
            },
          },
          {
            name: {
              es: '10. Interjección',
              hy: '10. Ձայնարկություն (Interjección)',
            },
            definition: {
              es: 'Palabra que equivale a un enunciado completo y expresa emociones vivas, llamadas de atención o saludos de forma espontánea.',
              hy: 'Բառ, որը համարժեք է ամբողջական արտահայտության և ինքնաբուխ կերպով արտահայտում է կենդանի հույզեր, ուշադրության կանչեր կամ ողջույններ:',
            },
            howToIdentify: {
              es: 'Suele ir entre signos de exclamación (¡ !) o interrogación (¿ ?). Propias: ¡ay!, ¡oh!, ¡uf!, ¡hola!, ¡bah! Impropias (nacidas de otras palabras): ¡ojo!, ¡bravo!, ¡vaya!, ¡cuidado!',
              hy: 'Սովորաբար գրվում է բացականչական (¡ !) կամ հարցական նշաններով: Բուն՝ ¡ay!, ¡oh!, ¡uf!, ¡hola!: Ածանցյալ՝ ¡ojo!, ¡bravo!, ¡vaya!, ¡cuidado!:',
            },
            examples: [
              {
                es: '¡Ay! Me he pinchado el dedo con la espina.',
                hy: 'Վա՜յ (¡Ay!): Մատս ծակեցի փշով:',
              },
              {
                es: '¡Uf! Qué cansado ha sido este entrenamiento.',
                hy: 'Ու՜ֆ (¡Uf!): Ի՜նչ հոգնեցուցիչ էր այս մարզումը:',
              },
              {
                es: '¡Hola! ¿Cómo estás hoy?',
                hy: 'Ողջո՜ւյն (¡Hola!): Ինչպե՞ս ես այսօր:',
              },
              {
                es: '¡Ojo! No pises el suelo mojado.',
                hy: 'Զգո՛ւյշ (¡Ojo!): Չտրորես թաց հատակը:',
              },
              {
                es: '¡Bravo! Habéis hecho una representación estupenda.',
                hy: 'Բրա՛վո (¡Bravo!): Հիանալի ներկայացում արեցիք:',
              },
            ],
            distinctionFromOthers: {
              es: 'No se combina sintácticamente como sujeto o complemento; forma por sí sola un acto de habla.',
              hy: 'Շարահյուսորեն չի կապվում որպես ենթակա կամ լրացում. ինքն իրենով կազմում է խոսքային ամբողջական ակտ:',
            },
            examTip: {
              es: 'Reconócelas por su fuerza expresiva e independencia dentro de la frase.',
              hy: 'Ճանաչիր դրանք իրենց արտահայտչական ուժով և նախադասության մեջ անկախությամբ:',
            },
          },
        ],
      },
    ],
    selfExplanationPrompt: {
      es: 'En la frase: "Mi hermano pequeño canta muy bien hoy", indica a qué categoría gramatical pertenece cada una de las seis palabras.',
      hy: '«Mi hermano pequeño canta muy bien hoy» նախադասության մեջ նշիր, թե վեց բառերից յուրաքանչյուրը խոսքի որ մասին է պատկանում:',
    },
    modelExplanation: {
      es: '"Mi": determinante posesivo. "Hermano": sustantivo común masculino singular. "Pequeño": adjetivo calificativo. "Canta": verbo (tercera persona singular presente de indicativo). "Muy": adverbio de cantidad. "Bien": adverbio de modo. "Hoy": adverbio de tiempo.',
      hy: '«Mi»՝ ստացական դետերմինատիվ: «Hermano»՝ հասարակ գոյական, արական, եզակի: «Pequeño»՝ որակական ածական: «Canta»՝ բայ (սահմանական ներկա, 3-րդ դեմք եզակի): «Muy»՝ չափ ու քանակի մակբայ: «Bien»՝ ձևի մակբայ: «Hoy»՝ ժամանակի մակբայ:',
    },
    evaluationCriteria: [
      {
        es: 'Clasifica correctamente sustantivo (hermano), verbo (canta) y adjetivo (pequeño).',
        hy: 'Ճիշտ է դասակարգում գոյականը (hermano), բայը (canta) և ածականը (pequeño):',
      },
      {
        es: 'Distingue "mi" como determinante y "muy/bien" como adverbios.',
        hy: 'Տարբերում է «mi»-ն որպես դետերմինատիվ և «muy/bien»-ը որպես մակբայներ:',
      },
    ],
  },
  {
    id: 'literatura-popular-culta',
    number: 5,
    title: {
      es: 'La literatura popular y la literatura culta',
      hy: 'Ժողովրդական գրականությունը և գրավոր (հեղինակային) գրականությունը',
    },
    subtitle: {
      es: 'Autoría anónima vs autor conocido, transmisión oral vs escrita, y tabla comparativa',
      hy: 'Անանուն հեղինակ vs հայտնի հեղինակ, բանավոր vs գրավոր փոխանցում և համեմատական աղյուսակ',
    },
    iconName: 'BookOpen',
    accentColor: 'rose',
    sections: [
      {
        title: {
          es: 'Dos formas fundamentales de creación literaria',
          hy: 'Գրական ստեղծագործության երկու հիմնարար ձևերը',
        },
        description: {
          es: 'A lo largo de la historia de la literatura española conviven dos grandes vertientes: la literatura popular (tradicional, colectiva) y la literatura culta (escrita, individual).',
          hy: 'Իսպանական գրականության պատմության ողջ ընթացքում համատեղ գոյակցում են երկու մեծ ուղղություններ՝ ժողովրդական գրականությունը (ավանդական, հավաքական) և գրավոր-հեղինակային գրականությունը (անհատական):',
        },
        items: [
          {
            name: {
              es: 'Literatura popular o tradicional',
              hy: 'Ժողովրդական կամ ավանդական գրականություն',
            },
            definition: {
              es: 'Conjunto de obras literarias (canciones, romances, cuentos, leyendas) creadas por el pueblo, de autor anónimo, transmitidas oralmente de generación en generación y sujetas a variantes.',
              hy: 'Ժողովրդի կողմից ստեղծված գրական երկերի (երգեր, ռոմանսներ, հեքիաթներ, լեգենդներ) ամբողջություն, որոնք ունեն անանուն հեղինակ, փոխանցվում են բանավոր սերնդեսերունդ և ունեն տարբերակներ:',
            },
            howToIdentify: {
              es: 'Autor anónimo, difusión oral de boca en boca, lenguaje sencillo y tradicional, existencia de diferentes versiones del mismo texto y fórmulas fijas.',
              hy: 'Անանուն հեղինակ, բանավոր տարածում բերանացի, պարզ և ավանդական լեզու, նույն տեքստի տարբեր տարբերակների գոյություն և կայուն բանաձևեր:',
            },
            examples: [
              {
                es: 'Los romances viejos transmitidos por juglares medievales.',
                hy: 'Հին ռոմանսները, որոնք փոխանցվում էին միջնադարյան խուգլարների (աշուղների) կողմից:',
              },
              {
                es: 'Los villancicos y canciones populares de siembra o siega.',
                hy: 'Վիլյանսիկոները և ժողովրդական երգերը ցանքի կամ բերքահավաքի մասին:',
              },
              {
                es: 'Las nanas tradicionales para dormir a los bebés.',
                hy: 'Ավանդական օրորոցայինները (նանաները) մանուկներին քնեցնելու համար:',
              },
              {
                es: 'Cuentos populares como "Caperucita Roja" o "Blancanieves" antes de ser fijados por escrito.',
                hy: 'Ժողովրդական հեքիաթները, ինչպիսիք են «Կարմիր գլխարկը» կամ «Սպիտակաձյունիկը»՝ նախքան գրի առնվելը:',
              },
              {
                es: 'Refranes populares como "A quien madruga, Dios le ayuda".',
                hy: 'Ժողովրդական առածները, ինչպիսիք են «Վաղ արթնացողին Աստված է օգնում»:',
              },
            ],
            examTip: {
              es: 'Palabras clave: "anónima", "oral", "variantes", "generación en generación".',
              hy: 'Հիմնաբառեր՝ «anónima» (անանուն), «oral» (բանավոր), «variantes» (տարբերակներ), «generación en generación» (սերնդեսերունդ):',
            },
          },
          {
            name: {
              es: 'Literatura culta',
              hy: 'Գրավոր կամ հեղինակային գրականություն (Literatura culta)',
            },
            definition: {
              es: 'Conjunto de obras literarias creadas por un autor individual conocido, transmitidas por escrito de forma fija y con un lenguaje cuidado, complejo y elaborado.',
              hy: 'Հայտնի անհատ հեղինակի կողմից ստեղծված գրական ստեղծագործությունների ամբողջություն, որոնք փոխանցվում են գրավոր անփոփոխ ձևով և ունեն մշակված, հարուստ ու բարդ լեզու:',
            },
            howToIdentify: {
              es: 'Autor con nombre y apellidos, soporte escrito (libros, manuscritos), texto fijado (no cambia según quien lo lea), lenguaje culto y originalidad creativa.',
              hy: 'Հայտնի անուն-ազգանունով հեղինակ, գրավոր կրիչ (գրքեր, ձեռագրեր), ֆիքսված տեքստ (չի փոխվում), մշակված լեզու և ստեղծագործական ինքնատիպություն:',
            },
            examples: [
              {
                es: '"Don Quijote de la Mancha", novela escrita por Miguel de Cervantes.',
                hy: '«Դոն Կիխոտ», վեպ՝ գրված Միգել դե Սերվանտեսի կողմից:',
              },
              {
                es: 'Las "Rimas y Leyendas" escritas por Gustavo Adolfo Bécquer.',
                hy: '«Հանգեր և լեգենդներ», գրված Գուստավո Ադոլֆո Բեկերի կողմից:',
              },
              {
                es: 'Los sonetos poéticos de Francisco de Quevedo y Luis de Góngora.',
                hy: 'Ֆրանսիսկո դե Կևեդոյի և Լուիս դե Գոնգորայի բանաստեղծական սոնետները:',
              },
              {
                es: '"Platero y yo", obra lírica en prosa de Juan Ramón Jiménez.',
                hy: '«Պլատերոն և ես», Խուան Ռամոն Խիմենեսի քնարական արձակ ստեղծագործությունը:',
              },
              {
                es: '"Campos de Castilla", libro de poesía escrito por Antonio Machado.',
                hy: '«Կաստիլիայի դաշտերը», Անտոնիո Մաչադոյի բանաստեղծությունների գիրքը:',
              },
            ],
            examTip: {
              es: 'Palabras clave: "autor conocido", "escrita", "texto inalterable", "lenguaje elaborado".',
              hy: 'Հիմնաբառեր՝ «autor conocido» (հայտնի հեղինակ), «escrita» (գրավոր), «texto inalterable» (անփոփոխ տեքստ):',
            },
          },
        ],
      },
    ],
    selfExplanationPrompt: {
      es: 'Elabora una comparación entre literatura popular y literatura culta mencionando: autoría, modo de transmisión y modificaciones del texto.',
      hy: 'Կատարիր համեմատություն ժողովրդական և հեղինակային գրականության միջև՝ նշելով՝ հեղինակությունը, փոխանցման եղանակը և տեքստի փոփոխությունները:',
    },
    modelExplanation: {
      es: 'La literatura popular es anónima, se transmite de forma oral de generación en generación y sufre variantes y cambios según quien la cuente. En cambio, la literatura culta tiene un autor conocido, se transmite por escrito a través de libros y su texto se conserva inalterable tal como el autor lo escribió.',
      hy: 'Ժողովրդական գրականությունն անանուն է, փոխանցվում է բանավոր կերպով սերնդեսերունդ և ունենում է տարբերակներ ու փոփոխություններ՝ կախված պատմողից: Մինչդեռ հեղինակային գրականությունն ունի հայտնի հեղինակ, փոխանցվում է գրավոր գրքերի միջոցով և նրա տեքստը պահպանվում է անփոփոխ՝ այնպես, ինչպես հեղինակն է գրել:',
    },
    evaluationCriteria: [
      {
        es: 'Distingue autor anónimo vs autor conocido.',
        hy: 'Տարբերում է անանուն հեղինակին հայտնի հեղինակից:',
      },
      {
        es: 'Distingue transmisión oral vs escrita.',
        hy: 'Տարբերում է բանավոր փոխանցումը գրավորից:',
      },
      {
        es: 'Menciona las variantes del texto popular frente al texto fijado del culto.',
        hy: 'Նշում է ժողովրդականի տարբերակայնությունը՝ ի համեմատ հեղինակայինի ֆիքսված տեքստի:',
      },
    ],
  },
  {
    id: 'generos-formas-popular',
    number: 6,
    title: {
      es: 'Los géneros y formas de la literatura popular',
      hy: 'Ժողովրդական գրականության ժանրերը և ձևերը',
    },
    subtitle: {
      es: 'Romance, leyenda, mito, cuento popular, villancicos, nanas y coplas',
      hy: 'Ռոմանս, լեգենդ, առասպել, ժողովրդական հեքիաթ, վիլյանսիկոներ, օրորոցայիններ և կոպլաներ',
    },
    iconName: 'Feather',
    accentColor: 'amber',
    sections: [
      {
        title: {
          es: 'Las cuatro grandes formas narrativas y líricas populares',
          hy: 'Ժողովրդական չորս մեծ պատմողական և քնարական ձևերը',
        },
        description: {
          es: 'La tradición oral española posee formas muy ricas y bien definidas. Es imprescindible no confundir el romance, la leyenda, el mito y el cuento.',
          hy: 'Իսպանական բանավոր ավանդույթն ունի շատ հարուստ և հստակ ձևեր: Պարտադիր է չշփոթել ռոմանսը, լեգենդը, առասպելը և հեքիաթը:',
        },
        items: [
          {
            name: {
              es: '1. El romance',
              hy: '1. Ռոմանս (El romance)',
            },
            definition: {
              es: 'Poema característico de la tradición hispánica compuesto por un número indefinido de versos octosílabos (8 sílabas), con rima asonante en los versos pares y versos impares que quedan sueltos (sin rima).',
              hy: 'Իսպանական ավանդույթի բնորոշ բանաստեղծություն՝ բաղկացած անորոշ քանակի ութավանկ (8 վանկ) տողերից, զույգ տողերում ասոնանսային հանգով և կենտ տողերով, որոնք մնում են ազատ (առանց հանգի):',
            },
            formulaOrStructure: 'Versos: 8 sílabas (octosílabos). Rima: asonante en pares (2, 4, 6, 8...). Impares: sueltos (- a - a - a...).',
            howToIdentify: {
              es: 'Cuenta una historia en verso. Versos de arte menor (8 sílabas). Rima asonante en versos pares (ej.: verso 2 rima con 4, 6, 8 con las mismas vocales).',
              hy: 'Պատմում է պատմություն չափածո ձևով: 8-վանկանի տողեր: Ասոնանս (ձայնավորների) հանգ զույգ տողերում (2, 4, 6...):',
            },
            examples: [
              {
                es: '¡Quién hubiese tal ventura / sobre las aguas del mar, / como hubo el conde Arnaldos / la mañana de San Juan!',
                hy: 'Երանի նրան, ով կունենար այնպիսի բախտ ծովի ջրերի վրա, ինչպես ունեցավ կոմս Արնալդոսը Սուրբ Հովհաննեսի առավոտյան (Ռոմանսի դասական օրինակ):',
              },
              {
                es: 'Que por mayo era, por mayo, / cuando hace la calor, / cuando los trigos encañan / y están los campos en flor...',
                hy: 'Մայիսին էր, մայիսին, երբ շոգ է անում, երբ ցորենը հասկ է կապում, և դաշտերը ծաղկունքի մեջ են (Romance del prisionero):',
              },
            ],
            distinctionFromOthers: {
              es: 'El romance siempre está en VERSO octosílabo, mientras que la leyenda y el cuento suelen transmitirse en PROSA.',
              hy: 'Ռոմանսը միշտ 8-վանկանի ՉԱՓԱԾՈ է, մինչդեռ լեգենդը և հեքիաթը սովորաբար արձակ են:',
            },
            examTip: {
              es: 'Pregunta típica de examen: "¿Qué esquema métrico tiene el romance?" -> "Versos octosílabos con rima asonante en los pares y sueltos los impares".',
              hy: 'Քննության տիպիկ հարց. «Ի՞նչ չափական կառուցվածք ունի ռոմանսը» -> «Ութավանկ տողեր՝ զույգերի ասոնանս հանգով և կենտերի ազատությամբ»:',
            },
          },
          {
            name: {
              es: '2. La leyenda',
              hy: '2. Լեգենդ (La leyenda)',
            },
            definition: {
              es: 'Narración tradicional que parte de un hecho, lugar o personaje histórico y real, al que la imaginación popular añade elementos fantásticos, mágicos o sobrenaturales.',
              hy: 'Ավանդական պատմություն, որը ծագում է իրական պատմական փաստից, վայրից կամ անձից, որին ժողովրդական երևակայությունն ավելացնում է ֆանտաստիկ, կախարդական կամ գերբնական տարրեր:',
            },
            howToIdentify: {
              es: 'Está situada en un lugar real conocido (un castillo concreto, una cueva, un pueblo) y suele relacionarse con un momento histórico o una figura real.',
              hy: 'Տեղայնացված է իրական ծանոթ վայրում (որոշակի ամրոց, քարանձավ, գյուղ) և սովորաբար կապված է պատմական պահի կամ իրական անձի հետ:',
            },
            examples: [
              {
                es: 'La leyenda del monte de las ánimas en Soria.',
                hy: 'Սորիայում գտնվող Հոգիների լեռան լեգենդը:',
              },
              {
                es: 'La leyenda de los amantes de Teruel.',
                hy: 'Տերուելի սիրահարների լեգենդը:',
              },
              {
                es: 'La dama blanca que se aparece en las ruinas del castillo medieval.',
                hy: 'Սպիտակ տիկինը, ով հայտնվում է միջնադարյան ամրոցի ավերակներում:',
              },
            ],
            distinctionFromOthers: {
              es: 'Diferencia Mito vs Leyenda: El mito habla de dioses y el origen del mundo; la leyenda habla de hechos y lugares humanos reales con adornos mágicos.',
              hy: 'Տարբերությունը՝ Առասպել vs Լեգենդ. Առասպելը խոսում է աստվածների և աշխարհի ծագման մասին, իսկ լեգենդը՝ մարդկային իրական վայրերի ու դեպքերի մասին՝ կախարդական հավելումներով:',
            },
            examTip: {
              es: 'Si menciona un pueblo, un monte o un castillo concreto de la geografía, es una LEYENDA.',
              hy: 'Եթե նշվում է աշխարհագրության որևէ կոնկրետ գյուղ, լեռ կամ ամրոց, ապա դա ԼԵԳԵՆԴ է:',
            },
          },
          {
            name: {
              es: '3. El mito',
              hy: '3. Առասպել (El mito)',
            },
            definition: {
              es: 'Relato sagrado tradicional protagonizado por dioses, semidioses, héroes legendarios y seres sobrenaturales que busca explicar el origen del universo, de los fenómenos naturales o de la condición humana.',
              hy: 'Ավանդական սրբազան պատմություն, որի գլխավոր հերոսներն են աստվածները, կիսաստվածները, հերոսները և գերբնական էակները, որը ձգտում է բացատրել տիեզերքի, բնական երևույթների կամ մարդկային էության ծագումը:',
            },
            howToIdentify: {
              es: 'Tiempo remoto y sagrado (fuera del tiempo histórico), personajes divinos (Zeus, Apolo, Poseidón), explicación cosmogónica (cómo nació el fuego, el sol, el invierno).',
              hy: 'Հնագույն և սրբազան ժամանակ (պատմական ժամանակից դուրս), աստվածային կերպարներ (Զևս, Ապոլոն, Պոսեյդոն), տիեզերածնական բացատրություն (ինչպես առաջացավ կրակը, ձմեռը):',
            },
            examples: [
              {
                es: 'El mito de Ícaro y Dédalo y el vuelo con alas de cera.',
                hy: 'Իկարոսի և Դեդալոսի առասպելը և մեղրամոմե թևերով թռիչքը:',
              },
              {
                es: 'El mito de Prometeo robando el fuego a los dioses para entregárselo a los hombres.',
                hy: 'Պրոմեթևսի առասպելը, ով գողացավ կրակը աստվածներից՝ մարդկանց տալու համար:',
              },
              {
                es: 'El mito de Perséfone que explica el origen de las cuatro estaciones del año.',
                hy: 'Պերսեփոնեի առասպելը, որը բացատրում է տարվա չորս եղանակների ծագումը:',
              },
            ],
            distinctionFromOthers: {
              es: 'El mito tiene carácter sagrado y universal; la leyenda es local y se basa en la historia humana.',
              hy: 'Առասպելն ունի սրբազան և համամարդկային բնույթ. լեգենդը տեղային է և հիմնված է մարդկային պատմության վրա:',
            },
            examTip: {
              es: 'Si aparecen dioses del Olimpo o seres mitológicos explicando el origen del fuego o del mundo, es un MITO.',
              hy: 'Եթե հայտնվում են Օլիմպոսի աստվածներ կամ դիցաբանական էակներ, որոնք բացատրում են աշխարհի կամ կրակի ծագումը, ապա դա ԱՌԱՍՊԵԼ է:',
            },
          },
          {
            name: {
              es: '4. El cuento popular',
              hy: '4. Ժողովրդական հեքիաթ (El cuento popular)',
            },
            definition: {
              es: 'Narración breve en prosa de hechos ficticios, con pocos personajes, argumento sencillo y estructura tripartita fija: planteamiento, nudo y desenlace.',
              hy: 'Հորինված դեպքերի մասին կարճ պատմություն արձակով, քիչ կերպարներով, պարզ սյուժեով և հստակ եռամաս կառուցվածքով՝ սկիզբ (հանգույց), զարգացում և ավարտ (լուծում):',
            },
            howToIdentify: {
              es: 'Fórmulas de inicio ("Había una vez...", "Érase una vez...") y de cierre ("...fueron felices y comieron perdices"). Espacio y tiempo indeterminados ("en un lejano reino").',
              hy: 'Սկսվելու («Կար-չկար...», «Ժուկով-ժամանակով...») և ավարտվելու կայուն բանաձևեր: Անորոշ տարածություն և ժամանակ («մի հեռավոր թագավորությունում»):',
            },
            examples: [
              {
                es: '"Caperucita Roja y el lobo en el bosque encantado."',
                hy: '«Կարմիր գլխարկը և գայլը կախարդական անտառում»:',
              },
              {
                es: '"Los tres cerditos y sus casas de paja, madera y ladrillo."',
                hy: '«Երեք խոզուկները և նրանց ծղոտե, փայտե ու աղյուսե տները»:',
              },
              {
                es: '"El flautista de Hamelín y los ratones."',
                hy: '«Համելնի սրնգահարը և մկները»:',
              },
            ],
            distinctionFromOthers: {
              es: 'A diferencia de la leyenda, no pretende que el oyente crea que ocurrió en un lugar histórico real.',
              hy: 'Ի տարբերություն լեգենդի, չի պնդում, թե տեղի է ունեցել որևէ իրական պատմական վայրում:',
            },
            examTip: {
              es: 'Recuerda las 3 partes: Planteamiento (presentación), Nudo (conflicto) y Desenlace (solución).',
              hy: 'Հիշիր 3 մասերը՝ Planteamiento (սկիզբ), Nudo (բուն կոնֆլիկտ) և Desenlace (լուծում):',
            },
          },
          {
            name: {
              es: '5. Otras formas líricas: Villancicos, nanas y coplas',
              hy: '5. Այլ քնարական ձևեր՝ վիլյանսիկոներ, նանաներ (օրորներ) և կոպլաներ',
            },
            definition: {
              es: 'Composiciones poéticas populares breves ligadas al ciclo vital y festivo.',
              hy: 'Կարճ ժողովրդական բանաստեղծական ստեղծագործություններ՝ կապված կյանքի և տոնական ցիկլի հետ:',
            },
            howToIdentify: {
              es: 'Villancico: estribillo y coplas, temática navideña o campesina. Nana: ritmo suave y repetitivo para dormir niños. Copla: estrofa de 4 versos octosílabos.',
              hy: 'Վիլյանսիկո՝ կրկներգով, սուրբծննդյան կամ գյուղական թեմայով: Նանա՝ մեղմ և կրկնվող ռիթմ երեխաներին քնեցնելու համար: Կոպլա՝ 4 տողանի ութավանկ տուն:',
            },
            examples: [
              {
                es: 'Nana tradicional: "Duérmete, niño, duérmete ya, que viene el coco y te comerá".',
                hy: 'Ավանդական օրոր. «Քնի՛ր, բալիկս, քնիր հիմա...»:',
              },
              {
                es: 'Villancico: "Los pastores a Belén corren presurosos...".',
                hy: 'Վիլյանսիկո (սուրբծննդյան երգ). «Հովիվները շտապում են Բեթղեհեմ...»:',
              },
              {
                es: 'Copla popular: estrofas de cuatro versos de arte menor sobre el amor o la vida cotidiana.',
                hy: 'Ժողովրդական կոպլա. սիրո կամ առօրյա կյանքի մասին չորստողանի քառյակներ:',
              },
            ],
            examTip: {
              es: 'Si sirve para hacer dormir a un bebé, es una NANA. Si es de Navidad, es un VILLANCICO.',
              hy: 'Եթե ծառայում է երեխային քնեցնելուն՝ ՆԱՆԱ է: Եթե Սուրբ Ծննդյան մասին է՝ ՎԻԼՅԱՆՍԻԿՈ:',
            },
          },
        ],
      },
    ],
    selfExplanationPrompt: {
      es: 'Explica qué elementos diferencian un mito de una leyenda, y pon un ejemplo de cada uno.',
      hy: 'Բացատրիր, թե ինչ տարրեր են տարբերում առասպելը լեգենդից, և բեր մեկական օրինակ յուրաքանչյուրից:',
    },
    modelExplanation: {
      es: 'El mito es un relato sagrado protagonizado por dioses o seres sobrenaturales que explica el origen del mundo o de fenómenos naturales en un tiempo remoto (ej.: el mito de Prometeo y el fuego). La leyenda, en cambio, se sitúa en un lugar geográfico y época histórica reales, con personajes humanos, pero incorpora hechos fantásticos o misteriosos (ej.: la leyenda del Monte de las Ánimas).',
      hy: 'Առասպելը սրբազան պատմություն է՝ աստվածների կամ գերբնական էակների մասնակցությամբ, որը բացատրում է աշխարհի կամ բնական երևույթների ծագումը հնագույն ժամանակներում (օր.՝ Պրոմեթևսի և կրակի առասպելը): Լեգենդը, ընդհակառակը, տեղադրված է իրական աշխարհագրական վայրում և պատմական ժամանակաշրջանում՝ մարդկային կերպարներով, բայց պարունակում է ֆանտաստիկ կամ խորհրդավոր տարրեր (օր.՝ Հոգիների լեռան լեգենդը):',
    },
    evaluationCriteria: [
      {
        es: 'Menciona que el mito tiene dioses/explica el origen del mundo.',
        hy: 'Նշում է, որ առասպելն ունի աստվածներ և բացատրում է աշխարհի ծագումը:',
      },
      {
        es: 'Menciona que la leyenda tiene base histórica/geográfica real con elementos mágicos.',
        hy: 'Նշում է, որ լեգենդն ունի իրական պատմական/աշխարհագրական հիմք՝ կախարդական տարրերով:',
      },
    ],
  },
  {
    id: 'lenguaje-prosa-verso',
    number: 7,
    title: {
      es: 'El lenguaje literario, la prosa y el verso',
      hy: 'Գրական լեզուն, արձակը և չափածոն',
    },
    subtitle: {
      es: 'Finalidad estética, recursos literarios, prosa vs verso, rima (asonante y consonante) y métrica',
      hy: 'Գեղագիտական նպատակ, արտահայտչամիջոցներ, արձակ vs չափածո, հանգ (ասոնանս և կոնսոնանս) և չափականություն',
    },
    iconName: 'AlignLeft',
    accentColor: 'cyan',
    sections: [
      {
        title: {
          es: 'El lenguaje literario frente al lenguaje cotidiano',
          hy: 'Գրական լեզուն առօրյա խոսքի համեմատությամբ',
        },
        description: {
          es: 'El lenguaje cotidiano tiene una finalidad práctica: informar, pedir, saludar de forma rápida. En cambio, el lenguaje literario persigue una finalidad estética: crear belleza, despertar emociones y provocar el goce del lector.',
          hy: 'Առօրյա լեզուն ունի գործնական նպատակ՝ արագ տեղեկացնել, խնդրել, ողջունել: Մինչդեռ գրական լեզուն հետապնդում է գեղագիտական նպատակ՝ ստեղծել գեղեցկություն, արթնացնել հույզեր և ընթերցողին հաճույք պատճառել:',
        },
        items: [
          {
            name: {
              es: 'Prosa',
              hy: 'Արձակ (Prosa)',
            },
            definition: {
              es: 'Forma natural de expresión lingüística que ocupa todo el renglón de la página, organizada en oraciones que se agrupan en párrafos, sin medida fija de sílabas ni rima.',
              hy: 'Լեզվական արտահայտման բնական ձև, որը զբաղեցնում է էջի ողջ տողը, կազմված է նախադասություններից, որոնք խմբավորվում են պարբերություններում՝ առանց վանկերի ֆիքսված քանակի կամ հանգի:',
            },
            howToIdentify: {
              es: 'El texto llega hasta el margen derecho. Párrafos separados por punto y aparte. Se utiliza en novelas, cuentos, noticias y ensayos.',
              hy: 'Տեքստը հասնում է մինչև աջ լուսանցքը: Պարբերությունները բաժանված են վերջակետերով: Օգտագործվում է վեպերում, պատմվածքներում, լուրերում:',
            },
            examples: [
              {
                es: 'Platero es pequeño, peludo, suave; tan blando por fuera, que se diría todo de algodón, que no lleva huesos.',
                hy: 'Պլատերոն փոքրիկ է, մազոտ, փափուկ. դրսից այնքան մեղմ, որ կասեիր ամբողջությամբ բամբակից է, առանց ոսկորների (Խուան Ռամոն Խիմենես - արձակ):',
              },
              {
                es: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo...',
                hy: 'Լա Մանչայի մի բնակավայրում, որի անունը չեմ ուզում հիշել, ոչ շատ վաղուց ապրում էր մի իդալգո... (Սերվանտես - արձակ):',
              },
            ],
            examTip: {
              es: 'Si el texto llena las líneas completas y tiene párrafos, está escrito en PROSA.',
              hy: 'Եթե տեքստը լցնում է ամբողջական տողերը և ունի պարբերություններ, ապա գրված է ԱՐՁԱԿՈՎ:',
            },
          },
          {
            name: {
              es: 'Verso',
              hy: 'Չափածո կամ տող (Verso)',
            },
            definition: {
              es: 'Forma especial de expresión organizada en líneas cortas (versos) dotadas de ritmo, cadencia y, con frecuencia, una medida exacta de sílabas (métrica) y rima.',
              hy: 'Արտահայտման հատուկ ձև՝ կազմված կարճ տողերից (տներից), որոնք օժտված են ռիթմով, ներդաշնակությամբ և հաճախ վանկերի ճշգրիտ չափով ու հանգով:',
            },
            howToIdentify: {
              es: 'No ocupa todo el renglón. Cada línea es un verso. Los versos se agrupan en estrofas. Presenta ritmo y rima.',
              hy: 'Չի զբաղեցնում ողջ տողը: Յուրաքանչյուր տող բանաստեղծական տող է: Տողերը խմբավորվում են տներում (estrofas): Ունի ռիթմ և հանգ:',
            },
            examples: [
              {
                es: 'Volverán las oscuras golondrinas / en tu balcón sus nidos a colgar...',
                hy: 'Կվերադառնան մութ ծիծեռնակները քո պատշգամբում իրենց բները կախելու... (Բեկեր - չափածո):',
              },
              {
                es: 'Caminante, son tus huellas / el camino y nada más; / caminante, no hay camino, / se hace camino al andar.',
                hy: 'Ճամփո՛րդ, քո հետքերն են ճանապարհը և ուրիշ ոչինչ. ճամփո՛րդ, ճանապարհ չկա, ճանապարհը հարթվում է քայլելիս (Մաչադո - չափածո):',
              },
            ],
            examTip: {
              es: 'Cada una de las líneas que componen un poema se llama VERSO.',
              hy: 'Բանաստեղծությունը կազմող յուրաքանչյուր տողը կոչվում է VERSO (չափածո տող):',
            },
          },
          {
            name: {
              es: 'Rima consonante vs Rima asonante',
              hy: 'Կոնսոնանս (լրիվ) հանգ vs Ասոնանս (ձայնավորային) հանգ',
            },
            definition: {
              es: 'La rima es la repetición de sonidos a partir de la última vocal acentuada del verso. Rima consonante: coinciden vocales Y consonantes. Rima asonante: coinciden SOLO las vocales.',
              hy: 'Հանգը հնչյունների կրկնությունն է՝ սկսած տողի վերջին շեշտված ձայնավորից: Կոնսոնանս հանգ՝ համընկնում են ԵՎ՛ ձայնավորները, ԵՎ՛ բաղաձայնները: Ասոնանս հանգ՝ համընկնում են ՄԻԱՅՆ ձայնավորները:',
            },
            howToIdentify: {
              es: 'Consonante: v-IENTO / s-IENTO (-iento igual). Asonante: b-A-rc-O / p-A-s-O (solo coinciden A-O; la "rc" y la "s" son distintas).',
              hy: 'Կոնսոնանս՝ v-IENTO / s-IENTO (-iento-ն լրիվ նույնն է): Ասոնանս՝ b-A-rc-O / p-A-s-O (համընկնում են միայն A-O-ն, իսկ բաղաձայնները տարբեր են):',
            },
            examples: [
              {
                es: 'Consonante: "Que es mi barco mi tesoro, / que es mi dios la libertad, / mi ley, la fuerza y el viento, / mi única patria, la mar."',
                hy: 'Կոնսոնանս օրինակ. v-IENTO / movim-IENTO (-iento նույնն է):',
              },
              {
                es: 'Asonante: "A las cinco de la tarde. / ¡Eran las cinco en punto de la tarde! / Un niño trajo la blanca sábana / a las cinco de la tarde."',
                hy: 'Ասոնանս օրինակ. casA / camA / blancA (համընկնում են միայն ձայնավորները):',
              },
            ],
            distinctionFromOthers: {
              es: 'Si una sola consonante cambia (ej.: cielo / pelo), NO es consonante, es asonante porque solo riman las vocales e-o.',
              hy: 'Եթե գոնե մեկ բաղաձայն տարբերվում է (օր.՝ cielo / pelo), ապա դա կոնսոնանս ՉԷ, այլ ասոնանս է, քանի որ հանգավորվում են միայն e-o ձայնավորները:',
            },
            examTip: {
              es: 'Consonante = Vocales + Consonantes. Asonante = Solo Vocales.',
              hy: 'Կոնսոնանս = Ձայնավորներ + Բաղաձայններ: Ասոնանս = Միայն ձայնավորներ:',
            },
          },
        ],
      },
    ],
    selfExplanationPrompt: {
      es: 'Explica con tus palabras la diferencia entre rima consonante y rima asonante, y escribe dos palabras que rimen en consonante y dos que rimen en asonante.',
      hy: 'Բացատրիր քո բառերով կոնսոնանս և ասոնանս հանգերի տարբերությունը և գրիր երկու բառ, որոնք հանգավորվում են կոնսոնանսով, և երկուսը՝ ասոնանսով:',
    },
    modelExplanation: {
      es: 'En la rima consonante coinciden todos los sonidos (vocales y consonantes) desde la última vocal acentuada (ej.: canción / corazón; viento / siento). En la rima asonante solo coinciden las vocales, mientras que las consonantes son diferentes (ej.: barco / plato, coinciden a-o; cielo / viento, coinciden e-o).',
      hy: 'Կոնսոնանս հանգում համընկնում են բոլոր հնչյունները (ձայնավորներ և բաղաձայններ) վերջին շեշտված ձայնավորից սկսած (օր.՝ canción / corazón; viento / siento): Ասոնանս հանգում համընկնում են միայն ձայնավորները, իսկ բաղաձայնները տարբեր են (օր.՝ barco / plato, համընկնում են a-o-ն; noche / bosque, համընկնում են o-e-ն):',
    },
    evaluationCriteria: [
      {
        es: 'Define consonante como coincidencia de vocales y consonantes.',
        hy: 'Սահմանում է կոնսոնանսը որպես ձայնավորների և բաղաձայնների լրիվ համընկնում:',
      },
      {
        es: 'Define asonante como coincidencia exclusiva de vocales.',
        hy: 'Սահմանում է ասոնանսը որպես բացառապես ձայնավորների համընկնում:',
      },
      {
        es: 'Pone ejemplos correctos para ambos tipos de rima.',
        hy: 'Բերում է ճիշտ օրինակներ երկու տեսակի հանգերի համար էլ:',
      },
    ],
  },
  {
    id: 'figuras-fonicas',
    number: 8,
    title: {
      es: 'Figuras literarias — Nivel fónico',
      hy: 'Գրական պատկերավորման միջոցներ — Հնչյունական մակարդակ',
    },
    subtitle: {
      es: 'Aliteración, onomatopeya, paronomasia y epanadiplosis',
      hy: 'Բաղաձայնույթ (ալիտերացիա), բնաձայնություն (օնոմատոպեա), հարանունություն (պարոնոմազիա) և էպանադիպլոսիս',
    },
    iconName: 'Volume2',
    accentColor: 'violet',
    sections: [
      {
        title: {
          es: 'Los recursos basados en el sonido de las palabras',
          hy: 'Բառերի հնչողության վրա հիմնված արտահայտչամիջոցները',
        },
        description: {
          es: 'Las figuras fónicas juegan con los sonidos de las letras y palabras para sugerir sensaciones, imitar ruidos de la naturaleza o crear musicalidad.',
          hy: 'Հնչյունական միջոցները խաղում են տառերի և բառերի հնչյունների հետ՝ զգացողություններ առաջացնելու, բնության ձայները նմանակելու կամ երաժշտականություն ստեղծելու համար:',
        },
        items: [
          {
            name: {
              es: '1. Aliteración',
              hy: '1. Բաղաձայնույթ / Ալիտերացիա (Aliteración)',
            },
            definition: {
              es: 'Figura retórica que consiste en la repetición deliberada de un mismo sonido (generalmente consonántico) en un verso o frase para lograr un efecto rítmico o evocar una sensación.',
              hy: 'Հռետորական պատկեր, որը կայանում է նույն հնչյունի (սովորաբար բաղաձայնի) միտումնավոր կրկնության մեջ տողում կամ նախադասության մեջ՝ ռիթմիկ էֆեկտ ստանալու կամ որևէ զգացողություն առաջացնելու համար:',
            },
            howToIdentify: {
              es: 'Observa si una consonante o grupo de sonidos se repite de forma insistente (como la "s" para imitar el viento o el susurro, o la "r" para imitar fuerza o rugido).',
              hy: 'Նկատիր, եթե որևէ բաղաձայն կամ հնչյունախումբ համառորեն կրկնվում է (օրինակ՝ «s»-ը՝ քամու կամ շշուկի նմանակման համար, կամ «r»-ը՝ ուժի համար):',
            },
            examples: [
              {
                es: 'En el silencio solo se escuchaba un susurro de abejas que sonaba. (Repetición de la "s").',
                hy: 'Լռության մեջ լսվում էր միայն մեղուների մի շշուկ, որ հնչում էր («s» հնչյունի կրկնություն):',
              },
              {
                es: 'Tres tristes tigres tragan trigo en un trigal. (Repetición de "tr").',
                hy: 'Երեք տխուր վագր ցորեն են կուլ տալիս ցորենի արտում («tr» հնչյունի կրկնություն):',
              },
              {
                es: 'El ruido con que rueda la ronca tempestad. (Repetición de la "r").',
                hy: 'Այն աղմուկը, որով գլորվում է խռպոտ փոթորիկը («r» հնչյունի կրկնություն):',
              },
              {
                es: 'Mi mamá me mima mucho. (Repetición de la "m").',
                hy: 'Մայրիկս շատ է ինձ փայփայում («m» հնչյունի կրկնություն):',
              },
              {
                es: 'Bajo el ala leve del leve abanico. (Repetición de "l" y "b/v").',
                hy: 'Թեթև հովհարի թեթև թևի տակ («l» և «b/v» հնչյունների կրկնություն):',
              },
            ],
            distinctionFromOthers: {
              es: 'La aliteración repite sonidos individuales sueltos, no palabras enteras como la anáfora.',
              hy: 'Ալիտերացիան կրկնում է առանձին հնչյուններ, ոչ թե ամբողջական բառեր, ինչպես անաֆորան:',
            },
            examTip: {
              es: 'En el examen di qué letra o sonido exacto se repite (ej.: "repetición del fonema /s/").',
              hy: 'Քննությանը նշիր, թե կոնկրետ որ տառը կամ հնչյունն է կրկնվում (օր.՝ «/s/ հնչյունի կրկնություն»):',
            },
          },
          {
            name: {
              es: '2. Onomatopeya',
              hy: '2. Բնաձայնություն / Օնոմատոպեա (Onomatopeya)',
            },
            definition: {
              es: 'Palabra o expresión que imita o reproduce por escrito un sonido real de la naturaleza, de un animal o de un objeto.',
              hy: 'Բառ կամ արտահայտություն, որը գրավոր ձևով նմանակում կամ վերարտադրում է բնության, կենդանու կամ առարկայի իրական ձայնը:',
            },
            howToIdentify: {
              es: 'Representa sonidos directamente: tictac (reloj), guau (perro), miau (gato), ¡pum! (explosión), ¡chas! (rotura), quiquiriquí (gallo).',
              hy: 'Ուղղակիորեն ներկայացնում է ձայներ՝ tictac (ժամացույց), guau (շուն), miau (կատու), ¡pum! (պայթյուն), ¡chas! (կոտրվել):',
            },
            examples: [
              {
                es: 'El tictac del reloj rompía el silencio de la noche.',
                hy: 'Ժամացույցի չիկ-չակը (tictac) խախտում էր գիշերվա լռությունը:',
              },
              {
                es: '¡Pum! Sonó el portazo con la ráfaga de viento.',
                hy: 'Դը՜մփ (¡Pum!): Դուռը դրմբաց քամու պոռթկումից:',
              },
              {
                es: 'El gato maullaba: ¡miau, miau! pidiendo su comida.',
                hy: 'Կատուն մլավում էր՝ մյա՛ու, մյա՛ու (miau)՝ իր ուտելիքը խնդրելով:',
              },
              {
                es: 'El zumbido de las abejas: bzzzz en el panal.',
                hy: 'Մեղուների բզզոցը՝ բը՜զզզ (bzzzz) փեթակում:',
              },
              {
                es: '¡Chas! Se partió la rama seca bajo sus pies.',
                hy: 'Ճա՛ք (¡Chas!): Չոր ճյուղը կոտրվեց նրա ոտքերի տակ:',
              },
            ],
            distinctionFromOthers: {
              es: 'La onomatopeya ES una palabra que copia un sonido; la aliteración solo evoca un sonido repitiendo letras.',
              hy: 'Օնոմատոպեան հենց ձայնը կրկնօրինակող բառն Է. ալիտերացիան միայն հիշեցնում է ձայնը տառերի կրկնությամբ:',
            },
            examTip: {
              es: 'Palabras como "tictac", "pum", "zas", "clic" son onomatopeyas inmediatas.',
              hy: '«Tictac», «pum», «zas», «clic» բառերն ակնհայտ բնաձայնություններ են:',
            },
          },
          {
            name: {
              es: '3. Paronomasia',
              hy: '3. Հարանունություն / Պարոնոմազիա (Paronomasia)',
            },
            definition: {
              es: 'Figura retórica que consiste en colocar próximas dos palabras de sonido muy semejante (parónimos), pero con significados totalmente distintos.',
              hy: 'Հռետորական պատկեր, որը կայանում է նույն նախադասության մեջ հնչողությամբ շատ նման (հարանուն), բայց բոլորովին տարբեր իմաստ ունեցող երկու բառերի կողք կողքի դրվելու մեջ:',
            },
            howToIdentify: {
              es: 'Busca pares de palabras que se diferencian solo por una o dos letras pero significan cosas diferentes (ej.: hombre / hambre; presa / prisa; adaptar / adoptar).',
              hy: 'Փնտրիր բառազույգեր, որոնք տարբերվում են ընդամենը մեկ կամ երկու տառով, բայց նշանակում են տարբեր բաներ (hombre / hambre; presa / prisa):',
            },
            examples: [
              {
                es: 'Vendado que me has vendido. (Vendado / vendido).',
                hy: 'Աչքակապ, որ ինձ վաճառեցիր (Vendado / vendido):',
              },
              {
                es: 'El erizo se eriza, se riza de risa.',
                hy: 'Ոզնին փշոտվում է, ոլորվում է ծիծաղից (se eriza / se riza / de risa):',
              },
              {
                es: 'Quien comparte y compensa, con paciencia piensa.',
                hy: 'Ով կիսում է և հատուցում, համբերությամբ է մտածում (compensa / piensa):',
              },
              {
                es: 'Con dados ganan condados. (Dados / condados).',
                hy: 'Զառերով շահում են կոմսություններ (Dados / condados):',
              },
              {
                es: 'Tanta prisa te hace caer preso del error.',
                hy: 'Այդքան շտապողականությունը (prisa) քեզ դարձնում է սխալի գերի (preso):',
              },
            ],
            distinctionFromOthers: {
              es: 'No repite la misma palabra; utiliza palabras parecidas en sonido pero diferentes en significado.',
              hy: 'Չի կրկնում նույն բառը, այլ օգտագործում է հնչյունով նման, բայց իմաստով տարբեր բառեր:',
            },
            examTip: {
              es: 'Si hay un juego de palabras basado en cambiar una vocal ("vendado/vendido", "hombre/hambre"), es paronomasia.',
              hy: 'Եթե կա բառախաղ՝ հիմնված մեկ ձայնավորի փոփոխության վրա («vendado/vendido»), ապա դա պարոնոմազիա է:',
            },
          },
          {
            name: {
              es: '4. Epanadiplosis',
              hy: '4. Էպանադիպլոսիս (Epanadiplosis)',
            },
            definition: {
              es: 'Figura retórica que consiste en empezar y terminar un mismo verso o una misma frase con la misma palabra exacta.',
              hy: 'Հռետորական պատկեր, որը կայանում է նույն բանաստեղծական տողը կամ նախադասությունը նույն ճշգրիտ բառով սկսելու և ավարտելու մեջ:',
            },
            formulaOrStructure: 'PALABRA ... PALABRA (al principio y al final del mismo verso)',
            howToIdentify: {
              es: 'Comprueba la primera palabra del verso y la última palabra de ese mismo verso: si son idénticas, es epanadiplosis.',
              hy: 'Ստուգիր տողի առաջին բառը և նույն տողի վերջին բառը. եթե դրանք նույնն են, ապա դա էպանադիպլոսիս է:',
            },
            examples: [
              {
                es: 'Verde que te quiero verde.',
                hy: 'Կանա՜չ, որ քեզ սիրում եմ կանաչ (Սկսվում և ավարտվում է «Verde»-ով):',
              },
              {
                es: 'Silencio, en la noche fría solo pido silencio.',
                hy: 'Լռությո՛ւն, ցուրտ գիշերով ես խնդրում եմ միայն լռություն («Silencio» ... «silencio»):',
              },
              {
                es: 'Huracán, huracán, venid pronto, huracán.',
                hy: 'Փոթորի՛կ, փոթորի՛կ, արի շուտով, փոթորի՛կ («Huracán» ... «huracán»):',
              },
              {
                es: 'Perderte es lo que más temo, no quiero perderte.',
                hy: 'Քեզ կորցնելն այն է, ինչից ամենաշատն եմ վախենում, չեմ ուզում քեզ կորցնել:',
              },
              {
                es: 'Palabras, el viento se lleva las palabras.',
                hy: 'Բառեր, քամին տանում է բառերը («Palabras» ... «palabras»):',
              },
            ],
            distinctionFromOthers: {
              es: 'Anáfora vs Epanadiplosis: la anáfora repite al PRINCIPIO de varios versos; la epanadiplosis repite al PRINCIPIO Y AL FINAL del MISMO verso.',
              hy: 'Անաֆորա vs Էպանադիպլոսիս. անաֆորան կրկնում է մի քանի տողերի ՍԿԶԲՈՒՄ, իսկ էպանադիպլոսիսը՝ ՆՈՒՅՆ տողի ՍԿԶԲՈՒՄ ԵՎ ՎԵՐՋՈՒՄ:',
            },
            examTip: {
              es: 'Fórmula nemotécnica: "Verde... verde" = Principio y final = Epanadiplosis.',
              hy: 'Հիշելու բանաձև. «Verde... verde» = Սկիզբ և վերջ = Էպանադիպլոսիս:',
            },
          },
        ],
      },
    ],
    selfExplanationPrompt: {
      es: '¿En qué se diferencian la aliteración y la onomatopeya? Pon un ejemplo claro de cada una.',
      hy: 'Ինչո՞վ են տարբերվում ալիտերացիան (բաղաձայնույթը) և օնոմատոպեան (բնաձայնությունը): Բեր հստակ օրինակ յուրաքանչյուրից:',
    },
    modelExplanation: {
      es: 'La aliteración consiste en repetir un sonido o letra varias veces en un verso para sugerir una sensación (ej.: "el susurro suave del viento", repite la "s"). En cambio, la onomatopeya es una palabra que imita directamente un sonido real de la naturaleza o de las cosas (ej.: "el tictac del reloj").',
      hy: 'Ալիտերացիան կայանում է տողում որևէ հնչյուն կամ տառ մի քանի անգամ կրկնելու մեջ՝ զգացողություն ներշնչելու համար (օր.՝ «el susurro suave», կրկնում է «s»-ը): Իսկ օնոմատոպեան բառ է, որն ուղղակիորեն նմանակում է բնության կամ իրերի իրական ձայնը (օր.՝ «el tictac del reloj»):',
    },
    evaluationCriteria: [
      {
        es: 'Explica que la aliteración repite sonidos sueltos y la onomatopeya imita un ruido real mediante una palabra.',
        hy: 'Բացատրում է, որ ալիտերացիան կրկնում է առանձին հնչյուններ, իսկ օնոմատոպեան նմանակում է իրական ձայն բառի միջոցով:',
      },
      {
        es: 'Aporta ejemplos correctos y distintos.',
        hy: 'Բերում է ճիշտ և տարբերվող օրինակներ:',
      },
    ],
  },
  {
    id: 'figuras-morfosintacticas',
    number: 9,
    title: {
      es: 'Figuras literarias — Nivel morfosintáctico',
      hy: 'Գրական պատկերավորման միջոցներ — Ձևաբանական-շարահյուսական մակարդակ',
    },
    subtitle: {
      es: 'Hipérbaton, anáfora, asíndeton, polisíndeton, enumeración y pleonasmo',
      hy: 'Հիպերբատոն (շրջադասություն), անաֆորա, ասինդետոն (անշաղկապություն), պոլիսինդետոն (բազմաշաղկապություն), թվարկում և պլեոնազմ',
    },
    iconName: 'Shuffle',
    accentColor: 'indigo',
    sections: [
      {
        title: {
          es: 'Los recursos basados en el orden y combinación de las palabras',
          hy: 'Բառերի շարադասության և համակցման վրա հիմնված արտահայտչամիջոցները',
        },
        description: {
          es: 'Afectan a la estructura gramatical de la oración: alteran el orden habitual, suprimen o añaden nexos, o repiten términos estratégicos.',
          hy: 'Ազդում են նախադասության քերականական կառուցվածքի վրա. փոխում են սովորական շարադասությունը, ջնջում կամ ավելացնում կապող բառեր կամ կրկնում ռազմավարական եզրույթներ:',
        },
        items: [
          {
            name: {
              es: '1. Hipérbaton',
              hy: '1. Հիպերբատոն / Շրջադասություն (Hipérbaton)',
            },
            definition: {
              es: 'Figura sintáctica que consiste en alterar el orden lógico y habitual de las palabras en la oración (Sujeto + Verbo + Complementos) para destacar una idea o por razones métricas.',
              hy: 'Շարահյուսական պատկեր, որը կայանում է նախադասության մեջ բառերի տրամաբանական և սովորական շարադասությունը (Ենթակա + Բայ + Լրացումներ) փոխելու մեջ՝ որևէ գաղափար ընդգծելու կամ չափական պատճառներով:',
            },
            howToIdentify: {
              es: 'Si el verbo aparece al final, o el complemento antes del sujeto ("En el jardín jugaban los niños" en vez de "Los niños jugaban en el jardín"), hay hipérbaton.',
              hy: 'Եթե բայը հայտնվում է վերջում, կամ լրացումը ենթակայից առաջ («En el jardín jugaban los niños»), առկա է հիպերբատոն:',
            },
            examples: [
              {
                es: 'Volverán las oscuras golondrinas en tu balcón sus nidos a colgar. (Orden lógico: Las oscuras golondrinas volverán a colgar sus nidos en tu balcón).',
                hy: 'Կվերադառնան մութ ծիծեռնակները քո պատշգամբում իրենց բները կախելու (Սովորական կարգ՝ Las oscuras golondrinas volverán...):',
              },
              {
                es: 'Cerca del tajo en soledad amena, de verdes sauces hay una espesura.',
                hy: 'Գետի մոտ հաճելի մենության մեջ, կանաչ ուռիների մի թավուտ կա:',
              },
              {
                es: 'Del salón en el ángulo oscuro, veíase el arpa.',
                hy: 'Սրահի մութ անկյունում տեսանելի էր տավիղը:',
              },
              {
                es: 'Pidiendo perdón llegó el alumno tarde.',
                hy: 'Ներողություն խնդրելով եկավ աշակերտը ուշ:',
              },
              {
                es: 'Con dolor profundo lloraba la reina su partida.',
                hy: 'Խորին ցավով լաց էր լինում թագուհին նրա հեռանալու վրա:',
              },
            ],
            distinctionFromOthers: {
              es: 'No repite ni añade palabras; únicamente DESORDENA la posición habitual de los elementos en la frase.',
              hy: 'Չի կրկնում կամ ավելացնում բառեր. միայն ԽԱԽՏՈՒՄ Է բառերի սովորական դիրքը նախադասության մեջ:',
            },
            examTip: {
              es: 'Reordena mentalmente la frase a "Sujeto + Verbo + Objeto": si notas que estaba desordenada artísticamente, es hipérbaton.',
              hy: 'Մտքում վերադասավորիր նախադասությունը «Ենթակա + Բայ + Լրացում» կարգով. եթե նկատում ես, որ այն արվեստորեն խախտված էր, ուրեմն հիպերբատոն է:',
            },
          },
          {
            name: {
              es: '2. Anáfora',
              hy: '2. Անաֆորա / Տողասկզբի կրկնություն (Anáfora)',
            },
            definition: {
              es: 'Figura retórica que consiste en la repetición de una o más palabras al comienzo de varios versos o frases consecutivos.',
              hy: 'Հռետորական պատկեր, որը կայանում է մեկ կամ մի քանի բառերի կրկնության մեջ մի քանի հաջորդական տողերի կամ նախադասությունների ՍԿԶԲՈՒՄ:',
            },
            formulaOrStructure: 'PALABRA ... / PALABRA ... / PALABRA ... (al inicio de cada línea)',
            howToIdentify: {
              es: 'Mira el inicio de dos o más versos seguidos: si arrancan exactamente con la misma palabra, es una anáfora.',
              hy: 'Նայիր երկու կամ ավելի հաջորդական տողերի սկզբին. եթե դրանք սկսվում են ճիշտ նույն բառով, ապա դա անաֆորա է:',
            },
            examples: [
              {
                es: 'Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada, / temprano estás rodando por el suelo. (Miguel Hernández).',
                hy: 'Վաղ բարձրացրեց մահը թռիչքը, / վաղ լուսացավ լուսաբացը, / վաղ ես գլորվում գետնին (Անաֆորա «Temprano» բառով):',
              },
              {
                es: 'Por ti la verde hierba, el fresco viento, / por ti el dulce murmurar del río.',
                hy: 'Քեզ համար կանաչ խոտը, զով քամին, / քեզ համար գետի քաղցր քրքիջը («Por ti» կրկնվում է սկզբում):',
              },
              {
                es: 'No perdono a la muerte enamorada, / no perdono a la vida desatenta.',
                hy: 'Չեմ ներում սիրահարված մահվանը, / չեմ ներում անուշադիր կյանքին («No perdono»):',
              },
              {
                es: 'Verde nativo, / verde de yerba que sueña, / verde sencillo.',
                hy: 'Հարազատ կանաչ, / երազող խոտի կանաչ, / պարզ կանաչ («Verde» տողասկզբում):',
              },
              {
                es: 'Lloran los ojos, / lloran las nubes, / llora la tarde.',
                hy: 'Լալիս են աչքերը, / լալիս են ամպերը, / լալիս է կեսօրը («Lloran/llora»):',
              },
            ],
            distinctionFromOthers: {
              es: 'Anáfora vs Epanadiplosis: la anáfora repite al PRINCIPIO de varios versos; la epanadiplosis repite al principio y al final del MISMO verso.',
              hy: 'Անաֆորա vs Էպանադիպլոսիս. անաֆորան կրկնում է մի քանի տողերի ՍԿԶԲՈՒՄ, իսկ էպանադիպլոսիսը՝ ՆՈՒՅՆ տողի սկզբում և վերջում:',
            },
            examTip: {
              es: 'Si ves una columna de palabras iguales al principio de varios versos seguidos, es anáfora.',
              hy: 'Եթե տեսնում ես նույն բառերի սյունակ մի քանի հաջորդական տողերի սկզբում, ապա դա անաֆորա է:',
            },
          },
          {
            name: {
              es: '3. Asíndeton',
              hy: '3. Ասինդետոն / Անշաղկապություն (Asíndeton)',
            },
            definition: {
              es: 'Figura retórica que consiste en la supresión voluntaria de conjunciones (como "y", "e", "ni") entre palabras u oraciones para aportar dinamismo, agilidad y rapidez.',
              hy: 'Հռետորական պատկեր, որը կայանում է բառերի կամ նախադասությունների միջև շաղկապների («y», «e», «ni») կամավոր բացթողման մեջ՝ շարժունություն, ճկունություն և արագություն հաղորդելու համար:',
            },
            formulaOrStructure: 'Palabra, palabra, palabra (separadas solo por comas, sin "y")',
            howToIdentify: {
              es: 'Muchos verbos o sustantivos seguidos separados solo por comas, sin poner la conjunción "y" antes del último elemento.',
              hy: 'Միմյանց հաջորդող բազմաթիվ բայեր կամ գոյականներ՝ բաժանված միայն ստորակետերով՝ առանց վերջին տարրից առաջ «y» շաղկապը դնելու:',
            },
            examples: [
              {
                es: 'Llegué, vi, vencí. (Julio César: Veni, vidi, vici).',
                hy: 'Եկա, տեսա, հաղթեցի (Ասինդետոն՝ առանց «և» շաղկապի):',
              },
              {
                es: 'Salió corriendo, saltando, gritando, huyendo.',
                hy: 'Դուրս եկավ վազելով, ցատկելով, բղավելով, փախչելով:',
              },
              {
                es: 'En tierra, en humo, en polvo, en sombra, en nada.',
                hy: 'Հողի մեջ, ծխի մեջ, փոշու մեջ, ստվերի մեջ, ոչնչի մեջ (Գոնգորա):',
              },
              {
                es: 'Día, noche, poniente, madrugada.',
                hy: 'Ցերեկ, գիշեր, մայրամուտ, լուսաբաց:',
              },
              {
                es: 'Corre, vuela, traspasa la alta sierra.',
                hy: 'Վազի՛ր, թռի՛ր, անցի՛ր բարձր լեռնաշղթան:',
              },
            ],
            distinctionFromOthers: {
              es: 'Asíndeton (A = sin, sin conjunciones) es lo contrario de Polisíndeton (Poli = muchos, muchas conjunciones).',
              hy: 'Ասինդետոնը (A = առանց շաղկապների) Պոլիսինդետոնի (Poli = շատ շաղկապներ) հակառակն է:',
            },
            examTip: {
              es: 'Asíndeton da sensación de RAPIDEZ y dinamismo mediante comas.',
              hy: 'Ասինդետոնը ստորակետերի միջոցով ստեղծում է ԱՐԱԳՈՒԹՅԱՆ և շարժունության զգացողություն:',
            },
          },
          {
            name: {
              es: '4. Polisíndeton',
              hy: '4. Պոլիսինդետոն / Բազմաշաղկապություն (Polisíndeton)',
            },
            definition: {
              es: 'Figura retórica que consiste en la repetición deliberada de conjunciones innecesarias (generalmente "y", "ni", "o") para dar lentitud, solemnidad, peso o insistencia al texto.',
              hy: 'Հռետորական պատկեր, որը կայանում է ավելորդ շաղկապների (հիմնականում «y», «ni», «o») միտումնավոր կրկնության մեջ՝ տեքստին դանդաղություն, հանդիսավորություն, ծանրակշռություն կամ համառություն հաղորդելու համար:',
            },
            formulaOrStructure: 'Y palabra Y palabra Y palabra Y palabra...',
            howToIdentify: {
              es: 'Aparece la conjunción "y" o "ni" repetida muchas veces entre cada uno de los elementos de la frase.',
              hy: '«Y» կամ «ni» շաղկապը հայտնվում է բազմիցս կրկնված նախադասության յուրաքանչյուր տարրի միջև:',
            },
            examples: [
              {
                es: 'Y ríe y canta y sueña y llora de emoción.',
                hy: 'Եվ ծիծաղում է, և երգում է, և երազում է, և լալիս է հուզմունքից (Պոլիսինդետոն):',
              },
              {
                es: 'Ni las estrellas ni la luna ni el lucero alumbraban su camino.',
                hy: 'Ո՛չ աստղերը, ո՛չ լուսինը, ո՛չ լուսատուն չէին լուսավորում նրա ճամփան («Ni... ni... ni...»):',
              },
              {
                es: 'Y los niños jugaban, y las madres sonreían, y los ancianos descansaban.',
                hy: 'Եվ երեխաները խաղում էին, և մայրերը ժպտում էին, և ծերերը հանգստանում էին:',
              },
              {
                es: 'Hay un palacio y un río y un lago y un puente viejo.',
                hy: 'Կա մի պալատ, և գետ, և լիճ, և հին կամուրջ:',
              },
              {
                es: 'Y sueña y espera y lucha sin descanso.',
                hy: 'Եվ երազում է, և սպասում է, և պայքարում առանց հանգստի:',
              },
            ],
            distinctionFromOthers: {
              es: 'Asíndeton omite conjunciones y da prisa; polisíndeton multiplica conjunciones y da calma o insistencia.',
              hy: 'Ասինդետոնը բաց է թողնում շաղկապները և արագացնում, իսկ պոլիսինդետոնը բազմապատկում է շաղկապները և դանդաղեցնում:',
            },
            examTip: {
              es: 'Cuenta las "y" o "ni": si hay tres o más seguidas uniendo elementos, es POLISÍNDETON.',
              hy: 'Հաշվիր «y» կամ «ni»-երը. եթե կան երեք կամ ավելի հաջորդական շաղկապներ, ուրեմն ՊՈԼԻՍԻՆԴԵՏՈՆ է:',
            },
          },
          {
            name: {
              es: '5. Enumeración',
              hy: '5. Թվարկում (Enumeración)',
            },
            definition: {
              es: 'Figura retórica que consiste en la acumulación sucesiva de una serie de elementos pertenecientes a un mismo conjunto, contexto o idea.',
              hy: 'Հռետորական պատկեր, որը կայանում է նույն խմբին, համատեքստին կամ գաղափարին պատկանող մի շարք տարրերի հաջորդական կուտակման մեջ:',
            },
            howToIdentify: {
              es: 'Una lista de sustantivos, adjetivos o acciones que describen detalladamente una realidad (ej.: "mesas, sillas, cuadros, lámparas").',
              hy: 'Գոյականների, ածականների կամ գործողությունների ցուցակ, որոնք մանրամասն նկարագրում են իրականությունը (օր.՝ սեղաններ, աթոռներ, նկարներ):',
            },
            examples: [
              {
                es: 'Había en la plaza puestos de frutas, flores, telas, especias y juguetes.',
                hy: 'Հրապարակում կային մրգերի, ծաղիկների, գործվածքների, համեմունքների և խաղալիքների կրպակներ:',
              },
              {
                es: 'Era un joven alto, moreno, alegre, simpático y bondadoso.',
                hy: 'Նա բարձրահասակ, թխամորթ, ուրախ, համակրելի և բարեսիրտ երիտասարդ էր:',
              },
              {
                es: 'El desván estaba repleto de baúles, cartas viejas, relojes rotos y sombreros polvorientos.',
                hy: 'Ձեղնահարկը լիքն էր սնդուկներով, հին նամակներով, կոտրված ժամացույցներով և փոշոտ գլխարկներով:',
              },
              {
                es: 'Aspiro el olor a romero, tomillo, pino y tierra húmeda.',
                hy: 'Շնչում եմ հազրեվարդի, ուրցի, սոճու և խոնավ հողի բույրը:',
              },
            ],
            distinctionFromOthers: {
              es: 'Una enumeración puede combinarse con asíndeton (si va solo con comas) o polisíndeton (si va con muchas "y"). La enumeración se fija en la serie de elementos.',
              hy: 'Թվարկումը կարող է համակցվել ասինդետոնի հետ (եթե միայն ստորակետերով է) կամ պոլիսինդետոնի հետ: Թվարկումը կենտրոնանում է տարրերի շարքի վրա:',
            },
            examTip: {
              es: 'Identifica la lista ordenada de elementos que describen algo.',
              hy: 'Գտիր որևէ բան նկարագրող տարրերի կարգավորված ցուցակը:',
            },
          },
          {
            name: {
              es: '6. Pleonasmo',
              hy: '6. Պլեոնազմ / Նույնաբանություն (Pleonasmo)',
            },
            definition: {
              es: 'Figura retórica que consiste en añadir palabras innecesarias para la comprensión estricta del significado, con el fin de reforzar la expresividad o recalcar una idea.',
              hy: 'Հռետորական պատկեր, որը կայանում է իմաստի խիստ ըմբռնման համար ավելորդ բառեր ավելացնելու մեջ՝ արտահայտչականությունն ուժեղացնելու կամ գաղափարն ընդգծելու նպատակով:',
            },
            howToIdentify: {
              es: 'Uso de expresiones redundantes pero dotadas de fuerza poética ("subir arriba", "lo vi con mis propios ojos", "llorar con los ojos").',
              hy: 'Ավելորդ, բայց բանաստեղծական ուժով օժտված արտահայտությունների կիրառում («տեսա իմ սեփական աչքերով», «լաց լինել աչքերով»):',
            },
            examples: [
              {
                es: 'Lo vi con mis propios ojos en la plaza.',
                hy: 'Ես դա տեսա իմ սեփական աչքերով հրապարակում (Պլեոնազմ՝ տեսնելն արդեն աչքերով է լինում):',
              },
              {
                es: 'De los sus ojos tan fuertemente llorando. (Cantar de mio Cid).',
                hy: 'Նրա աչքերից այդքան ուժգին լաց լինելով (Միո Սիդի երգը):',
              },
              {
                es: 'Subir arriba de la torre para contemplar el valle.',
                hy: 'Բարձրանալ աշտարակի վերևը հովիտը դիտելու համար:',
              },
              {
                es: 'Salió afuera inmediatamente al escuchar el grito.',
                hy: 'Նա դուրս ելավ դուրս անմիջապես՝ ճիչը լսելուն պես:',
              },
              {
                es: 'Bajar abajo al sótano oscuro.',
                hy: 'Իջնել ներքև՝ դեպի մութ նկուղը:',
              },
            ],
            distinctionFromOthers: {
              es: 'En el lenguaje vulgar puede considerarse una incorrección, pero en literatura es un recurso poético voluntario para enfatizar.',
              hy: 'Խոսակցական լեզվում կարող է համարվել ավելորդաբանություն, բայց գրականության մեջ այն կամավոր բանաստեղծական միջոց է՝ շեշտադրման համար:',
            },
            examTip: {
              es: 'Si algo es redundante a propósito ("lo vi con mis propios ojos"), es PLEONASMO.',
              hy: 'Եթե ինչ-որ բան միտումնավոր ավելորդաբանություն է («տեսա իմ սեփական աչքերով»), ուրեմն ՊԼԵՈՆԱԶՄ է:',
            },
          },
        ],
      },
    ],
    selfExplanationPrompt: {
      es: 'Compara el asíndeton y el polisíndeton: explica en qué consiste cada uno, qué efecto producen en el ritmo y escribe un ejemplo de cada figura.',
      hy: 'Համեմատիր ասինդետոնը և պոլիսինդետոնը. բացատրիր, թե ինչում է կայանում յուրաքանչյուրը, ինչ ազդեցություն են ունենում ռիթմի վրա և գրիր մեկական օրինակ յուրաքանչյուրից:',
    },
    modelExplanation: {
      es: 'El asíndeton consiste en suprimir las conjunciones entre palabras (ej.: "Llegué, vi, vencí"), lo que crea un efecto de rapidez y agilidad. Por el contrario, el polisíndeton repite deliberadamente conjunciones como "y" o "ni" (ej.: "Y sueña y canta y ríe"), lo que produce un ritmo lento, pausado y solemne.',
      hy: 'Ասինդետոնը կայանում է բառերի միջև շաղկապները բաց թողնելու մեջ (օր.՝ «Եկա, տեսա, հաղթեցի»), ինչը ստեղծում է արագության և ճկունության ազդեցություն: Ընդհակառակը, պոլիսինդետոնը միտումնավոր կրկնում է շաղկապները, ինչպիսիք են «y»-ը կամ «ni»-ը (օր.՝ «Եվ երազում է, և երգում է, և ծիծաղում»), ինչն առաջացնում է դանդաղ, հանդարտ և հանդիսավոր ռիթմ:',
    },
    evaluationCriteria: [
      {
        es: 'Explica que asíndeton elimina conjunciones (rapidez) y polisíndeton las repite (lentitud).',
        hy: 'Բացատրում է, որ ասինդետոնը հեռացնում է շաղկապները (արագություն), իսկ պոլիսինդետոնը՝ կրկնում (դանդաղություն):',
      },
      {
        es: 'Aporta ejemplos correctos de ambas figuras.',
        hy: 'Բերում է երկու պատկերների ճիշտ օրինակներ:',
      },
    ],
  },
  {
    id: 'figuras-semanticas',
    number: 10,
    title: {
      es: 'Figuras literarias — Nivel semántico: La metáfora',
      hy: 'Գրական պատկերավորման միջոցներ — Իմաստային մակարդակ. Փոխաբերություն',
    },
    subtitle: {
      es: 'Elemento real (A), elemento imaginario (B), las tres estructuras de la libreta y diferencia con la comparación',
      hy: 'Իրական տարր (A), պատկերավոր տարր (B), տետրի երեք կառուցվածքները և տարբերությունը համեմատությունից',
    },
    iconName: 'Sparkle',
    accentColor: 'teal',
    sections: [
      {
        title: {
          es: 'La metáfora: reina de las figuras semánticas',
          hy: 'Փոխաբերությունը՝ իմաստային պատկերավորման միջոցների թագուհին',
        },
        description: {
          es: 'La metáfora es la identificación de dos elementos entre los cuales existe una relación de semejanza: un término real (A) y un término imaginario o evocado (B). No dice que uno es "parecido" al otro, sino que directamente los identifica.',
          hy: 'Փոխաբերությունը երկու տարրերի նույնացումն է, որոնց միջև գոյություն ունի նմանության կապ՝ իրական տարր (A) և երևակայական կամ պատկերավոր տարր (B): Այն չի ասում, որ մեկը «նման է» մյուսին, այլ ուղղակիորեն նույնացնում է դրանք:',
        },
        items: [
          {
            name: {
              es: 'Concepto clave: Elemento Real (A) y Elemento Imaginario (B)',
              hy: 'Հիմնական հասկացություն՝ Իրական տարր (A) և Պատկերավոր տարր (B)',
            },
            definition: {
              es: 'Elemento Real (A): es el objeto, persona o realidad de la que se habla de verdad en el mundo real. Elemento Imaginario (B): es la imagen poética o término con el que se identifica por tener un rasgo en común.',
              hy: 'Իրական տարր (A)՝ այն առարկան, անձը կամ իրականությունն է, որի մասին իրականում խոսվում է: Պատկերավոր տարր (B)՝ այն բանաստեղծական պատկերն է կամ եզրույթը, որի հետ այն նույնացվում է ընդհանուր հատկանիշ ունենալու պատճառով:',
            },
            howToIdentify: {
              es: 'En "Tus dientes son perlas": A (real) = dientes; B (imaginario) = perlas. Rasgo común = blancura y brillo.',
              hy: '«Tus dientes son perlas» (Քո ատամները մարգարիտներ են) արտահայտության մեջ՝ A (իրական) = dientes (ատամներ), B (պատկերավոր) = perlas (մարգարիտներ): Ընդհանուր հատկանիշը՝ սպիտակությունն ու փայլը:',
            },
            examples: [
              {
                es: 'El tiempo (A, real) es oro (B, imaginario). Rasgo común: es muy valioso y no se debe perder.',
                hy: 'Ժամանակը (A, իրական) ոսկի (B, պատկերավոր) է: Ընդհանուր հատկանիշ՝ շատ արժեքավոր է և չպետք է կորցնել:',
              },
              {
                es: 'Tus cabellos (A, real) son hilos de oro (B, imaginario). Rasgo común: color rubio brillante.',
                hy: 'Քո մազերը (A, իրական) ոսկե թելեր (B, պատկերավոր) են: Ընդհանուր հատկանիշ՝ փայլուն շիկահեր գույն:',
              },
              {
                es: 'Las nubes (A, real) son copos de algodón (B, imaginario). Rasgo común: blancura y esponjosidad.',
                hy: 'Ամպերը (A, իրական) բամբակի քուլաներ (B, պատկերավոր) են: Ընդհանուր հատկանիշ՝ սպիտակություն և փափկություն:',
              },
            ],
            examTip: {
              es: 'En el examen escolar siempre te pedirán: "¿Cuál es el término real (A) y cuál el término imaginario (B)?"',
              hy: 'Դպրոցական քննությանը միշտ կհարցնեն. «Ո՞րն է իրական տարրը (A) և ո՞րը պատկերավոր տարրը (B)»:',
            },
          },
          {
            name: {
              es: 'Estructura 1: A es B (Metáfora impura o atributiva)',
              hy: 'Կառուցվածք 1՝ A-ն B է (Բացահայտ փոխաբերություն)',
            },
            definition: {
              es: 'Aparecen explícitamente tanto el término real (A) como el imaginario (B), unidos normalmente por el verbo "ser".',
              hy: 'Բացահայտորեն առկա են ինչպես իրական տարրը (A), այնպես էլ պատկերավորը (B)՝ սովորաբար միացված «լինել» (ser) բայով:',
            },
            formulaOrStructure: 'A es B (Término real + verbo ser + Término imaginario)',
            howToIdentify: {
              es: 'Busca el verbo ser uniendo dos sustantivos con sentido figurado.',
              hy: 'Փնտրիր «ser» բայը, որը միացնում է երկու գոյական փոխաբերական իմաստով:',
            },
            examples: [
              {
                es: 'Tus ojos son luceros.',
                hy: 'Քո աչքերը (A) լուսատուներ (B) են:',
              },
              {
                es: 'La vida es un sueño.',
                hy: 'Կյանքը (A) երազ (B) է (Կալդերոն դե լա Բարկա):',
              },
              {
                es: 'El río es una serpiente de plata.',
                hy: 'Գետը (A) արծաթե օձ (B) է:',
              },
              {
                es: 'Sus labios son pétalos de rosa.',
                hy: 'Նրա շուրթերը (A) վարդի թերթիկներ (B) են:',
              },
              {
                es: 'La noche es un manto oscuro.',
                hy: 'Գիշերը (A) մուգ թիկնոց (B) է:',
              },
            ],
            examTip: {
              es: 'Es la estructura más fácil de reconocer porque el término real A y el imaginario B están los dos presentes.',
              hy: 'Ամենահեշտ ճանաչելի կառուցվածքն է, որովհետև իրական A և պատկերավոր B տարրերը երկուսն էլ ներկա են:',
            },
          },
          {
            name: {
              es: 'Estructura 2: B en lugar de A (Metáfora pura)',
              hy: 'Կառուցվածք 2՝ B-ն A-ի փոխարեն (Մաքուր փոխաբերություն)',
            },
            definition: {
              es: 'El término real (A) desaparece de la oración y es sustituido totalmente por el término imaginario (B). El lector debe deducir qué es A.',
              hy: 'Իրական տարրը (A) անհետանում է նախադասությունից և ամբողջությամբ փոխարինվում է պատկերավոր տարրով (B): Ընթերցողը պետք է կռահի, թե որն է A-ն:',
            },
            formulaOrStructure: 'B en lugar de A (solo aparece B, el término real A se omite)',
            howToIdentify: {
              es: 'Aparece una palabra figurada sin mencionar el objeto real directo. Pregúntate: ¿a qué realidad oculta se refiere esta imagen?',
              hy: 'Հայտնվում է փոխաբերական բառ՝ առանց անմիջական իրական առարկան նշելու: Հարցրու ինքդ քեզ. ո՞ր թաքնված իրականությանն է վերաբերում այս պատկերը:',
            },
            examples: [
              {
                es: 'Las perlas de su boca brillaban al sonreír. (B = perlas; A omitido = dientes).',
                hy: 'Նրա բերանի մարգարիտները (B = perlas) փայլում էին ժպտալիս (Իրական A-ն՝ ատամները, բաց է թողնված):',
              },
              {
                es: 'El manto de la noche nos cubrió a todos. (B = manto; A omitido = oscuridad).',
                hy: 'Գիշերվա թիկնոցը (B = manto) ծածկեց բոլորիս (Իրական A-ն՝ մթությունը, բաց է թողնված):',
              },
              {
                es: 'El lucero de su rostro miraba con ternura. (B = lucero; A omitido = ojo).',
                hy: 'Նրա դեմքի լուսատուն (B) նայում էր քնքշությամբ (Իրական A-ն՝ աչքը):',
              },
              {
                es: 'Las nieves del tiempo han plateado su cabeza. (B = nieves; A omitido = canas / vejez).',
                hy: 'Ժամանակի ձյուները (B) արծաթել են նրա գլուխը (Իրական A-ն՝ ճերմակ մազերը / ծերությունը):',
              },
              {
                es: 'La barca de plata navega por el cielo estrellado. (B = barca de plata; A omitido = la luna).',
                hy: 'Արծաթե նավակը (B) նավարկում է աստղազարդ երկնքով (Իրական A-ն՝ լուսինը):',
              },
            ],
            examTip: {
              es: 'En el examen te pedirán: "¿A qué elemento real se refiere \'las perlas de su boca\'?" -> A los dientes.',
              hy: 'Քննությանը կհարցնեն. «Ո՞ր իրական տարրին է վերաբերում \'las perlas de su boca\'-ն» -> Ատամներին:',
            },
          },
          {
            name: {
              es: 'Estructura 3: B de A (Metáfora preposicional)',
              hy: 'Կառուցվածք 3՝ B de A (Նախդրավոր փոխաբերություն)',
            },
            definition: {
              es: 'El término imaginario (B) y el término real (A) van unidos por la preposición "de".',
              hy: 'Պատկերավոր տարրը (B) և իրական տարրը (A) միացված են «de» նախդիրով:',
            },
            formulaOrStructure: 'B de A (Término imaginario + de + Término real)',
            howToIdentify: {
              es: 'Fíjate en la estructura con "de": el primer sustantivo es la imagen poética B y el segundo es la realidad A.',
              hy: 'Ուշադրություն դարձրու «de»-ով կառույցին. առաջին գոյականը բանաստեղծական B պատկերն է, իսկ երկրորդը՝ A իրականությունը:',
            },
            examples: [
              {
                es: 'Su boca de fresa cautivó a todos. (B = fresa, A = boca).',
                hy: 'Նրա ելակի բերանը (բերանը ինչպես ելակ) գերեց բոլորին (B = fresa, A = boca):',
              },
              {
                es: 'Los hilos de oro de su cabello brillaban al sol. (B = hilos de oro, A = cabello).',
                hy: 'Նրա մազերի ոսկե թելերը փայլում էին արևի տակ:',
              },
              {
                es: 'La serpiente de plata del río serpenteaba por el valle. (B = serpiente de plata, A = río).',
                hy: 'Գետի արծաթե օձը ոլորվում էր հովտով:',
              },
              {
                es: 'El tambor de mi pecho latía con fuerza. (B = tambor, A = pecho/corazón).',
                hy: 'Իմ կրծքի թմբուկը (սիրտը) բաբախում էր ուժգնորեն:',
              },
              {
                es: 'La sábana blanca de la nieve cubrió el pueblo. (B = sábana blanca, A = nieve).',
                hy: 'Ձյան սպիտակ սավանը ծածկեց գյուղը:',
              },
            ],
            examTip: {
              es: 'Estructura fija: [Palabra poética B] + de + [Palabra real A].',
              hy: 'Ֆիքսված կառուցվածք՝ [Պատկերավոր բառ B] + de + [Իրական բառ A]:',
            },
          },
          {
            name: {
              es: 'Diferencia crucial: Metáfora vs Comparación (Símil)',
              hy: 'Վճռորոշ տարբերություն՝ Փոխաբերություն vs Համեմատություն',
            },
            definition: {
              es: 'La comparación une dos elementos mediante un nexo comparativo explícito ("como", "parece", "igual que"). La metáfora NO lleva nexo; identifica directamente A con B.',
              hy: 'Համեմատությունը միացնում է երկու տարրերը բացահայտ համեմատական կապով («como» [ինչպես], «parece» [թվում է]): Փոխաբերությունը ՉՈՒՆԻ համեմատական կապ. այն ուղղակիորեն նույնացնում է A-ն B-ի հետ:',
            },
            howToIdentify: {
              es: '"Tus ojos son como luceros" = COMPARACIÓN (lleva "como"). "Tus ojos son luceros" = METÁFORA (no lleva "como").',
              hy: '«Tus ojos son como luceros» = ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ (ունի «como»): «Tus ojos son luceros» = ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ (չունի «como»):',
            },
            examples: [
              {
                es: 'Comparación: Corrió tan veloz como una flecha.',
                hy: 'Համեմատություն. Նա վազեց այնքան արագ, ինչպես նետը (ունի «como»):',
              },
              {
                es: 'Metáfora: El corredor era una flecha en la pista.',
                hy: 'Փոխաբերություն. Վազորդը նետ էր վազքուղում (չունի «como», ուղղակի նույնացում է):',
              },
              {
                es: 'Comparación: El lago parecía un espejo.',
                hy: 'Համեմատություն. Լիճը հայելու էր նման (ունի «parecía»):',
              },
              {
                es: 'Metáfora: El espejo del lago reflejaba las montañas.',
                hy: 'Փոխաբերություն. Լճի հայելին արտացոլում էր լեռները (փոխաբերություն B de A):',
              },
            ],
            examTip: {
              es: 'Regla de oro: si tiene "como" o "parece", es COMPARACIÓN. Si no lo tiene, es METÁFORA.',
              hy: 'Ոսկե կանոն. եթե ունի «como» կամ «parece», ապա ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ է: Եթե չունի՝ ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ:',
            },
          },
        ],
      },
    ],
    selfExplanationPrompt: {
      es: 'Explica qué es una metáfora, cuáles son el elemento real (A) y el elemento imaginario (B), y explica la diferencia entre "Sus dientes son perlas" y "Sus dientes son como perlas".',
      hy: 'Բացատրիր, թե ինչ է փոխաբերությունը, որոնք են իրական տարրը (A) և պատկերավոր տարրը (B), և բացատրիր տարբերությունը «Sus dientes son perlas»-ի և «Sus dientes son como perlas»-ի միջև:',
    },
    modelExplanation: {
      es: 'Una metáfora es la identificación de dos elementos por su relación de semejanza: el elemento real (A) es la realidad de la que se habla y el elemento imaginario (B) es la imagen poética. "Sus dientes son perlas" es una metáfora porque identifica directamente A con B sin nexos comparativos. En cambio, "Sus dientes son como perlas" es una comparación (o símil) porque usa el nexo explícito "como".',
      hy: 'Փոխաբերությունը երկու տարրերի նույնացումն է նրանց նմանության կապով. իրական տարրը (A) այն իրականությունն է, որի մասին խոսվում է, իսկ պատկերավոր տարրը (B)՝ բանաստեղծական պատկերը: «Sus dientes son perlas»-ը փոխաբերություն է, որովհետև այն ուղղակիորեն նույնացնում է A-ն B-ի հետ՝ առանց համեմատական կապերի: Իսկ «Sus dientes son como perlas»-ը համեմատություն է, քանի որ օգտագործում է բացահայտ «como» (ինչպես) կապը:',
    },
    evaluationCriteria: [
      {
        es: 'Define metáfora identificando el término real A y el imaginario B.',
        hy: 'Սահմանում է փոխաբերությունը՝ նշելով իրական A և պատկերավոր B տարրերը:',
      },
      {
        es: 'Explica que la metáfora no lleva nexo mientras que la comparación lleva "como".',
        hy: 'Բացատրում է, որ փոխաբերությունը չունի կապ, իսկ համեմատությունն ունի «como»:',
      },
    ],
  },
];
