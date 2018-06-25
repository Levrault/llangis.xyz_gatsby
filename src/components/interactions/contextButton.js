import React, { Fragment } from 'react';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import ArrowLeft from './arrow-left-icon.svg';
import ArrowRight from './arrow-right-icon.svg';
import AppContext from '../../context/appContext';
import Icon from '../commons/icon';

const IconContext = Icon.extend`
  margin: 0 2px;
  height: 16px;
`;

const Button = styled.a`
  border: none;
  color: hsla(0,0%,0%,0.8);
  background:none;
  padding: 8px 16px 16px 0;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

/**
 * onclick button actions
 * @param {string} context
 * @param {function} callback
 */
const handleClick = (url, callback) => () => {
  callback();
  navigateTo(`/${url}`);
};

/**
 * Change application context
 */
const ContextButton = () => {
  return (
    <Wrapper>
      <AppContext.Consumer>
        {({ context, nextContext, toggleContext }) => (
          <Fragment>
            <Button onClick={handleClick(nextContext, toggleContext)}>
              <IconContext src={ArrowLeft} />
              {context}
              <IconContext src={ArrowRight} />
            </Button>
          </Fragment>
        )}
      </AppContext.Consumer>
    </Wrapper>
  );
};

export default ContextButton;
