import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../Context/state-context";

const NavBar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  const showCartHandler = () => {
    setShowCart(true);
  };
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Mo Store</Link>
      </p>
      <button type="button" className="cart-icon" onClick={showCartHandler}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantity}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default NavBar;
