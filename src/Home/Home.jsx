import { useState, useEffect } from "react";
import "./Home.css";
import MoviesCards from "../MoviesCards/MoviesCards";
import SearchInput from "../SearchInput/SearchInput";
import Header from "../Header/Header";
import getMoviesService from "../services/moviesService";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieList = await getMoviesService(pageNumber);
        if (pageNumber !== 1) {
          setMoviesList(prevState => [...prevState, ...movieList.results]);
        } else {setMoviesList(movieList.results)}
        
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, [pageNumber]);
  
  

  return (
    <>
      <Header />
      <SearchInput />
      <MoviesCards moviesList={moviesList} />
      <LoadMoreButton setPageNumber={setPageNumber} />
    </>
  );
}

export default Home;
