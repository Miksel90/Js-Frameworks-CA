import { useTheme } from "../../hooks/createTheme.jsx";
import styles from "./ThemeButton.module.css";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const buttonClasses = `${styles.themeMode} ${
    theme === "dark" ? styles.active : ""
  }`;
  const beforeClasses = `${styles.before} ${
    theme === "dark" ? styles.activeBefore : ""
  }`;
  const ariaLabel = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return (
    <button
      className={buttonClasses}
      onClick={toggleTheme}
      aria-label={ariaLabel}
    >
      <span className={beforeClasses}></span>
    </button>
  );
};

export default ThemeButton;
