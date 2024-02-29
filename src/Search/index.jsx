import { useState } from "react";
import styles from "./Search.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

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
    </form>
  );
};

export default SearchBar;
