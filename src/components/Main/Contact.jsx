import { Avatar, Badge, Container, createTheme, styled, TextField, ThemeProvider, Typography } from '@mui/material'
import { Box} from '@mui/system'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import React from 'react'
import avatar from "../../assets/avatar2.jpg" 


const contactFont = createTheme({
  typography: {
    fontFamily: [
      'Exo',
      'Girassol',
      '"Permanent Marker"',
      'Roboto'
       ].join(','),
  },
});
const formFont = createTheme({
  typography: {
    fontFamily: [
      '"Permanent Marker"',
      'Exo',
      'Girassol',
      'Roboto'
       ].join(','),
  },
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#1565C0',
    color: '#1565C0',
    boxShadow: `0 0 2px 3px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(1.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(4.4)',
      opacity: 0,
    },
  },
}));

const Contact = () => {
  return (
    <Box sx={{display: 'flex', gap:3}}>
    <ThemeProvider theme={formFont}>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
       backgroundColor:"#A1C7E0",
       padding:3, borderRadius:3,
        boxShadow:"0 0 3px 5px #0a4383 inset,0 0 6px 5px #ffffff " ,
        
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        type="text"
        name="fullname"
        id="outlined-required"
        label="Name"
        placeholder="Enter your name..."
      />
      <TextField
      required
        type="email"
        id="outlined"
        label="Email"
        placeholder="Enter your email address..."
      />

<TextField
          id="flex-textarea"
          label="Subject"
          multiline
          maxRows={4}
          helperText="Feel free to ask about everything."
          
        />
    
      <TextField
          id="standard-multiline-static"
          label="Your Message"
          multiline
          rows={4}
          variant="standard"
        />
    </div>
    </Box>
    </ThemeProvider>
    <ThemeProvider theme={contactFont}>
    <Container sx={{backgroundColor:"#A1C7E0", padding:3, borderRadius:3,boxShadow:"0 0 3px 5px #0a4383 inset,0 0 6px 5px #ffffff " ,  }}>
    <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
  <Avatar alt="Remy Sharp" src={avatar} sx={{width:150,height:150, paddingBottom: 3}} />
</StyledBadge>
      <Typography variant="h5" noWrap paragraph gutterBottom sx={{}}><ContactMailIcon/> peykani@gmail.com </Typography>
      <Typography variant="h5" noWrap paragraph gutterBottom><PhoneIcon/> +90 543 654 2460 </Typography>
      <Typography variant="h5" noWrap paragraph gutterBottom><MyLocationOutlinedIcon/> Trabzon / TURKEY </Typography>
    </Container>
    </ThemeProvider>
    </Box>
  )
}

export default Contact