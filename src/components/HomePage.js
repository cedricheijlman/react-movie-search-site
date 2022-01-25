import React from "react";
import Discovery from "./homepage/Discovery.js";
import LatestMovies from "./homepage/LatestMovies.js";
import TopRated from "./homepage/TopRated.js";
function HomePage() {
  return (
    <>
      <LatestMovies />
      <TopRated />
      <Discovery />
    </>
  );
}

export default HomePage;
