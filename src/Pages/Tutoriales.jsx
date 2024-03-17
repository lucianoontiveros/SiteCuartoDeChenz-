import _buttom_travel from "../Components/_buttom_travel";
import portada from "../assets/portada_presentacion.png";
import totoro_tutorial from "../assets/totoro_tutorial.jpg";
import totoro_tutorial_datos from "../assets/totoro_tutorial_datos.jpg";

import { Card } from "flowbite-react";

const Tutoriales = () => {
  return (
    <>
      <div className="container  flex flex-col p-1 md:flex-row">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <Card
              className=" mb-2 mx-1 bg-dark text-xs xl:text-base text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100"
              imgSrc={totoro_tutorial}
              horizontal
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Comandos para interactuar con BrunitoPet
              </h5>
              <p className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                En este canal tenemos un bot que recuerda tus tareas. La forma
                de interactuar con él es muy fácil. Su nombre es BrunitoPet y
                aquí te dejamos los comandos, más unos videos tutoriales más
                abajo. No olvides que debes ingresarlos en el chat de Twitch del
                canal.
              </p>
            </Card>

            <Card className="p-0 bg-dark border-none">
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !tarea + más la descripción de la tarea
                </span>
                Ingresando el comando junto con su correspondiente descripción,
                la misma quedará registrada y un mensaje vía chat avisará que se
                complió con la petición.
              </p>
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !lista
                </span>
                Ingresando este comando se desplegará en pantalla la lista de
                tareas y también se expondrá en el chat. De no tener tareas
                registradas habrá un aviso informando la situación.
              </p>
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  {" "}
                  !eliminar + ID
                </span>
                Ingresando el comando más el ID la tarea vinculada se elimina.
              </p>
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  {" "}
                  !marcar + ID
                </span>
                Ingresando el comando más el ID la tarea vinculada se marca como
                realizada.
              </p>
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !task + task description
                </span>
                By entering the command and then the description the task will
                be logged and the log will be displayed on the screen and in the
                chat.
              </p>
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !list
                </span>
                Displays on screen and in the chat the list of pending tasks. If
                no task is registered, a message via chat will inform that there
                are no activities.
              </p>
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !delete + ID
                </span>
                Entering the command and adding the ID will allow you to delete
                the linked task.
              </p>
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !check + ID
                </span>
                Entering the command to the chat and adding the corresponding ID
                will allow you to mark your task as done.
              </p>
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !clear
                </span>
                Ingresando este comando se borran todas las tareas. / Entering
                this command deletes all tasks.
              </p>
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !pickup
                </span>
                ingresando este comando se marcan todas las tareas. / by
                entering this command all tasks are marked.
              </p>
            </Card>
          </div>

          {/* aqui esta la otra card  */}
          <div className="text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <Card
              className="mb-2 mx-1 bg-dark text-xs xl:text-base text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100"
              imgSrc={totoro_tutorial_datos}
              horizontal
            >
              <h5 className="tmb-2 text-2xl font-bold tracking-tight ">
                Hazte conocer en nuestra comunidad
              </h5>
              <p className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                También puedes agregarle información para compartir con la
                comunidad. Los comandos te los indicamos aquí abajo:
              </p>
            </Card>
            <Card className="p-0 bg-dark border-none ">
              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !nacimiento + dd-mm
                </span>
                Si ingresas tu fecha de nacimiento podremos automáticamente
                conocer tu signo. Próximamente, Brunito recordará si es tu
                cumpleaños. Importante no olvidar ingresar dos dígitos con el
                guion correspondiente. . Ej: !nacimiento 10-09
              </p>

              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !instagram
                </span>
                Puedes poner tu nombre de perfil si tienes instagram. Ej:
                !instagram luciano.a.ontiveros
              </p>

              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !nacionalidad
                </span>
                Puedes indicar allí tu nacionalidad. Ej: !nacionalidad Argentina
              </p>

              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !estudiopara
                </span>
                Si estas estudiando puedes poner allí a lo que te estas
                dedicando ahora mismo. Ej: !estudiopara Ciencias Economicas.
              </p>

              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !opositopara
                </span>
                Si estás opositando puedes dejarnos indicado a qué oposición
                perteneces. Ej: !opositopara La administración Publica.
              </p>

              <p>
                <span className="bg-green-200 sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue hover:bg-zinc-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded text-sm">
                  !verusuario + el nombre del usuario (sin @)
                </span>
                Podrás ver los datos más relevantes del usuario, su lista de
                tareas, la ubicación de su perfil y la cantidad de croquetas
                regaladas a BrunitoPet. Recuerda no ingresar el @, simplemente
                el nombre del usuario. Ej !verusuario cuartodechenz
              </p>
            </Card>

            <Card className="p-0 bg-dark border-none "></Card>
          </div>
        </div>

        <div>
          <Card
            className=" mx-2 my-3 order-2 bg-dark  text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100 animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop"
            renderImage={() => (
              <img
                width={500}
                height={500}
                src={portada}
                alt="Portada presentación"
              />
            )}
          >
            <h5 className="text-2xl font-bold text-gray-900">
              ¿Ya eres parte de la familia?
            </h5>
            <p className="font-normal text-gray-700 ">
              Nuestra comunidad te da la bienvenida.
            </p>
            <_buttom_travel />
          </Card>

          <Card className="mx-3 mb-2 text-xs xl:text-base bg-dark text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100  bg-dark">
            <iframe
              className="mx-0 p-0 "
              src="https://www.youtube.com/embed/qi24YyPXmo0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h5 className="tmb-2 text-2xl font-bold tracking-tight">
              TUTORIAL BRUNITOPET
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Descubre como utilizar nuestro Bot de tareas.
            </p>
          </Card>
          <Card className="mx-3 mb-2 text-xs xl:text-base bg-dark text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue hover:text-zinc-100">
            <iframe
              className="mx-0 p-0 "
              src="https://www.youtube.com/embed/yR-CkFv7YPI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h5 className="tmb-2 text-2xl font-bold tracking-tight">
              TUTORIAL DISCORD
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              No te quedes afuera de discord. Aquí te damos los pasos a seguir
              para que puedas unirte a nuestra comunidad.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Tutoriales;
