import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import useStore from "../../store/CartStore";
import styles from "./Product.module.css";

function Product() {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    console.log("Added to cart");
  };

  let { id } = useParams();
  const { products, isLoading, error } = useFetchProducts();

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find((p) => p.id.toString() === id);
      if (product) {
        product.title;
      }
    }
  }, [products, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const stars =
    product.rating > 0
      ? Array.from({ length: product.rating }, (_, index) => (
          <FaStar key={index} className={styles.starIcon} />
        ))
      : "This item has not been rated yet.";

  const priceDifference = product.discountedPrice
    ? ((product.price - product.discountedPrice) / product.price) * 100
    : 0;

  return (
    <div className={styles.productContainer}>
      <h2 className={styles.title}>{product.title}</h2>
      {product.image && product.image.url && (
        <img
          src={product.image.url}
          alt={product.title || "Product image"}
          className={styles.productImage}
        />
      )}
      <div className={styles.productDetails}>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.priceSection}>
          {product.discountedPrice &&
          product.discountedPrice !== product.price ? (
            <>
              <p className={styles.discountedPrice}>
                New Price: ${product.discountedPrice}
              </p>
              <p className={styles.originalPrice}>
                Original Price: ${product.price}
              </p>
              <p className={styles.discountPercentage}>
                Save: {priceDifference.toFixed(2)}%
              </p>
            </>
          ) : (
            <p className={styles.discountedPrice}>Price: ${product.price}</p>
          )}
        </div>
        <div className={styles.ProductFooter}>
          <button className="cta large" onClick={handleAddToCart}>
            Add to cart
          </button>
          <div className={styles.rating}>
            {typeof stars === "string" ? (
              <span className={styles.noRating}>{stars}</span>
            ) : (
              <>
                <span className={styles.ratingNumber}>{product.rating}</span>
                {stars}
              </>
            )}
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.ratingContainer}>
          <h3 className={styles.reviewTitle}>Reviews</h3>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <div key={review.id} className={styles.reviews}>
                <div className={styles.reviewUser}>{review.username}</div>
                <div className={styles.reviewDescription}>
                  {review.description}
                </div>
                <div className={styles.reviewRating}>
                  <FaStar /> {review.rating}
                </div>
              </div>
            ))
          ) : (
            <div>No reviews yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
