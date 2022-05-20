import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSession } from "../../Context/SessionContext";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const { updateUserProfile } = useSession();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const user = {
      displayName: data.get("displayName"),
      photoURL: data.get("photoURL"),
    };

    updateUserProfile(user.displayName, user.photoURL);
    navigate("/");
  };

  return (
    <Container>
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
          Update Profile
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          id="update"
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="displayName"
            label="Full Name"
            name="displayName"
            autoComplete="displayName"
            autoFocus
          />

          <TextField
            margin="normal"
            fullWidth
            id="photoURL"
            label="Photo URL"
            name="photoURL"
            autoComplete="photoURL"
          />

          <Button
            id="update"
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Update Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UserInfo;
