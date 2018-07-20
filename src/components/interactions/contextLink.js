import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import AppContext from '../../context/appContext';
import CONTEXT from '../../context/appConstant';
import MenuLink from '../commons/MenuLink';

/**
 * Context link, change app context when clicked
 */
class ContextLink extends Component {
  /**
  * @contructor
  * @param {object} props
  */
  constructor (props) {
    super(props);
    this.state = {
      isMouseIn: false
    };
  }

  /**
   * onclick button actions
   * @param {string} context
   * @param {function} callback
   */
  handleClick = (url, context, callback) => () => {
    callback(context);
    navigateTo(`/${url}`);
  };

  /**
   * Show profile on mouse enter
   * @param {function} callback
   * @param {string}   context
   */
  handleMouseEnter = (callback, context) => () => {
    this.setState({
      isMouseIn: true
    });
    setTimeout(() => {
      if (this.state.isMouseIn) {
        callback(true, context);
      }
    }, 500);
  };

  /**
   * hide profile on mouse leave
   * @param {function} callback
   * @param {string}   context
   */
  handleMouseLeave = (callback, context) => () => {
    this.setState({
      isMouseIn: false
    });
    callback(false, context);
  };

  /**
  * Render
  */
  render () {
    const { children, url, context, hasProfile } = this.props;
    return (
      <AppContext.Consumer>
        {({ toggleContext, toggleProfile }) => (
          <Fragment>
            {hasProfile &&
              <MenuLink
                onClick={this.handleClick(url, context, toggleContext)}
                onMouseEnter={this.handleMouseEnter(toggleProfile, context)}
                onMouseLeave={this.handleMouseLeave(toggleProfile, context)}
              >
                {children || url}
              </MenuLink>
            }

            {!hasProfile &&
              <MenuLink onClick={this.handleClick(url, context, toggleContext)} >
                {children || url}
              </MenuLink>
            }
          </Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

ContextLink.propTypes = {
  children: PropTypes.string,
  url: PropTypes.string.isRequired,
  context: PropTypes.string,
  hasProfile: PropTypes.bool
};

ContextLink.defaultProps = {
  context: CONTEXT.WEBDEV,
  hasProfile: false
};


export default ContextLink;
