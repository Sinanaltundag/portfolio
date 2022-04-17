import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useGlobalContext } from '../../Context/SessionContext';
import { useNavigate,Link} from 'react-router-dom';
import AvatarImg from "../../assets/avatar.jpg";
import { createUser } from '../../auth/firebase';





// const theme = createTheme();

export default function SignIn() {


  const {signIn, setSignIn, setUser, user}= useGlobalContext()
const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    
    
      const data = new FormData(event.currentTarget);
createUser(data.get("email"),data.get("password"))



navigate("/SignIn")

    
  };

  return (
    // <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {
          //kullanıcı girişi yapıldıysa logout sayfası
          
          signIn? (
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
<Avatar sx={{ m: 1, bgcolor: 'secondary.main', width:"80px", height:"80px" }} src={AvatarImg}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Hello {user.email}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography  variant="h6">
            You are logged in. 
          </Typography>
            
            <Button
            id='logout'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log Out
            </Button>
       
          </Box>
</Box>


        ):(
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} id="signin" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              autoComplete="fullName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Password Confirm"
              type="password"
              id="password2"
              autoComplete="current-password"
            />
           
            <Button
            id="signUp"
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignIn" variant="body1">
                  {"Have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box></Box>
        ) }
  
       
      </Container>
    // </ThemeProvider>
  );
}