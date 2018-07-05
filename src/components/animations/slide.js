
import styled from 'styled-components';

const Slide = styled.div`
  transform: translateX(${props => props.active ? props.to : props.from});
  transition: transform .5s ease-in;
`;

export default Slide;
