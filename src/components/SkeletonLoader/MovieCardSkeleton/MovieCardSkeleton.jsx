import React from "react";
import "./movie-card-skeleton.css";
import { Card } from "react-bootstrap";

function MovieCardSkeleton() {
  return (
    <>
      <Card className="d-flex flex-column movie-card-container border-0 my-5 col-12">
        <div className="d-flex flex-column col-12">
          <div className="movie-card-image-skeleton col-12" />
        </div>
        <div className="d-flex flex-column col-12 align-items-center">
          <div className="movie-card-name-skeleton mt-2 rounded align-self-center" />
          <div className="movie-card-short-text-skeleton mt-4 rounded" />
        </div>
      </Card>
    </>
  );
}

export default MovieCardSkeleton;
