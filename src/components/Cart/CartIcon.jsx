import PropTypes from "prop-types"; // Import PropTypes

const CartIcon = ({ itemCount }) => (
  <div>
    <span>Cart</span>
    <span>({itemCount})</span>
  </div>
);

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired, // Define prop types
};

export default CartIcon;
