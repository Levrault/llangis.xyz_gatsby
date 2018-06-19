import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Page from '../components/commons/page';
import '../components/utils/typography';

/**
 * Article template
 */
const ArticleTemplate = ({ data, pathContext }) => {
  const post = data.markdownRemark;
  const { html, frontmatter: { title, date } } = post;
  const { previous, next } = pathContext;

  return (
    <Page>
      <h1>{title}</h1>
      <p>
        {date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <ul>
        {previous && (
        <li>
          <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
          </Link>
        </li>
          )}

        {next && (
        <li>
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        </li>
          )}
      </ul>
    </Page>
  );
};

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
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
