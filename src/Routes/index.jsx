import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Blog, { loaderBlog } from "../Pages/Blog";
import NotFound from "../Pages/NotFound";
import Layout from "../Layout/Layout";
import Post, { loaderPost } from "../Components/Post";
// Crea una constante router usando el método createBrowserRouter
export const router = createBrowserRouter([
  {
    path: "/", // Ruta principal
    element: <Layout />, // Elemento correspondiente a la ruta principal, que es el componente Layout
    errorElement: <NotFound />, // Elemento a mostrar en caso de error, que es el componente NotFound
    children: [
      // Subrutas dentro de la ruta principal
      {
        index: true, // Indica que este es el índice dentro de las subrutas
        element: <Home />, // Elemento correspondiente a la subruta de inicio, que es el componente Home
      },
      {
        path: "/about", // Ruta para la página "About"
        element: <About />, // Elemento correspondiente a la página "About", que es el componente About
      },
      {
        path: "/blog", // Ruta para la sección de blog
        element: <Blog />, // Elemento correspondiente a la sección de blog, que es el componente Blog
        loader: loaderBlog, // Función de carga (si se necesita) para la sección de blog
      },
      {
        path: "/blog/:id", // Ruta para un post específico dentro de la sección de blog
        element: <Post />, // Elemento correspondiente a un post específico, que es el componente Post
        loader: loaderPost, // Función de carga (si se necesita) para un post específico
      },
    ],
  },
]);
