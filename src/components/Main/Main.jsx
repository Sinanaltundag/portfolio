import { Box, Container, Typography } from "@mui/material";
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
import { useBlog } from "../../Context/DataContext";
import { useCustomTheme } from "../../Context/ThemeContext";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const ZoomUp = batch(Fade(0, 1), Move());

const Main = () => {
  //! mediaquery added
  const { width1200 } = useCustomTheme();
  //! change page title
  useEffect(function updateTitle() {
    document.title = "Portfolio";
  });

  const { reactProjects, javascriptProjects, htmlCssProjects } = useBlog();

  return (
    <Box sx={{ backgroundColor: "background.main", color: "text.primary" }}>
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
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <Skills />
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
            <Box sx={{ display: "flex",}}>
              <Typography variant={`${width1200 ? "h4" : "h3"}`} sx={{writingMode: "vertical-rl", textOrientation: "upright"}}>
                PROJECTS
              </Typography>
              <div>
              <Animator animation={MoveOut(-1000, 0)}>
                <ProjectSamples
                  width1200={width1200}
                  title="React"
                  projects={reactProjects}
                />
              </Animator>
              <Animator animation={MoveOut(1000, 0)}>
                <ProjectSamples
                  width1200={width1200}
                  title="Javascript"
                  projects={javascriptProjects}
                />
              </Animator>
              {!width1200 && (
                <Animator animation={ZoomUp}>
                  <ProjectSamples
                    width1200={width1200}
                    title="Html & Css"
                    projects={htmlCssProjects}
                  />
                </Animator>
              )}
              </div>
            </Box>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Animator animation={Zoom(2, 1)}>
            <Box sx={{ display: "flex",}}>
              <Typography variant={`${width1200 ? "h4" : "h3"}`}  sx={{writingMode: "vertical-rl", textOrientation: "upright"}}>
                CONTACT
              </Typography>
              <Contact />
              </Box>
            </Animator>
          </Container>
        </ScrollPage>
      </ScrollContainer>
    </Box>
  );
};

export default Main;
