import "./SearchInput.css";
import { useState, useEffect } from "react";
import { useDebounce } from "../Hooks/useDebounce"
import { searchMovies } from "../services/moviesService"
function SearchInput() {

const [inputValue, setInputValue] = useState('')

const searchValue = useDebounce(inputValue, 2000)

useEffect(() => {

  console.log("entrou useeffect");
  
  const movieFetched = async () => {
    console.log("entrou no movieFetched antes try");
    
    try { 
      console.log("entrou no movieFetched dentro try");
   
      const movies = await searchMovies("Deadpool")  
   console.log(movies.results);
   
   
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
  }
  
  movieFetched()

}}, [searchValue]);


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
