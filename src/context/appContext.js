import { createContext } from "react";

export const appContext = createContext({
  moviesData: [],
  setMoviesData: () => {},
  isCardLoading: false,
  setIsCardLoading: () => {},
  moviesError: [],
  setMoviesError: () => {},
});
