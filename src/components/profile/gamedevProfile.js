import React from 'react';
import imgSrc from './profile_gamedev.png';
import UnityIcon from './unity-icon.png';
import CSharpIcon from './csharp-icon.png';
import Picture from '../commons/picture';
import InnerProfileWrapper from '../commons/innerProfileWrapper';
import Tags from './tags';
import Text from '../commons/text';

const skills = [
  {
    icon: UnityIcon,
    text: 'Unity'
  },
  {
    icon: CSharpIcon,
    text: 'c#'
  }
];

const GameDevInnerProfileWrapper = InnerProfileWrapper.extend`
  font-family: Babyblocks;
`;

/**
 * Webdev Profile
 */
const WebdevProfile = () => (
  <GameDevInnerProfileWrapper>
    <Picture src={imgSrc} alt="Luc-Frederic Langis" />
    <Text textAlign="center" fontSize="22px">Luc-Frederic Langis</Text>
    <Text fontSize="16px">Amateur video game dev</Text>
    <Tags items={skills} />
  </GameDevInnerProfileWrapper>
);


export default WebdevProfile;
