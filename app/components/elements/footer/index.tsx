import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src="/static/logo.svg" alt="replica" className="logo" />

        <h3>
          About<span>Replica</span>
        </h3>
        <p className="footer-links">
          <a href="#">Home</a>|<a href="#">Blog</a>|<a href="#">About</a>|
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">
          © 2021 Eduonix Learning Solutions Pvt. Ltd.
        </p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker" />
          <p>
            <span>309 - Rupa Solitaire, Bldg. No. A - 1, Sector - 1</span>
            Mahape, Navi Mumbai - 400710
          </p>
        </div>
        <div>
          <i className="fa fa-phone" />
          <p>+91 22-27782183</p>
        </div>
        <div>
          <i className="fa fa-envelope" />
          <p>
            <a href="mailto:support@eduonix.com">support@replica.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          We provide training and skill courses across Technology, Design,
          Management, Science and Humanities.
        </p>
        <div className="footer-icons">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <LinkedIn />
          </a>
          <a href="#">
            <YouTube />
          </a>
        </div>
      </div>
    </footer>
  );
}

// <>
// {/*Hey! This is the original version
// of Simple CSS Waves*/}
// <div className="header">
//   {/*Content before waves*/}
//   <div className="footer-left">
//     <img src="/static/logo.svg" alt="replica" className="logo" />

//     <h3>
//       About<span>Replica</span>
//     </h3>
//     <p className="footer-links">
//       <a href="#">Home</a>|<a href="#">Blog</a>|<a href="#">About</a>|
//       <a href="#">Contact</a>
//     </p>
//     <p className="footer-company-name">
//       © 2021 Eduonix Learning Solutions Pvt. Ltd.
//     </p>
//   </div>
//   <div className="footer-center">
//     <div>
//       <i className="fa fa-map-marker" />
//       <p>
//         <span>309 - Rupa Solitaire, Bldg. No. A - 1, Sector - 1</span>
//         Mahape, Navi Mumbai - 400710
//       </p>
//     </div>
//     <div>
//       <i className="fa fa-phone" />
//       <p>+91 22-27782183</p>
//     </div>
//     <div>
//       <i className="fa fa-envelope" />
//       <p>
//         <a href="mailto:support@eduonix.com">support@replica.com</a>
//       </p>
//     </div>
//   </div>
//   <div className="footer-right">
//     <p className="footer-company-about">
//       <span>About the company</span>
//       We provide training and skill courses across Technology, Design,
//       Management, Science and Humanities.
//     </p>
//     <div className="footer-icons">
//       <a href="#">
//         <Facebook />
//       </a>
//       <a href="#">
//         <Twitter />
//       </a>
//       <a href="#">
//         <Instagram />
//       </a>
//       <a href="#">
//         <LinkedIn />
//       </a>
//       <a href="#">
//         <YouTube />
//       </a>
//     </div>
//   </div>
//   {/*Waves Container*/}
//   <div>
//     <svg
//       className="waves"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       viewBox="0 24 150 28"
//       preserveAspectRatio="none"
//       shapeRendering="auto"
//     >
//       <defs>
//         <path
//           id="gentle-wave"
//           d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
//         />
//       </defs>
//       <g className="parallax">
//         <use
//           xlinkHref="#gentle-wave"
//           x={48}
//           y={0}
//           fill="rgba(255,255,255,0.7"
//         />
//         <use
//           xlinkHref="#gentle-wave"
//           x={48}
//           y={3}
//           fill="rgba(255,255,255,0.5)"
//         />
//         <use
//           xlinkHref="#gentle-wave"
//           x={48}
//           y={5}
//           fill="rgba(255,255,255,0.3)"
//         />
//         <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
//       </g>
//     </svg>
//   </div>
//   {/*Waves end*/}
// </div>
// {/*Header ends*/}
// {/*Content starts*/}
// <div className="content flex">
//   <p>Daniel Österman | 2019 |&nbsp;Free to use</p>
// </div>
// {/*Content ends*/}
// </>
