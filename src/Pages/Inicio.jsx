import _Carousel from "../Components/_Carousel";
import iconSite from "../assets/IconSite.png";
import _card from "../Components/_card";
import _bar_media from "../Components/_bar_media";

const Inicio = () => {
  return (
    <>
      <header className="mt-2 mx-3">
        <div className="container card animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop flex justify-center items-center w-[250px] h-[200px] sm:w-auto sm:h-[350px] md:h-[400x] max-w-[1100px]">
          <_Carousel className="mx-3 " />
          <img
            src={iconSite}
            className="absolute h-16 sm:hidden"
            alt="Cuarto de Chenz"
            loading="lazy"
          />
          <div className="absolute">
            <h1 className="hidden sm:block text-indigo-300 md:text-mintGreen xl:text-skyBlue text-2xl sm:text-6xl md:text-7xl xl:text-8xl font-mono uppercase  hover:animate-pulse-icon">
              CUARTO DE CHENZ
            </h1>
            {/* <h1 className="text-skyBlue mt-20 sm:hidden text-2xl sm:text-6xl md:text-7xl xl:text-9xl font-mono uppercase">
              4TODECHENZ
            </h1> */}
          </div>
        </div>
        <main>
          <nav className="mt-3">
            <_bar_media />
          </nav>
          <article className="container mb-2">
            <_card />
          </article>
        </main>
      </header>
    </>
  );
};

export default Inicio;
