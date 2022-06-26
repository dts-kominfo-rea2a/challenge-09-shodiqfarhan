// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="border">
      <h1>{props.text}</h1>
      <p>{props.subjudul}</p>
    </div>
  );
};

export default Header;
