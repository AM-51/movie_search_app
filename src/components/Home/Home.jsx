import React, { useContext } from "react";
import "./home.css";
import SearchForm from "../SearchForm/SearchForm";
import ResultsList from "../ResultsList/ResultsList";
import MovieNotFound from "../MovieNotFound/MovieNotFound";
import { appContext } from "../../context/appContext";
import { GiFilmSpool } from "react-icons/gi";

function Home() {
  const { moviesData, moviesError } = useContext(appContext);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <p className="display-4 mt-4 home-title">
        IMDb Search
        <GiFilmSpool className="home-title-icon ms-2" />
      </p>
      <SearchForm />
      {moviesData && <ResultsList />}
      {moviesError === "Movie not found!" && <MovieNotFound />}
    </div>
  );
}

export default Home;
