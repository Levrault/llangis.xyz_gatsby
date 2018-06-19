import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Nav = styled.ul`
  font-family: Babyblocks;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0;
  margin-left: 0;
  -list-style: none;
`;

const Item = styled.ul`
  display: inline-block;
  padding: 16px;
  margin-left: 0;
  text-transform: capitalize;
`;

/**
 * Main navbar
 * @param {object} items
 */
const Navbar = () => (
  <Nav>
    <Item>
      <Link to="/">Home</Link>
    </Item>
    <Item>
      <Link to="/post">Post</Link>
    </Item>
  </Nav>
);

Navbar.propTypes = {};

export default Navbar;
