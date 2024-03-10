import HeaderNavigation from "/src/components/Navigation/Header/index.jsx";
import styles from "./Header.module.css";
import logo from "../../logo/gadgetVaultLogo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrap}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <span className={styles.logoText}>GadgetVault</span>
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
