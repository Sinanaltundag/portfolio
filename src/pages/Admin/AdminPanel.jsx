import Container from "@mui/material/Container";
import {  Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import {  EditBlog } from "../../utils/dataFunctions";
import { useLocation } from "react-router-dom";
import {  useEffect, useRef, useState } from "react";
import {  useSession } from "../../Context/SessionContext";
import { useBlog } from "../../Context/DataContext";
import { useCustomTheme } from "../../Context/ThemeContext";

const AdminPanel = () => {
  const {userInfo} = useSession()
  const {addBlog} = useBlog()
  const [mainTopic, setMainTopic] = useState([]);
  const d = new Date();
  const location = useLocation();
  const blog = location.state?.blog;
  const {navbarHeight}=useCustomTheme();

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
      maintopic,
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
console.log(blog);
console.log(navbarHeight);
//!blog update için subtopic optionsları belirlemeyi yapma. state değiştirme onchange event ı tetikliyor.
useEffect(() => {
 blog&& setMainTopic(topics[blog.maintopic])
}, [blog])


  return (
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          backgroundColor: "background.paper",
          borderRadius: "1rem",
          boxShadow: "11px 11px 15px 2px black",
          padding: " 10px 0",
          marginTop: `${navbarHeight}px`,
        }}
      >
       
        <Typography component="h1" variant="h5" width="100%" color="text.primary">
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
          defaultValue={blog?.maintopic}
          onChange={handleChange}
        >
          <MenuItem value={"react"}>React</MenuItem>
          <MenuItem value={"javascript"}>Javascript</MenuItem>
          <MenuItem value={"styling"}>Styling</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </FormControl>
        <FormControl fullWidth>
        <InputLabel id="subTopic">Sub Topic</InputLabel>
        <Select
          labelId="subTopic"
          id="subTopic"
          label="Sub Topic"
          defaultValue={blog?.subtopic}
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
