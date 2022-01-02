import axios from "axios";

const baseURL = `https://www.omdbapi.com/`;

export let controller;

export const getMoviesData = async (movie) => {
  try {
    const response = await axios.get(
      `${baseURL}?s=${movie.Title}&y=${movie.Year}&apikey=c163b57c`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieById = async (movie) => {
  controller = new AbortController();
  try {
    const response = await axios.get(
      `${baseURL}?i=${movie.id}&apikey=c163b57c`,
      { signal: controller.signal }
    );
    return  response.data;
  } catch (err) {
    console.log(err);
  }
};
