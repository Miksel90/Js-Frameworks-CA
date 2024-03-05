import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { FaStar } from "react-icons/fa";

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
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const stars =
    data.rating > 0
      ? Array.from({ length: data.rating }, (_, index) => (
          <FaStar key={index} className={styles.starIcon} />
        ))
      : "This item has not been rated yet.";

  const priceDifference = data.discountedPrice
    ? ((data.price - data.discountedPrice) / data.price) * 100
    : 0;

  return (
    <div className={styles.productContainer}>
      <h2 className={styles.title}>{data.title}</h2>
      {data.image && data.image.url && (
        <img
          src={data.image.url}
          alt={data.title || "Product image"}
          className={styles.productImage}
        />
      )}
      <div className={styles.productDetails}>
        <div className={styles.description}>{data.description}</div>
        <div className={styles.priceSection}>
          {data.discountedPrice && data.discountedPrice !== data.price ? (
            <>
              <p className={styles.discountedPrice}>
                New Price: ${data.discountedPrice}
              </p>
              <p className={styles.originalPrice}>
                Original Price: ${data.price}
              </p>
              <p className={styles.discountPercentage}>
                Save: {priceDifference.toFixed(2)}%
              </p>
            </>
          ) : (
            <p className={styles.discountedPrice}>Price: ${data.price}</p>
          )}
        </div>
        <div className={styles.ProductFooter}>
          <button
            className="cta large"
            // onClick={() => {
            //   setShowLabel(true);
            //   addProduct(data);
            // }}
          >
            Add to cart
          </button>
          <div className={styles.rating}>
            {typeof stars === "string" ? (
              <span className={styles.noRating}>{stars}</span>
            ) : (
              <>
                <span className={styles.ratingNumber}>{data.rating}</span>
                {stars}
              </>
            )}
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.ratingContainer}>
          <h3 className={styles.reviewTitle}>Reviews</h3>
          {data.reviews && data.reviews.length > 0 ? (
            data.reviews.map((review) => (
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
