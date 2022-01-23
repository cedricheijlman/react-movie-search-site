import React from "react";

function Trailers({ movieDetails }) {
  return (
    <div className="trailers">
      <h2 style={{ marginBottom: 30 }}>Videos</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {movieDetails.videos.results
          .filter((video) => video.name.includes("Trailer"))
          .map((video) => {
            return (
              <iframe
                key={video.id}
                width="420"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            );
          })}
        {!movieDetails.videos.results ||
          (movieDetails.videos.results.length == 0 && <p>No videos</p>)}
      </div>
    </div>
  );
}

export default Trailers;
