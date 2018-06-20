import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import PressStartScreen from '../components/homepage/pressStartScreen';
import Home from '../components/homepage/home';
import AppContext from '../context/appContext';

const Context = {
  PRESS_START: 'PRESS_START',
  HOME: 'HOME',
};

const LocalStorageData = {
  PRESS_START: 'PressStartScreenViewed',
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

  componentDidMount() {
    if (typeof window !== 'undefined' && localStorage.getItem(LocalStorageData.PRESS_START)) {
      this.setState({
        context: Context.HOME,
      });
    }
  }

  /**
   * Update home context
   */
  handleHomeContext = () => {
    const { context } = this.state;
    const isPressStartContext = (context === Context.PRESS_START);

    if (isPressStartContext) {
      localStorage.setItem(LocalStorageData.PRESS_START, true);
    }

    this.setState({
      context: (isPressStartContext) ? Context.HOME : Context.PRESS_START,
    });
  }

  /**
   * render
   */
  render() {
    const { context } = this.state;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <div>
        <Helmet title={`home - ${siteTitle}`} />
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
        author
      }
    }
  }
`;

