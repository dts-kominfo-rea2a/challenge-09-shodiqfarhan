// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h4 className="border">{props.subtitle}</h4>
    </>
  );
};

export default Header;
