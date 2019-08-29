import React from "react"
import {Route, Switch} from "react-router-dom"

// importing containers
import NamesContainer from "../containers/names"

const routes = () => (
  <Switch>
    <Route path="/:id?" exact component={NamesContainer}/>
  </Switch>
);

export default routes;
