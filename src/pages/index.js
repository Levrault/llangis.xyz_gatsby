import React, { Component } from 'react';
import PressStartScreen from '../components/homepage/pressStartScreen';
import Home from '../components/homepage/home';

const Context = {
  PRESS_START: 'PRESS_START',
  HOME: 'HOME',
};

/**
 * Init React Application
 */
class IndexPage extends Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      context: Context.PRESS_START,
    };
  }

  /**
   * Update home context
   */
  handleHomeContext = () => {
    this.setState({
      context: (this.state.context === Context.PRESS_START) ? Context.HOME : Context.PRESS_START,
    });
  }

  /**
   * render
   */
  render() {
    const { context } = this.state;
    return (
      <div>
        {context === Context.PRESS_START &&
          <PressStartScreen handleContext={this.handleHomeContext} />}
        {context === Context.HOME && <Home />}
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default IndexPage;
