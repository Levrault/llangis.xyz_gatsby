import styled from 'styled-components';

const SlideHorizontal = styled.div`
  transform: translateX(${props => props.active ? props.to : props.from});
  transition: transform .5s ease-in;
`;

export default SlideHorizontal;
