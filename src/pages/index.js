import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import PropsType from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Content from '../components/commons/content';
import Fade from '../components/animations/fade';

/**
 * Post index
 * @param {object} data
 */
const Index = (data) => {
  return (
    <Content>
      Welcome 
    </Content>
  );
};

Index.PropsType = {};

export default Index;
