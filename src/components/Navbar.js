import "../styles/Navbar.css";
import { useState } from "react";
import { List, X } from "phosphor-react";
import avatar from "../assets/images/avatar.webp";
const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },

  {
    name: "Projects",
    path: "/projects",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__info">
          <img
            src={avatar}
            loading="lazy"
            className="header__info__logo"
            alt="Logo"
          />
          <h1 className="header__info__text">Albenis Kerqeli</h1>
        </div>
        <nav
          className={toggle ? "header__nav header__nav__show" : "header__nav"}
        >
          {navLinks.map(({ name, path }) => (
            <li>
              <a href={path}>{name}</a>
            </li>
          ))}
          <a href="/" className="header__cta">
            Resume
          </a>
        </nav>
        {toggle ? (
          <X
            size={24}
            className="header__toggle"
            weight="bold"
            onClick={handleToggle}
          />
        ) : (
          <List
            size={24}
            className="header__toggle"
            weight="bold"
            onClick={handleToggle}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
