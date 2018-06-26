import React from 'react';
import HorizontalList from '../commons/horizontalList';
import ListItem from '../commons/listItem';
import GitHub from './github.svg';
import Twitter from './twitter.svg';
import Linkedin from './linkedin.svg';
import ProfilePreview from '../profile/profilePreview';
import AppContext from '../../context/appContext';

/**
 * Social media button and profile
 */
const Social = () => (
  <HorizontalList>
    <ListItem>
      <a href="https://twitter.com/LFLangis" target="_blank">
        <img src={Twitter} alt="Twitter icon" />
      </a>
    </ListItem>
    <ListItem>
      <a href="https://github.com/Levrault" target="_blank">
        <img src={GitHub} alt="GitHub icon" />
      </a>
    </ListItem>
    <ListItem>
      <a href="https://www.linkedin.com/in/lucfredericlangis/" target="_blank">
        <img src={Linkedin} alt="Linkedin icon" />
      </a>
    </ListItem>
  </HorizontalList>
);

export default Social;
