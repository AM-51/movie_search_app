import React, { useState } from "react";
import { appContext } from "./context/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MoviePage from "./components/MoviePage/MoviePage";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [isCardLoading, setIsCardLoading] = useState(false);
  const [moviesError, setMoviesError] = useState([]);

  const contextValue = {
    moviesData,
    setMoviesData,
    isCardLoading,
    setIsCardLoading,
    moviesError,
    setMoviesError,
  };

  return (
    <appContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-page/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </appContext.Provider>
  );
}

export default App;
