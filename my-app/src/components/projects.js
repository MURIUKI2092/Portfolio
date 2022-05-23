import React from 'react'
import "../styles/projects.css"
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
const Projects = () => {
  return (
    <div className='projects'>
       <Card sx={{ width: 800,height:250,borderLeft:"10px solid gold", }}  className="card">
      <CardContent>
        <Typography sx={{ fontSize: 20,fontWeight:600 }}variant="h3" color="text.primary" gutterBottom>
          Personal Portfolio
        </Typography>
        <Typography variant="h6" component="div">
          <strong>Technologies</strong>:   ReactJs
        </Typography>
        <Typography variant="h6" component="div">
         <strong> Description</strong>:   My personal portfolio with a collection of all my work and achievements.
        </Typography>
        <Typography variant="h6" component="div">
          <strong>Role</strong>:   Front End Developer
        </Typography>
      </CardContent>
      <CardActions  className='projectIcons'>
        <CodeIcon className= "icons"  />
        <LinkIcon   className= "icons"/>
      </CardActions>
    </Card>
    <Card sx={{ width: 800,height:250,borderLeft:"10px solid gold", }}  className="card">
      <CardContent>
        <Typography sx={{ fontSize: 20,fontWeight:600 }}variant="h3" color="text.primary" gutterBottom>
          Personal Portfolio
        </Typography>
        <Typography variant="h6" component="div">
          <strong>Technologies</strong>:   ReactJs
        </Typography>
        <Typography variant="h6" component="div">
         <strong> Description</strong>:   My personal portfolio with a collection of all my work and achievements.
        </Typography>
        <Typography variant="h6" component="div">
          <strong>Role</strong>:   Front End Developer
        </Typography>
      </CardContent>
      <CardActions  className='projectIcons'>
        <CodeIcon className= "icons"  />
        <LinkIcon   className= "icons"/>
      </CardActions>
    </Card>
    <Card sx={{ width: 800,height:250,borderLeft:"10px solid gold", }}  className="card">
      <CardContent>
        <Typography sx={{ fontSize: 20,fontWeight:600 }}variant="h3" color="text.primary" gutterBottom>
          Personal Portfolio
        </Typography>
        <Typography variant="h6" component="div">
          <strong>Technologies</strong>:   ReactJs
        </Typography>
        <Typography variant="h6" component="div">
         <strong> Description</strong>:   My personal portfolio with a collection of all my work and achievements.
        </Typography>
        <Typography variant="h6" component="div">
          <strong>Role</strong>:   Front End Developer
        </Typography>
      </CardContent>
      <CardActions  className='projectIcons'>
        <CodeIcon className= "icons"  />
        <LinkIcon   className= "icons"/>
      </CardActions>
    </Card>
    <Card sx={{ width: 800,height:250,borderLeft:"10px solid gold", }}  className="card">
      <CardContent>
        <Typography sx={{ fontSize: 20,fontWeight:600 }}variant="h3" color="text.primary" gutterBottom>
          Personal Portfolio
        </Typography>
        <Typography variant="h6" component="div">
          <strong>Technologies</strong>:   ReactJs
        </Typography>
        <Typography variant="h6" component="div">
         <strong> Description</strong>:   My personal portfolio with a collection of all my work and achievements.
        </Typography>
        <Typography variant="h6" component="div">
          <strong>Role</strong>:   Front End Developer
        </Typography>
      </CardContent>
      <CardActions  className='projectIcons'>
        <CodeIcon className= "icons"  />
        <LinkIcon   className= "icons"/>
      </CardActions>
    </Card>
    </div>
      )
}

export default Projects