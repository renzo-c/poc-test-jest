import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Items from "./Items"

// import Drawer from './Drawer'

export const Home = () => {
  return <h2>Home</h2>;
};

export const About = () => {
  return <h2>About</h2>;
};

export const Users = () => {
  const items = ['Shark','Dolphin','Octopus'];
  return <><h2>Users</h2><Items items={items}></Items></>;
};

const Routes = ({children}) => {
  return (
    <Router>
      <Route exact path="/about" component={props => <About  />} />
      <Route exact path="/users" component={props => <Users  />} />
      <Route exact path="/home" component={props => <Home  />} />
      <Route exact path="/" component={props => <Home  />} />
      <div style={{position: 'absolute', left: "50%", top: "50%", display: "flex"}}>
        {children}
      </div>
    </Router>
  );
};

export default Routes;
