import { Link } from "react-router-dom";
import styles from "./HeaderNavigation.module.css";
import SearchBar from "../../../Search";
import CartIcon from "../../Cart";

const HeaderNavigation = () => {
  const handleSearch = () => {};

  return (
    <header>
      <nav className={styles.headerNav}>
        <ul className={styles.headerList}>
          <li className={styles.searchBar}>
            <SearchBar onSearch={handleSearch} />
          </li>
          <li className={styles.headerItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.headerItem}>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li className={styles.headerItem}>
            <Link to="/products">Products</Link>
          </li> */}
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
