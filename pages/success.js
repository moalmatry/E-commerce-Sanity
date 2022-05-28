import { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../Context/state-context";
import { runFireWorks } from "../lib/utils";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    runFireWorks();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You For Dealing With Us 🥳🎉</h2>
        <p className="email-msg">Check Your Email for Details.</p>
        <p className="description">
          If you have any questions Email Us
          <a className="email" href="mailto:moalmatry2000@gamil.com">
            Mo Almatry
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
