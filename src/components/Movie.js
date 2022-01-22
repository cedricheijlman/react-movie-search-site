import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import Axios from "axios";
function Movie({ src, title, voteAverage, movieId }) {
  return (
    <Link style={{ textDecoration: "none" }} to={"/movies/" + movieId}>
      <div className="discoveryMovie">
        <img width="170" src={src} />
        <div className="title">
          <h5>{title}</h5>
        </div>
        <div className="ratingMovie">
          <StarIcon className="star"></StarIcon>
          <span>{voteAverage}</span>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
