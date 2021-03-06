import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
  display: block;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')}
`;

Text.propTypes = {
  children: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  fontSize: PropTypes.string
};

export default Text;
