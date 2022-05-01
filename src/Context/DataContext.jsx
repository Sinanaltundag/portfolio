import { push, ref, remove, set, update } from "firebase/database";
import  { useContext, useState,  createContext } from "react";
import { toast } from "react-toastify";
import { firebaseDB } from "../helpers/firebaseConnect";
import movieSm from "../assets/react-movie-sm.jpg"

const BlogContext = createContext();

export function useBlog() {
  return useContext(BlogContext);
}

export function BlogProvider({ children }) {
  const [currentBlogs, setCurrentBlogs] = useState();
const [activeTopic, setActiveTopic] = useState("react")  

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

  function editBlog(blog, dbName) {
    const updates = {};
    updates[dbName + "/" + blog.id] = blog;
    toast("Record Updated");
    return update(ref(firebaseDB), updates);
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
  const reactProjects = [
    {
      img: {movieSm},
      url: "",
      title: 'Breakfast',
      author: '@Sinan',
      details:"",
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
     {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
  
  ];


  const value = {
    addBlog,
    currentBlogs,
    getOneBlog,
    deleteOneBlog,
    editBlog,
    setCurrentBlogs,
    activeTopic, 
    setActiveTopic,
    reactProjects,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}