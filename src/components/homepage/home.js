import React from 'react';
import Page from '../commons/page';
import Avatar from '../avatar/avatar';
import Fade from '../animations/fade';
import Text from '../commons/text';
import AppContext from '../../context/appContext';

/**
 * Like in every video game, we land on the famous "press start screen"
 */
const Home = () => (
  <Page>
    <div>
      <Fade duration={1}>
        <Avatar />
      </Fade>
      <AppContext.Consumer>
        {({ author }) => (
          <React.Fragment>
            <Fade duration={2}>
              <Text style={{ textAlign: 'center' }}>{author}</Text>
            </Fade>
            <Fade duration={3}>
              <Text style={{ textAlign: 'center' }}>Welcome to my website</Text>
            </Fade>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    </div>
  </Page>
);

export default Home;
