import "./LoadMoreButton.css";
import { useState } from "react";

function LoadMoreButton({setPageNumber}) {
  
  
  function handleClick() {
    setPageNumber(prevState => prevState + 1); 
  }
//já esta somando a cada click, mas como passar os valores? pro service ou pro app?

  return (
    <div>
      <button onClick={handleClick} className="loadMoreButton">Load More</button>
    </div>
  );
}

export default LoadMoreButton;