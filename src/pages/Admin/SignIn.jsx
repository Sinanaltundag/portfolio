import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSession } from "../../Context/SessionContext";
import { useNavigate, Link } from "react-router-dom";
import AvatarImg from "../../assets/avatar.jpg";
import ResetPassword from "./AdminComponents/ResetPassword";
import { useCustomTheme } from "../../Context/ThemeContext";
import { IconButton } from "@mui/material";

// const theme = createTheme();

export default function SignIn() {
  const { userInfo, login, loginWithGoogle, logout } = useSession();
  const navigate = useNavigate();
  const { navbarHeight } = useCustomTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.id === "signin") {
      const data = new FormData(event.currentTarget);
      const userLoggedIn = {
        email: data.get("email"),
        password: data.get("password"),
      };
      login(userLoggedIn.email, userLoggedIn.password);
      navigate("/");
    } else {
      navigate("/");
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
    <Container
      component="main"
      maxWidth="xs"
      sx={{ paddingTop: `${navbarHeight}px` }}
    >
      <CssBaseline />
      {
        //kullanıcı girişi yapıldıysa logout sayfası

        userInfo ? (
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "secondary.main",
                width: "80px",
                height: "80px",
              }}
              src={AvatarImg}
            ></Avatar>
            <Typography component="h1" variant="h5">
              Hello {userInfo.email}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Typography variant="h6">You are logged in.</Typography>

              <Button
                id="logout"
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
        ) : (
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              id="signin"
              noValidate
              sx={{ mt: 1 }}
            >
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
                <Grid item sm>
                  <ResetPassword />
                </Grid>
                <Grid item sm>
                  <Link to="/SignUp" variant="body2">
                    <IconButton size="small" aria-label="like">
                      Don't have an account? Sign Up
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )
      }
    </Container>
  );
}
