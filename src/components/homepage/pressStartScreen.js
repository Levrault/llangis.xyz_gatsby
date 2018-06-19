import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../commons/text';
import Blink from '../animations/blink';

const Wrapper = styled.div`
  background: white;
  top: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Like in every video game, we land on the famous "press start screen"
 */
class PressStartScreen extends Component {
  /**
   * Add keydown event
   */
  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Remove keydown event
   */
  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Event listener on key down event
   */
  handleKeyDown = () => {
    this.props.handleContext();
  }

  /**
   * Render
   */
  render() {
    return (
      <Wrapper>
        <div>
          <Blink>
            <Text style={{ textAlign: 'center' }}>Press Start</Text>
          </Blink>
          <Text>(work in progress)</Text>
        </div>
      </Wrapper>
    );
  }
}

PressStartScreen.propTypes = {
  handleContext: PropTypes.func.isRequired,
};

export default PressStartScreen;
