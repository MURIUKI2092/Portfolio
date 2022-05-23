import React from 'react'
import "../styles/photo.css"
import foto from "../images/bazuu.jpg"
const Photo = () => {
  return (
    <div className='photo'>
      <img src={foto} alt="" />
    </div>
  )
}

export default Photo