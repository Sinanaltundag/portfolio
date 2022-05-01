import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import movieSm from "../../assets/react-movie-sm.jpg"

//! responsive component creating
// const RespImageListItem = styled(ImageListItem)(({ theme }) => ({
//   // padding: theme.spacing(2),

//   [theme.breakpoints.down('lg')]: {
//     backgroundColor: red[500],
//     gridColumn: 2,
//   },
//   [theme.breakpoints.up('lg')]: {
//     backgroundColor: blue[500],
//     gridColumn: 4,
    
//   },
 
// }));


export default function ProjectSamples({width1200,reactProjects}) {

  return (
    <ImageList sx={{  }}>
      <ImageListItem key="Subheader" cols={width1200?2:4} >
        <ListSubheader component="div" sx={{backgroundColor:"primary.dark", color:"white", fontSize:25,  }} >React</ListSubheader>
      </ImageListItem>
      {reactProjects.map((item) => (
        <ImageListItem key={item.img} sx={{ cursor:"pointer"}}  >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
   {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },

];
