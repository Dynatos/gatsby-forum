import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import TopLoginBar from '../pages/components/topLoginBar';
import NavBar from './navbar.js';
import { homepageHeaderStyle } from '../constants/homepageStyleObjects';

import './index.css';

const Header = () => (
  <div style={{
    ...homepageHeaderStyle
  }}>
    <TopLoginBar />
  </div>
);

//
// DEFAULT HEADER
//
// const Header = () => (
//   <div
//     style={{
//       background: '#DDDDDD',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           Gatsby
//         </Link>
//       </h1>
//     </div>
//   </div>
// );

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <NavBar />
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper