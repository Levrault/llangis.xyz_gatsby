import React from 'react';
import List from '../commons/list';
import ListItem from '../commons/listItem';
import GitHub from './github.svg';
import Twitter from './twitter.svg';
import Linkedin from './linkedin.svg';

const Social = () => (
  <List>
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
  </List>
);

export default Social;
