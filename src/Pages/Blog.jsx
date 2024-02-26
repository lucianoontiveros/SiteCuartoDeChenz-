import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

// Definimos el componente Blog
const Blog = () => {
  // Usamos el hook useLoaderData para obtener los datos de las publicaciones del blog
  // Usamos el hook useLoaderData para obtener los datos de las publicaciones del blog
  // Este hook carga los datos que se devuelven de la función loaderBlog
  const { posts } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchParams({ filter: event.target.value });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchParams({ filter: event.target.value });
      event.preventDefault(); // Evitar el comportamiento predeterminado de enviar el formulario
    }
  };

  // Renderizamos el componente
  return (
    <div className="container py-1 sm:py-5 md:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0"></div>
        <h1 className="ext-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ejemplo para utilizar una Api
        </h1>
        <p className="mt-2 text-lg leading-8 text-green-600">
          Learn how to grow your business with our expert advice.
        </p>
        <div className="card my-4">
          <form className="sm:max-w-[400px]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                value={searchTerm}
                onChange={handleChange}
                onBlur={handleChange}
                onKeyDown={handleKeyDown} // Reemplazar onKeyPress por onKeyDown
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="grid mb-8 rounded-lg  md:mb-12 md:grid-cols-2">
        {/* Si hay publicaciones, las mapeamos y las mostramos como elementos de lista con un enlace a la publicación individual */}
        {posts.length > 0 ? (
          posts
            .filter((post) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = post.title.toLowerCase();
              return name.includes(filter.toLowerCase());
            })
            .map((post) => (
              <figure
                key={post.id}
                className="flex flex-col mt-3 items-center justify-center md:p-8 text-center text-white  rounded-t-lg md:rounded-t-none md:rounded-ss-lg border-b "
              >
                <figcaption className="flex flex-row justify-start items-center">
                  <img
                    className="rounded-full border-2 w-9 h-9 align-item-start"
                    src={post.image}
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 flex flex-col items-center text-center  font-medium dark:text-white rtl:text-right ms-3">
                    <div>{post.slug}</div>
                    <div className="text-xs sm:text-sm md:text-lg text-gray-500 dark:text-gray-400 ">
                      {post.category}
                    </div>
                  </div>
                </figcaption>
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-green-300 text-xs sm:text-sm md:text-lg font-semibold  dark:text-white">
                      {post.title}
                    </h3>
                    <p className=" text-white text-xs sm:text-sm md:text-lg my-4">
                      {" "}
                      {post.url}{" "}
                    </p>
                  </Link>
                </blockquote>
              </figure>
            ))
        ) : (
          <li> Not Fount </li>
        )}
      </div>
    </div>
  );
};

// Exportamos el componente Blog
export default Blog;

// Definimos la función loaderBlog que se utiliza para cargar los datos de las publicaciones del blog desde una API externa
export const loaderBlog = async () => {
  // Hacemos una petición a la API
  const res = await fetch("https://jsonplaceholder.org/posts");
  // Convertimos la respuesta a JSON
  const posts = await res.json();
  if (!res.ok) {
    throw {
      status: res.status,
      statusText: "Code: " + res.status,
    };
  }
  // Devolvemos los datos de las publicaciones
  return { posts };
};
