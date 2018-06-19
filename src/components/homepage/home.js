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
        <AppContext.Consumer>
          {({ author }) => (
            <React.Fragment>
              <Text style={{ textAlign: 'center' }}>{author}</Text>
            </React.Fragment>
          )}
        </AppContext.Consumer>
        <Text style={{ textAlign: 'center' }}>Front end Engineer and amateur video game developper.</Text>
        <Text>
          You want to ear and learn about React or Unity or event Pixel art ? You are at the right place !
        </Text>
      </Fade>
    </div>
  </Page>
);

export default Home;
