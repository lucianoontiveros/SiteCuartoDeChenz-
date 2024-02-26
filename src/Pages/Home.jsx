import React from 'react';
import iconReact from '../assets/iconReact.png'
import iconTailwind from '../assets/iconTailwind.png'
import iconVite from '../assets/iconVite.png'
import iconFlowbite from '../assets/iconFlowbite.png'
import Title from '../Components/Title';
import FirstTitle from '../Components/FirstTitle';


const Home = () => {
  return (
    <div className="container max-h-[70%] flex flex-row flex-wrap justify-around items-center bg-[#0d255248] p-3 sm:bg-[#3b0764]  md:bg-[#1e1b4b]  lg:bg-[#083344] lg:flex-wrap-reverse xl:[#09090b]">

      <Title />
      

      {/* Card vite */}
      <div className="w-full flex order-1 text-white flex-col justify-center items-center  min-h-[300px] lg:max-w-md rounded-lg sm:mt-[3em]  sm:max-w-[350px] lg:mb-[0.7em]  ">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <img className='sm:max-w-[150px] md:max-w-[100px] md:max-h-[100px]' src={iconVite} alt="Vite Icon" />     
        </a>
        <h2 className="font-semibold mt-6 mb-2 text-2xl">Vite</h2>
        <p className='text-center'>Vite es un servidor de desarrollo local escrito por Evan You, el creador de Vue.js, y utilizado de forma predeterminada por Vue y para las plantillas de proyectos de React.</p>
      </div>

       {/* Card React */}
      <div className="w-full flex order-2 text-white flex-col justify-center items-center  min-h-[300px] lg:max-w-md rounded-lg sm:mt-[3em]  sm:max-w-[350px] lg:mb-[0.7em]  ">
        <a href="https://es.react.dev/" target='_blank' rel="noopener noreferrer">
          <img className='sm:max-w-[150px] md:max-w-[100px] md:max-h-[100px]' src={iconReact} alt="React Icon" />
        </a>
       <h2 className="font-semibold mt-6 mb-2 text-2xl">React</h2>
       <p className='text-center'>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.</p>
      </div>

      {/* Card Tailwind */}
      <div className="w-full flex  text-white flex-col justify-center items-center  min-h-[300px] lg:max-w-md rounded-lg sm:mt-[3em]  sm:max-w-[350px] lg:mb-[0.7em]  ">
        <a href="https://tailwindcss.com/" target='_blank' rel="noopener noreferrer">
          <img className='sm:max-w-[150px] md:max-w-[100px] md:max-h-[100px]' src={iconTailwind} alt="Tailwind Icon" />
        </a>
        <h2 className="font-semibold mt-6 mb-2 text-2xl">Tailwind</h2>
        <p className='text-center'>Tailwind CSS es un framework de CSS de código abierto​ para el diseño de páginas web.</p>
      </div>

      <FirstTitle />

      {/* Card Flowbite */}
      <div className="w-full flex text-white flex-col justify-center items-center  min-h-[300px] lg:max-w-md rounded-lg sm:mt-[3em]  sm:max-w-[350px] lg:mb-[0.7em]  ">
        <a href="https://www.flowbite-react.com/" target='_blank' rel="noopener noreferrer">
          <img className='sm:max-w-[150px] md:max-w-[100px] md:max-h-[100px]' src={iconFlowbite} alt="Flowbite Icon" />
        </a>
        <h2 className="font-semibold mt-6 mb-2 text-2xl">Flowbite</h2>
        <p className='text-center'>Flowbite es una biblioteca de código abierto con más de 450 componentes creados a partir de las clases de Tailwind CSS.</p>
      </div>

    </div>
  );
}

export default Home;
