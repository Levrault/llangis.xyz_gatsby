import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import CONTEXT from '../../context/appConstant';
import GameDevProfileSrc from './profile_gamedev.png';
import WebDevProfileSrc from './profile_webdev.png';
import Profile from './profile';
import AppContext from '../../context/appContext';

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Picture = styled.img`
  border-radius: 100%;
  width: 31px;
  height: 31px;
  border: 1px solid #111111;
  margin-bottom: 8px;
`;

/**
 * Profile preview
 */
class ProfilePreview extends Component {
  /**
   * @contructor
   * @param {object} props
   */
  constructor (props) {
    super(props);
    this.state = {
      profileEnable: false,
      showText: false
    };
  }

  /**
   * Show/hide profile when clicked
   */
  handleClick = () => {
    this.setState({
      profileEnable: !this.state.profileEnable
    });
  }

  /**
   * show text on mouse over
   */
  handleMouseEnter = () => {
    this.setState({
      showText: true
    });
  }

  /**
   * hide text on mouse over
   */
  handleMouseLeave = () => {
    this.setState({
      showText: false
    });
  }

  /**
   * Render
   */
  render () {
    const { profileEnable } = this.state;

    return (
      <Wrapper>
        <Button onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <AppContext.Consumer>
            {({ context }) => {
              let src = WebDevProfileSrc;

              if (context === CONTEXT.GAMEDEV) {
                src = GameDevProfileSrc;
              }

              return (
                <Picture src={src} alt={`${context} profile picture of Luc-Frederic Langis`} />
              );
            }}
          </AppContext.Consumer>
        </Button>
        <Profile enable={profileEnable} />
      </Wrapper>
    );
  }
}

ProfilePreview.propTypes = {};

ProfilePreview.defaultProps = {};

export default ProfilePreview;
