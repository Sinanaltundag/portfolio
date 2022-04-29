import { onValue, push, ref, remove, set } from "firebase/database";
import  { useContext, useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import { firebaseDB } from "../helpers/firebaseConnect";

const BlogContext = createContext();

export function useBlog() {
  return useContext(BlogContext);
}

export function BlogProvider({ children }) {
  const [currentBlogs, setCurrentBlogs] = useState();
  const [isLoading, setIsLoading] = useState(true)

  function addBlog(newBlog,dbName) {
    
    const blogRef = ref(firebaseDB, dbName);
    const newBlogRef = push(blogRef);
    set(newBlogRef, newBlog);
  }

  function getOneBlog(id) {
    const result = currentBlogs?.filter((item) => item.id === id);
    return result;
  }

  function deleteOneBlog(id, dbName) {
    remove(ref(firebaseDB, dbName + "/" + id));
  toast("Record Deleted");
  }

  function updateBlog(id, data) {
    const contactRef = firebaseDB.ref("blogs").child(id);
    contactRef.update(data);
  }

/*   useEffect(() => {
    setIsLoading(true);
    
    const blogRef = ref(firebaseDB, "blogdata");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogs = [];
      for (let id in data) {
        blogs.push({ id, ...data[id] });
      }
      setCurrentBlogs(blogs);
      setIsLoading(false);
    });
  }, []); */



  const value = {
    addBlog,
    currentBlogs,
    getOneBlog,
    deleteOneBlog,
    updateBlog,
    setCurrentBlogs,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}