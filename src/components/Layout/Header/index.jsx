// import { HeaderNavigation } from "../../Navigation/Header";
import styles from "./Header.module.css";
import logoColored from "../../../assets/logo/GadgetVaultLogo.webp";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className={styles.contentWrap}>
        <Link to="/">
          <img src={logoColored} alt="logo" className={styles.logo} />
        </Link>
        {/* <HeaderNavigation /> */}
      </div>
    </header>
  );
};
