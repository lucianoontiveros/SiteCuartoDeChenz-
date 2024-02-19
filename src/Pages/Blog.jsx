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
        <div className="container">
            <h1 className="display-4 my-4">Blog</h1>
            <div className="row">
                <div className="col-md-8">
                    <ul>
                        {/* Si hay publicaciones, las mapeamos y las mostramos como elementos de lista con un enlace a la publicación individual */}
                        { posts.length > 0 ? (posts.map((post) => (
                            <li key={post.id}>
                                <Link to={`/blog/${post.id}`}>
                                    <h3 className="my-3">{post.title}</h3>
                                    <p> {post.body} </p>
                                </Link>
                            </li>
                        ))) : ( <li> Not Fount </li>)}
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="card my-4">
                        <h5 className="card-header">Buscar</h5>
                        <div className="card-body">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Buscar..." />
                                <span className="input-group-append">
                                    <button className="btn btn-secondary" type="button">Ir!</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exportamos el componente Blog
export default Blog;

// Definimos la función loaderBlog que se utiliza para cargar los datos de las publicaciones del blog desde una API externa
export const loaderBlog = async () => {
    // Hacemos una petición a la API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // Convertimos la respuesta a JSON
    const posts = await res.json() 

    // Devolvemos los datos de las publicaciones
    return {posts}
}
