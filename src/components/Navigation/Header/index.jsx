import { Link } from "react-router-dom";
import styles from "./HeaderNavigation.module.css";
import SearchBar from "../../../Search";
import CartIcon from "../../Cart";
import { useState } from "react";

const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSearch = () => {};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={styles.headerNav}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <span>☰</span>
        </button>
        <ul
          className={`${styles.headerList} ${
            isMenuOpen ? styles.menuOpen : ""
          }`}
        >
          <li className={styles.searchBar}>
            <SearchBar onSearch={handleSearch} />
          </li>
          <li className={styles.headerItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.headerItem}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles.headerItem}>
            <CartIcon />
            <Link to="/cart"></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
