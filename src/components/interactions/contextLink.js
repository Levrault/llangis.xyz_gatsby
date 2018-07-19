import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import AppContext from '../../context/appContext';
import CONTEXT from '../../context/appConstant';
import CommonLink from '../commons/link';

const Link = CommonLink.extend`
  position: relative;
  text-align: center;
  width: 75px;

  @media (max-width: 700px) {
    width: auto;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -22px;
    left: 50%;
    right: 50%;
    height: 1px;
    background: hsla(0,0%,0%,0.8); 
    transition: all ease .2s;
  } 

  &:hover {
    &:after {
      left: 0;
      right: 0;
      height: 5px;
    }
  } 

  &:before {
    position: absolute;
    transform: translateX(-100%);
    left: -10px;
    color: #eee;
    opacity: .3;
    font-size: 8px;
  }
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
