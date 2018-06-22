import React, { Fragment } from 'react';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import AppContext from '../../context/appContext';

const Button = styled.div`
  border: none;
  background:none;
  padding: 8px 16px 16px 0;
  text-decoration: underline;
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
              {context}
            </Button>
          </Fragment>
        )}
      </AppContext.Consumer>
    </Wrapper>
  );
};

export default ContextButton;
