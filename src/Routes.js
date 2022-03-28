import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Home extends Component{
    render(){
        return(
            <div>Home Page</div>
        )
    }
}

export function About() {
  return <h2>About</h2>;
}

export function Users() {
  return <h2>Users</h2>;
}

const Routes = () => {
  return (
    <Router>
      <Route exact path="/about" component={<About />} />
      <Route exact path="/users" component={<Users />} />
      <Route exact path="/" component={<Home />} />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </Router>
  );
};

export default Routes;
