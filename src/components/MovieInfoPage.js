import Axios from "axios";
import React, { useEffect, useState } from "react";
import useMovieDetails from "../useMovieDetails";

function MovieInfoPage() {
  const { data: movieDetails } = useMovieDetails();

  /*
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${window.location.pathname.slice(
        8
      )}?api_key=52d81c56d9d5e31ed4d43c2bdda0dfc4&language=en-US`
    )
      .then((res) => {
        setMovie(res.data);
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log("Error Sorry");
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }, []);*/

  return <div>{movieDetails && <h1>{movieDetails.original_title}</h1>}</div>;
}

export default MovieInfoPage;
