import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CONTEXT from '../../context/appConstant';
import GameDevProfileSrc from './profile_gamedev.png';
import WebDevProfileSrc from './profile_webdev.png';
import Profile from './profile';

const Button = styled.div`
  border: none;
  background:none;
  cursor: pointer;
`;

const Picture = styled.img`
  border-radius: 100%;
  width: 24px;
  height: 24px;
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
      profileEnable: false
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
  * Render
  */
  render () {
    const { context } = this.props;
    const { profileEnable } = this.state;

    let src = WebDevProfileSrc;

    if (context === CONTEXT.GAMEDEV) {
      src = GameDevProfileSrc;
    }

    return (
      <div>
        <Button onClick={this.handleClick}>
          <Picture src={src} alt={`${context} profile picture of Luc-Frederic Langis`} />
        </Button>
        <Profile enable={profileEnable} />
      </div>
    );
  }
}

ProfilePreview.propTypes = {
  context: PropTypes.string.isRequired
};

ProfilePreview.defaultProps = {};

export default ProfilePreview;
