import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Drawer from './Drawer'

export const Home = () => {
  return <h2>Home</h2>;
};

export const About = () => {
  return <h2>About</h2>;
};

export const Users = () => {
  return <h2>Users</h2>;
};

const Routes = () => {
  return (
    <Router>
      <Route exact path="/about" component={props => <About  />} />
      <Route exact path="/users" component={props => <Users  />} />
      <Route exact path="/home" component={props => <Home  />} />
      <Route exact path="/" component={props => <Home  />} />
      <Drawer />
    </Router>
  );
};

export default Routes;
