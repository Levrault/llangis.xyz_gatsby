import React from 'react';
import styled from 'styled-components';
import CONTEXT from '../../context/appConstant';
import GameDevProfileSrc from './profile_gamedev.png';
import WebDevProfileSrc from './profile_webdev.png';

const Picture = styled.img`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
`;

/**
 * Avatar picture
 */
const Profile = ({ context }) => {
  let src = WebDevProfileSrc;
  if (context === CONTEXT.GAMEDEV) {
    src = GameDevProfileSrc;
  } 
  return (
    <Picture src={src} alt={`${context} profile picture of Luc-Frederic Langis`} />
  );
}



export default Profile;
