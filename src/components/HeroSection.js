// import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Parallax, useParallax } from "react-scroll-parallax";
// import { ParallaxBanner } from "react-scroll-parallax";
// import { ParallaxProvider } from "react-scroll-parallax";
// import "../App.css";

// import "./HeroSection.css";
// import "./Navbar.css";

// import Typewriter from "typewriter-effect";

// function HeroSection() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   return (
//     <div className="hero-container">
//       {/* <video src="/videos/opt3.mp4" autoPlay loop muted /> */}

//       <p id="rcorners2">
//         <div className="menu-icon" onClick={handleClick}>
//           <i className={click ? "fas fa-times" : "fas fa-bars"} />
//         </div>
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <Link to="/" className="nav-links">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/projects" className="nav-links">
//               Projects
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about-me" className="nav-links">
//               About Me
//             </Link>
//           </li>

//           <li>
//             <Link to="/contact-me" className="nav-links-mobile">
//               Contact me
//             </Link>
//           </li>
//         </ul>
//       </p>

//       <h1>
//         <Typewriter
//           onInit={(typewriter) => {
//             typewriter.typeString("> Hello, Nelson here. \n").start();
//           }}
//         />
//       </h1>
//       <h2>
//         <Typewriter
//           onInit={(typewriter) => {
//             typewriter
//               .pauseFor(3700)
//               .typeString("> Sometimes I code things.\n")
//               .start();
//           }}
//         />
//       </h2>
//     </div>
//   );
// }

// export default HeroSection;

import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      {/* <h1> */}
      {/* <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("> Hello, Nelson here. \n").start();
          }}
        /> */}
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "<h1>> Hello, <span class='hero-name'>Nelson</span> here</h1>"
            )
            .start();
        }}
      />
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(3700)
            .typeString("> Sometimes I code things.\n")
            .start();
        }}
      />
      {/* </h1> */}
      <p>
        I'm a computer science student based in Central FLorida. I have an
        interest in front-end development, artificial intelligence and all
        things in between.
      </p>
    </div>
  );
}

export default HeroSection;
