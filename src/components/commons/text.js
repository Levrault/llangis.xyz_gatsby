import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  font-family: Babyblocks;
  font-size: 24px;
  display: block;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')}
`;

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Text;
