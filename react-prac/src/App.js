import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./routes";
import useToast from "./hooks/toast";
import Toast from "./components/Toast";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const toasts = useSelector((state) => state.toast.toasts);
  const { deleteToast } = useToast();

  return (
    <Router>
      <NavBar />
      <Toast toasts={toasts} deleteToast={deleteToast} />
      <div className="container mt-3">
        <Switch>
          {routes.map((route) => {
            if (route.auth) {
              return (
                <ProtectedRoute
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              );
            }
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
