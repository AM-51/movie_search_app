import React, { useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { appContext } from "../../context/appContext";
import { v4 as uuidv4 } from "uuid";

function ResultsList() {
  const { moviesData } = useContext(appContext);

  return (
    <div className="col-8">
      <div className="d-flex col-12 justify-content-evenly flex-wrap">
        {moviesData &&
          moviesData.map((movie) => <MovieCard key={uuidv4()} movie={movie} />)}
      </div>
    </div>
  );
}

export default ResultsList;
