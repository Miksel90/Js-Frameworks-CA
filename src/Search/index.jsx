import { useState } from "react";
import { useEffect } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";

const SearchBar = () => {
  const { products } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    if (window.innerWidth < 756) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 756) {
        setIsMenuOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <form
      role="search"
      className={`${styles.searchForm} ${isMenuOpen ? styles.isMenuOpen : ""}`}
      onSubmit={handleSubmit}
    >
      {isMenuOpen && (
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
          aria-label="Search"
        />
      )}
      <button
        type="button"
        className={styles.searchButton}
        onClick={toggleMenu}
      >
        <FaSearch />
      </button>
      {isMenuOpen && (
        <ul className={styles.searchSuggestion}>
          {filteredResults.map((product) => (
            <li key={product.id} className={styles.suggestionItem}>
              <Link to={`/product/${product.id}`} onClick={clearSearch}>
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
