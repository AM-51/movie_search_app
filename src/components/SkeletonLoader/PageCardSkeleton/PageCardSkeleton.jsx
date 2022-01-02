import React from "react";
import "./page-card-skeleton.css";
import { Card } from "react-bootstrap";

function MoviePageSkeleton() {
  return (
    <>
      <div className="page-card-title-skeleton mt-2 rounded align-self-center" />
      <Card className="d-flex flex-row page-card-container border-0 my-5 col-8">
        <div className="d-flex flex-column col-4">
          <div className="page-card-image-skeleton col-12" />
        </div>
        <div className="d-flex flex-column col-8">
          <div className="page-card-name-skeleton mt-2 rounded align-self-center" />
          <div className="page-card-text-skeleton mt-4 ms-3 rounded" />
          <div className="page-card-text-skeleton mt-3 ms-3 rounded" />
          <div className="page-card-short-text-skeleton mt-5 ms-3 rounded" />
          <div className="page-card-short-text-skeleton mt-4 ms-3 rounded" />
          <div className="page-card-short-text-skeleton mt-4 ms-3 rounded" />
        </div>
      </Card>
    </>
  );
}

export default MoviePageSkeleton;
