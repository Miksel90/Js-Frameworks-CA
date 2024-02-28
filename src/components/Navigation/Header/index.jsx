import { Link } from "react-router-dom";
import styles from "./HeaderNavigation.module.css";

const HeaderNavigation = () => (
  <header>
    <nav className={styles.headerNav}>
      <ul>
        <li className={styles.headerUl}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default HeaderNavigation;
