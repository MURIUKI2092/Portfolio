import React from 'react'
import "../styles/intro.css"
import foto from "../images/bazuu.jpg"
const Intro = () => {
  return (
    <div className='Intro'>
      <div className='introDetails'>
      <span  className='introName'><h3>JAMES MURIUKI</h3></span>
      <span className="introRole"><p>Full Stack Software Developer</p></span>
      <span className='desc'><p> Hi, Am a Junior Software Engineer with a deeper passion in writing codes to assist and solve others problems. Skilled in Javascript, ReactJs, NodeJs,  MongoDB,PostgreSQL,
      Cascading Style Sheets (CSS) and HTML,Python
      , Django and Flask framework,.</p></span>
      </div>
      <div className='image'>
      {/* <img src={foto} alt="" /> */}
      </div>
       </div>
  )
}

export default Intro