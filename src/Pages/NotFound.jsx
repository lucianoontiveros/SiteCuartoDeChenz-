import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const NotFound = () => {

    const error = useRouteError()
    console.log(error)
  return (
    <>
        <div>NotFound</div>
        <Link to="/">Volver al home </Link>
    
    </>
  )
}

export default NotFound