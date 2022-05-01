import Container from "@mui/material/Container";
import {  Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import {  EditBlog } from "../../utils/dataFunctions";
import { useLocation } from "react-router-dom";
import {  useState } from "react";
import {  useSession } from "../../Context/SessionContext";
import { useBlog } from "../../Context/DataContext";

const AdminPanel = () => {
  const {userInfo} = useSession()
  const {addBlog} = useBlog()
  const [mainTopic, setMainTopic] = useState([]);
  const d = new Date();
  const location = useLocation();
  const blog = location.state?.blog;

  const topics ={
    react : ["hooks", "components", "libraries"],
   javascript : ["functions", "short-methods", "libraries"],
   styling : ["css", "sass", "frameworks"],

  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const { title, detail, img, maintopic, subtopic } = {
      maintopic:data.get("mainTopic"),
      subtopic:data.get("subTopic"),
      title: data.get("title"),
      detail: data.get("detail"),
      img: data.get("img"),
    };

    const newBlog = {
      ...blog,
      subtopic,
      title,
      detail,
      img,
      author: userInfo?.email,
      date: d.toDateString(),
      
    };
console.log(newBlog);
    blog ? EditBlog({ ...newBlog, id: blog.id }) : addBlog(newBlog, maintopic);
    // navigate("/");
  };

  const handleChange = (event) => {
    setMainTopic(topics[event.target.value]);
  };


  return (
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          borderRadius: "1rem",
          boxShadow: "10px 10px 5px 1px black",
          padding: " 10px 0",
          marginTop: "4rem",
        }}
      >
       
        <Typography component="h1" variant="h5" width="100%">
          {blog ? "Update Blog" : "New Blog"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

        <FormControl fullWidth margin="normal">
        <InputLabel id="demo-simple-select-label">Main Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Main Topic"
          name="mainTopic"
          // value={mainTopic}
          defaultValue=""
          onChange={handleChange}
        >
          <MenuItem value={"react"}>React</MenuItem>
          <MenuItem value={"javascript"}>Javascript</MenuItem>
          <MenuItem value={"styling"}>Styling</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </FormControl>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label2">Sub Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select2"
          label="Sub Topic"
          defaultValue=""
          name="subTopic"
        >
        {mainTopic?.map(subTopic=><MenuItem key={subTopic} value={subTopic}>{subTopic}</MenuItem>)}
          
        </Select>
      </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            defaultValue={blog?.title}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="img"
            label="Image URL"
            id="img"
            autoComplete="img"
            defaultValue={blog?.img}
          />
          <TextField
            id="detail"
            label="Detail"
            fullWidth
            required
            multiline
            rows={8}
            name="detail"
            defaultValue={blog?.detail}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {blog ? "Update Blog" : "Add New Blog"}
          </Button>
        </Box>
      </Container>
  );
};

export default AdminPanel;
