import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import iconSite from '../assets/IconSite.png'
import iconX from '../assets/iconX.png'
import iconInsta from '../assets/iconInsta.png'
import iconGitHub from '../assets/iconGitHub.png'
import iconTwitch from '../assets/iconTwitch.png'
import iconThreads from '../assets/iconThreads.png'
import iconDiscord from '../assets/iconDiscord.png'

const NotFound = () => {

    const error = useRouteError()
    console.log(error)
  return (
    <>  
        <Navbar/>
          <div className="flex flex-col justify-center items-center h-[87vh]" >
              <div className=" text-white" role="status">
                  <div className='flex justify-center'>
                      <img src={iconSite} alt="" />
                  </div>
                  <div>
                      <h1 class="text-white text-3xl mt-2 mb-3 text-center">No Found</h1>
                      <p>Favor de revisar la dirección a la cual quieres remitirte</p>
                  </div>
                  <div className="flex flex-col mt-5 max-h-[50px] max-w-[400px] flex-wrap my-2 items-center">
                        <div>
                            <a href="https://twitter.com/AgustnOntivero6">
                                <img className="h-auto rounded-lg mx-1 my-1 max-w-[30px] " src={iconX} alt="X"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/luciano.a.ontiveros/" >
                                <img className="h-auto max-w-[30px] rounded-lg mx-1 my-1" src={iconInsta} alt="Instagram"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/lucianoontiveros" >
                                <img className="h-auto max-w-[30px] rounded-lg mx-1 my-1" src={iconGitHub} alt="GitHub"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://twitch.tv/cuartodechenz" >
                                <img className="h-auto max-w-[30px] rounded-lg mx-1 my-1" src={iconTwitch} alt="Twitch"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.threads.net/@luciano.a.ontiveros?hl=es-la" >
                                <img className="h-auto max-w-[30px] rounded-lg mx-1 my-1" src={iconThreads} alt="Threads"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://discord.gg/UdU3wvpWu7">
                                <img className="h-auto max-w-[30px] rounded-lg mx-1 my-1" src={iconDiscord} alt="Discord"/>
                            </a>
                        </div>
                    </div>
              </div>
          </div>
        <Footer />
    
    </>
  )
}

export default NotFound