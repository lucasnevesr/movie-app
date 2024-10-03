import "./SearchInput.css";
import { useState, useEffect } from "react";

function SearchInput() {

const [inputValue, setInputValue] = useState('')
// const url = `https://api.themoviedb.org/3/search/movie?query=${}`

function handleChange(event){
  setInputValue(event.target.value)
};

useEffect(() => {

if (inputValue) {
  return console.log(inputValue);
}

}, [inputValue]);


  return (
    <div className="searchbar">
      <div className="searchbarContent">
         <div className="searchIcon"/>
          <input onChange={handleChange} input={inputValue} type="text" placeholder="Search" className="searchbarInput" />
         
      </div>
    </div>
  );
}

export default SearchInput;
