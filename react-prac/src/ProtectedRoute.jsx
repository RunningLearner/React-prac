import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component, path, key }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  return <Route key={key} exact component={component} path={path} />;
};

export default ProtectedRoute;
