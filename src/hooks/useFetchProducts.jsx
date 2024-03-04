import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";

export function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
      .then((json) => {
        setProducts(json.data);
        // console.log(json);
      })
      .catch((e) => {
        setError(e.message);
        console.error("Fetching error: ", e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading, error };
}
