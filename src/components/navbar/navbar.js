import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';

const Nav = styled.ul`
  font-family: Babyblocks;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0;
  -list-style: none;
`;

/**
 * Main navbar
 * @param {object} items
 */
const Navbar = ({ items }) => (
  <Nav>
    {Object.keys(items).map((key) => {
      const item = items[key];
      return <NavbarItem key={key} title={key} url={item} />;
    })}
  </Nav>
);

Navbar.propTypes = {
  items: PropTypes.object.isRequired,
};

export default Navbar;
