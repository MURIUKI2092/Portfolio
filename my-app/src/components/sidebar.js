import React from 'react'
import '../styles/sidebar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import SummarizeIcon from '@mui/icons-material/Summarize';

const Sidebar = () => {
  return (
    <div className='sideBar'>
      <section className='nameSec'>
        <span><h3>James <br></br>Muriuki</h3></span>
      </section>

      <section className='details'>
      <span><SummarizeIcon className ="icons"/></span>
        <span><LinkedInIcon className ="icons"/></span>
        <span><EmailIcon className ="icons"/></span>
        <span><GitHubIcon className ="icons"/></span>

      </section>

    </div>
  )
}

export default Sidebar