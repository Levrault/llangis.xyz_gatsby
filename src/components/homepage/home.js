import React from 'react';
import Page from '../commons/page';
import Avatar from '../avatar/avatar';
import Fade from '../animations/fade';

/**
 * Like in every video game, we land on the famous "press start screen"
 */
const Home = () => (
  <Page>
    <div>
      <Fade duration={1}>
        <Avatar />
      </Fade>
    </div>
  </Page>
);

export default Home;
