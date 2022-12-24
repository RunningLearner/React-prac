import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./routes";

const App = () => {
  return (
    <Router>
      <NavBar />

      <div className="container ">
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                exact
                path={route.path}
                component={route.compoenets}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
