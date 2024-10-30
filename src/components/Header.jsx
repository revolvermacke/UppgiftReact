import { useContext, useState } from "react";
import LogoType from "../assets/images/silicon-logo.svg";
import LogoTypeDark from "../assets/images/siliconlogodark.svg";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
      <div className="container">
        <Link id="logo" className="darkhide-imgs" to="/">
          <img src={LogoType} />
        </Link>
        <Link id="logo" className="dark-display" to="/">
          <img src={LogoTypeDark} />
        </Link>

        <nav id="main-menu" className={`navbar ${showMenu ? 'showMenu' : ''}`}>
          <NavLink className="nav-link" to="/Features">
            Features
          </NavLink>
          <NavLink className="nav-link" to="/Contact">
            Contact
          </NavLink>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label dark-span">Dark mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input
              id="darkmode-switch"
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="sign-in" href="#" className="btn-primary">
          <i className="fa-regular fa-user"></i>
          <span>Sign In / Up</span>
        </a>

        <button className="btn-mobile" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
