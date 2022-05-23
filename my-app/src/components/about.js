import React from 'react'
import Typography from '@mui/material/Typography';
import "../styles/about.css"
const About = () => {
  
  return (
    <div className='about'>
      <section className='aboutMe'>
      <Typography sx={{ fontSize: 20,fontWeight:600,width:100,borderBottom:"10px solid gold", }}variant="h3" color="text.primary" gutterBottom>
      About Me
        </Typography>
      {/* <span> <h4>About Me</h4></span> */}
      <Typography variant="h6" component="div"sx={{mt:10,mb:5,}}>
      <p>I’m a life long learner with professional experience as an active member of
           several distributed teams as a software engineer.
          My practical skills include front end web development, backend development,
           test-driven development, continuous integration, and deployment.</p>
        </Typography>
        
      </section>
      <section className='aboutSkills'>
      <Typography sx={{ fontSize: 20,fontWeight:600,width:55,borderBottom:"10px solid gold", }}variant="h3" color="text.primary" gutterBottom>
      Skills
        </Typography>
      {/* <span> <h4>Skills</h4></span> */}
      <Typography variant="h6" component="div"sx={{mt:10,mb:5}}>
      js,html,css git,PostgreSQL
        </Typography>
       
      
      </section>
      <section className='aboutExperience'>
      <Typography sx={{ fontSize: 20,fontWeight:600,width:110,borderBottom:"10px solid gold", }}variant="h3" color="text.primary" gutterBottom>
      Experience
        </Typography>
      {/* <span><h4>Experience</h4></span> */}
        
      </section>
      <section  className='aboutWants'>
      <Typography sx={{ fontSize: 20,fontWeight:600,width:200,borderBottom:"10px solid gold", }}variant="h3" color="text.primary" gutterBottom>
      What I'm looking for
        </Typography>
        {/* <span><h4>What I'm looking for</h4></span> */}
        <Typography variant="h6" component="div"sx={{mt:10,mb:5}}>
          
        <p>Time and opportunity to learn and apply emerging technologies.Time and opportunity to learn and apply emerging technologies.
                Company with a positive ethical stance.
                Direct engineering hands- on involvement.
                A company whose mission and values align with my goals of personal career improvement and progression.  </p>
        </Typography>
        
      </section>
      </div>
  )
}

export default About