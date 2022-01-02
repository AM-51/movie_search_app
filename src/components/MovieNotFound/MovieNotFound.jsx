import React, { useContext } from "react";
import "./movie-not-found.css";
import { Card } from "react-bootstrap";
import { appContext } from "../../context/appContext";

function MovieNotFound() {
  const { moviesError } = useContext(appContext);

  return (
    <Card className="d-flex flex-row movie-error-card-container justify-content-center align-items-center border-0 my-5 col-6">
      <div className="error-msg">{moviesError}</div>
    </Card>
  );
}

export default MovieNotFound;
