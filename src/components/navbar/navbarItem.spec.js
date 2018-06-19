import React from 'react';
import renderer from 'react-test-renderer';
import NavbarItem from './navbarItem';

const mock = {
  title: 'title',
  url: '/url',
};

describe('NavBarItem component', () => {
  it('should render with all his props', () => {
    const component = renderer.create(<NavbarItem {...mock} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

