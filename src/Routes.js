import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Galllery from "./Pages/Gallery/Galllery";
import Login from "./Pages/Login/Login";
import Orders from "./Pages/Orders/Orders";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <RouteWithNav path="/orders" component={Orders} exact />
      <RouteWithNav path="/gallery" component={Galllery} exact />
    </Switch>
  );
};

const RouteWithNav = ({ path, component: Component, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => (
      <>
        <Navbar />
        <Component {...props} />
      </>
    )}
  />
);

export default Routes;
