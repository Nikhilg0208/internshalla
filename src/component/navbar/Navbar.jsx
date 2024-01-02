import React from "react";
import style from "./style.css";
export const Navbar = () => {
  return (
    <div className="maindiv">
      <img
        className="sciastra_icon"
        src="	https://www.sciastra.com/navbar/sciastra.webp"
        alt="logo
        "
      />
      <ul className="List">
        <li className="Li">
          Research Institutes
          <div className="hovering personalone">
            <div className="temp1">IISC</div>
            <div className="temp1">IISER</div>
            <div className="temp1">NISER</div>
            <div className="temp1">ISI</div>
            <div className="temp1">CMI</div>
            <div className="temp1">IACS</div>
            <div className="temp1">CEBS</div>
          </div>
        </li>
        <li className="Li">Courses</li>
        <li className="Li">Selections</li>
        <li className="Li">
          Our Team
          <div className="hovering">
            <div className="temp1">Mission</div>
            <div className="temp1">Team</div>
            <div className="temp1">Book a session</div>
          </div>
        </li>
        <li className="Li">
          Resources
          <div className="hovering personalthree">
            <div className="temp1">Blogs</div>
            <div className="temp1">Material</div>
            <div className="temp1">Web Stories</div>
            <div className="temp1">Alumni Login</div>
          </div>
        </li>
        <li className="Li">Contact Us</li>
      </ul>
      <button className="btn">Login</button>
    </div>
  );
};
