import { useState, useEffect } from "react";
import "./App.css";
import MoviesCards from "./MoviesCards/MoviesCards";
import SearchInput from "./SearchInput/SearchInput";
import Header from "./Header/Header";
import getMoviesService from "./services/moviesService";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieList = await getMoviesService();

        setMoviesList(movieList.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <SearchInput />
      <MoviesCards moviesList={moviesList} />
    </>
  );
}

export default App;
