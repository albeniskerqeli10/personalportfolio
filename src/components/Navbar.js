import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { List, X } from "phosphor-react";
import avatar from "../assets/images/avatar.webp";
const navLinks = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "About",
    path: "#about",
  },

  {
    name: "Projects",
    path: "#projects",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__info}>
          <img
            src={avatar}
            className={styles.header__info__logo}
            alt="Logo"
          />
          <h1 className={styles.header__info__text}>Albenis Kerqeli</h1>
        </div>
        <nav
          className={toggle ? [styles.header__nav, styles.header__nav__show] : styles.header__nav}
        >
          {navLinks.map(({ name, path }, i) => (
            <li key={i}>
              <a href={path}>{name}</a>
            </li>
          ))}
          <a
            href="https://drive.google.com/file/d/1gvPiSnOnfUD4YRxtfgftwoDfNfCUse9e/view"
            className={styles.header__cta}
          >
            Resume
          </a>
        </nav>
        {toggle ? (
          <X
            size={24}
            className={styles.header__toggle}
            weight="bold"
            onClick={handleToggle}
          />
        ) : (
          <List
            size={24}
            className={styles.header__toggle}
            weight="bold"
            onClick={handleToggle}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
