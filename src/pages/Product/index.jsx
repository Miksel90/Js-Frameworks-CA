import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styles from "./Product.module.css";

function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json.data);
      } catch (error) {
        console.log(error);
        setIsError(true); // Make sure to set error state on catch
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]); // id is the only dependency here

  // Use a separate effect to log data if needed
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]); // Now data is a dependency of this effect

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <main>
      <Helmet>
        <title>{data.title} | GadgetVault</title>
      </Helmet>
      <div className={styles.title}>{data.title}</div>
      {data.image && data.image.url && (
        <img
          src={data.image.url}
          alt={data.title || "Product image"}
          className={styles.productImageLarge}
        />
      )}
      <div>body: {data.body}</div>
    </main>
  );
}

export default Product;
