import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AddBlog = (newBlog) => {
  const db = getDatabase();
  const blogRef = ref(db, "blogdata");
  const newBlogRef = push(blogRef);
  set(newBlogRef, newBlog);
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogArray, setBlogArray] = useState([]);
  

  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const blogRef = ref(db, "blogdata");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogs = [];
      for (let id in data) {
        blogs.push({ id, ...data[id] });
      }
      setBlogArray(blogs);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, blogArray };
};

export const DeleteBlog = (id) => {
  const db = getDatabase();
  remove(ref(db, "blogdata/" + id));
  toast("Record Deleted");
};

export const EditBlog = (blog) => {
  const db = getDatabase();
  const updates = {};
  updates["blogdata/" + blog.id] = blog;
  toast("Record Updated");
  return update(ref(db), updates);
};

