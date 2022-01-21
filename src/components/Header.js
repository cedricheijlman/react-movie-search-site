import React from "react";

function Header() {
  return (
    <nav id="navbar">
      <h1>Movie FinderUS</h1>
      <input placeholder="Search" />
      <ul>
        <li>Home</li>
        <li>Discover</li>
        <li>Movies</li>
        <li>TV Shows</li>
      </ul>
    </nav>
  );
}

export default Header;
