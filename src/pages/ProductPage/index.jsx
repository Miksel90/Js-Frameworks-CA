import { Helmet } from "react-helmet";
import { useState } from "react";
import styles from "./ProductPage.module.css";
import Product from "../../components/Product/index.jsx";

function ProductPage() {
  const [title, setTitle] = useState("Loading...");

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <main className={styles.ProductPage}>
      <Helmet>
        <title>{`${title} | GadgetVault`}</title>
      </Helmet>
      <Product onTitleChange={handleTitleChange} />
    </main>
  );
}

export default ProductPage;
