import { useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";

const SearchBar = () => {
  const { products, isLoading, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (!value) {
      setFilteredResults([]);
    } else {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filteredProducts);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredResults([]);
  };

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error}</p>;

  return (
    <form role="search" className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        id="search"
        type="search"
        placeholder="Search..."
        autoFocus
        required
        className={styles.searchInput}
        value={searchTerm}
        onChange={handleSearch}
        autoComplete="off"
      />
      <button type="submit" className={styles.searchButton}>
        Go
      </button>
      <ul className={styles.searchSuggestion}>
        {filteredResults.map((product) => (
          <li key={product.id} className={styles.suggestionItem}>
            <Link to={`/product/${product.id}`} onClick={clearSearch}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SearchBar;
