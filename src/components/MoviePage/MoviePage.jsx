import React, { useEffect, useState } from "react";
import "./movie-page.css";
import { useParams } from "react-router-dom";
import { getMovieById, controller } from "../../util/api";
import PageCard from "../PageCard/PageCard";
import PageCardSkeleton from "../SkeletonLoader/PageCardSkeleton/PageCardSkeleton";

function MoviePage() {
  const [fullMovieData, setFullMovieData] = useState([]);
  const [isMoviePageLoading, setIsMoviePageLoading] = useState(false);

  const movieId = useParams();

  useEffect(() => {
    setIsMoviePageLoading((prev) => !prev);
    getMovieById(movieId).then((response) => {
      setFullMovieData(response);
      setIsMoviePageLoading((prev) => !prev);
    });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="d-flex flex-column align-items-center col-12">
      <h1 className="movie-page-title display-3 my-4">
        {fullMovieData?.Title}
      </h1>
      {isMoviePageLoading && <PageCardSkeleton />}
      {!isMoviePageLoading && <PageCard fullData={fullMovieData} />}
    </div>
  );
}

export default MoviePage;
