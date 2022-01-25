import React from "react";
import useFetch from "../../useFetch.js";
import Movie from "../Movie";

function Discovery() {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=52d81c56d9d5e31ed4d43c2bdda0dfc4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );
  return (
    <div id="discovery">
      <h2>Discovery</h2>
      <div id="discoveryRow">
        {data &&
          data.results.map((movie) => {
            return (
              <Movie
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                key={movie.id}
                movieId={movie.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Discovery;
