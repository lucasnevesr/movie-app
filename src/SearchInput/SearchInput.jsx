import "./SearchInput.css";
import { useState, useEffect } from "react";
import { useDebounce } from "../Hooks/useDebounce"
import { searchMovies } from "../services/moviesService"
function SearchInput({setMoviesList}) {

const [inputValue, setInputValue] = useState('')

const searchValue = useDebounce(inputValue, 700)

useEffect(() => {
  
  const movieFetched = async () => { 

    try { 
      const movies = await searchMovies(searchValue)  
   setMoviesList(movies.results)
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
  }
}

movieFetched()

}, [searchValue]);


  return (
    <div className="searchbar">
      <div className="searchbarContent">
         <div className="searchIcon"/>
          <input onChange={(event) => setInputValue(event.target.value)} value={inputValue} type="text" placeholder="Search" className="searchbarInput" />
         
      </div>
    </div>
  );
}

export default SearchInput;
