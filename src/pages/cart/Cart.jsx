import React, { useEffect } from "react";
import ProductCart from "../../components/productCart/ProductCart";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProductCart />
    </div>
  );
};

export default Cart;
