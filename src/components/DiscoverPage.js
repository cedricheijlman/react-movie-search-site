import Axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./DiscoverPage.css";
function DiscoverPage() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=52d81c56d9d5e31ed4d43c2bdda0dfc4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`
    ).then((res) => {
      if (pageNumber !== res.data.total_pages) {
        setData([...data, ...res.data.results]);
      }
    });
  }, [pageNumber]);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div id="discoverPage">
      <h2>Discover Movies</h2>
      <div className="discoverPage__movies">
        {data &&
          data.map((movie) => {
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

export default DiscoverPage;
