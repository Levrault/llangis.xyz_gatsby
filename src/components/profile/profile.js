import React from 'react';
import styled from 'styled-components';
import SlideVertical from '../animations/slideVertical';
import WebdevProfile from './webdevProfile';
import GamedevProfile from './gamedevProfile';
import AppContext from '../../context/appContext';
import CONTEXT from '../../context/appConstant';

const Wrapper = styled.div`
  position: absolute;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  border-radius: 0 0 4px 4px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #FFFFFF;
  max-width: 230px;
  left: ${props => props.left};
  top: -16px;
  z-index: 5;
  width: 230px;
`;

/**
 * Avatar picture
 * @param {bool}    enable
 * @param {string}  context
 */
const Profile = () => (
  <AppContext.Consumer>
    {({ profileEnable, context }) => {
      const left = (context === CONTEXT.WEBDEV) ? '27px' : '118px';
      return (
        <SlideVertical from="-520px" to="0px" active={profileEnable} zIndex="1">
          <Wrapper left={left}>
            {context === CONTEXT.WEBDEV && <WebdevProfile />}
            {context === CONTEXT.GAMEDEV && <GamedevProfile />}
          </Wrapper>
        </SlideVertical>
      );
    }}
  </AppContext.Consumer>
);

export default Profile;
