import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav id="navbar">
      <Link to="/">
        <h1>Movie FinderUS</h1>
      </Link>
      <input placeholder="Search" />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/discover">
          <li>Discover</li>
        </Link>
        <li>Movies</li>
        <li>TV Shows</li>
      </ul>
    </nav>
  );
}

export default Header;
