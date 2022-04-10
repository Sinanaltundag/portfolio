import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import reactSvg from "../../assets/svg/react-2.svg"
import { useState } from 'react';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Skills = () => {
  const [coor, setCoor] = useState([])
  
  const handleMove =(e)=>{
  setCoor([-e.screenX/100, -e.screenY/100])
  }
  const [scoor, setScoor] = useState([])
  

  return (
    <Grid container spacing={2} width="80vw" height="80vh" sx={{overflowY:"auto"}}  onMouseMove={handleMove} >
    <Grid item md={12}>
    <Typography variant="h2" color="text.secondary">
      SKILLS
      </Typography>
    </Grid>
    <Grid item md={7}>
      <Item>React, Hooks, Styled Components, Material UI, Custom Hooks, </Item>
    </Grid>
    <Grid item md={5}>
    <Card sx={{ minWidth: 345 }}>
      <CardActionArea>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%',  filter:`drop-shadow(  ${coor[0]}px ${coor[1]}px  5px rgba(0,0,0,0.5))`}}>
      
        <CardMedia
        sx={{padding: '5px', textShadow:"2px 2px 2px rgba(0,0,0)"}}
          component="svg"
          height="150"
          image={reactSvg}
          alt="react"
          width="140px"
        />
        <Typography variant="h4" color="text.secondary" fontSize="3rem">
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
    <Grid item md={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item md={8}>
      <Item>md=8</Item>
    </Grid>
  </Grid>
  )
}

export default Skills