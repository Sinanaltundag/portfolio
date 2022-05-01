import { Box, CircularProgress, Grid } from "@mui/material";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useBlog } from "../../Context/DataContext";
import { firebaseDB } from "../../helpers/firebaseConnect";
import BlogCard from "./ClassNotesComponents/BlogCard";


const ReactNotes = () => {
    const {setCurrentBlogs, currentBlogs}= useBlog()
    const [isLoading, setIsLoading] = useState()
    const {activeTopic}= useBlog()
// const activeTopic = "react"
console.log(activeTopic);
    useEffect(() => {
        setIsLoading(true);
        
        const blogRef = ref(firebaseDB, activeTopic);
        onValue(blogRef, (snapshot) => {
          const data = snapshot.val();
          const blogs = [];
          for (let id in data) {
            blogs.push({ id, ...data[id] });
          }
          setCurrentBlogs(blogs);
          setIsLoading(false);
        });
      }, [setCurrentBlogs,activeTopic]);

console.log(currentBlogs)

  return (
    <div>

{
    isLoading ?(<Box sx={{ display: 'flex' }}>
      <CircularProgress color="inherit"/>
    </Box>): 
    (
      <Grid
              textAlign="left"
              container
              spacing={{ xs: 1, md: 2 }}
              alignItems="center"
              justifyContent="center"
              rowGap={3}
            >
    {currentBlogs?.map(blog=>(
      <Grid item sm={12} md={6} lg={4} xl={3} key={blog.id}>
      <BlogCard key={blog.id} blog={blog} activeTopic={activeTopic}/>
    </Grid>
      ))}
      </Grid>
    )
}



    </div>
  )
}

export default ReactNotes