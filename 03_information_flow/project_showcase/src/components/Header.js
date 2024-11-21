// import React, { useState } from "react";

const Header = ({isDarkMode, onToggleDarkMode}) => {

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={onToggleDarkMode}>{isDarkMode ? "On" : "Off"}</button>
    </header>
  );
}

export default Header;
