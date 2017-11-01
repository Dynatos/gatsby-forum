import React from 'react';
import { forumNameText } from '../constants/homepageStyleObjects';

const forumTitle = (data) => (
  <div style={{...forumNameText}}>
    {data.site.siteMetadata.title}
  </div>
);

export default ({ data }) =>
  <div style={{...forumNameText}}>
    {data.site.siteMetadata.title}
  </div>

export const query = graphql`
  query LoginBarQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;