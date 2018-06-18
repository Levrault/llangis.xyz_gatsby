import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const FadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

/**
 * Blink effect
 */
const Blink = styled.div`
  animation: ${props => props.duration}s ${FadeAnimation};
  display: ${props => props.display};
`;

Blink.propTypes = {
  children: PropTypes.element.isRequired,
  duration: PropTypes.number,
};


Blink.defaultProps = {
  display: 'block',
  duration: 0,
};

export default Blink;
