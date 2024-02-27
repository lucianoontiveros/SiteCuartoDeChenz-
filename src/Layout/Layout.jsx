import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

const Layout = () => {
  const navigation = useNavigation(); // Obtiene la funcionalidad de navegación utilizando useNavigation()

  return (
    <>
      <div className="flex flex-col min-h-screen p-0 min-h-{100vh} bg-[#0d030e] sm:bg-[#3b0764]  md:bg-[#1e1b4b] lg:bg-[#083344]">
        <Navbar />
        <div>
          {/* Renderiza el componente Loading solo si la navegación está en estado 'loading' */}
          {navigation.state === "loading" && <Loading />}
          <Outlet /> {/* Renderiza el contenido de las rutas anidadas */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
