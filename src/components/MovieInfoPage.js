import Axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import "./movieInfoPage.css";
import StarIcon from "@mui/icons-material/Star";

import Trailers from "./Trailers";
import CastOverview from "./CastOverview";

function MovieInfoPage() {
  // Current movieID , apiKey
  const movieID = window.location.pathname.slice(8);
  const apiKey = "52d81c56d9d5e31ed4d43c2bdda0dfc4";
  const imageLink = "https://image.tmdb.org/t/p/original/";

  // Movie Details, videos, recommendations, images, cast/credits
  const { data: movieDetails } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=videos,recommendations,images,credits,reviews&language=en-US`
  );
  console.log(movieDetails);
  return (
    <>
      {movieDetails && (
        <>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(9,9,121,0.07746848739495793) 0%, rgba(7,8,24,0.8603816526610644) 0%), url(${
                imageLink + movieDetails.backdrop_path
              })`,
            }}
            className="textBox_movie"
          >
            <img src={imageLink + movieDetails.poster_path} />
            <h2>
              {movieDetails.title}{" "}
              <span
                style={{
                  color: "darkgray",
                  fontSize: 22,
                  marginleft: 5,
                  fontWeight: 400,
                }}
              >
                {"(" + movieDetails.release_date.slice(0, 4) + ")"}
              </span>
            </h2>
            <div className="genreList_movie">
              {movieDetails.genres.map((genre) => {
                return <span key={genre.id}>{genre.name}</span>;
              })}
            </div>
            <p>{movieDetails.overview}</p>
            <div className="ratingMovie">
              <StarIcon></StarIcon>
              <p>{movieDetails.vote_average}</p>
            </div>
          </div>
          <Trailers movieDetails={movieDetails} />
          <CastOverview cast={movieDetails.credits.cast} />
        </>
      )}
    </>
  );
}

export default MovieInfoPage;
