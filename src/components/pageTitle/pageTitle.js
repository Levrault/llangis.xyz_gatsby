import React from 'react';
import AppContext from '../../context/appContext';
import Title from '../commons/title';

/**
 * Page title
 * @returns {node}
 */
const PageTitle = () => (
  <AppContext.Consumer>
    {({ context }) => (
      <Title><span>{context}</span></Title>
    )}
  </AppContext.Consumer>
);

export default PageTitle;
