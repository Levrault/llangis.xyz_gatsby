import styled from 'styled-components';

const SlideVertical = styled.div`
  transform: translateY(${props => props.active ? props.to : props.from});
  transition: transform .5s ease-in;
  z-index: ${props => props.zIndex}
`;

export default SlideVertical;
