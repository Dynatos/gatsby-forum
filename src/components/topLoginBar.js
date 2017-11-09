import React, { Component } from 'react';

const loginUsername = () => (
  <div className="login-box-style">
    <input
      className="login-box-input-style"
      placeholder="Username"
      required
    />
  </div>
);

const loginPassword = () => (
  <div className="login-box-style">
    <input
      className="login-box-input-style"
      placeholder="Password"
      required
    />
  </div>
);

const loginAccept = () => (
  <button type="submit" value="OK" className="login-accept-button-style">
    Submit
  </button>
);

const loginSignup = () => (
  <div className="login-text-link-style">
    <a href='/asd'>
      Sign up
    </a>
  </div>
);

const loginForgotLogin = () => (
  <div className="login-text-link-style">
    <a href='/asd'>
      Recover
    </a>
  </div>
);

class TopLoginBar extends Component {
  render() {
    return (
      <div className="homepage-title-text-and-login-form">
        <div className="login-title-text">
          {this.props.data.site.siteMetadata.title}
        </div>
        <form action="/login" className="login-form-parent">
          <div>
            {loginUsername()}
            {loginPassword()}
          </div>
          {loginAccept()}
        </form>
        <div className="login-anchor-signup-recover-parent">
          {loginSignup()}
          {loginForgotLogin()}
        </div>
      </div>
    )
  }
}

export default TopLoginBar