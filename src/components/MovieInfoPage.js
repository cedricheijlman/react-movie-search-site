import Axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import "./movieInfoPage.css";

function MovieInfoPage() {
  // Current movieID , apiKey
  const movieID = window.location.pathname.slice(8);
  const apiKey = "52d81c56d9d5e31ed4d43c2bdda0dfc4";

  // Movie Details, videos, recommendations, images, cast/credits
  const { data: movieDetails } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=videos,recommendations,images,credits,reviews&language=en-US`
  );
  console.log(movieDetails);
  return (
    <>
      {movieDetails && (
        <div className="movieInfoCard">
          <div
            style={{
              backgroundImage: `url(${
                "https://image.tmdb.org/t/p/original/" +
                movieDetails.backdrop_path
              }), linear-gradient(red, yellow)`,
            }}
            className="textBox_movie"
          >
            <h1>{movieDetails.original_title}</h1>
            <p>{movieDetails.overview}</p>
            <p>{movieDetails.release_date}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieInfoPage;
