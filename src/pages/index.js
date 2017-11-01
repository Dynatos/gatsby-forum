import React from 'react';

const IndexPage = () => (
  <div>
    <div>
      this is text below the stuff
    </div>
  </div>
);

export default IndexPage

export const query = graphql`
  query LoginBarQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;