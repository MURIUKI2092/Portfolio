import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import '../styles/contact.css';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };
  return (
    <div className='contactInfo'>
      <Typography sx={{ fontSize: 20,fontWeight:700,mt:5,ml: 40}}variant="h3" color="text.primary" gutterBottom>
          <span>Let's get in touch..</span>
        </Typography>
      <section className='Address'>
      <Box
      className='box'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 200,
          // bgcolor:"white"
          
        },
      }}
    >
      <Paper elevation={0} >
      <LocationOnIcon className='location'></LocationOnIcon>
      <Typography sx={{ fontSize: 20,fontWeight:600,mt:2,ml: 7}}variant="h3" color="text.primary" gutterBottom>
          Address
        </Typography>

        <Typography sx={{ mt:2,ml: 7}}variant="h6" component="div">
          Nairobi,Kenya
        </Typography>
      </Paper>
      </Box>
     
      <Box
      className='email'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 200,
          // bgcolor:"white"
          
        },
      }}
    >
      <Paper elevation={0} >
      <EmailIcon className='location'></EmailIcon>
      <Typography sx={{ fontSize: 20,fontWeight:600,mt:2,ml: 7}}variant="h3" color="text.primary" gutterBottom>
          Email
        </Typography>

        <Typography sx={{ mt:2,ml: 0}}variant="h6" component="div">
          muriukijames33@gmail.com
        </Typography>
      </Paper>
      
     
    </Box>
    <Box
      className='call'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 200,
          // bgcolor:"white"
          
        },
      }}
    >
      <Paper elevation={0} >
      <CallIcon className='location'></CallIcon>
      <Typography sx={{ fontSize: 20,fontWeight:600,mt:2,ml: 7}}variant="h3" color="text.primary" gutterBottom>
          Phone
        </Typography>

        <Typography sx={{ mt:2,ml: 3}}variant="h6" component="div">
          +254-745-362-174
        </Typography>
      </Paper>
      
     
    </Box>
      
      </section>
      {/* <section className='msgSection'> */}
      {/* <Typography sx={{ fontSize: 20,fontWeight:700,mt:5,ml: 40}}variant="h3" color="text.primary" gutterBottom>
          <span>Send me a message..</span>
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }} className="form">
            <TextField
              margin="normal"
              required
              
              id="email"
              label="Email Address"
              name="user-email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              
              name="user-name"
              label="name"
              type="name"
              id="name"
             
            />
            <TextField
              margin="normal"
              required
              
              name="message"
              label="message"
              type="message"
              id="message"
              
            />
           
            <Button
              type="submit"
               variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
            </Box>

      </section> */}

    </div>
  )
}

export default Contact