import React from 'react';
import { loginBoxStyle, loginAcceptButtonStyle, loginTextLinkStyle, loginTopLoginBar, loginAcceptButtonInputText, loginBoxInputStyle, loginForm } from '../../constants/homepageStyleObjects';
import { displayFlex } from '../../constants/singleStyleObjects';

const loginUsername = () => (
  <div style={{...loginBoxStyle}}>
    <input
      style={{...loginBoxInputStyle}}
      placeholder="Username"
      required
    />
  </div>
);

const loginPassword = () => (
  <div style={{...loginBoxStyle}}>
    <input
      style={{...loginBoxInputStyle}}
      placeholder="Password"
      required
    />
  </div>
);

const loginAccept = () => (
  <button type="submit" value="OK" style={{...loginAcceptButtonInputText, ...loginAcceptButtonStyle}}>
    Submit
  </button>
);

const loginSignup = () => (
  <div style={{...loginTextLinkStyle}}>
    <a href='/asd'>
      Sign up
    </a>
  </div>
);

const loginForgotLogin = () => (
  <div style={{...loginTextLinkStyle}}>
    <a href='/asd'>
      Forgot login
    </a>
  </div>
);

export default const TopLoginBar = () => (
  <div style={{...loginTopLoginBar}}>
    <form action="/login" style={{...displayFlex, ...loginForm}}>
      {loginUsername()}
      {loginPassword()}
      {loginAccept()}
    </form>
    {loginSignup}
    {loginForgotLogin}
  </div>
);

export const query = graphql`
  query LoginBarQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;