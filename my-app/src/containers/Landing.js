import React from 'react'
import Intro from '../components/intro'
import Navbar from '../components/navbar'
import Photo from '../components/photo'
import Sidebar from '../components/sidebar'
import "../styles/landing.css"

const Landing = () => {
  return (
    <div  className='landing'>
      <Sidebar className="landingNav"></Sidebar>
      <Navbar className="landingNav">{<Intro/>}</Navbar>
      <Photo className="landingNav"></Photo>
      
      

    </div>
  )
}

export default Landing