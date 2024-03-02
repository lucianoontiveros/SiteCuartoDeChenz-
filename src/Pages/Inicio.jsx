import _Carousel from "../Components/_Carousel";

const Inicio = () => {
  return (
    <header className="relative">
      <div className="container  mx-auto  flex justify-center items-center h-[200px] w-auto sm:h-[300px] xl:h-[500px] sm:w-[900] ">
        <_Carousel />
        <div className="absolute">
          <h1 className="hidden  sm:block text-indigo-300 md:text-mintGreen xl:text-skyBlue text-2xl sm:text-6xl md:text-7xl xl:text-9xl font-mono uppercase">
            CUARTO DE CHENZ
          </h1>
          <h1 className="text-skyBlue sm:hidden text-2xl sm:text-6xl md:text-7xl xl:text-9xl font-mono uppercase">
            4TODECHENZ
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Inicio;
