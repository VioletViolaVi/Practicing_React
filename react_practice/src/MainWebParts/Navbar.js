import React from "react";
import "../styles/Style.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="vivian"> About Vivian | </a>
        </li>
        <li>
          <a href="interests">Interests | </a>
        </li>
        <li>
          <a href="aspirations">Aspirations </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
