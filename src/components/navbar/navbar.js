import React from 'react';
import HorizontalList from '../commons/horizontalList';
import ListItem from '../commons/listItem';
import ContextLink from '../interactions/contextLink';
import CONTEXT from '../../context/appConstant';
import ProfilePreview from '../profile/profilePreview';

const NavList = HorizontalList.extend`
  justify-content: space-between;
  margin: 0;
`;

const SubListItem = ListItem.extend`
  padding: 0 16px 0 0;
  &:last-child {
    margin-bottom: auto;
  }
`;

/**
 * Main navbar
 * @param {object} items
 */
const Navbar = () => (
  <NavList>
    <ListItem>
      <HorizontalList>
        <SubListItem>
          <ContextLink url="">Home</ContextLink>
        </SubListItem>
        <SubListItem>
          <ContextLink url="webdev" context={CONTEXT.WEBDEV}>WebDev</ContextLink>
        </SubListItem>
        <SubListItem>
          <ContextLink url="gamedev" context={CONTEXT.GAMEDEV}>GameDev</ContextLink>
        </SubListItem>
      </HorizontalList>
    </ListItem>
    <ListItem>
      <ProfilePreview />
    </ListItem>
  </NavList>
);

export default Navbar;
