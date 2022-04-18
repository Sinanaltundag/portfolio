import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container, Grid, Paper, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import reactSvg from "../../assets/svg/react-2.svg"
import sassSvg from "../../assets/svg/sass-1.svg"
import { useState } from 'react';
import SkillList from './mainComponents/SkillList';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Skills = ({width1200}) => {
  const [coor, setCoor] = useState([])
  
  const handleMove =(e)=>{
  setCoor([-e.screenX/100, -e.screenY/100])
  }
  // const [scoor, setScoor] = useState([])


  return (
    <Grid container spacing={2} width="80vw" height="auto" sx={{overflowY:"auto",gridAutoFlow: "column"}}  onMouseMove={handleMove} >
    <Grid item md={12}>
    <Typography variant="h2" color="text.secondary">
      SKILLS
      </Typography>
    </Grid>
        {/* row height  equalized */}

    <Grid item lg={7} sm={12} sx={{display:"grid", alignItems:"stretch"}}>
      {/* <Item sx={ {height: '85%'}} > */}
      <Item sx={ {height: 'auto'}} >
      <Container >
      {/* <img src={svgs.ReactSvg} width="10px" alt="" /> */}
      <SkillList/>
      
       </Container>
      </Item>
    </Grid>
    
    <Grid item lg={5} sm={12} >
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea sx={{display: `${width1200?"flex":"inline"}` }}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%',  filter:`drop-shadow(  ${coor[0]}px ${coor[1]}px  5px rgba(0,0,0,0.5))`}}>
      
        <CardMedia
        sx={{ textShadow:"2px 2px 2px rgba(0,0,0)"}}
          component="svg"
          image={reactSvg}
          alt="react"
          width="140px"
        />
        <Typography variant="caption" color="text.secondary" fontSize="3rem">
      REACT
      </Typography>
        
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Frontend
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Most popular component based Javascript library for building efective and fast user interfaces.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item lg={5} sm={12} >
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea sx={{display: `${width1200?"flex":"inline"}` }}>
      <Box sx={{display: 'flex', padding: "15px", alignItems: 'center', justifyContent: 'space-evenly', width: '100%',  filter:`drop-shadow(  ${coor[0]}px ${coor[1]}px  5px rgba(0,0,0,0.5))`}}>
      
        <CardMedia
        sx={{ textShadow:"2px 2px 2px rgba(0,0,0)"}}
          component="svg"
          // height="165px"
          image={sassSvg}
          alt="sass"
          width="200px"
        />
        <Typography variant="h4" color="text.secondary" fontSize="3rem">
      SASS
      </Typography>
        
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Styling
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Most popular styling language used with most of libraries.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    {/* row height  equalized */}
    <Grid item lg={7} sm={12} sx={{display:"grid", alignItems:"stretch"}}>
      {/* <Item sx={ {height: '85%'}}> */}
      <Item >
      <SkillList/>
      </Item>
    </Grid>
  </Grid>
  )
}

export default Skills