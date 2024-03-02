import React, { useEffect } from "react";
import { Collapse } from "flowbite";
import { NavLink } from "react-router-dom";
import iconSite from "../assets/IconSite.png";

const getNavLinkClass = (isActive) => {
  return isActive
    ? "block nav-link bg-gray-800  py-2 px-3 md:p-0 rounded  underline text-white  md:bg-transparent underline-green-200 sm:underline-indigo-300 md:underline-mintGreen xl:underline-skyBlue  active"
    : "block nav-link text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue  py-2 px-3 md:p-0 rounded md:bg-transparent";
};

const Navbar = () => {
  useEffect(() => {
    // set the target element that will be collapsed or expanded (eg. navbar menu)
    const $targetEl = document.getElementById("targetEl");
    // optionally set a trigger element (eg. a button, hamburger icon)
    const $triggerEl = document.getElementById("triggerEl");
    // optional options with default values and callback functions
    const options = {
      onCollapse: () => {
        console.log("element has been collapsed");
      },
      onExpand: () => {
        console.log("element has been expanded");
      },
      onToggle: () => {
        console.log("element has been toggled");
      },
    };

    const instanceOptions = {
      id: "targetEl",
      override: true,
    };

    const collapse = new Collapse(
      $targetEl,
      $triggerEl,
      options,
      instanceOptions
    );
  }, []);

  return (
    <>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={iconSite}
              className="h-16"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              <span className="uppercase hidden sm:block sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue">
                4TODECHENZ
              </span>
            </span>
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-200 sm:text-indigo-300 md:text-mintGreen xl:text-skyBlue rounded-lg md:hidden"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => getNavLinkClass(isActive)}
                  aria-current="page"
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Avisos"
                  className={({ isActive }) => getNavLinkClass(isActive)}
                >
                  Avisos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Comandos"
                  className={({ isActive }) => getNavLinkClass(isActive)}
                >
                  Comandos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Recomendados"
                  className={({ isActive }) => getNavLinkClass(isActive)}
                >
                  Recomendados
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) => getNavLinkClass(isActive)}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
