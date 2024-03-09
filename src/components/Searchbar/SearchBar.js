import React from 'react';
import "./Searchbar.css"
import searchIcon from "../../Assets/Search icon.png";

const SearchBar = () => {
  return (
      <div className="searchBar">
      <input type="search" placeholder="Search an album of your choice" />
      <div className="searchIconCont">
        <img src={searchIcon} className="searchImage" alt="search Icon" />
      </div>
      </div>
  );
};

export default SearchBar;
