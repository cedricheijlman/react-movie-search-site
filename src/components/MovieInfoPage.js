import Axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import "./movieInfoPage.css";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import Trailers from "./Trailers";
import CastOverview from "./CastOverview";

function MovieInfoPage({ currentMovie }) {
  // Current movieID , apiKey

  const apiKey = "52d81c56d9d5e31ed4d43c2bdda0dfc4";
  const imageLink = "https://image.tmdb.org/t/p/original/";

  // Movie Details, videos, recommendations, images, cast/credits
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${window.location.pathname.slice(
        8
      )}?api_key=${apiKey}&append_to_response=videos,recommendations,images,credits,reviews&language=en-US`
    ).then((res) => {
      setMovieDetails(res.data);
    });
  }, [currentMovie]);

  // const { data: movieDetails, error } = useFetch(
  // `https://api.themoviedb.org/3/movie/${window.location.pathname.slice(
  //     8
  //   )}?api_key=${apiKey}&append_to_response=videos,recommendations,images,credits,reviews&language=en-US`
  // );
  console.log(movieDetails);
  return (
    <>
      {movieDetails && movieDetails !== null && movieDetails !== "" && (
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
      {error && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid grey",
            marginTop: "150px",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ color: "red" }}>404 ERROR</h2>
          <h3>
            <Link style={{ color: "white" }} to="/">
              click to go back to Homepage
            </Link>
          </h3>
        </div>
      )}
    </>
  );
}

export default MovieInfoPage;
