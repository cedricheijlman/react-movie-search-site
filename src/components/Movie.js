import React from "react";
import StarIcon from "@mui/icons-material/Star";
function Movie({ src, title, voteAverage }) {
  return (
    <div
      onClick={() => {
        alert("hello");
      }}
      className="discoveryMovie"
    >
      <img width="170" src={src} />
      <div className="title">
        <h5>{title}</h5>
      </div>
      <div className="ratingMovie">
        <StarIcon className="star"></StarIcon>
        <span>{voteAverage}</span>
      </div>
    </div>
  );
}

export default Movie;
