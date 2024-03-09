import React from 'react'
import Logo from '../Logo/Logo'
import "./Navbar.css"
import Button from "../Button/Button"
import SearchBar from '../Searchbar/SearchBar';



const NavBar = () => {
    return (
      <nav className="navBar">
        <Logo />
        <SearchBar/>
        <Button text="Give Feedback" />
      </nav>
    );
  };

export default NavBar;
