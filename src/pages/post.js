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
const PostIndex = (data) => {
  const posts = get(data, 'data.allMarkdownRemark.edges');
  const siteTitle = get(data, 'data.site.siteMetadata.title');

  return (
    <Content>
      <Helmet title={`posts - ${siteTitle}`} />
      {posts.map(({ node }) => {
        const { slug } = node.fields;
        const { date } = node.frontmatter;
        const title = get(node, 'frontmatter.title') || slug;
        return (
          <Fade key={slug}>
            <Fragment>
              <h3>
                <Link to={slug}>{title}</Link>
              </h3>
              <small>{date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </Fragment>
          </Fade>
        );
      })}
    </Content>
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
