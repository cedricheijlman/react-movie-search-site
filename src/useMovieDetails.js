import React, { useEffect, useState } from "react";
import Axios from "axios";

function useMovieDetails() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Axios.get(
      `https://api.themoviedb.org/3/movie/${window.location.pathname.slice(
        8
      )}?api_key=52d81c56d9d5e31ed4d43c2bdda0dfc4&language=en-US`
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

export default useMovieDetails;
