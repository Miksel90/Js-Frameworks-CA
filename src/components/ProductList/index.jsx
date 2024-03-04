import { useFetchProducts } from "../../hooks/useFetchProducts";
import { Card } from "../Card/index.jsx";

function ProductList() {
  const { products, isLoading, error } = useFetchProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </>
  );
}

export default ProductList;
