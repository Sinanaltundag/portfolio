import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import HeaderBg from "../../assets/headerbg.jpg";
import { useCustomTheme } from "../../Context/ThemeContext";

const Header = () => {
  const { navbarHeight } = useCustomTheme();

  return (
    <Box
      sx={{
        width: "90vw",
        height: "90vh",
        textAlign: "start",
        backgroundImage: `url(${HeaderBg})`,
        backgroundSize: "cover",
        marginTop: `${navbarHeight}px`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        color: "primary.dark",
        textShadow:
          "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",
        boxShadow: "0px 0 25px 20px rgba(66, 66, 66, 0.8)",
        borderRadius: "50% 20% / 10% 40%;",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ padding: "100px" }}
      >
        <span>Hello Everybody!</span>
        <Typewriter
          options={{
            strings: ["sinan", "altundağ"],
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pasteString("👋 My name is Sinan")
              .pauseFor(1500)
              .pasteString("<br/>")
              .typeString("I'm a ⚛️Frontend Developer")
              .pauseFor(2500)
              .deleteChars(25)
              .typeString(" will be a Full Stack Developer soon 🔎")
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />
      </Typography>
    </Box>
  );
};

export default Header;
