import React from "react";
import "../styles.css";

const Navigation = ({ children }) => {
  return (
    <>
      <nav>
        <a className="navigation__link" href="#home">
          {children}
        </a>
      </nav>
    </>
  );
};

export default Navigation;
