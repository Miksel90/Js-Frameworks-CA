import { Link } from "react-router-dom";
import styles from "./HeaderNavigation.module.css";
import CartIcon from "../../Cart";
import SearchBar from "../../../Search";
import { useState } from "react";

const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = () => {};
  return (
    <header>
      <nav className={styles.headerNav}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span>☰</span>
        </button>
        <ul
          className={`${styles.headerList} ${
            isMenuOpen ? styles.menuOpen : ""
          }`}
        >
          <li className={styles.headerItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.headerItem}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles.searchBar}>
            <SearchBar onSearch={handleSearch} />
          </li>
        </ul>
        <div className={styles.cartIcon}>
          <CartIcon />
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
