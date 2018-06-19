import React from 'react';
import Link from 'gatsby-link';
import PropsType from 'prop-types';
import get from 'lodash/get';
import Page from '../components/commons/page';

/**
 * Post index
 * @param {object} data
 */
const PostIndex = (data) => {
  const posts = get(data, 'data.allMarkdownRemark.edges');

  return (
    <Page>
      {posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
    </Page>
  );
};

PostIndex.PropsType = {
  data: PropsType.object.isRequired,
};

export default PostIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
