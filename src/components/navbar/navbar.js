import React from 'react';
import HorizontalList from '../commons/horizontalList';
import ListItem from '../commons/listItem';
import ContextButton from '../interactions/contextButton';
import Social from '../social/social';

const NavList = HorizontalList.extend`
  justify-content: space-between;

  @media(max-width: 351px) {
    flex-direction: column;
    align-items: center;
  }
`;

/**
 * Main navbar
 * @param {object} items
 */
const Navbar = () => (
  <NavList>
    <ListItem>
      <ContextButton />
    </ListItem>
    <ListItem>
      <Social />
    </ListItem>
  </NavList>
);

export default Navbar;
