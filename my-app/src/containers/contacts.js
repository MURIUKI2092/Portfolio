import React from 'react'
import Contact from '../components/contact'
import Navbar from '../components/navbar'
import Photo from '../components/photo'
import Sidebar from '../components/sidebar'
import "../styles/landing.css"
const Contacts = () => {
  return (
    <div  className='landing'>
    <Sidebar className="landingNav"></Sidebar>
    <Navbar className="landingNav">{<Contact/>}</Navbar>
    <Photo className="landingNav"></Photo>
    
    

  </div>
  )
}

export default Contacts