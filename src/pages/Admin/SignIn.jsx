
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  useSession } from '../../Context/SessionContext';
import { useNavigate,Link} from 'react-router-dom';
import AvatarImg from "../../assets/avatar.jpg";
// import { login, loginWithGoogle, logout } from '../../auth/firebase';






const theme = createTheme();

export default function SignIn() {

const {userInfo, login, loginWithGoogle, logout} = useSession()
const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    if (event.target.id==="signin") {
      const data = new FormData(event.currentTarget);
    // setUser({email:data.get("email"),avatar:"../../assets/avatar.jpg"})
    // setSignIn(true)
    const userLoggedIn = {
      email: data.get('email'),
      password: data.get('password'),
    }
    login(userLoggedIn.email, userLoggedIn.password)
    // sessionStorage.setItem("user", JSON.stringify(userLoggedIn))
navigate("/")
    } else {
      navigate("/")

    }
  };

  const handleWithGoogle = () => {
    loginWithGoogle();
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {
          //kullanıcı girişi yapıldıysa logout sayfası
          
          userInfo? (
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
            Hello {userInfo.email}
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
              onClick={handleLogout}

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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} id="signin" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            id="login"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
                type="button"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleWithGoogle}
              >
                <Typography variant="button" mr={2} fontWeight="bold">
                  with Google
                </Typography>
              </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box></Box>
        ) }
  
       
      </Container>
    </ThemeProvider>
  );
}