import { createBrowserRouter } from "react-router-dom";
import Avisos from "../Pages/Avisos";
import Inicio from "../Pages/Inicio";
import Blog, { loaderBlog } from "../Pages/Blog";
import NotFound from "../Pages/NotFound";
import Layout from "../Layout/Layout";
import Post, { loaderPost } from "../Components/Post";
import Comunidad from "../Pages/Comunidad";
import Horarios from "../Pages/Horarios";
import Tutoriales from "../Pages/Tutoriales";
// Crea una constante router usando el método createBrowserRouter
export const router = createBrowserRouter([
  {
    path: "/", // Ruta principal
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/Comunidad",
        element: <Comunidad />,
      },
      {
        path: "/Horarios",
        element: <Horarios />,
      },
      {
        path: "/Avisos",
        element: <Avisos />,
      },
      {
        path: "/Tutoriales",
        element: <Tutoriales />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: loaderBlog,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: loaderPost,
      },
    ],
  },
]);
