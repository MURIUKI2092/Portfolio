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
     
      
      <a href='https://drive.google.com/file/d/1NUSK2J1u1vyTYjGC_mL-nHKYuxdXwmcB3LxB-074oOc/view?usp=sharing'>
        <span><span><SummarizeIcon className ="icons"/></span></span>
            </a>
        <a href='https://www.linkedin.com/in/james-muriuki-857a241b8/'>
        <span><LinkedInIcon className ="icons"/></span>
            </a>
        
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=+muriukijames33@gmail.com'>
        <span><EmailIcon className ="icons"/></span>
            </a>
            
            <a href='https://github.com/MURIUKI2092'>
            <span><GitHubIcon className ="icons"/></span>
            </a>
        
        

      </section>

    </div>
  )
}

export default Sidebar