//controlling the routes here
import React from "react";
import { Switch, Route } from "react-router-dom";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
// import Dashboard from "../pages/Dashboard";
import WelcomeScreen from '../screens/WelcomeScreen'
import ChatScreen from '../screens/ChatScreen'


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={WelcomeScreen} />
      <Route path="/chat" component={ChatScreen} />
      {/* <Route path="/dashboard" component={Dashboard} /> */}

      {/* for no path or wrong path name */}
      <Route component={WelcomeScreen} />
    </Switch>
  );
}
