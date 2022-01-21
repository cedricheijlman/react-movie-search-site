import React from "react";
import Movie from "./Movie";

function Discovery({ data }) {
  return (
    <div id="discovery">
      <h2>Discovery</h2>
      <div id="discoveryRow">
        {data &&
          data.map((movie) => {
            return (
              <Movie
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                key={movie.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Discovery;
