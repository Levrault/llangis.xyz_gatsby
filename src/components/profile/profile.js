import React, { Fragment } from 'react';
import styled from 'styled-components';
import WebdevProfile from './webdevProfile';
import GamedevProfile from './gamedevProfile';
import PropTypes from 'prop-types';
import Fade from '../animations/fade';
import AppContext from '../../context/appContext';
import CONTEXT from '../../context/appConstant';

const Wrapper = styled.div`
  position: absolute;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  border-radius: 4px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #FFFFFF;
  right: 98px;
  max-width: 230px;
  z-index: 10;
`;

/**
 * Avatar picture
 */
const Profile = ({ enable }) => {
  if (!enable) return null;
  return (
    <Fade duration={0.5}>
      <Wrapper>
        <AppContext.Consumer>
          {({ context }) => (
            <Fragment>
              {context === CONTEXT.WEBDEV && <Fade><WebdevProfile /></Fade>}
              {context === CONTEXT.GAMEDEV && <Fade><GamedevProfile /></Fade>}
            </Fragment>
          )}
        </AppContext.Consumer>
      </Wrapper>
    </Fade>
  );
};

Profile.propTypes = {
  enable: PropTypes.bool
};

Profile.defaultProps = {
  enable: false
};

export default Profile;
