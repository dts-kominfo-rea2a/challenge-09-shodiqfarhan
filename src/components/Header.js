// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = ({ text, subjudul }) => {
  return (
    <div className="border">
      <h1>{text}</h1>
      <p>{subjudul}</p>
    </div>
  );
};

export default Header;
