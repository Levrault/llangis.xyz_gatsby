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

/* eslint-disable no-unused-expressions */
injectGlobal`
  @font-face {
    font-family: Babyblocks;
    src: url("${Babyblocks}");
  }
`;
/* eslint-enable no-unused-expressions */

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
      context: CONTEXT.WEBDEV
    };
  }

  /**
   * Update home context
   */
  toggleContext = (context) => {
    this.setState({
      context
    });
  }

  /**
   * render
   */
  render () {
    const { children } = this.props;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <div>
        <Helmet
          title={siteTitle}
          meta={[
            { name: 'description', content: 'Hi folks' },
            { name: 'keywords', content: 'blog, javascript, front-end, game design' }
          ]}
        >
          <link rel="icon" type="image/png" href={Favicon} sizes="16x16" />
        </Helmet>
        <AppContext.Provider value={{ ...this.state, toggleContext: this.toggleContext }}>
          <Navbar />
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
