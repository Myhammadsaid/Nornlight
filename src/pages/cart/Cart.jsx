import React, { useEffect } from "react";
import ProductCart from "../../components/productCart/ProductCart";
import CartMassega from "../../components/cart-message/CartMassega";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProductCart />
      <CartMassega />
    </div>
  );
};

export default Cart;
