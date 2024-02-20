// Importamos React, que es necesario para crear componentes de React.
import React from 'react';

// Importamos useLoaderData de react-router-dom. Este hook nos permite acceder a los datos cargados para esta ruta.
import { useLoaderData } from 'react-router-dom';

// Definimos un componente de React llamado Post.
const Post = () => {
    // Usamos el hook useLoaderData para obtener los datos de la publicación (post) cargados para esta ruta.
    const { post } = useLoaderData()

    // Renderizamos un elemento de tarjeta (card) de Bootstrap que muestra el título y el cuerpo de la publicación.
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    );
};

// Exportamos el componente Post como el export por defecto de este módulo.
export default Post;

// Definimos una función asíncrona llamada loaderPost que carga los datos de una publicación específica.
export const loaderPost = async ({params}) => {
    // Hacemos una solicitud a la API de JSONPlaceholder para obtener los datos de la publicación con el ID especificado en params.
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(!res.ok) {
        throw{
            status: res.status,
            statusText: "Code: " + res.status, 
        }
    }
    // Convertimos la respuesta en JSON.
    const post = await res.json()

    // Devolvemos los datos de la publicación.
    return {post}
}
