import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "../components/Card";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { bool } from "prop-types";
import Pagination from "./Pagination";
import propTypes from "prop-types";

const BlogList = ({ isAdmin }) => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageParam = params.get("page");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPosts, setNumberOfPosts] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const limit = 3;

  useEffect(() => {
    setNumberOfPages(Math.ceil(numberOfPosts / limit));
  }, [numberOfPosts]);

  const onClickPageButton = (page) => {
    history.push(`${location.pathname}?page=${page}`);
  };

  const getPosts = useCallback(
    (page = 1) => {
      let params = {
        _page: page,
        _limit: limit,
        _sort: "id",
        _order: "desc",
      };

      if (!isAdmin) {
        params = { ...params, publish: true };
      }

      axios
        .get(`http://localhost:3001/posts`, {
          params,
        })
        .then((res) => {
          setNumberOfPosts(res.headers["x-total-count"]);
          setPosts(res.data);
          setLoading(false);
        });
    },
    [isAdmin]
  );

  useEffect(() => {
    setCurrentPage(parseInt(pageParam) || 1);
    getPosts(parseInt(pageParam) || 1);
  }, [pageParam, getPosts]);

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

  if (loading) {
    return <LoadingSpinner />;
  }

  if (posts.length === 0) {
    return <div>"No blog posts found!"</div>;
  }

  const renderBlogList = () => {
    return posts.map((post) => {
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

  return (
    <div>
      {renderBlogList()}

      {numberOfPages > 1 && (
        <Pagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          onClick={onClickPageButton}
          limit={limit}
        />
      )}
    </div>
  );
};

BlogList.propTypes = {
  isAdmin: bool,
};

BlogList.defaultProps = {
  isAdmin: false,
};

export default BlogList;
