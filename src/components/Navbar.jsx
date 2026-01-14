import { Link } from "react-router";

export default function Navbar({ cartCount }) {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">Cart({cartCount})</Link>
    </>
  );
}
