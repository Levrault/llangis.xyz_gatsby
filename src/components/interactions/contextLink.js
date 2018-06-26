import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import AppContext from '../../context/appContext';
import CONTEXT from '../../context/appConstant';

const Link = styled.a`
  border: none;
  color: hsla(0,0%,0%,0.8);
  background:none;
  cursor: pointer;
`;

/**
 * onclick button actions
 * @param {string} context
 * @param {function} callback
 */
const handleClick = (url, context, callback) => () => {
  callback(context);
  navigateTo(`/${url}`);
};

/**
 * Change application context
 */
const ContextLink = ({ children, url, context }) => (
  <AppContext.Consumer>
    {({ toggleContext }) => (
      <Fragment>
        <Link onClick={handleClick(url, context, toggleContext)}>
          {children || url}
        </Link>
      </Fragment>
    )}
  </AppContext.Consumer>
);

ContextLink.propTypes = {
  children: PropTypes.string,
  url: PropTypes.string.isRequired,
  context: PropTypes.string
};

ContextLink.defaultProps = {
  context: CONTEXT.WEBDEV
};

export default ContextLink;
