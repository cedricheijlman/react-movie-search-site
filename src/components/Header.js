import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({ setCurrentMovie }) {
  const API_key = "52d81c56d9d5e31ed4d43c2bdda0dfc4";
  const imageLink = "https://image.tmdb.org/t/p/original/";

  const [search, setSearch] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (search !== null && search !== "") {
      Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_key}&language=en-US&query=${
          search && search.replace(/\s/g, "%20")
        }&page=1&include_adult=false`
      ).then((res) => {
        setQueryResult(res.data.results);
        setScroll(true);
      });
    }
  }, [search]);

  function handleScroll() {
    setScroll(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar">
      <Link to="/">
        <h1>Movie Finder</h1>
      </Link>
      <div
        style={{
          positon: "relative",
          border: "1px solid green",
          width: "23%",
        }}
      >
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
        />
        {search !== "" && scroll == true && search !== "" && (
          <div className="searchResultContainer">
            {queryResult.slice(0, 5).map((movie) => {
              return (
                <Link
                  onClick={() => {
                    setCurrentMovie(movie.id);
                    setScroll(false);
                  }}
                  to={`/movies/${movie.id}`}
                >
                  <div className="queryMovie">
                    <img
                      width={60}
                      height={100}
                      src={imageLink + movie.poster_path}
                    />
                    <div className="queryMovie_text">
                      <h4> {movie.title}</h4>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/discover">
          <li>Discover</li>
        </Link>
        <li>Movies</li>
        <li>TV Shows</li>
      </ul>
    </nav>
  );
}

export default Header;
