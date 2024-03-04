import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export const Card = ({
  id,
  title,
  description,
  price,
  discountedPrice,
  rating,
  image,
  tags,
}) => {
  const discountPercentage = discountedPrice
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  return (
    <Link to={`/product/${id}`}>
      <div key={id} className={styles.product}>
        <img
          src={image.url}
          alt={image.alt || title}
          className={styles.productImage}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
          {description.length > 30
            ? `${description.substring(0, 30)}...`
            : description}
        </p>
        <div className={styles.priceSection}>
          <p
            className={
              discountedPrice && discountedPrice !== price
                ? styles.originalPrice
                : styles.discountedPrice
            }
          >
            {discountedPrice && discountedPrice !== price
              ? "Original Price:"
              : "Price:"}{" "}
            ${price}
          </p>
          {discountedPrice && discountedPrice !== price && (
            <>
              <p className={styles.discountedPrice}>
                New Price: ${discountedPrice}
              </p>
              <p className={styles.discountPercentage}>
                Save: {discountPercentage}%
              </p>
            </>
          )}
        </div>
        <p className={styles.rating}>Rating: {rating}</p>
        <p className={styles.tags}>{tags.join(", ")}</p>
      </div>
    </Link>
  );
};
