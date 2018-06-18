import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../Common/Link';

const Item = styled.ul`
  display: inline-block;
  padding: 16px;
  text-transform: capitalize;
`;

/**
 * Navbar item
 * @param {object} items
 */
const NavBarItem = ({ url, title }) => (
  <Item>
    <Link href={url}>{title}</Link>
  </Item>
);

NavBarItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavBarItem;
