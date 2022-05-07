import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AccountCircle } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, ButtonGroup, Container, Divider, Paper } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSession } from "../../../Context/SessionContext";
import { useBlog } from "../../../Context/DataContext";
import Comments from "./Comments";
import { useEffect, useState } from "react";
import { firebaseDB } from "../../../helpers/firebaseConnect";
import { onValue, ref } from "firebase/database";
import { useCustomTheme } from "../../../Context/ThemeContext";

export default function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  let { topic, blogid } = useParams();
  const { userInfo } = useSession();
  const { deleteOneBlog, activeTopic } = useBlog();
  const [one, setOne] = useState();
const {navbarHeight} =useCustomTheme();
  const blog = !blogid ? location.state.blog : one;
  const { id, title, date, img, comments, detail, explanation, author } = blog
    ? blog
    : "";

  useEffect(() => {
    const blogRef = ref(firebaseDB, topic + "/" + blogid);
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      setOne(data);
    });
  }, [blogid, topic]);

  const handleDelete = () => {
    deleteOneBlog(id, activeTopic);
    navigate("/Class%20Notes");
  };
  const handleUpdate = () => {
    navigate("/AdminPanel", { state: { blog } });
  };
  return (
    <Container sx={{paddingTop: `${navbarHeight}px` }}>
      <Button color="warning" variant="outlined" sx={{margin:2}} onClick={() => navigate(-1)} >
        Go back
      </Button>

      <Card >
        {img && (
          <CardMedia
            component="img"
            alt={title}
            sx={{
              objectFit: "scale-down",
              height: "300px",
              margin: "0 auto",
            }}
            image={img}
          />
        )}
        <CardContent>
          <Typography variant="h5" component="div" color="primary">
            {title}
          </Typography>
          <Typography variant="body2" component="div" color="text.secondary">
            {date}
          </Typography>
          <Paper elevation={2} sx={{ padding: 3 }}>
            {explanation && (
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {explanation}
              </Typography>
            )}
            <Divider />
            {/* kodu alındığı hizada yazdırma */}
            <Typography
              variant="h6"
              color="secondary"
              sx={{ whiteSpace: "pre" }}
            >
              {detail}
            </Typography>
          </Paper>
          {comments?.length > 0 && <Comments comments={comments} />}
          <Typography mt={3} fontSize={22} align="left">
            <AccountCircle sx={{ marginRight: 1 }} variant="" />{" "}
            <span>{author}</span>
            <span color="primary" style={{ float: "right", fontSize: 16 }}>
              <FavoriteIcon color="secondary" /> {blog?.like?.length}
            </span>
          </Typography>
        </CardContent>
      </Card>
      {author === userInfo?.email && (
        <Container>
          <ButtonGroup
            variant="outlined"
            size="large"
            aria-label="outlined button group"
            fullWidth
            sx={{ marginTop: 5, marginBottom: 5 }}
          >
            <Button color="info" onClick={handleUpdate}>
              Update
            </Button>
            <Button color="error" onClick={handleDelete}>
              Delete
            </Button>
          </ButtonGroup>
        </Container>
      )}
    </Container>
  );
}
