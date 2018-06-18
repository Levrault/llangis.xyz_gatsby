import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PressStartScreen from '../components/homepage/pressStartScreen';
import Home from '../components/homepage/home';
import AppContext from '../context/appContext';

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

    console.log(props.data);

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

        <AppContext.Provider value={{ ...this.props.data.site.siteMetadata }}>
          {context === Context.PRESS_START &&
          <PressStartScreen handleContext={this.handleHomeContext} />}
          {context === Context.HOME && <Home />}
        </AppContext.Provider>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query IndexStoreQuery {
    site {
      siteMetadata {
        title,
        author,
        description
      }
    }
  }
`;

