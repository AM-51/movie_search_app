import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./page-card.css";
import { v4 as uuidv4 } from "uuid";
import { AiFillStar } from "react-icons/ai";
import MovieGenre from "../MovieGenre/MovieGenre";

function PageCard(props) {
  const movieGenre = props.fullData?.Genre?.split(",");

  return (
    <>
      <Card className="d-flex flex-row page-card-container border-0 mb-5 col-8">
        <div className="d-flex flex-column col-4 page-card-img-container">
          <Badge className="page-card-rating-badge justify-content-center align-items-center p-2">
            IMDb Rating{" "}
            {props.fullData?.imdbRating === "N/A"
              ? "Not Available"
              : props.fullData?.imdbRating}
            <AiFillStar className="star-icon" />
          </Badge>{" "}
          <div className="d-flex">
            {props.fullData?.Poster === "N/A" ? (
              <img
                className="page-card-image-placeholder"
                src="/images/no_poster.png"
                alt="Placeholder"
              />
            ) : (
              <img
                className="page-card-image-placeholder"
                src={props.fullData?.Poster}
                alt="Movie Poster"
              />
            )}
          </div>
        </div>
        <div className="d-flex flex-column col-8">
          <div className="d-flex flex-column col-12 p-4">
            <p className="d-flex col-12 fw-bold">
              {props.fullData?.Plot === "N/A"
                ? "Plot Not Available"
                : props.fullData?.Plot}
            </p>
            <p className="d-flex col-12">
              <span className="page-card-row-title me-1">Director: </span>{" "}
              {props.fullData?.Director === "N/A"
                ? "Info Not Available"
                : props.fullData?.Director}
            </p>
            <p className="d-flex col-12">
              <span className="page-card-row-title me-1">Actors: </span>{" "}
              {props.fullData?.Actors === "N/A"
                ? "Info Not Available"
                : props.fullData?.Actors}
            </p>
            <p className="d-flex col-12">
              <span className="page-card-row-title me-1">Writer: </span>{" "}
              {props.fullData?.Writer === "N/A"
                ? "Info Not Available"
                : props.fullData?.Writer}
            </p>
            <p className="d-flex col-12">
              <span className="page-card-row-title me-1">Date Released: </span>{" "}
              {props.fullData?.Released === "N/A"
                ? "Info Not Available"
                : props.fullData?.Released}
            </p>
            <p className="d-flex col-12">
              <span className="page-card-row-title me-1">Runtime: </span>{" "}
              {props.fullData?.Runtime === "N/A"
                ? "Info Not Available"
                : props.fullData?.Runtime}
            </p>
            <div className="d-flex col-12">
              {movieGenre &&
                movieGenre.map((genre) => (
                  <MovieGenre key={uuidv4()} genre={genre} />
                ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default PageCard;
