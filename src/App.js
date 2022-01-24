import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import useFetch from "./useFetch";
import MovieInfoPage from "./components/MovieInfoPage";
import HomePage from "./components/HomePage";
import ActorPage from "./components/ActorPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { data: discoveryData } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=52d81c56d9d5e31ed4d43c2bdda0dfc4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );

  return (
    <div className="App">
      <Header />
      <Routes>
        <Redirect from="/movies/:id" to="/movies/:id" />
        <Route path="/" element={<HomePage data={discoveryData} />} />
        <Route path="/movies/:id" element={<MovieInfoPage />} />
        <Route path="/actors/:id" element={<ActorPage />} />
      </Routes>
    </div>
  );
}

export default App;
