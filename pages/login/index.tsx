import React, { useEffect } from "react";

export default function index() {
  //   const toggleScreen = () => {
  //     /* ====================== *
  //      *  Toggle Between        *
  //      *  Sign Up / Login       *
  //      * ====================== */
  //     document.querySelector("#goRight").addEventListener("click", function () {
  //       document.querySelector("#slideBox").animate({
  //         marginLeft: "0",
  //       });
  //       document.querySelector(".topLayer").animate({
  //         marginLeft: "100%",
  //       });
  //     });
  //     document.querySelector("#goLeft").addEventListener("click", function () {
  //       if (window.innerWidth > 769) {
  //         document.querySelector("#slideBox").animate({
  //           marginLeft: "50%",
  //         });
  //       } else {
  //         document.querySelector("#slideBox").animate({
  //           marginLeft: "20%",
  //         });
  //       }
  //       document.querySelector(".topLayer").animate({
  //         marginLeft: "0",
  //       });
  //     });
  //   };

  //   toggleScreen();

  useEffect(() => {
    document.querySelector("#goRight").addEventListener("click", function () {
      console.log(123);
      document.querySelector("#slideBox").animate({
        marginLeft: "0",
      });
      document.querySelector(".topLayer").animate({
        marginLeft: "100%",
      });
    });
    document.querySelector("#goLeft").addEventListener("click", function () {
      if (window.innerWidth > 769) {
        document.querySelector("#slideBox").animate({
          marginLeft: "50%",
        });
      } else {
        document.querySelector("#slideBox").animate({
          marginLeft: "20%",
        });
      }
      document.querySelector(".topLayer").animate({
        marginLeft: "0",
      });
    });
  }, []);

  return (
    <div>
      <div id="back">
        <canvas id="canvas" className="canvas-back" />
        <div className="backRight"></div>
        <div className="backLeft"></div>
      </div>
      <div id="slideBox">
        <div className="topLayer">
          <div className="left">
            <div className="content">
              <h2>Sign Up</h2>
              <form id="form-signup" method="post">
                <div className="form-element form-stack">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input id="email" type="email" name="email" />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="username-signup" className="form-label">
                    Username
                  </label>
                  <input id="username-signup" type="text" name="username" />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="password-signup" className="form-label">
                    Password
                  </label>
                  <input id="password-signup" type="password" name="password" />
                </div>
                <div className="form-element form-checkbox">
                  <input
                    id="confirm-terms"
                    type="checkbox"
                    name="confirm"
                    defaultValue="yes"
                    className="checkbox"
                  />
                  <label htmlFor="confirm-terms">
                    I agree to the <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>
                  </label>
                </div>
                <div className="form-element form-submit">
                  <button
                    id="signUp"
                    className="signup"
                    type="submit"
                    name="signup"
                  >
                    Sign up
                  </button>
                  <button id="goLeft" className="signup off">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <h2>Login</h2>
              <form id="form-login" method="post">
                <div className="form-element form-stack">
                  <label htmlFor="username-login" className="form-label">
                    Username
                  </label>
                  <input id="username-login" type="text" name="username" />
                </div>
                <div className="form-element form-stack">
                  <label htmlFor="password-login" className="form-label">
                    Password
                  </label>
                  <input id="password-login" type="password" name="password" />
                </div>
                <div className="form-element form-submit">
                  <button
                    id="logIn"
                    className="login"
                    type="submit"
                    name="login"
                  >
                    Log In
                  </button>
                  <button id="goRight" className="login off" name="signup">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
