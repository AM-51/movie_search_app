import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import "./movie-card.css";
import { appContext } from "../../context/appContext";
import MovieCardSkeleton from "../SkeletonLoader/MovieCardSkeleton/MovieCardSkeleton";
import { useNavigate } from "react-router-dom";

function MovieCard(props) {
  const { isCardLoading } = useContext(appContext);

  const navigate = useNavigate();

  const handleMoviePageOpen = () =>
    navigate(`/movie-page/${props.movie?.imdbID}`);

  return (
    <>
      {isCardLoading && <MovieCardSkeleton />}
      {!isCardLoading && (
        <button
          onClick={handleMoviePageOpen}
          className="d-flex justify-content-center align-items-center btn-container my-5 border-0"
        >
          <Card className="d-flex flex-column movie-card-container border-0 col-12">
            <div className="d-flex col-12 img-container">
              {props.movie?.Poster === "N/A" ? (
                <img
                  className="image-placeholder"
                  src="/images/no_poster.png"
                  alt="Placeholder"
                />
              ) : (
                <img
                  className="image-placeholder"
                  src={props.movie?.Poster}
                  alt="Movie Poster"
                />
              )}
            </div>
            <div className="d-flex flex-column col-12">
              <div className="d-flex flex-column align-items-center col-12 p-2">
                <p className="d-flex movie-title m-0">{props.movie?.Title}</p>
                <p className="d-flex col-12 justify-content-center m-0">
                  {props.movie?.Released === "N/A"
                    ? "Info Not Available"
                    : props.movie?.Year}
                </p>
              </div>
            </div>
          </Card>
        </button>
      )}
    </>
  );
}

export default MovieCard;
