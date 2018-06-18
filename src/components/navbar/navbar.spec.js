import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './navbar';

const mock = {
  item1: '/url',
  item2: '/url',
  item3: '/url',
};

describe('NavBarItem component', () => {
  it('should render with all his props', () => {
    const component = renderer.create(<Navbar items={mock} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

