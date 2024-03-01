import _Carousel from "../Components/_Carousel";

const Home = () => {
  return (
    <div className="relative">
      <div className="container  mx-auto  flex justify-center items-center h-[150px] w-auto sm:h-[300px] xl:h-[500px] sm:w-[900] ">
        <_Carousel />
        <div className="absolute">
          <h1 className=" text-skyBlue  text-9xl font-mono uppercase">
            Cuarto de Chenz
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
