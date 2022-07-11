import React from 'react'
import "../styles/projects.css"
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
const myProjects=[
{
  title:"Personal Portfolio",
  technologies:"ReactJs",
  description:"My personal portfolio with a collection of all my work and achievements",
  role:"Front End Developer",
  link:"https://github.com/MURIUKI2092/Portfolio",
  web:""
},
{
  title:"AirBnb House-site",
  technologies:"ReactJs,",
  description:"The AirBnb house site helps individuals book houses prior to visiting a certain location. The user also can decide to be a host and add a house to the site with it's relevant data",
  role:"FrontEnd Developer",
  link:"https://github.com/MURIUKI2092/AirBnb-React",
  web:""
},
{
  title:"AirBnb House-site Backend",
  technologies:"NodeJs,MongoDb",
  description:"The backend server for AirBnb House-site",
  role:"Backend Developer",
  link:"https://github.com/MURIUKI2092/AirBnb-Node",
  web:""
},
{
  title:"Social Media Haven Backend",
  technologies:"NodeJs,MongoDb",
  description:"A Social platform for the creative at heart which inspires a community of like minded authors to foster inspiration and innovation by leveraging the modern web",
  role:"BackEnd Developer",
  link:"https://github.com/MURIUKI2092/Social-Media-Haven",
  web:""
},
{
  title:"BlogSite",
  technologies:"ReactJs",
  description:"A Social platform which enables other developers share their ideas,  favorite stacks and  other cool stuffs like advices to other developers",
  role:"Frontend Developer",
  link:"https://github.com/MURIUKI2092/BlogSite-React",
  web:""
},
{
  title:"BlogSite Backend",
  technologies:"NodeJs,MongoDb",
  description:"A backend server for the BlogSite ",
  role:"Backend Developer",
  link:"https://github.com/MURIUKI2092/Blogsite-Backend-Node",
  web:""
},
{
  title:"Online-Bus Reservation System",
  technologies:"ReactJs",
  description:"It enables individuals to book vehicles from the comfort of their houses reducing congestion in the booking stage.it utilizes a smooth user interface",
  role:"FrontEnd  Developer",
  link:"https://github.com/MURIUKI2092/Bus-Reservation-System",
  web:""
},
{
  title:"Online-Bus Reservation System Backend",
  technologies:"NodeJs,MongoDb",
  description:"The backend  server of the  online bus reservation",
  role:"Backend  Developer",
  link:"https://github.com/MURIUKI2092/Blogsite-Backend-Node",
  web:""
},
{
  title:"E-Commerce system",
  technologies:",NodeJs,MongoDb",
  description:"It is a backend project which gives required Apis  for an e-commerce  frontend project",
  role:"BackEnd Developer",
  link:"https://github.com/MURIUKI2092/E-commerce-Node-Backend",
  web:""
},


]
const arr = myProjects.map((project)=>{
  return(
    <Card sx={{ width: 800,height:230,borderLeft:"10px solid gold",padding:"20px" }}  className="card">
      <CardContent>
        <Typography sx={{ fontSize: 20,fontWeight:600 }}variant="h3" color="text.primary" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="h6" component="div">
          <strong>Technologies</strong>:   {project.technologies}
        </Typography>
        <Typography variant="h6" component="div">
         <strong> Description</strong>:   {project.description}.
        </Typography>
        <Typography variant="h6" component="div">
          <strong>Role</strong>:   {project.role}
        </Typography>
      </CardContent>
      
      <CardActions  className='projectIcons'>
      <a  href={project.link}><CodeIcon className= "icons"  /></a>
      <a  href={project.web}><LinkIcon   className= "icons"/></a>
      
      </CardActions>
    </Card>

  )
})
const Projects = () => {
  return (
    <div className='projects'>
       
   {arr}
    </div>
      )
}

export default Projects