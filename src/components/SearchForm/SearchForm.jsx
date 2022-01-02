import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import "./search-form.css";
import { HiOutlineSearch } from "react-icons/hi";
import { getMoviesData } from "../../util/api";
import { appContext } from "../../context/appContext";

function SearchForm() {
  const [movieName, setMovieName] = useState("");
  const { setMoviesData, setIsCardLoading, moviesError, setMoviesError } =
    useContext(appContext);
  const [isAdvancedSearchChecked, setIsAdvancedSearchChecked] = useState(false);
  const [yearReleased, setYearReleased] = useState("");

  const handleMovieNameChange = (e) => {
    const value = e.target.value;
    setMovieName(value);
  };

  const handleAdvancedSearchChange = () => {
    setIsAdvancedSearchChecked((prev) => !prev);
  };

  const handleYearReleasedChange = (event) => {
    const { value } = event.target;
    setYearReleased(value);
  };

  const handleMovieSearch = (e) => {
    e.preventDefault();
    setIsCardLoading((prev) => !prev);
    const movieToSearch = {
      Title: movieName,
      Year: yearReleased,
    };
    getMoviesData(movieToSearch).then((response) => {
      setMoviesData([]);
      setMoviesError([]);
      if (response.Error) {
        setMoviesError(response.Error);
      } else {
        setMoviesData(response.Search);
      }
      setIsCardLoading((prev) => !prev);
    });
  };

  return (
    <Form className="d-flex flex-column col-6 justify-content-center">
      <div className="d-flex col-12 search-container">
        <Form.Control
          onChange={handleMovieNameChange}
          type="text"
          placeholder="Movie Name"
          className="input border-0"
        />
        <button onClick={handleMovieSearch} className="search-btn">
          <HiOutlineSearch className="search-icon" />
        </button>
      </div>
      {moviesError === "Incorrect IMDb ID." && (
        <p className="mt-2 mb-0">
          <small className="empty-title-error">
            Please Insert Movie Name To Start
          </small>
        </p>
      )}
      <Form.Check
        type="checkbox"
        onChange={handleAdvancedSearchChange}
        label="Advanced search"
        id="checkbox"
        className="mt-2"
      />
      {isAdvancedSearchChecked && (
        <Form.Control
          onChange={handleYearReleasedChange}
          type="number"
          placeholder="Year Released"
          className="advanced-input border-0 mt-2"
        />
      )}
    </Form>
  );
}

export default SearchForm;
