import React from "react";
import { Route, Switch } from "react-router-dom";
import Galllery from "./Pages/Gallery/Galllery";
import Login from "./Pages/Login/Login";
import Orders from "./Pages/Orders/Orders";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/orders" component={Orders} exact />
      <Route path="/gallery" component={Galllery} exact />
    </Switch>
  );
};

export default Routes;
