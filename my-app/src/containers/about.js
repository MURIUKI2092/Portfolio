import React from 'react'
import About from '../components/about'
import Navbar from '../components/navbar'
import Photo from '../components/photo'
import Sidebar from '../components/sidebar'
import "../styles/landing.css"

const AboutPage = () => {
  return (
    <div  className='landing'>
      <Sidebar className="landingNav"></Sidebar>
      <Navbar className="landingNav">{<About/>}</Navbar>
      <Photo className="landingNav"></Photo>
      
      

    </div>
  )
}

export default AboutPage