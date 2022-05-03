import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  Zoom,
  
} from "react-scroll-motion";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import ProjectSamples from "./ProjectSamples";
import Contact from "./Contact";
import {useBlog} from "../../Context/DataContext"
import { useCustomTheme } from "../../Context/ThemeContext";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const ZoomUp = batch(Fade(0, 1), Move());

  //! mediaquery added 
  
  const Main = () => {
  const {width1200} = useCustomTheme();
  useEffect(function updateTitle() { document.title = "Portfolio"; });
const {reactProjects, javasicriptProjects, htmlCssProjects}= useBlog()


  return (
    <Box sx={{ backgroundColor: "grey.600", color: "text.primary" }}>
      <ScrollContainer snap="proximity">
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Header />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <About />
          </Animator>
        </ScrollPage>
        <ScrollPage page={2} >
          <Animator animation={FadeUp}>
            <Skills width1200={width1200}/>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div
            style={{

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box >
          <Typography variant={`${width1200?"h4":"h3"}`} >
            PROJECTS
          </Typography>
          <Animator animation={MoveOut(-1000, 0)} ><ProjectSamples width1200={width1200} projects={reactProjects} sx={{ cursor: "pointer"}} /></Animator>
              <Animator animation={MoveOut(1000, 0)}><ProjectSamples width1200={width1200} projects={javasicriptProjects}/></Animator>
             {!width1200&& <Animator animation={ZoomUp} ><ProjectSamples width1200={width1200} projects={htmlCssProjects}/></Animator>}
            </Box>
          </div>
        </ScrollPage>
        <ScrollPage page={4} >
        <Container
            style={{

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
          <Animator animation={Zoom( 2, 1 )}>
          <Typography variant={`${width1200?"h4":"h3"}`} >
            Contact
          </Typography>
              <Contact/>
          </Animator>
          </Container>
        </ScrollPage>
      </ScrollContainer>
    </Box>
  );
};

export default Main;
