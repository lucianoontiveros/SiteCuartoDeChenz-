import React from 'react'
import { Outlet , useNavigation} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Loading from '../Components/Loading'

const Layout = () => {
  const navigation = useNavigation()
  return (
    <>
            <Navbar />
                <div className='container my-4'>
                  { navigation.state === 'loading' && (
                    <Loading />
                  )}
                    <Outlet />
                </div>
            <Footer />
    </>
  )
}

export default Layout