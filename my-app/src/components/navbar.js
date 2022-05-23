import React from 'react'
import "../styles/navbar.css"
import About from './about'
import Intro from './intro'
import Projects from './projects'
// import {Link} from 'react-router-dom'

const Navbar = ({children}) => {
  return (
   <section className='mainNav'>
    <section className='navbar'>
     
      <div  className='navInfo'>
        
          <ul>
            <li>INTRO</li>
            <li>PROJECTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        
      </div>
      




    </section>
    <section className='otherDetails'>
      <About/>

    </section>
    {/* <Intro/> */}
    </section>
  )
}

export default Navbar