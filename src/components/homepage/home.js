import React, { Fragment } from 'react';
import Content from '../commons/content';
import Fade from '../animations/fade';
import Title from '../commons/title';

/**
 * Like in every video game, we land on the famous "press start screen"
 */
const Home = () => (
  <Content>
    <div>
      <Fade duration={1}>
        <Fragment>
          <Title><span>llangis.xyz</span></Title>
          <p>
          Hi folks,
          </p>
          <p>
          I'm a front end developer and an amateur video game developer based in Paris, France.
          </p>
          <p>Feel free to read my articles event if the website is still in progress</p>
        </Fragment>
      </Fade>
    </div>
  </Content>
);

export default Home;
