import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slide from '../animations/slide';
import WebdevProfile from './webdevProfile';
import GamedevProfile from './gamedevProfile';
import AppContext from '../../context/appContext';
import CONTEXT from '../../context/appConstant';

const Wrapper = styled.div`
  position: fixed;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  border-radius: 4px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #FFFFFF;
  max-width: 230px;
  width: 230px;
  z-index: 10;
`;

/**
 * Avatar picture
 */
const Profile = ({ enable }) => (
  <Slide from="100px" to="-170px" active={enable}>
    <Wrapper>
      <AppContext.Consumer>
        {({ context }) => (
          <Fragment>
            {context === CONTEXT.WEBDEV && <WebdevProfile />}
            {context === CONTEXT.GAMEDEV && <GamedevProfile />}
          </Fragment>
        )}
      </AppContext.Consumer>
    </Wrapper>
  </Slide>
);

Profile.propTypes = {
  enable: PropTypes.bool
};

Profile.defaultProps = {
  enable: false
};

export default Profile;
