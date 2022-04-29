import { Box, CircularProgress } from "@mui/material";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useBlog } from "../../Context/DataContext";
import { firebaseDB } from "../../helpers/firebaseConnect";
import BlogCard from "./BlogCard";


const ReactNotes = () => {
    const {setCurrentBlogs, currentBlogs}= useBlog()
    const [isLoading, setIsLoading] = useState()

    useEffect(() => {
        setIsLoading(true);
        
        const blogRef = ref(firebaseDB, "react");
        onValue(blogRef, (snapshot) => {
          const data = snapshot.val();
          const blogs = [];
          for (let id in data) {
            blogs.push({ id, ...data[id] });
          }
          setCurrentBlogs(blogs);
          setIsLoading(false);
        });
      }, [setCurrentBlogs]);

console.log(currentBlogs)

  return (
    <div>

{
    isLoading ?(<Box sx={{ display: 'flex' }}>
      <CircularProgress color="inherit"/>
    </Box>): 
    currentBlogs?.map(blog=>(<BlogCard key={blog.id} blog={blog}/>))
    
}



    </div>
  )
}

export default ReactNotes