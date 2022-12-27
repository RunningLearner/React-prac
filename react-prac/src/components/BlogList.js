import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { useHistory } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import { bool } from "prop-types";

const BlogList = ({ isAdmin }) => {
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

  if (loading) {
    return <LoadingSpinner />;
  }

  if (posts.length === 0) {
    return <div>"No blog posts found!"</div>;
  }

  return posts
    .filter((post) => {
      return isAdmin || post.publish;
    })
    .map((post) => {
      return (
        <Card
          key={post.id}
          title={post.title}
          onClick={() => {
            history.push(`/blogs/${post.id}`);
          }}
        >
          {isAdmin && (
            <div>
              <button
                className="btn btn-danger"
                onClick={(e) => deleteBlog(e, post.id)}
              >
                Delete
              </button>
            </div>
          )}
        </Card>
      );
    });
};

BlogList.propTypes = {
  isAdmin: bool,
};

BlogList.defaultProps = {
  isAdmin: false,
};

export default BlogList;
