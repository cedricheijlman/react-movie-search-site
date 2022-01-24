import React from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

import "./actorPage.css";

function ActorPage() {
  // Current movieID , apiKey
  const actorID = window.location.pathname.slice(8);
  const apiKey = "52d81c56d9d5e31ed4d43c2bdda0dfc4";
  const imageLink = "https://image.tmdb.org/t/p/original/";

  const { data: actorData, error } = useFetch(
    `https://api.themoviedb.org/3/person/${actorID}?api_key=${apiKey}&append_to_response=movie_credits,&language=en-US`
  );

  console.log(actorData);

  return (
    <>
      {actorData && (
        <div className="actorPage__container">
          <div className="actorPage__card">
            <img src={imageLink + actorData.profile_path} />

            <h2>{actorData.name}</h2>

            <div>
              <h4>Biography</h4>
              <p>{actorData.biography}</p>
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <div style={{ margin: "0 10px" }}>
                <h4>Birthplace</h4>
                <p>{actorData.place_of_birth}</p>
              </div>
              <div style={{ margin: "0 10px" }}>
                <h4>Birthday</h4>
                <p>{actorData.birthday}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {actorData && (
        <div id="actorMovieCredits">
          <h2>Known for</h2>
          <div className="actorMovieCredits__row">
            {actorData.movie_credits.cast.slice(0, 12).map((movie) => {
              return (
                <Link to={`/movies/${movie.id}`}>
                  <div key={movie.id} className="actorMovieCredits__movie">
                    <img
                      src={
                        movie.poster_path
                          ? imageLink + movie.poster_path
                          : "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                      }
                    />
                    <div className="knownFor__movieName">
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
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

export default ActorPage;
