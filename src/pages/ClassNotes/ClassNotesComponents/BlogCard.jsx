import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AccountCircle, Share } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, Popover, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../../Context/SessionContext";
import CommentBox from "./CommentBox";
import { useBlog } from "../../../Context/DataContext";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export default function BlogCard({ blog, activeTopic }) {
  let { id, title, date, like, detail, author, rating, subtopic } = blog;
  const {favoriteBlogs, deleteOneBlog} = useBlog()

  let averageRating = useRef();
  //! average rating calculation
  if (rating) {
    let rateList = rating.map((item) => Object.values(item));
    averageRating.current =
      rateList.reduce((a, b) => +a + +b) / rateList.length;
  }
  const [rate, setRate] = useState(averageRating.current);
  const [anchorEl, setAnchorEl] = useState(null);
  const { userInfo } = useSession();
  const { editBlog, addFavorite } = useBlog();
  //! get base url 
  const baseUrl = window.location.origin;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/details", { state: { blog } });
  };
  const handleLiked = async () => {
    //! alternative favorite list for improved fetch
    if (userInfo) {
      const foundFavorite = await favoriteBlogs.find(f=> f.favid === id)
      if (foundFavorite) {
        deleteOneBlog( foundFavorite.id,"favorites/"+userInfo.uid)
      } else {
        addFavorite({"topic":activeTopic,"favid":blog.id, "title": title}, "favorites/"+userInfo.uid)
      }
      //! nested ternary same as above
      like
        ? like.includes(userInfo?.email)
          ? editBlog(
              {
                ...blog,
                like: like.filter((email) => email !== userInfo.email),
              },
              activeTopic
            )
          : editBlog({ ...blog, like: [...like, userInfo?.email] }, activeTopic)
        : editBlog({ ...blog, like: [userInfo?.email] }, activeTopic);
    } else {
      toast("You must be logged in to add this subject to your favorites")
    }
  };

  const handleRate = (event, newValue) => {
    setRate(newValue);

    if (userInfo) {
      if (rating) {
        const result = rating.filter(
          (item) => Object.keys(item)[0] === userInfo.uid
        );
        //! rate yapan kullanıcı uid key : rate value olduğu için keyler içinde daha önce oy kullanmışmı kontrolü
        if (result.length > 0) {
          toast("You rate this blog before");
        } else {
          editBlog(
            { ...blog, rating: [...rating, { [userInfo?.uid]: newValue }] },
            activeTopic
          );
        }
      } else {
        editBlog(
          { ...blog, rating: [{ [userInfo?.uid]: newValue }] },
          activeTopic
        );
      }
    } else {
      toast("You must be logged in to rate this subject")
    }
//! ternary 
    // like?like.includes(userInfo?.email)||editBlog({...blog, rating:[...rating,userInfo?.email]},activeTopic):editBlog({...blog, rating:[userInfo?.email]},activeTopic)
  };

  const handleShare = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseShare = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const shareId = open ? "simple-popover" : undefined;

  return (
    <Card
      raised
      sx={{
        maxWidth: 345,
        margin: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent onClick={handleClick} sx={{ cursor: "pointer" }}>
        <Typography
          variant="h5"
          component="div"
          color="primary"
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textTransform: "capitalize",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
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
          defaultValue={rate}
          value={rate}
          onChange={(event, newValue) => handleRate(event, newValue)}
        />{" "}
        <span color="primary">Rates: {rating?.length || 0}</span>
        <Share onClick={handleShare} />
        <Popover
          id={shareId}
          open={open}
          anchorEl={anchorEl}
          onClose={handleCloseShare}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box sx={{ display: "flex", padding: 1, gap: 1 }}>
            <EmailShareButton
              url={`${baseUrl}/details/${activeTopic}/${id}`}
              subject={title}
              body={`${userInfo.email} share this blog with you. \n\n`}
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <WhatsappShareButton
              url={`${baseUrl}/details/${activeTopic}/${id}`}
              title={`I think this is an useful content about ${subtopic} for ${activeTopic}`}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <FacebookShareButton
              url={`${baseUrl}/details/${activeTopic}/${id}`}
              quote={title}
              summary={`#${title}`}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </Box>
        </Popover>
      </CardActions>
    </Card>
  );
}
