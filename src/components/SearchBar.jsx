import React from "react";
import SearchIcon from "../images/search.svg";

const SearchBar = ({ value, onSearchChange, onSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search">
      <input
        placeholder="Search for movies"
        value={value}
        onChange={(e) => onSearchChange(e.currentTarget.value)}
      />

      <button type="submit" onClick={() => onSearch(value)}>
        <img src={SearchIcon} alt="Search icon" />
      </button>
    </form>
  );
};

export default SearchBar;
