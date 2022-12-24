import { useState, useEffect } from "react";
import axios from "axios";

const ListPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("http://localhost:3001/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <div>L</div>;
};

export default ListPage;
