import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <>
            <Navbar />
                <div className='container my-4'>
                    <Outlet />
                </div>
            <Footer />
    </>
  )
}

export default Layout