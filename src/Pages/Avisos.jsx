import React from "react";
import { Card } from "flowbite-react";

import _buttom_travel from "../Components/_buttom_travel";
import Totoro_article_5 from "../assets/Totoro_article_5.jpg";
import Totoro_article_7 from "../assets/Totoro_article_7.jpg";
import Totoro_article_8 from "../assets/Totoro_article_8.jpg";
import Totoro_article_10 from "../assets/Totoro_article_10.jpg";
import Totoro_article_11 from "../assets/Totoro_article_11.jpg";
import _bar_media from "../Components/_bar_media";

const About = () => {
  return (
    <header className="container flex flex-col ">
      <article className="flex flex-col md:flex-row ">
        <section
          className="mx-1 flex justify-center "
          id="tarjetas"
        >
          <Card className="max-w-[270px] sx:max-w-sm order-1 bg-dark  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <img
              className="rounded-lg m-0 p-0"
              src={Totoro_article_11}
              alt="Imagen Articulo"
            />
            <_bar_media />
          </Card>
        </section>
        <section
          id="articulo"
          className="my-5 mx-5 text-xs xl:text-base  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100"
        >
          <h1 className="text-2xl font-bold mb-2">Una semana irregular</h1>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            26/04/204 21:30 ARG for Chenz
          </span>
          <hr className="h-px my-3 bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 border-0"></hr>
          <p className="mt-2">Muy buenas gente bonita,</p>
          <p className="mt-2">
            es bastante tarde, pero seguramente encontrarán este mensaje al
            comienzo de su día. Espero que sea un buen inicio para ustedes.
            Vengo simplemente a pasar los avisos que usualmente suelo realizar,
            pero con la particularidad que esta semana viene con más novedades
            en línea con lo que había anticipado anteriormente. Lo que hay que
            saber es que mi hermano se irá a vivir a España, y por ello estos
            días serán irregulares. Y la que venga luego de esta semana,
            simplemente será más directos, más constancia con mis objetivos,
            pero con sentimientos y sensaciones cambiadas.
          </p>
          <p className="mt-2">
            A causa de que tengo que acompañar a mi hermano a resolver unas
            documentaciones, pasar un poco de tiempo con él, y hacer unas
            cuestiones de logística. No tendremos directo. De paso aprovecharé
            para armar muy bien las actividades que tendremos el jueves, ya que
            no habrá directo de Study With Me, simplemente haremos una emisión
            especial repasando la historia del canal.
          </p>
          <p className="mt-2">
            El jueves voy a trabajar por la tarde porque primero iré a despedir
            a mi hermano al aeropuerto, y en consecuencia, a volver a casa,
            quizás emocionalmente no tenga la cabeza bien puesta, había pensado
            hacer un directo repasando la historia del canal, y hacer algunas
            actividades que tenga que ver con la recreación y poder conversar
            con ustedes. La idea en realidad surgió por recomendación de Ripe, y
            me pareció que podría permitirme hacerlo ese día. Si alguien quiere
            hablar conmigo en directo, será bienvenido o bienvenida. Responderé
            consultar y claramente vamos a jugar. Pensaré muy bien qué cosas
            podremos hacer el martes previo a este encuentro. Así que si tenés
            ganas de saber o conocer desde cuando hace que estamos en el mundo
            de Twitch, las distintas personalidades que pasaron por acá y me
            ayudaron a conformar el espacio, agenda el día jueves 30/05 a las
            18:00 hs. Si no puedes estar no te preocupes lo subiré a YouTube el
            fin de semana. Espero que sea un buen momento para todos.
          </p>
          <p className="mt-2">
            Tendremos directos normales, o por lo menos intentaré que así sea;
            sin embargo, con una variación de las actividades, apareceré más
            temprano en el stream al volver a trabajar, y luego de meditar haré
            unas actividades que tienen que ver con almorzar y hacer ejercicio.
            Para que terminemos el día juntos como siempre. El sentido es
            agrupar en un solo momento las actividades fuera del directo y estar
            presente la mayor cantidad de horas para terminar mis asuntos, que
            por una u otra cuestión se me están agolpando.
          </p>
          <p className="mt-2">
            Si me ven el lunes y el miércoles, en directo, haciendo mis
            actividades, por favor prudencia con los comentarios. Hay gente que
            no sé si a veces está tan tocada por mucho estudio u otras
            cuestiones personales, porque no quiero creer a primeras que a veces
            le encantan hacer comentarios negativos, por favor de evitar las
            frases como: “¿Qué haces que no estás con tu hermano?” Primero que
            nada, y para darle un poco de contexto, soy de mi familia el que
            intenta tener más los pies en la tierra. Mi madre es muy emocional,
            y la manera para llevar la situación, que siento que debo asumir, es
            tomarlo con la mayor normalidad posible. Mi hermano es una persona
            que también maneja el mismo perfil, y lo que menos quiere es que
            hagamos una novela. Afortunadamente, es un tipo querido por mucha
            gente, posiblemente mi casa sea un desfile de amistades. Y si lo
            pensamos objetivamente, después de todo no se va a la guerra, va a
            tomarse por primera vez una responsabilidad cojonuda de encarar sus
            32 años con un desafío personal, que es viajar y vivir en otro
            lugar. Arreglárselas por su cuenta. No hay nada que pueda hacer para
            ser mejor hermano que lo que fui hasta el momento. Así que por
            favor, empatía.
          </p>
          <p className="mt-2">
            En el comunicado anterior, dije que Abril es el mes que te adentra
            de lleno al año, y como tal tenemos que entender que habrá una
            exigencia mayor y que habrá que apegarnos al plan en donde lo que
            nunca está en juego es el amor propio. Si las cosas salen mal, hay
            que valorar lo hecho, y buscar rápidamente soluciones para la etapa
            que sigue. En algún momento te va a tocar dar pelea de nuevo, por lo
            que abandonar las armas no tiene sentido. Así que te mando un
            abracito y que no decaiga si hubo tropiezo. Te recomiendo ver el
            aviso anterior en la página del canal, si es que ya no se encuentra
            disponible por aquí, donde te comparto un poquito de mi visión ante
            estos casos.
          </p>
          <p className="mt-2">
            Se viene cambios y estoy abierto a las sugerencias de las cuestiones
            que necesiten para mejorar el espacio. Siempre las acompañaré con mi
            parecer y veremos que es lo que podemos hacer juntos. Por lo demás,
            gracias por la compañía siempre. Nos vemos en horas y gracias
            siempre por todo lo que hacen por cada una de las personas que
            intervienen en esta comunidad.
          </p>
          <h3 className="text-2xl mt-3">Chenz</h3>
        </section>
      </article>

      <article className="flex flex-col md:flex-row ">
        <section
          className="mx-1 flex justify-center "
          id="tarjetas"
        >
          <Card className="max-w-[270px] sx:max-w-sm order-1 bg-dark  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <img
              className="rounded-lg m-0 p-0"
              src={Totoro_article_10}
              alt="Imagen Articulo"
            />
            <_bar_media />
          </Card>
        </section>
        <section
          id="articulo"
          className="my-5 mx-5 text-xs xl:text-base  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100"
        >
          <h1 className="text-2xl font-bold mb-2">Un mayo con todo</h1>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            05/05/204 for Chenz
          </span>
          <hr className="h-px my-3 bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 border-0"></hr>
          <p className="mt-2">Muy buenas gente bonita,</p>
          <p className="mt-2">
            Gente bonita, a tener una gran semana. Que sea productiva y prospera
            para todos. Este aviso semana viene con mucha información, por lo
            cual le adjunto un audio para que no me digan que es mucho texto y
            si no hay ganas de escucharlo, como diría mi “ex no pasa nada”.
          </p>
          <p className="mt-2">
            Primero que nada, la novedad de la semana será sin dudas el nuevo
            ordenador que compré. Está listo para retirar el día Lunes. Este
            ordenador solo se usará íntegramente para transmitir con las
            herramientas que me ayudan a este cometido. El apoyo recibido todos
            estos años y los remanentes que me han quedado y juntado de mi
            parte, me permitieron directamente hacer la inversión al contado. Es
            sin dudas el logro y el esfuerzo de todos, por compartir tanto
            tiempo conmigo y por el apoyo monetario desinteresado de muchas de
            las personas que se encuentran aquí. Así que este viernes que paso
            de buenas noticias, me dispuse a salir con Brunito a comprarlo, lo
            cual hizo, aunque parezca insignificante, toda una experiencia para
            recordar.
          </p>
          <p className="mt-2">
            Es mi primer ordenador AMD Ryzen, saliendo de la familia de INTEL,
            es una experiencia totalmente nueva y espero que sea sumamente
            positiva. Lo que permitirá es que el bot de tareas funciones mejor,
            la experiencia sea más fluida, y no tengamos problemas de
            rendimiento cuando hablo editor de código, y otras utilidades que
            hacen que vayan de mal en peor.
          </p>
          <p className="mt-2">
            Tengo que instalar los programas en el nuevo ordenador para la
            transmisión y allí hay una noticia que no le va a gustar a nadie.
            Realmente las tareas que tengan registradas en el bot se borraran,
            con ellos los puntitos de croqueta. Ya le voy a adelantar a que se
            debe. Si bien venimos de meses sin que esto suceda, con este nuevo
            ordenador va a pasar mucho más tiempo en tener que llegar a esa
            situación, porque prácticamente las modificaciones que se realicen a
            la herramienta no implica que toque el registro donde se guardan las
            tareas.
          </p>
          <p className="mt-2">
            Nunca expliqué esto, pero las tareas que tienen guardadas en el bot,
            habitan en un lugar llamado “localstorage” que vive en un navegador
            web (como Chrome, Edge, Vivaldi, Arc, etc), particularmente en el
            navegador asignado por defecto o el que tú utilizas a diario. En mi
            caso el obs tiene su propio navegador y no tengo ni la menor remota
            idea donde está el localstorage de este programa. Por lo cual, se me
            hace sumamente difícil, en momento como estos, poder identificarlo,
            aunque siempre está en mis esfuerzos poder averiguarlo. No es fácil.
            Osea, en criollo es como buscar sus sentimientos por la/el ex, saben
            que estuvo en un lugar, pero ahora anda a saber donde están, pero
            están. Inexplicable.
          </p>
          <p className="mt-2">
            Se me ocurrió como método paliativo dejar el bot que estamos
            utilizando actualmente en el canal de pruebas y allí pueda ver las
            tareas que apuntaron y pasarlas al nuevo. Es algo que puedo hacer
            sin demasiados problemas.
          </p>
          <p className="mt-2">
            Por el motivo de buscar el nuevo ordenador y ponerlo a punto, no
            habrá emisión el día Lunes. Tengo que instalar a la nueva pc una
            tarjeta gráfica dedica, y a la que estamos utilizando actualmente
            otra de menor poder, pero que para programar para mí va a ser
            excelente. Por lo cual, en conclusión, tengo que instalar los
            programas en la nueva, y dejar toda lista en la pc actual para qué
            me quede funcional a mí para la programación. Obviamente que daré
            prioridad a dejar todo lista a la que utilizaremos para emitir.
          </p>
          <p className="mt-2">
            Hay usuario que ingresan a discord y nunca en su vida saludan o
            interactúan con el canal. Y vamos, que no somos bebes de pechos.
            Cuando te etiquetamos te sale una notificación, es cuestión de darle
            un dedazo, click y que te lleva automáticamente al lugar donde te
            están saludando, donde se produce las mayores interacciones en el
            canal. No hay excusas para indicar que no se sabe usar discord para
            esta cuestión en particular. A ese tipo de usuario lo banearé. Se
            irá del servidor sin más. Las razones son simples, primero que nada,
            genera sospecha, la mayoría son usuarias, yo no voy a estar cortando
            clavo por alguien que tranquilamente puede pelar la polla en medio
            del server. Si no interactúas con la comunidad y no se trata de
            hablar todo el tiempo, sino mínimamente saludar alguna que otra vez.
            Que no me olvido que estamos para estudiar, no para tener
            conversaciones largas o usar el discord de tinder, pero mínimamente
            un comportamiento aceptable como si estuvieras compartiendo lugar
            con gente respetuosa (pues te aviso que sí estamos compartiendo).
          </p>
          <p className="mt-2">
            Recuerden que por más que me den un follow en el canal de Twitch, no
            implica ni amerita nada en discord. Es totalmente distinto y tiene
            sus reglas particulares. Lo mismo pasa con las suscripciones. A mí
            me puede seguir Juanito el pichocornuco y suscribirse sin más, pero
            si no respeta se va de discord, hasta té diría que del canal de
            twitch porque genera desconfianza y yo pretendo rodearme de gente
            que mínimamente se pueda comunicar e hilar una idea.
          </p>
          <p className="mt-2">
            Les agradezco de mil amores que los canales de los pomos los estén
            utilizando, pero le voy a pedir de corazón que por favor al terminar
            de usarlos lo dejen con el tiempo preestablecido que tiene cada uno
            (Si es que lo pausaron o modificaron el tiempo). Ayer entre con Tati
            a uno de ellos y estaba con otro tiempo distinto para el que fue
            consignado. Tener en cuenta porque esto para el que no sabe usarlo
            le implica un problema. Yo no lo comenté en su momento, pero tenga o
            no usuarios conectados cada canal con los diferentes pomos, “sigue
            funcionando”. Es decir, que si ahora entro al canal de 50/10
            automáticamente al entrar comienza a contarme el tiempo y en el
            break me avisaría con normalidad. Si yo altero el tiempo, de 50 a
            70, el canal, cada vez que entre, usará los 70 minutos. Lo mismo
            ocurre si me voy y lo dejo pausado (Directamente el bot no operará).
            Por eso, no tengo ningún inconveniente que lo pausen, que convenga
            otro pomo cuando estén allí, lo que sea, pero mientras al retirarse
            lo dejen andando como estaba, me ayudan un montón y de paso pensamos
            en el que no sabe usarlo. Si quieren explicarle a los demás como se
            utiliza bienvenido sea, pero en definitiva dejarlo funcional como
            estaba.
          </p>
          <p className="mt-2">
            Quiero agradecerles a las chicas, en particular Tati, Lola, Anto y
            creo que a Chinita por participar en esos canales. No veo quién lo
            utiliza más, pero en distintas oportunidades en los tiempos que
            estuve emitiendo las encontré allí. No es nada personal. Hago
            extensible los agradecimientos a quien no nombrara.
          </p>
          <p className="mt-2">
            Van a tener que tener un poco de paciencia este mes, ya que la
            normalidad de las emisiones se puede ver afectada, a razón de que
            deba ajustar el nuevo equipo, por la luz (Estoy sufriendo cortes de
            nuevo), Antonella vendrá de visita (algo que adelanté en su momento)
            y finalmente el 30/5 de mayo mi hermano se retira a vivir a España
            por lo cual no habrá emisión.
          </p>
          <p className="mt-2">
            Finalmente, son una maravillosa comunidad, gracias por participar y
            hacer de este lugar realmente hermoso. Se agradece la paciencia.
          </p>
          <h3 className="text-2xl mt-3">Chenz</h3>
        </section>
      </article>

      <article className="flex flex-col md:flex-row ">
        <section
          className="mx-1 flex justify-center "
          id="tarjetas"
        >
          <Card className="max-w-[270px] sx:max-w-sm order-1 bg-dark  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <img
              className="rounded-lg m-0 p-0"
              src={Totoro_article_8}
              alt="Imagen Articulo"
            />
            <_bar_media />
          </Card>
        </section>
        <section
          id="articulo"
          className="my-5 mx-5 text-xs xl:text-base  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100"
        >
          <h1 className="text-2xl font-bold mb-2">Muchas cosas para decir</h1>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            29/04/204 for Chenz
          </span>
          <hr className="h-px my-3 bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 border-0"></hr>
          <p className="mt-2">Muy buenas gente bonita,</p>
          <p className="mt-2">
            Gente bonita, iniciando por lo importe, quiero agradecerle la
            compañía, porque es como tiene que comenzar un aviso semanal. Emitir
            un agradecimiento a Tati, que estuvo haciendo unos aportes de
            dinero, que la verdad son de gran ayuda, aunque sostengo que no hace
            falta que gasten dinerito en mí. Viniendo de Tati entiendo que es un
            regalito para el lugar que ustedes adoptaron para llevar adelante
            sus días. Y como si fuera poco me estuvo brindando su aporte para
            mejoras al espacio. Entre ellas habrán notado que pude configurar
            nuevamente el bot de Lion, porque ahora hay canales de pomos
            predefinidos donde una voz va informando de los breaks y de los
            momentos productivos. Rearmar esos canales fue idea de Tati así que
            estoy agradecido porque también vi que a muchas de las personitas
            bellas les resultó útil. Definí tres tiempos, con sus respectivos
            breaks, pero estoy a disposición de poder crear otros si es que
            consideran que es necesario ingresar otra categoría aparte de las
            existentes 60/10, 50/10, 25/5. Tenía pensado el de 90/15. No tengo
            ningún inconveniente en poder generar más, aunque implique que lo
            utilice un solo usuario. Mientras se use, bienvenido sea. También
            puedo crear roles para identificar quién es más adepto a ciertas
            salas de pomodoros para organizarse, pero no sé si saben como
            identificar los roles y demás.
          </p>
          <p className="mt-2">
            Entiendo también que hay gente afligida porque no sabe para donde
            ir. Hubo dos comentarios de unificar el escritorio con el 60/10,
            pero debería ponerlo a votación y ver que opinan porque la voz que
            anuncia los tiempos, ingresaría al chat avisando de las instancias y
            claramente no van a estar coordinado para nada con el stream. Si
            pueden dejar de lado lo que parecería ser un inconveniente, se
            podría hacer. De lo contrario lo dejamos como está. Si es por
            hacerme compañía a mí, no se preocupen, utilicen los canales que yo
            acompañado por ustedes siempre me siento. Elijan el mejor pomo que
            se ajuste a sus necesidades y a darle para adelante, recuerden que
            esto ya se charló. Aquí estamos para estudiar, no para ver si Chenz
            está, si se demoró, o no va a llegar. El canal es un espacio estudio
            y como tal, es independiente de mi presencia. Por lo menos eso es lo
            que quiero, porque se trata de tu estudio, de tu participación y
            somos todos adultos conscientes de que los esfuerzos son propios.
            Chenz no te va a hacer aprobar, ni el bot, ni el Discord, si el
            debido compromiso por lo que tenes que hacer. Existe este espacio a
            contribución de todos, no de una única persona.
          </p>
          <p className="mt-2">
            En cuanto a la modalidad de las emisiones de esta semana, no cambia
            en nada. Me encontraré trabajando por la madrugada, por lo cual el
            bot estará emitiendo en el canal y a mi regreso se encontrarán
            conmigo. Lo que sí el fin de semana será raro porque tengo que
            trabajar de madrugada, por lo cual podría hacer emisión los dos
            días, incluso reservándome tiempo para ponerme al día con Antonella.
            Agradezco las personas que se preocuparon porque no estaba emitiendo
            este domingo, un problema de ordenador que solucioné, aunque pensé
            que el tema era grave.
          </p>
          <p className="mt-2">
            A lo que respecta a las meditaciones, por el nivel de participación
            lo dejaré vigente. Se pondrá en dudas si habrá una pausa en épocas
            de no exámenes o vacaciones, pero lo veré con Aleu o con las
            personas que más utilicen el espacio. Por lo pronto continuarán
            aprox de Lunes a Viernes a las 15:00hs ARG. Recuerden que si no
            pueden estar y me encuentro en stream pueden pedirme la sesión del
            día, que se las paso en el templo sin mayores inconvenientes. No
            tengan vergüenza en pedir. Si quieres saber más sobre este tema,
            consúltame por algún medio o algunas de las jefas, y te brindamos
            más detalles.
          </p>
          <p className="mt-2">
            Pague el discord nitro para subirlo de nivel, si alguien le sobra
            puntitos y nos puede dar el nivel dos, bienvenido sea sobre todos
            para la gente que le gusta transmitir, allí ya podríamos hacerlo en
            HD.
          </p>
          <p className="mt-2">
            El primero de mayo, si me acuerdo bien, haríamos un evento, estilo
            Harry Potter, así que los nombres de algunos de los canales de
            Discord variará con esa temática hasta el 14. Mientras dure, podrás
            cambiar tu foto o nombre de perfil de acuerdo algún personaje de la
            saga. Iremos incursionando en otras propuestas como veníamos
            haciendo en años anteriores. La finalidad es variar un poco y
            hacerte ameno el estudio.
          </p>
          <p className="mt-2">Eso sería todo, muchas gracias por leerme.</p>
          <h3 className="text-2xl mt-3">Chenz</h3>
        </section>
      </article>

      <article className="flex flex-col md:flex-row ">
        <section
          className="mx-1 flex justify-center "
          id="tarjetas"
        >
          <Card className="max-w-[270px] sx:max-w-sm order-1 bg-dark  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <img
              className="rounded-lg m-0 p-0"
              src={Totoro_article_7}
              alt="Imagen Articulo"
            />
            <_bar_media />
          </Card>
        </section>
        <section
          id="articulo"
          className="my-5 mx-5 text-xs xl:text-base  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100"
        >
          <h1 className="text-2xl font-bold mb-2">De nuestra competencia</h1>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            22/04/204 for Chenz
          </span>
          <hr className="h-px my-3 bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 border-0"></hr>
          <p className="mt-2">Muy buenas gente bonita,</p>
          <p className="mt-2">
            Vengo a comentarles que los en vivos de esta semana se mantendrá sin
            cambios, el bot por la mañana y mi presencia por la tarde. Cómo
            habrán notado, luego de las meditaciones suele retirarme a hacer un
            poco de bici para vencer el sedentarismo, así que posiblemente en el
            algún momento no me encuentran, pero no se preocupen que hay gente
            tanto en el canal como en discord que están allí compartiendo sus
            jornadas. Ya al final del día estoy allí, con un pulmón menos, pero
            estoy.
          </p>
          <p className="mt-2">
            Con respecto al fin de semana, solamente NO habrá emisión el sábado
            que trabajo por la noche. Así que nos vemos el Domingo de esta
            semana.
          </p>
          <p className="mt-2">
            En cuanto a las meditaciones, seguimos realizando las sesiones, por
            el momento con buena adhesión. Estamos actualmente en el nivel dos
            de las técnicas para meditar, pero lo que noto particularmente es
            que cada nueva herramienta la va conjugando con otra, por lo cual
            los audios son bastantes integradores con lo visto anteriormente.
            Así que puedo decir que sin importar el nivel, uno puede seguir
            practicando sin mayores restricciones. Por si todavía no te
            animaste, estás a tiempo. Estamos juntándonos en Discord todos los
            días, a las 15:00 hs Argentina, en el canal de voz de templo,
            "meditantes". No es necesario tener la cámara encendida o el micro
            prendido. *Las meditaciones son guiadas* Para ingresar e interactuar
            necesitas el rol de meditación, que si no sabes como asignártelo,
            nosotros lo hacemos por ti. Estamos a tu disposición para sacarte
            cualquier duda.
          </p>
          <p className="mt-2">
            Entiendo que la agenda estudiantil empezó con todo, en el caso de
            Argentina, hay algunas universidades que están pasando algunas
            cuestiones de importancia, que pueden generar preocupación y
            nerviosismo. Es lógico y lo comprendo. Simplemente, pedirle que se
            centren en lo que hay que hacer ahora, en el próximo trabajo, al
            próximo examen, a mantenerse ocupado en las cuestiones que ameritan
            nuestra mayor competencia y dejar de lado aquello que, por mucho que
            le demos vuelta y vuelta, no está en nuestro poder. En la vida un
            requisito para lograr lo que queremos es saber identificar que nos
            compete y que no. Hemos fabricado desesperanza en cuestiones que ni
            siquiera han sucedido. Y dominar estas cuestiones, los va a mantener
            con energía, con tranquilidad y con criterio en el presente.
          </p>
          <p className="mt-2">
            Si no te estás pudiendo concentrar, te invito a que tus jornadas les
            pongas un horario para interactuar con tus dispositivos móviles, que
            junto a una mala alimentación y pocas horas de sueño te mantendrán
            sin ganas y desorientado. Sé que hay momento que uno no puede
            disponer del sueño, pero por lo menos limitamos el uso de estos
            aparatos que queman tiempo y nos mantienen entretenidos en nada.
          </p>
          <p className="mt-2">
            Mis mejores deseos como siempre. No bajen los brazos y recuerden
            que, de las experiencias no se trata de salir ilesos, más bien, de
            salir fortalecidos. Un abrazo...
          </p>
          <h3 className="text-2xl mt-3">Chenz</h3>
        </section>
      </article>

      <article className="flex flex-col md:flex-row ">
        <section
          className="mx-1 flex justify-center "
          id="tarjetas"
        >
          <Card className="max-w-[270px] sx:max-w-sm order-1 bg-dark  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <img
              className="rounded-lg m-0 p-0"
              src={Totoro_article_5}
              alt="Imagen Articulo"
            />
            <_bar_media />
          </Card>
        </section>
        <section
          id="articulo"
          className="my-5 mx-5 text-xs xl:text-base  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100"
        >
          <h1 className="text-2xl font-bold mb-2">
            Una gran semana por delante
          </h1>
          <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
            07/04/204 for Chenz
          </span>
          <hr className="h-px my-3 bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 border-0"></hr>
          <p className="mt-2">Muy buenas gente bonita,</p>
          <p className="mt-2">
            Quería brindarles mis agradecimientos por la compañía y esperando
            que puedan concretar varias de las tareas que tienen planeadas como
            parte de sus proyectos.
          </p>
          <p className="mt-2">
            Para adentrarnos a los que respecta a los directos, tendremos
            sesiones de Lunes a Viernes en los términos normales, el bot por la
            madrugada - mañana, y por el resto de la tarde me encontrarán a mí.
            El fin de semana, que es lo que más genera dudas, dependiendo el día
            que trabaje, no tendremos emisión. En este caso, me toca trabajar el
            domingo, por lo cual habrá directo el día SÁBADO.
          </p>
          <p className="mt-2">
            Para la persona que se esté integrando este último tiempo, hay uno o
            dos pomos donde me estoy retirando a hacer un poco de bicicleta. Una
            actividad con la que me siento cómodo y me permite mantenerme
            enfocado el resto del día. Para recuperar un poco esos pomitos
            quizás me ven más temprano de lo que usualmente me presento por la
            tarde.
          </p>
          <p className="mt-2">
            Recuerden que el espacio es más de ustedes que mío. Las cosas
            bonitas que pasan, suceden porque todos aportamos algo propio, como
            su tiempo. En ese sentido, no salgo de mi asombro y me pone contento
            que, independientemente de mi presencia, siempre se estén haciendo
            compañía y es parte de las razones que me mantiene emitiendo.
          </p>
          <p className="mt-2">
            Por otro lado, con Aleu estamos pensando en volver a hacer
            meditaciones. Aproximadamente a las 15 horas Argentina.
            Arrancaríamos este lunes directamente, pero le voy a exponer la
            información en una publicación aparte porque haría ya mucho más
            largo este aviso. Queremos ver si funciona, de lo contrario, como
            suelo decir, no pasa nada.
          </p>
          <p className="mt-2">
            En el comunicado anterior, dije que Abril es el mes que te adentra
            de lleno al año, y como tal tenemos que entender que habrá una
            exigencia mayor y que habrá que apegarnos al plan en donde lo que
            nunca está en juego es el amor propio. Si las cosas salen mal, hay
            que valorar lo hecho, y buscar rápidamente soluciones para la etapa
            que sigue. En algún momento te va a tocar dar pelea de nuevo, por lo
            que abandonar las armas no tiene sentido. Así que te mando un
            abracito y que no decaiga si hubo tropiezo. Te recomiendo ver el
            aviso anterior en la página del canal, si es que ya no se encuentra
            disponible por aquí, donde te comparto un poquito de mi visión ante
            estos casos.
          </p>
          <p className="mt-2">
            Creo que eso es todo lo que tenía para comentar. Nuevamente, mis
            mejores deseos para esta semana, coman rico, hagan ejercicio e
            intenten dormir bien.
          </p>
          <h3 className="text-2xl mt-3">Chenz</h3>
        </section>
      </article>
    </header>
  );
};

export default About;
