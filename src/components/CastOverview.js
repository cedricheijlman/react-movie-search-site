import React from "react";

function CastOverview({ cast }) {
  const imageLink = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="castOverview">
      <h2>Cast</h2>
      <div className="castOverview_row">
        {cast.slice(0, 14).map((person) => {
          return (
            <div className="cast_card">
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
          );
        })}
      </div>
    </div>
  );
}

export default CastOverview;
