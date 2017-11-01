import React from 'react';
import Link from 'gatsby-link';

const navLinkData = [
  {
    linkTo: '/',
    innerText: 'Home',
    last: false,
  },
  {
    linkTo: '/page-2/',
    innerText: 'Page 2',
    last: false,
  },
  {
    linkTo: '/404/',
    innerText: '404',
    last: false,
  },
  {
    linkTo: '/asd',
    innerText: 'Invalid test',
    last: true,
  },
];

const navLinkStyle = {
  width: 'fit-content',
  height: '100%',
  margin: '0 10px 0 0',
  backgroundColor: 'darkorange',
  border: '2px dotted white',
  color: 'black',
};

const NavBar = () => (
  <nav style={{
    width: '100%',
    height: '10%',
    margin: '0 auto',
  }}>
    <div style={{
      width: 'auto',
      height: '100%',
      margin: '0 auto',
    }}>
    {navLinkData.map((elem, index) => {
      if (elem.last) {
        return (
          <Link
            id={index}
            key={index}
            style={{
              ...navLinkStyle,
              margin: '0',
            }}
            to={elem.linkTo}
          >
            {elem.innerText}
          </Link>
        )
      }
      return (
        <Link
          id={index}
          key={index}
          style={{
            ...navLinkStyle,
          }}
          to={elem.linkTo}
        >
          {elem.innerText}
        </Link>
      )
    })}
    </div>
  </nav>
);

export default NavBar