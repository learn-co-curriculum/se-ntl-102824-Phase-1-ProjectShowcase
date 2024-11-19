import { useState } from "react";

// add event listener to button onClick

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

  const handleClick = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={handleClick}>{buttonText}</button>
      </nav>
    </header>
  );
}

export default Header;
