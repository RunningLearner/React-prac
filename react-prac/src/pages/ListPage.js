import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

const ListPage = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    const res = await axios.get("http://localhost:3001/posts");
    setPosts(res.data);
    setLoading(false);
  };

  const deleteBlog = async (e, id) => {
    e.stopPropagation();

    await axios.delete(`http://localhost:3001/posts/${id}`);
    setPosts((prevPosts) => {
      console.log(prevPosts);
      return prevPosts.filter((post) => {
        return post.id !== id;
      });
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const renderBlogList = () => {
    if (loading) {
      return <LoadingSpinner />;
    }

    if (posts.length === 0) {
      return <div>"No blog posts found!"</div>;
    }

    return posts.map((post) => {
      return (
        <Card
          key={post.id}
          title={post.title}
          onClick={() => {
            history.push("/blogs/edit");
          }}
        >
          <div>
            <button
              className="btn btn-danger"
              onClick={(e) => deleteBlog(e, post.id)}
            >
              Delete
            </button>
          </div>
        </Card>
      );
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            Create New
          </Link>
        </div>
      </div>
      {renderBlogList()}
    </div>
  );
};

export default ListPage;
