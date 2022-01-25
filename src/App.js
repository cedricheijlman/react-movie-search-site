import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import useFetch from "./useFetch";
import MovieInfoPage from "./components/MovieInfoPage";
import HomePage from "./components/HomePage";
import ActorPage from "./components/ActorPage";
import DiscoverPage from "./components/DiscoverPage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [currentMovie, setCurrentMovie] = useState("");

  return (
    <div className="App">
      <Header setCurrentMovie={setCurrentMovie} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movies/:id"
          element={<MovieInfoPage currentMovie={currentMovie} />}
        />
        <Route path="/actors/:id" element={<ActorPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
