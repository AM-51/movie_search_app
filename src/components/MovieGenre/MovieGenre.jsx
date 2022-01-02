import React from "react";
import "./movie-genre.css";

function MovieGenre(props) {
  return (
    <div className="genre-container">
      <p className="d-flex justify-content-center p-1 m-0">{props.genre}</p>
    </div>
  );
}

export default MovieGenre;
