import React from "react";
import { NavLink } from "react-router-dom";
import iconSite from "../assets/icon.png";
import { Navbar } from "flowbite-react";

const getNavLinkClass = (isActive) => {
  return isActive
    ? "block nav-link bg-gray-800  py-2 px-3 md:p-0 rounded  underline text-white  md:bg-transparent underline-green-200 sm:underline-indigo-300 md:underline-mintGreen xl:underline-skyBlue  active"
    : "block nav-link text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue  py-2 px-3 md:p-0 rounded md:bg-transparent";
};

const _Navbar = () => {
  return (
    <Navbar
      className="bg-dark flex justify-center w-full"
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <NavLink
          to="/"
          className="flex w-full items-center space-x-3 my-2 rtl:space-x-reverse"
        >
          <img
            src={iconSite}
            className="h-12 hidden sm:block "
            alt="Cuarto de Chenz"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            <span className="logo animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop mr-5 px-2 uppercase text-mintGreen sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue">
              CUARTO DE CHENZ
            </span>
          </span>
        </NavLink>
      </Navbar.Brand>
      <div>
        <Navbar.Toggle className=" bg-mintGreen sm:bg-indigo-300 md:bg-mintGreen xl:bg-skyBlue" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <NavLink
            to="/"
            className={({ isActive }) => getNavLinkClass(isActive)}
            aria-current="page"
          >
            Inicio
          </NavLink>
        </Navbar.Link>

        <Navbar.Link>
          <NavLink
            to="/Comunidad"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Comunidad
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/Horarios"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Horarios
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/Avisos"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Avisos
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/Comandos"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Comandos
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/Tutoriales"
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            Tutoriales
          </NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default _Navbar;
