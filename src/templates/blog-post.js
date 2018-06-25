import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Content from '../components/commons/content';
import '../components/utils/typography';

/**
 * Article template
 */
const ArticleTemplate = ({ data, pathContext }) => {
  const post = data.markdownRemark;
  const siteTitle = get(data, 'site.siteMetadata.title');
  const { html, frontmatter: { title, date } } = post;

  return (
    <Content>
      <Helmet title={`${post.frontmatter.title} - ${siteTitle}`} />
      <h1>{title}</h1>
      <p>
        {date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Content>
  );
};

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
