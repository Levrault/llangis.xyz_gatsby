import styled from 'styled-components';

const Link = styled.a`
  background: none;
  border: none;
  color: hsla(0,0%,0%,0.8);
  cursor: pointer;
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

export default Link;

