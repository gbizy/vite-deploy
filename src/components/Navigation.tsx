import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="container">
        {/* Logo */}
        <Link className="logo" to="/vite-deploy/">
          HOME
        </Link>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu" onClick={toggleMenu}>
          ☰
        </div>

        {/* Menu Items */}
        <ul className={`menu ${showMenu ? "show" : ""}`}>
          <li>
            <Link to="/vite-deploy/about">About</Link>
          </li>
          <li>
            <Link
              to="/route"
              onClick={(event) => {
                event.preventDefault();
                window.open("/vite-deploy/GuyResume.pdf");
              }}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link to="/vite-deploy/mywork">My Work</Link>
          </li>
          <li>
            <Link to="/vite-deploy/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
