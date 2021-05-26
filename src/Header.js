import React from "react";
import icons from "./Images/icons.png";

const Header = () => {
  return (
    <div className="header">
      <img src={icons} alt="logo" width="70" height="50" />
      <h1>Parth Keep </h1>
    </div>
  );
};

export default Header;
