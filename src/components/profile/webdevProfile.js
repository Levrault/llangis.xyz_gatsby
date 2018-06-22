import React from 'react';
import imgSrc from './profile_webdev.png';
import ReactIcon from './react-icon.png';
import ReduxIcon from './redux-icon.png';
import WebpackIcon from './webpack-icon.png';
import StyledComponentIcon from './styled-components-icon.png';
import Picture from '../commons/picture';
import InnerProfileWrapper from '../commons/innerProfileWrapper';
import Tags from './tags';
import Text from '../commons/text';

const skills = [
  {
    icon: ReactIcon,
    text: 'react'
  },
  {
    icon: ReduxIcon,
    text: 'redux'
  },
  {
    icon: WebpackIcon,
    text: 'webpack'
  },
  {
    icon: StyledComponentIcon,
    text: 'styled-components'
  }
];

/**
 * Webdev Profile
 */
const WebdevProfile = () => (
  <InnerProfileWrapper>
    <Picture src={imgSrc} alt="Luc-Frederic Langis" />
    <Text textAlign="center" fontSize="22px">Luc-Frederic Langis</Text>
    <Text fontSize="16px">Front End developer</Text>
    <Tags items={skills} />
  </InnerProfileWrapper>
);


export default WebdevProfile;
