import React from 'react'
import Router from '../router'
import "../styles/navbar.css"
import { NavLink, Link} from 'react-router-dom';

const Navbar = ({children}) => {
  return (
   <section className='mainNav'>
    <section className='navbar'>
     
      <div  className='navInfo'>
        
          <ul>
          <Link  to='/' className='topListItem'>INTRO</Link>
          <Link  to='/projects' className='topListItem'>PROJECTS</Link>
          <Link  to='/about' className='topListItem'>ABOUT</Link>
          <Link  to='/contact' className='topListItem'>CONTACT</Link>
           
          </ul>
        
      </div>
      




    </section>
    <section className='otherDetails'>
      {children}

    </section>
    {/* <Intro/> */}
    </section>
  )
}

export default Navbar