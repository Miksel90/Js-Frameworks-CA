import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link> |<Link to="/contact">Contact</Link> |
      <Link to="/products">Products</Link>
    </nav>
  </header>
);

export default Header;
