import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import Babyblocks from '../../assets/fonts/Babyblocks.ttf';

import Navbar from '../components/navbar/navbar';

/* eslint-disable no-unused-expressions */
injectGlobal`
  @font-face {
    font-family: Babyblocks;
    src: url("${Babyblocks}");
  }
`;
/* eslint-enable no-unused-expressions */

/**
 * Main Layout
 * @param {object} children
 * @param {object} data
 */
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Hi folks' },
        { name: 'keywords', content: 'blog, javascript, front-end, game design' },
      ]}
    />
    <Navbar />
    <div>
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
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
