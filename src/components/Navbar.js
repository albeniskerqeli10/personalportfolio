import "../styles/Navbar.css";
import { useState } from "react";
import { List, X } from "phosphor-react";
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
  {
    name: "Contact",
    path: "/contact",
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
        <img className="header__logo" alt="logo" />
        <nav
          className={toggle ? "header__nav header__nav__show" : "header__nav"}
        >
          {navLinks.map(({ name, path }) => (
            <li>
              <a href={path}>{name}</a>
            </li>
          ))}
          asdasdasdasdsavvvvvvvvvv
          <a href="download.href" className="header__cta">
            Resumsaakae
          </a>
        </nav>
        add
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
