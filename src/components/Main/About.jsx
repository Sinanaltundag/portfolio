import { Box, CardContent, CardMedia, createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import aboutGif from "../../assets/AboutGif.gif";
import { useCustomTheme } from "../../Context/ThemeContext";

const About = () => {
  //! custom breakpoints for good responsive design
  const { width1000, width800, width600 } = useCustomTheme();

  const aboutFont = createTheme({
    typography: {
      fontFamily: ["Exo", "Girassol", '"Permanent Marker"', "Roboto"].join(","),
    },
  });

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
      fixed={false}
    >
      <Box
        style={{
          padding: `${width800 ? "2rem" : "5rem"}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: `${!width1000 && "flex"}`,
            borderRadius: "10px 100px / 120px",
            boxShadow: "0 0 5px 3px #BF9663",
            backgroundColor: "#000000",
            color: "primary.light",
            padding: "10px",
          }}
        >
          {!width800 && (
            <CardMedia
              sx={{
                width: "auto",
                height: "370px",
                objectFit: "cover",
                display: "flex",
                justifyContent: "center",
                filter: "hue-rotate(300deg)",
                borderRadius: 20,
              }}
              component="img"
              image={aboutGif}
              alt="Work Hard"
            />
          )}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
            <ThemeProvider theme={aboutFont}>
              <Typography gutterBottom variant="h4" component="div">
                ABOUT
              </Typography>
              <Typography variant={`${width600 ? "h6" : "h5"}`} >
                A curious developer with high learning skills and fast adapt to
                new technologies. Persistant to overcome challanges, search
                different methods to make effective solutions. Care to visual,
                algorithmic and coding design like an art. Search different
                sources and algorithms to make most efficient products. Friendly
                management skills and adapt new team members, Not only learn
                himself, willing to teach for team improvement. Curious to learn
                various technologies, tools(Sass, Bootstrap, Github, Vscode,
                etc.), frameworks&libraries(React, Bootstrap, Mui). IT
                Experience about 20 years as Team Manager at IT departmant and
                businesslike study for last eighteen months on Fullstack
                Development.
              </Typography>
              </ThemeProvider>
            </CardContent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
