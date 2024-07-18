import "./SearchInput.css";

function SearchInput() {
  return (
    <div className="searchbar">
      <div className="searchbarContent">
        <input type="text" placeholder="Search" className="searchbarInput" />
      </div>
    </div>
  );
}

export default SearchInput;
