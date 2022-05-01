import { Box, Typography, useMediaQuery } from "@mui/material";
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
  
} from "react-scroll-motion";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import ProjectSamples from "./ProjectSamples";
import Contact from "./Contact";
import {useBlog} from "../../Context/DataContext"

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const ZoomUp = batch(Fade(0, 1), Move());

  //! mediaquery added 
  
  const Main = () => {
  const width1200 = useMediaQuery('(max-width:1200px)');
  useEffect(function updateTitle() { document.title = "Portfolio"; });
const {reactProjects}= useBlog()


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
            <span >
          <Typography variant="h2">
            PROJECTS
          </Typography>
          <Animator animation={ZoomUp}><ProjectSamples width1200={width1200} reactProjects={reactProjects} /></Animator>
              {/* <Animator animation={MoveOut(1000, 0)}><ProjectSamples width1200={width1200} /></Animator>
             {!width1200&& <Animator animation={MoveOut(-1000, 0)}><ProjectSamples width1200={width1200} /></Animator>} */}
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>CONTACT</span>
            <br />
            <span style={{ fontSize: "30px" }}>
              <Contact/>
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Box>
  );
};

export default Main;
