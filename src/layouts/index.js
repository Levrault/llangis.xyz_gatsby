import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { injectGlobal } from 'styled-components';
import Babyblocks from './Babyblocks.ttf';
import Favicon from './favicon.ico';
import Navbar from '../components/navbar/navbar';
import AppContext from '../context/appContext';
import CONTEXT from '../context/appConstant';
import Social from '../components/social/social';
import Profile from '../components/profile/profile';
import '../components/utils/typography';

/* eslint-disable no-unused-expressions */
injectGlobal`
  @font-face {
    font-family: Babyblocks;
    src: url("${Babyblocks}");
  }
  html {
    overflow-y: hidden;
    background: #f1f1f1;
  }
`;
/* eslint-enable no-unused-expressions */

const isGameDevDomain = new RegExp(`${CONTEXT.GAMEDEV}`);

/**
 * Main layout
 */
class Layout extends Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor (props) {
    super(props);

    this.state = {
      context: CONTEXT.GAMEDEV,
      profileEnable: false
    };
  }

  /**
   * Set context on mount
   */
  componentDidMount () {
    const isGameDev = (isGameDevDomain.test(location.pathname));
    this.setState({
      context: (isGameDev) ? CONTEXT.GAMEDEV : CONTEXT.WEBDEV
    });
  }

  /**
   * Update home context
   * @param {string} context
   */
  toggleContext = (context) => {
    this.setState({
      context
    });
  }

  /**
   * Show profile preview or not
   * @param {bool} profileEnable
   */
  toggleProfile = (profileEnable, context) => {
    this.setState({
      profileEnable,
      context
    });
  }

  /**
   * render
   */
  render () {
    const { children } = this.props;

    // helmet
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const meta = [
      { name: 'description', content: 'Hi folks' },
      { name: 'keywords', content: 'blog, react, unity, front-end, game design' }
    ];

    // store value
    const store = {
      ...this.state,
      toggleContext: this.toggleContext,
      toggleProfile: this.toggleProfile
    };

    return (
      <div>
        <Helmet title={siteTitle} meta={meta}>
          <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
        </Helmet>
        <AppContext.Provider value={{ ...store }}>
          <Navbar />
          <Profile />
          <div>
            {children()}
          </div>
          <Social />
        </AppContext.Provider>
      </div>
    );
  }
}


Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
