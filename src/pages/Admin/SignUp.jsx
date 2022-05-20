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

import { toast } from "react-toastify";
import ResetPassword from "./AdminComponents/ResetPassword";
import { IconButton } from "@mui/material";
import { useCustomTheme } from "../../Context/ThemeContext";

export default function SignUp() {
  const { userInfo, createUser, loginWithGoogle, logout } = useSession();
  const navigate = useNavigate();
  const { navbarHeight } = useCustomTheme();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("password2"),
    };
    if (user.password === user.confirmPassword && user.password.length > 5) {
      createUser(user.email, user.password);
      navigate("/UserInfo");
    } else {
      toast(
        "Your password must be at least 6 characters and must match 'confirm password' "
      );
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
                type="button"
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
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              id="signup"
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
                  <Link to="/SignIn" variant="body2">
                    <IconButton size="small" aria-label="like">
                      Have an account? Sign In
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
