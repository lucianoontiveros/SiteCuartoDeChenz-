import _Carousel from "../Components/_Carousel";
import iconSite from "../assets/IconSite.png";
import _card from "../Components/_card";

const Inicio = () => {
  return (
    <>
      <header className="relative">
        <div className="container card animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop  mt-2 flex justify-center items-center h-[200px] w-auto sm:h-[300px] sm:min-w-[600px] xl:h-[500px]">
          <_Carousel />
          <img
            src={iconSite}
            className="absolute h-16 sm:hidden"
            alt="Cuarto de Chenz"
          />
          <div className="absolute">
            <h1 className="hidden sm:block text-indigo-300 md:text-mintGreen xl:text-skyBlue text-2xl sm:text-6xl md:text-7xl xl:text-9xl font-mono uppercase">
              CUARTO DE CHENZ
            </h1>
            {/* <h1 className="text-skyBlue mt-20 sm:hidden text-2xl sm:text-6xl md:text-7xl xl:text-9xl font-mono uppercase">
              4TODECHENZ
            </h1> */}
          </div>
        </div>
      </header>
      <main>
        <_card />
      </main>
    </>
  );
};

export default Inicio;
