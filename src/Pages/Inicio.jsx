import _Carousel from "../Components/_Carousel";
import iconSite from "../assets/icon.png";
import _card from "../Components/_card";
import _bar_media from "../Components/_bar_media";

const Inicio = () => {
  return (
    <>
      <header>
        <div className="contenedor container mt-2 card animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop flex justify-center items-center min-w-[200px] h-[310px]">
          <_Carousel />
          <img
            src={iconSite}
            className="absolute h-36 sm:hidden"
            alt="Cuarto de Chenz"
            loading="lazy"
          />
          <h1 className="absolute mt-48 bold text-2xl text-skyBlue sm:hidden">
            4TODECHENZ
          </h1>
          <div className="absolute">
            <h1 className="logo px-3 hidden sm:block text-indigo-300 md:text-mintGreen xl:text-skyBlue text-2xl sm:text-6xl md:text-7xl xl:text-8xl font-mono uppercase  hover:animate-pulse-icon">
              STUDY WITH ME
            </h1>

            {/* <h1 className="text-skyBlue mt-20 sm:hidden text-2xl sm:text-6xl md:text-7xl xl:text-9xl font-mono uppercase">
              4TODECHENZ
            </h1> */}
          </div>
        </div>
        <nav className="my-8">
          <_bar_media />
        </nav>
        <main>
          <article className="container mb-2">
            <_card />
          </article>
        </main>
      </header>
    </>
  );
};

export default Inicio;
