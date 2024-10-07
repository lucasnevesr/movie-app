import { useState, useEffect } from "react";
import "./Home.css";
import MoviesCards from "../MoviesCards/MoviesCards";
import SearchInput from "../SearchInput/SearchInput";
import Header from "../Header/Header";
import {getMovies} from "../services/moviesService";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieList = await getMovies(pageNumber);
        if (pageNumber !== 1) {
          setMoviesList(prevState => [...prevState, ...movieList.results]);
        } else {setMoviesList(movieList.results)}
        
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };
   
    if (moviesList.length === 0) {
      
      fetchMovies();
    }
  }, [pageNumber, moviesList]);
  
  

  return (
    <>
      <Header />
      <SearchInput setMoviesList={setMoviesList} />
      <MoviesCards moviesList={moviesList} />
      <LoadMoreButton setPageNumber={setPageNumber} />
    </>
  );
}

export default Home;
