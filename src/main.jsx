import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
{/* Podríamos simplemente llamar a import { router } from './routes' porque al ponerle index al archivo directamente lo reconoce en la carpeta. */}
import { router } from './Routes/index.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
