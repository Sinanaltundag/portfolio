import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AccountCircle } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

// import CommentBox from './CommentBox';
import { useSession } from "../../../Context/SessionContext";
import CommentBox from "./CommentBox";
import { useBlog } from "../../../Context/DataContext";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function BlogCard({ blog, activeTopic }) {
  let { title, date, like, detail, author, rating } = blog;
  let averageRating = useRef(5)
  if (rating) {
    let rateList = rating.map(item=>Object.values(item))
    averageRating.current = rateList.reduce((a,b) =>+a + +b)/rateList.length;
    
  }
  const [rate, setRate] = useState(averageRating.current);
  const { userInfo } = useSession();
  const { editBlog } = useBlog();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/details", { state: { blog } });
  };
  const handleLiked = () => {
    if (userInfo) {
      // if (like) {
      //   if (like.includes(userInfo?.email)) {
      //     editBlog(
      //       { ...blog, like: like.filter(email=> (email!==userInfo.email)) },
      //       activeTopic
      //     );
      //   } else {
      //     editBlog({ ...blog, like: [...like, userInfo?.email] }, activeTopic);
      //   }
      //   console.log("first");
      // } else {
      //   editBlog({ ...blog, like: [userInfo?.email] }, activeTopic);
      // }
      //! nested ternary same as above
      like?like.includes(userInfo?.email)?editBlog({...blog, like:like.filter(email=> (email!==userInfo.email))},activeTopic):editBlog({...blog, like:[...like,userInfo?.email]},activeTopic):editBlog({...blog, like:[userInfo?.email]},activeTopic)
    }
  };

  const handleRate = (event, newValue) => {
    setRate(newValue);
    
    if (userInfo) {
      if (rating) {
        console.log(userInfo)
        const result= rating.filter(item=>(Object.keys(item)[0]===userInfo.uid) )
        //! rate yapan kullanıcı uid key : rate value olduğu için keyler içinde daha önce oy kullanmışmı kontrolü
        if (result.length>0) {
          toast("You rate this blog before")
        } else {
              editBlog({...blog, rating:[...rating,{[userInfo?.uid]:newValue}]},activeTopic)
            }
            
            
          } else {
            editBlog({ ...blog, rating:[{ [userInfo?.uid]:newValue}] }, activeTopic);
          }

        }

// like?like.includes(userInfo?.email)||editBlog({...blog, rating:[...rating,userInfo?.email]},activeTopic):editBlog({...blog, rating:[userInfo?.email]},activeTopic)
  };

  return (
    <Card raised sx={{ maxWidth: 345, margin: "auto", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      {/* <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
        <CardMedia
          component="img"
          alt={title}
          height="200"
          sx={{ objectFit: "scale-down" }}
          image={img}
        />
      </Box> */}
      <CardContent onClick={handleClick} sx={{ cursor: "pointer" }}>
        <Typography variant="h5" component="div" color="primary" sx={{ textOverflow:"ellipsis", whiteSpace: "nowrap", overflow: "hidden", textTransform: 'capitalize' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom sx={{ textOverflow:"ellipsis", whiteSpace: "nowrap", overflow: "hidden" }} >
          {date}
          <br />

        </Typography>
        <Typography variant="body1" color="text" sx={{}}>
          {detail?.length > 80 ? detail?.substring(0, 80) + "..." : detail}
        </Typography>
        <Typography mt={3} fontSize={22}>
          <AccountCircle sx={{ marginRight: 1 }} variant="" />{" "}
          <span>{author}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small" aria-label="like" onClick={handleLiked}>
          <FavoriteIcon color="secondary" sx={{ marginRight: 1 }} />{" "}
          <span color="primary">{like?.length || 0}</span>
        </IconButton>

        <CommentBox blog={blog} userInfo={userInfo} activeTopic={activeTopic} />
        <Rating
          name="rating"
          value={rate}
          precision={0.5}
          onChange={(event, newValue) => handleRate(event, newValue)}
        />{" "}
          <span color="primary">Rates: {rating?.length || 0}</span>
      </CardActions>
    </Card>
  );
}
