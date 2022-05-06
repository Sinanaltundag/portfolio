import {
  Avatar,
  Badge,
  Button,
  Container,
  createTheme,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PhoneIcon from "@mui/icons-material/Phone";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import React, { useRef } from "react";
import avatar from "../../assets/avatar2.jpg";
import { useCustomTheme } from "../../Context/ThemeContext";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { GitHub, LinkedIn } from "@mui/icons-material";

//!create theme for single component (I think it is not necessary but for boilerplate)
const contactFont = createTheme({
  typography: {
    fontFamily: ["Exo", "Girassol", '"Permanent Marker"', "Roboto"].join(","),
  },
});
const formFont = createTheme({
  typography: {
    fontFamily: ['"Permanent Marker"', "Exo", "Girassol", "Roboto"].join(","),
  },
});

//! styled mui component
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1565C0",
    color: "#1565C0",
    boxShadow: `0 0 2px 3px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(1.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(4.4)",
      opacity: 0,
    },
  },
}));

const Contact = () => {
  const { width1200 } = useCustomTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_emailServiceId,
        process.env.REACT_APP_emailTemplateId,
        form.current,
        process.env.REACT_APP_emailPublicKey
      )
      .then(
        (result) => {
          form.current.reset();
          toast("Your message has been sent successfully");
        },
        (error) => {
          toast(error.text);
        }
      );
  };
  return (
    <Box
      sx={{ display: `${!width1200 && "flex"}`, gap: 3 }}
      className="contact"
    >
      <ThemeProvider theme={formFont}>
        <Box
          component="form"
          ref={form}
          sx={{
            "& .MuiTextField-root": { m: 1, maxWidth: 400 },
            backgroundColor: "#A6A6A6",
            padding: 3,
            borderRadius: 3,
            boxShadow: "0 0 3px 5px #BF9663 inset,0 0 6px 5px #ffffff ",
            marginBottom: 3,
          }}
          noValidate
          autoComplete="off"
          onSubmit={sendEmail}
        >
          <div>
            <TextField
              required
              type="text"
              name="fullname"
              id="outlined-required"
              label="Name"
              placeholder="Enter your name..."
              fullWidth
            />
            <TextField
              required
              type="email"
              name="email"
              id="outlined"
              label="Email"
              placeholder="Enter your email address..."
              fullWidth
            />

            <TextField
              id="flex-textarea"
              label="Subject"
              name="subject"
              multiline
              maxRows={4}
              helperText="Feel free to ask about everything."
              fullWidth
            />

            <TextField
              id="standard-multiline-static"
              label="Your Message"
              name="message"
              multiline
              rows={4}
              variant="standard"
              fullWidth
            />
            <Button fullWidth type="submit" color="warning">
              <Typography variant="h5">Send</Typography>
            </Button>
          </div>
        </Box>
      </ThemeProvider>
      <ThemeProvider theme={contactFont}>
        <Container
          sx={{
            backgroundColor: "",
            padding: 3,
            borderRadius: 3,
            boxShadow: "0 0 3px 5px #BF9663 inset,0 0 6px 5px #ffffff ",
            marginBottom: 3,
          }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Remy Sharp"
              src={avatar}
              sx={{ width: 150, height: 150, paddingBottom: 3 }}
            />
          </StyledBadge>
          <Typography variant="h5" noWrap paragraph gutterBottom sx={{}}>
            <ContactMailIcon /> peykani@gmail.com{" "}
          </Typography>
          <Typography variant="h5" noWrap paragraph gutterBottom>
            <PhoneIcon /> +90 543 654 2460{" "}
          </Typography>
          <Typography variant="h5" noWrap paragraph gutterBottom>
            <MyLocationOutlinedIcon /> Trabzon / TURKEY{" "}
          </Typography>
          <Container>
            <Button
              href={"https://www.linkedin.com/in/sinan-altundag/"}
              target="_blank"
              color="warning"
            >
              <LinkedIn sx={{ fontSize: "3rem" }} />
            </Button>
            <Button
              href={"https://github.com/Sinanaltundag"}
              target="_blank"
              color="warning"
            >
              <GitHub sx={{ fontSize: "3rem" }} />
            </Button>
          </Container>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Contact;
