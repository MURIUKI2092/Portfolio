import React from 'react'
import Typography from '@mui/material/Typography';
import "../styles/about.css"
import Button from '@mui/material/Button';

const skills=[
  "Javascript","ReactJs","NodeJs","MongoDb","Python","Html","Css","Git","Linux"
]
const mySkills = skills.map((skill)=>{
  return(
    <Button variant="outlined"sx={{ padding:"15px",marginLeft:"10px",marginBottom:"5px"}}>{skill}</Button>
  )
})
const About = () => {
  
  return (
    <div className='about'>
      <section className='aboutMe'>
      <Typography sx={{ fontSize: 20,fontWeight:600,width:100,borderBottom:"10px solid gold", }}variant="h3" color="text.primary" gutterBottom>
      About Me
        </Typography>
      {/* <span> <h4>About Me</h4></span> */}
      <Typography variant="h6" component="div"sx={{mt:6,mb:5,width:300}}>
      <p>I’m a life long learner  junior developer with   several dedicated projects showcasing different skills.
          My practical skills include front end web development, backend development, problem solving and communication skills.</p>
        </Typography>
        
      </section>
      <section className='aboutSkills'>
      <Typography sx={{ fontSize: 20,fontWeight:600,width:55,borderBottom:"10px solid gold", }}variant="h3" color="text.primary" gutterBottom>
      Skills
        </Typography>
      {/* <span> <h4>Skills</h4></span> */}
     {mySkills}
       
      
      </section>
      <section className='aboutExperience'>
      <Typography sx={{ fontSize: 20,fontWeight:600,width:110,borderBottom:"10px solid gold", }}variant="h3" color="text.primary" gutterBottom>
      Experience
        </Typography>
        <Typography variant="h6" component="div"sx={{mt:6,mb:5,width:300}}>
      <p>Having worked in different personal projects, I have:
        <li>Worked on frontend development creating user friendly interfaces.</li>
        <li>worked on backend development and created the logic for the Apps</li>
        <li>Generated required Apis which I incorporated in my FrontEnd apps</li>
        <li>written some  unit tests for some of the backends</li>
      </p>
        </Typography>
      
        
      </section>
      <section  className='aboutWants'>
      <Typography sx={{ fontSize: 20,fontWeight:600,width:200,borderBottom:"10px solid gold", }}variant="h3" color="text.primary" gutterBottom>
      What I'm looking for
        </Typography>
        {/* <span><h4>What I'm looking for</h4></span> */}
        <Typography variant="h6" component="div"sx={{mt:6,mb:5,width:300}}>
          
        <li>Time and opportunity to learn and apply emerging technologies.</li>
        <li>Company with a positive ethical stance.</li>
        <li> A company whose mission and values align with my goals of personal career improvement and progression</li>
        <li>Direct engineering hands- on involvement.</li>
                
        </Typography>
        
      </section>
      </div>
  )
}

export default About