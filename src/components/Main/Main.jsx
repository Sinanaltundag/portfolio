import { Box } from '@mui/material';
import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Header from './Header';
import About from './About';
import Skills from './Skills';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());



const Main = () => {
  return (
    <Box sx={{backgroundColor:"grey.600", color:"text.primary"}} >
        <ScrollContainer>
  <ScrollPage page={0}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
    
      <Header/>

  
    </Animator>
  </ScrollPage>
  <ScrollPage page={1}>
    <Animator animation={ZoomInScrollOut}>
      <About/>
    </Animator>
  </ScrollPage>
  <ScrollPage page={2}>
    <Animator animation={FadeUp}>
      <Skills/>
    </Animator>
  </ScrollPage>
  <ScrollPage page={3}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage page={4}>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
    </Animator>
  </ScrollPage>
</ScrollContainer>
    </Box>
  )
}

export default Main