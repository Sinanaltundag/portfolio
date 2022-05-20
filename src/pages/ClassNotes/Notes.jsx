import { Box, CircularProgress, Grid } from "@mui/material";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useBlog } from "../../Context/DataContext";
import { firebaseDB } from "../../helpers/firebaseConnect";
import BlogCard from "./ClassNotesComponents/BlogCard";

const Notes = () => {
  const { setCurrentBlogs, currentBlogs } = useBlog();
  const [isLoading, setIsLoading] = useState();
  const { activeTopic, getFavorites } = useBlog();
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
  }, [setCurrentBlogs, activeTopic]);

  //! at blogcard component control if favorite added before. fetch favorites of current user here once
useEffect(() => {
  getFavorites()
}, [])

  return (
    <div>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress color="primary" size={100} />
        </Box>
      ) : (
        <Grid
          textAlign="left"
          container
          spacing={{ xs: 1, md: 3 }}
          alignItems="stretch"
          justifyContent="center"
          rowGap={3}
        >
          {currentBlogs?.map((blog) => (
            <Grid item sm={12} md={6} lg={4} xl={3} key={blog.id}>
              <BlogCard key={blog.id} blog={blog} activeTopic={activeTopic} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Notes;
