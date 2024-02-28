import { Link } from "react-router-dom";
import styles from "./HeaderNavigation.module.css";

const HeaderNavigation = () => (
  <header>
    <nav className={styles.headerNav}>
      <ul>
        <li className={styles.headerUl}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.headerUl}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={styles.headerUl}>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default HeaderNavigation;
