import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AccountCircle } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {  Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';



// import CommentBox from './CommentBox';
import { useSession } from '../../Context/SessionContext';

export default function BlogCard({blog}) {
  let { title,date, img, like, detail, author} = blog
  const {userInfo} = useSession()
  const navigate = useNavigate();
  const handleClick =()=>{
      navigate("/details",{state: {blog} })
   
   
  }
const handleLiked =()=>{
  if (userInfo) {
    // like?like.includes(userInfo?.email)||EditBlog({...blog, like:[...like,userInfo?.email]}):EditBlog({...blog, like:[userInfo?.email]})
    
  }
}


  return (
    <Card sx={{ maxWidth: 345, margin:"auto" }}>
    <Box onClick={handleClick} sx={{cursor: "pointer"}}>
      <CardMedia
        component="img"
        alt={title}
        height="200"
        sx={{objectFit:"scale-down"}}
        image={img}
        
      />
      </Box>
      <CardContent>
        <Typography  variant="h5" component="div" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span>{date}</span><br />
        
          {detail?.length>80?detail?.substring(0, 80)+"...":detail}
        </Typography>
        <Typography mt={3} fontSize={22}>
        <AccountCircle sx={{marginRight:1}}  variant=""/> <span>{author}</span> 
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton size='small' aria-label="like" onClick={handleLiked}>
      <FavoriteIcon color="secondary" sx={{marginRight:1}}/> <span color="primary">{like?.length||0}</span>
      </IconButton>
     
      {/* <CommentBox blog={blog} currentUser={userInfo}/> */}
      </CardActions>
    </Card>
  );
}
