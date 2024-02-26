// Importamos los módulos necesarios
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

// Definimos el componente Blog
const Blog = () => {
    // Usamos el hook useLoaderData para obtener los datos de las publicaciones del blog
    // Usamos el hook useLoaderData para obtener los datos de las publicaciones del blog
    // Este hook carga los datos que se devuelven de la función loaderBlog
    const {posts} = useLoaderData();

    // Renderizamos el componente
    return (
        <div className="container py-1 sm:py-5 md:py-10">
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:mx-0'></div>
                <h1 className="ext-3xl font-bold tracking-tight text-white sm:text-4xl">Ejemplo para utilizar una Api</h1>
                <p className="mt-2 text-lg leading-8 text-green-600">
                Learn how to grow your business with our expert advice.
                </p>
            <div className="card my-4">
                <form className='sm:max-w-[400px]'>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Search</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="grid mb-8 border bg-gray-900 sm:border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 dark:bg-gray-800">
                        {/* Si hay publicaciones, las mapeamos y las mostramos como elementos de lista con un enlace a la publicación individual */}
                { posts.length > 0 ? (posts.map((post) => (
                    <figure key={post.id} className="flex flex-col mt-3 items-center justify-center md:p-8 text-center border-b text-white sm:border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                        <figcaption className="flex items-center justify-center ">
                            <img className="rounded-full w-9 h-9" src={post.image} alt="profile picture" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                <div>{post.slug}</div>
                                <div className="text-xs sm:text-sm md:text-lg text-gray-500 dark:text-gray-400 ">{post.category}</div>
                            </div>
                        </figcaption>    
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <Link to={`/blog/${post.id}`}>
                                <h3 className="text-green-300 text-xs sm:text-sm md:text-lg font-semibold  dark:text-white">{post.title}</h3>
                                <p className="text-xs sm:text-sm md:text-lg my-4"> {post.url} </p>
                            </Link>
                        </blockquote> 
                    </figure>
                
                ))) : ( <li> Not Fount </li>)}
        </div>
    </div>                          
    );
}

// Exportamos el componente Blog
export default Blog;

// Definimos la función loaderBlog que se utiliza para cargar los datos de las publicaciones del blog desde una API externa
export const loaderBlog = async () => {
    // Hacemos una petición a la API
    const res = await fetch('https://jsonplaceholder.org/posts')
    // Convertimos la respuesta a JSON
    const posts = await res.json() 
    if(!res.ok) {
        throw{
            status: res.status,
            statusText: "Code: " + res.status, 
        }
    }
    // Devolvemos los datos de las publicaciones
    return {posts}
}
