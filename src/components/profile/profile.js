import React from 'react';
import styled from 'styled-components';
import imgSrc from './avatar.png';

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
const Profile = () => (
  <Wrapper>
    <Picture src={imgSrc} alt="Luc-Frederic Langis" />
  </Wrapper>
);

export default Profile;