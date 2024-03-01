import styles from "./Hero.module.css";

const Hero = ({ children }) => {
  return <div className={styles.heroImg}>{children}</div>;
};

export default Hero;
