import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import aboutGif from "../../assets/AboutGif.gif"

const About = () => {
  return (
      <Box sx={{backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100vw", height: "100vh", display: "flex", justifyContent: "center"}} fixed={false}>
    <Box style={{backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "5rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
   <Card sx={{ display: "flex",borderRadius: "100px", boxShadow: "0 0 5px 3px green"}}>
      <CardMedia sx={{width:"auto", height:"370px", objectFit:"cover", display: "flex", justifyContent: "center"}}
        component="img"
        // height="400"
        
        image={aboutGif}
        alt="Work Hard"
      />
      <Box sx={{display: "flex", flexDirection: "column", }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          ABOUT
        </Typography>
        <Typography variant="h5" color="text.secondary">
        A curious developer with high learning skills and fast adapt to new technologies. Persistant to overcome challanges, search different methods to make effective solutions. Care to visual, algorithmic and coding design like an art.  Search different sources and algorithms to make most efficient products. Friendly management skills and adapt new team members, Not only learn himself, willing to teach for team improvement. Curious to learn various technologies, tools(Sass, Bootstrap, Github, Vscode, etc.), frameworks&libraries(React, Bootstrap, Mui). IT Experience  about 20 years as Team Manager at IT departmant and businesslike study for last eighteen months on Fullstack Development.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Share</Button>
        <Button size="large">Learn More</Button>
      </CardActions></Box>
    </Card>

    </Box>
    </Box>
  )
}

export default About