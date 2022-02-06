import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useGlobalContext } from "./AppProvider";
const Navbar = () => {
  const { theme, handleToggle } = useGlobalContext();
  return (
    <nav className="Nav">
      <h3 className="nav-title text-center">The Quiz</h3>
      <button className="btn-toggler" onClick={() => handleToggle(theme)}>
        {theme === "light-theme" ? (
          <FaMoon className="icon" />
        ) : (
          <FaSun className="icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
