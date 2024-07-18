import { useEffect } from "react";
import "./App.css";
import MoviesCards from "./MoviesCards/MoviesCards";
import SearchInput from "./SearchInput/SearchInput";
import Header from "./Header/Header";
import getMoviesService from "./services/moviesService";

function App() {
  useEffect(() => {
    const movies = getMoviesService();
    console.log(movies);
  }, []);

  return (
    <>
      <Header />
      <SearchInput />
      <MoviesCards />
    </>
  );
}

export default App;
