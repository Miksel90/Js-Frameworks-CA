import styles from "./Home.module.css";
import Hero from "../../components/Hero";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Home | GadgetVault</title>
      </Helmet>
      <Hero>
        <div className={styles.heroContent}>
          <h1>Welcome to GadgetVault</h1>
        </div>
      </Hero>
    </main>
  );
}

export default HomePage;
