import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import AppContext from '../context/appContext';

const Context = {
  WEBDEV: 'WEBDEV',
  GAMEDEV: 'GAMEDEV',
};

/**
 * Index page
 */
const IndexPage = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  return (
    <div>
      <AppContext.Consumer>
        {({ context }) => (
          <React.Fragment>
            <Helmet title={`${context} - ${siteTitle}`} />
            <span>{context}</span>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    </div>
  );
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

