// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <h1>Call a Friend</h1>
      <h4 className="border">your friendly contact app</h4>
    </>
  );
};

export default Header;
