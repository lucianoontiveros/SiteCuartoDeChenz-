import { createBrowserRouter } from "react-router-dom";
import About from '../Pages/About'
import Home from '../Pages/Home'
import Blog, { loaderBlog } from '../Pages/Blog'
import NotFound from "../Pages/NotFound";
import Layout from "../Layout/Layout";
import Post, { loaderPost } from "../Components/Post";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: < NotFound />,
        children: [
            {
                
                index: true,
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/blog',
                element: <Blog />,
                loader: loaderBlog,
            },
            {
                path: '/blog/:id',
                element: <Post />,
                loader: loaderPost,
            },
            
        ]
    },
    
])