import React from "react";
import { Route } from "react-router-dom";
import Routes, { Home, About, Users } from "./Routes";
import { shallow, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let pathMap = {};

describe("Test 01: Correct definition of routes in child components ", () => {
  beforeAll(() => {
    const component = shallow(<Routes />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
    // console.log(routeProps.component().type);
      pathMap[routeProps.path] = routeProps.component().type;
      return pathMap;
    }, {});
    // console.log(pathMap);
  });
  it("Path / should route to Home components", () => {
    expect(pathMap["/"]).toBe(Home);
  });
  it("Path / about should route to Home components", () => {
    expect(pathMap["/about"]).toBe(About);
  });
  it("Path / should route to Home components", () => {
    expect(pathMap["/about"]).toBe(About);
  });
});
