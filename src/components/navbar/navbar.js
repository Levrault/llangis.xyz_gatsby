import React from 'react';
import HorizontalList from '../commons/horizontalList';
import styled from 'styled-components';
import ListItem from '../commons/listItem';
import ContextLink from '../interactions/contextLink';
import CONTEXT from '../../context/appConstant';

const Nav = styled.nav`
  background-color: #FFFFFF;
  position: relative;
  z-index: 10;
`;

const NavList = HorizontalList.extend`
  justify-content: space-between;
  margin: 0;
`;

const SubListItem = ListItem.extend`
  padding: 0 16px 0 0;
  z-index: 20;
  &:last-child {
    margin-bottom: auto;
  }
`;

/**
 * Main navbar
 * @param {object} items
 */
const Navbar = () => (
  <Nav>
    <NavList>
      <ListItem>
        <HorizontalList>
          <SubListItem>
            <ContextLink url="">Home</ContextLink>
          </SubListItem>
          <SubListItem>
            <ContextLink url="webdev" context={CONTEXT.WEBDEV} hasProfile>WebDev</ContextLink>
          </SubListItem>
          <SubListItem>
            <ContextLink url="gamedev" context={CONTEXT.GAMEDEV} hasProfile>GameDev</ContextLink>
          </SubListItem>
        </HorizontalList>
      </ListItem>
    </NavList>
  </Nav>
);

export default Navbar;
