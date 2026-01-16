import { Link } from "react-router";

export default function Navbar({ cartCount }) {
  return (
    <>
      <nav>
        <h1 className="logo">
          Shopping Cart<span className="trademark">&trade;</span>
        </h1>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart({cartCount})</Link>
        </div>
      </nav>
    </>
  );
}
