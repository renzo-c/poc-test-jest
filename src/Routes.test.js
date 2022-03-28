import React from "react";
import { Route } from "react-router-dom";
import Routes, { Home, About, Users } from "./Routes";
import { shallow, mount } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let pathMap = {};

describe("Testing correct navigation in drawer component ", () => {
  beforeAll(() => {
    const component = shallow(<Routes />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component.type;
      return pathMap;
    }, {});
    console.log(pathMap);
  });
  it("should show Home component for path / in Router", () => {
    expect(pathMap["/"]).toBe(Home);
  });
});
