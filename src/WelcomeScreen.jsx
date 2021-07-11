import React from "react";
import './WelcomeScreen.css';
function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen" align="center">
        <h1 id="welcome-header">Welcome to DevCal</h1>
        <br />
        <h4 id="welcome-text">
          Log in to see upcoming events around the world for
          full-stack
          developers
        </h4>
        <br />
        <div className="button_cont" align="center">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
                alt="Google sign-in"
              />
            </div>
            <button onClick={() => { props.getAccessToken() }}
              rel="nofollow noopener"
              className="btn-text"
            >
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
        <br />
        <a
          href="https://gcy2312.github.io/meet-app/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
      </div>
    )
    : null
}
export default WelcomeScreen;