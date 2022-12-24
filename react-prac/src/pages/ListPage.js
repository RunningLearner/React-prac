import {useState, useEffect},React from "react";
import axios from "axios";

const ListPage = async () => {
const [posts, setPosts] = useState([])

    const getPosts = () => {
    const res = await axios.get("http://localhost:3001/posts");
    setPosts(res.data)
  };

  useEffect(() => {
    getPosts()
  }, [])
  
  return <div>L</div>;
};

export default ListPage;
