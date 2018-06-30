import React from 'react';
import Content from '../components/commons/content';
import Home from '../components/homepage/home';

/**
 * Post index
 * @param {object} data
 */
const Index = (data) => {
  return (
    <Content>
      <Home />
    </Content>
  );
};

Index.PropsType = {};

export default Index;
