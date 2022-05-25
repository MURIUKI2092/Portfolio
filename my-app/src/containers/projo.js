import React from 'react'
import Projects from '../components/projects'
import Navbar from '../components/navbar'
import Photo from '../components/photo'
import Sidebar from '../components/sidebar'
import "../styles/landing.css"

const Projo = () => {
  return (
    <div>
      <div  className='landing'>
      <Sidebar className="landingNav"></Sidebar>
      <Navbar className="landingNav">{<Projects/>}</Navbar>
      <Photo className="landingNav"></Photo>
      
      

    </div>
    </div>
  )
}

export default Projo