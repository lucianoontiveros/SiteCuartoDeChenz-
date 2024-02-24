import React from 'react'
import { Outlet , useNavigation} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Loading from '../Components/Loading'

const Layout = () => {
  const navigation = useNavigation()
  return (
    <>
      <div className='flex flex-col min-h-screen p-0 min-h-{120vh} bg-[#0d030e] sm:bg-[#3b0764]  md:bg-[#1e1b4b] lg:bg-[#083344]'>
            <Navbar />
                <div>
                  { navigation.state === 'loading' && (
                    <Loading />
                  )}
                    <Outlet />
                </div>
            <Footer />
      </div>
    </>
  )
}

export default Layout