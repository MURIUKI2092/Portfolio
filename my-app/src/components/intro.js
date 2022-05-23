import React from 'react'
import "../styles/intro.css"
import foto from "../images/bazuu.jpg"
const Intro = () => {
  return (
    <div className='Intro'>
      <div className='introDetails'>
      <span  className='introName'><h3>James Muriuki</h3></span>
      <span className="introRole"><p>Full Stack Software Developer</p></span>
      <span className='desc'><p> Hi, Am a Junior Software Engineer with a deeper passion<br>
      </br> in writing codes to assist and solve others problems. 
      <br/>Skilled in Javascript, ReactJs, Node, PostgreSQL, MongoDB,
      <br></br> Cascading Style Sheets (CSS) and HTML,<br/> Python
      , Django and Flask framework,.</p></span>
      </div>
      <div className='image'>
      {/* <img src={foto} alt="" /> */}
      </div>
       </div>
  )
}

export default Intro