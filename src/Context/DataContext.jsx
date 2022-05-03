import { push, ref, remove, set, update } from "firebase/database";
import { useContext, useState, createContext } from "react";
import { toast } from "react-toastify";
import { firebaseDB } from "../helpers/firebaseConnect";
import {
  HtmlSvg,
  JsSvg,
  ReactSvg,
  BsSvg,
  SassSvg,
  MuiSvg,
} from "../assets/svg/SvgIcons";

const BlogContext = createContext();

export function useBlog() {
  return useContext(BlogContext);
}

export function BlogProvider({ children }) {
  const [currentBlogs, setCurrentBlogs] = useState();
  const [activeTopic, setActiveTopic] = useState("react");

  function addBlog(newBlog, dbName) {
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
      img: "./images/react-movie-sm.jpg",
      title: "Movie App",
      author: "@Sinan",
      details: [
        "Project aims to create a Movie App.",
        "Fetch api from TMDB",
        "List data on landing page",
        "Show filtered data according to search terms",
        "Login function with firebase (email / with google)",
        "Guests can't see movie details",
        "Pagination",
        "BootStrap 5",
      ],
      url: "https://firebase-movie.herokuapp.com/",
      aim: "Private Routing, Bootstrap, Firebase auth, Context, pagination",
    },
    {
      img: "./images/react-myblog-sm.jpg",
      title: "Blog App",
      author: "@Sinan",
      details: [
        "Firebase authentication, Realtime database",
        "State management with Redux",
        "React public and private router",
        "Blog Add, delete, update functions",
        "Styled with Material UI",
        "Guests can not see details",
        "Add favorites, comments functions",
        "Logged in users can see their favorites and contributions on Profile page",
      ],
      url: "https://myblogdb-app.netlify.app/",
      aim: "Firebase auth, Realtime database, Redux, Router, Material ui, Responsive",
    },
    {
      img: "./images/react-recipe-sm.jpg",
      title: "Recipe App",
      author: "@Sinan",
      details: [
        "Using api and manipulation data",
        "Routing",
        "Simple user auth",
        "Search on api",
        "Styled-components",
      ],
      url: "https://sinan-recipe-app.netlify.app/",
      aim: "Routing, Styled-Components, Fetch api",
    },
    {
      img: "./images/react-webtemplate-sm.jpg",
      title: "Website Template",
      author: "@Sinan",
      details: [
        "There are three pages controlled router",
        "Responsive design with css",
        "Simple Reusable Components",
        "Toastify",
      ],
      url: "https://router-website-template.netlify.app/",
      aim: "Responsive, Router, Template",
    },
  ];
//! dynamic svg control
  const skillListFrontend = [
    {
      title: "REACT",
      subjects: ["Hooks", "Styled Components", "Material UI", "Custom Hooks"],
      svg: <ReactSvg />,
    },
    {
      title: "JavaScript",
      subjects: ["DOM", "Events", "Loop Methods", "Promises", "Clean Code"],
      svg: <JsSvg />,
    },
    {
      title: "HTML5",
      subjects: ["Semantic Markup", "Forms", "Tables", "Web Storages"],
      svg: <HtmlSvg />,
    },
  ];
  const skillListStyling = [
    {
      title: "Sass",
      subjects: ["Variables", "@mixins", "@extends", "Modules"],
      svg: <SassSvg />,
    },
    {
      title: "BootStrap",
      subjects: ["Components", "Forms", "Customize", "Sass", "Responsive"],
      svg: <BsSvg />,
    },
    {
      title: "Material UI",
      subjects: ["Components", "Custom Components", "Themes", "Responsive"],
      svg: <MuiSvg />,
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
    skillListStyling,
    skillListFrontend,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
