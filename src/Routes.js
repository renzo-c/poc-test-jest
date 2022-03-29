import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Route exact path="/" component={props => <Home  />} />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </Router>
  );
};

export default Routes;
