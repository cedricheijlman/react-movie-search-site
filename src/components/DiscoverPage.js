import Axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

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
    <div>
      {data &&
        data.map((test) => {
          return <Movie>Hello</Movie>;
        })}
    </div>
  );
}

export default DiscoverPage;
