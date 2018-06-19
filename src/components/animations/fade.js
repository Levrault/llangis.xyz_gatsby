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
const Fade = styled.div`
  animation: ${props => props.duration}s ${FadeAnimation};
  display: ${props => props.display};
  width: 100%;
`;

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  duration: PropTypes.number,
};


Fade.defaultProps = {
  display: 'block',
  duration: 1,
};

export default Fade;
