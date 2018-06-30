
import styled, { keyframes } from 'styled-components';
import BaseAnimation from './baseAnimation';

/**
 * Slide animation
 * @param {string} from
 * @param {string} to
 */
function slideAnimation (from, to) {
  return keyframes`
    from {
      transform: translate3d(${from}, 0, 0);
      visibility: visible;
    }
    to {
      transform: translate3d(${to}, 0, 0);
    }
  `;
}

const Slide = styled(BaseAnimation)`
  animation-name: ${props => `${slideAnimation(props.from, props.to)}`};
`;

export default Slide;
