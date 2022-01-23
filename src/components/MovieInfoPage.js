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
        <div
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(9,9,121,0.07746848739495793) 0%, rgba(7,8,24,0.8603816526610644) 0%), url(${
              "https://image.tmdb.org/t/p/original/" +
              movieDetails.backdrop_path
            })`,
          }}
          className="textBox_movie"
        >
          <img
            src={
              "https://image.tmdb.org/t/p/original/" + movieDetails.poster_path
            }
          />
          <h2>{movieDetails.title}</h2>
          <div className="genreList_movie">
            {movieDetails.genres.map((genre) => {
              return <span key={genre.id}>{genre.name}</span>;
            })}
          </div>
          <p>{movieDetails.overview}</p>
        </div>
      )}
    </>
  );
}

export default MovieInfoPage;
