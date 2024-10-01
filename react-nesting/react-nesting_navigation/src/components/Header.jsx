import React from "react";
import Navigation from "./Navigation";
import "../styles.css";
import avatar from "../img/avatar.jpg";
import logo from "../img/logo.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
        <Navigation>Home</Navigation>
        <Navigation>About</Navigation>
        <Navigation>Impressum</Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </header>
    </>
  );
};

export default Header;
