import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const FadeAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

/**
 * Blink effect
 */
const Blink = styled.div`
  animation: 1s ${FadeAnimation} alternate infinite;
  display: ${props => props.display};
`;

Blink.propTypes = {
  display: PropTypes.string,
  children: PropTypes.element.isRequired
};


Blink.defaultProps = {
  display: 'block'
};

export default Blink;
