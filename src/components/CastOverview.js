import React from "react";
import { Link } from "react-router-dom";

function CastOverview({ cast }) {
  const imageLink = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="castOverview">
      <h2>Cast</h2>
      <div className="castOverview_row">
        {cast.slice(0, 14).map((person) => {
          return (
            <Link to={`/actors/${person.id}`}>
              <div key={person.cast_id} className="cast_card">
                <img
                  src={
                    person.profile_path == null
                      ? "https://image.tmdb.org/t/p/original//VP6VDYL0OEDwSbTRysiJ0kAGxI.jpg"
                      : imageLink + person.profile_path
                  }
                />
                <h2>{person.original_name}</h2>
                <h3>{person.character}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CastOverview;
