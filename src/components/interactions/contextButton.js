import React, { Fragment } from 'react';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import AppContext from '../../context/appContext';
import ProfilePreview from '../profile/profilePreview';

const Button = styled.div`
  border: none;
  background:none;
  cursor: pointer;
  padding: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

/**
 * Change application context
 */
const ContextButton = () => {
  return (
    <Wrapper>
      <AppContext.Consumer>
        {({ context, toggleContext }) => (
          <Fragment>
            <ProfilePreview context={context} />
            <Button onClick={toggleContext}>{context}</Button>
          </Fragment>
        )}
      </AppContext.Consumer>
    </Wrapper>
  );
}

export default ContextButton;