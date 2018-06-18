import React from 'react';
import styled from 'styled-components';
import imgSrc from '../../../assets/img/avatar.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const Picture = styled.img`
  border-radius: 100%;
  width: 256px;
  height: 256px;
`;

/**
 * Avatar picture
 */
const Avatar = () => (
  <Wrapper>
    <Picture src={imgSrc} alt="Luc-Frederic Langis" />
  </Wrapper>
);

export default Avatar;
