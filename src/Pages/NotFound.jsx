import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const NotFound = () => {

    const error = useRouteError()
    console.log(error)
  return (
    <>  
        <Navbar/>
        <div className='container '>
          <div className='card text-center m-4'>
            <h1>NotFound</h1>
            <p>Error 404</p>
            <Link className="btn " to="/">Volver al home </Link>
            </div>
        </div>
        <Footer />
    
    </>
  )
}

export default NotFound