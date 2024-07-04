import React, { useEffect } from "react";
import ProductCart from "../../components/productCart/ProductCart";
import CartMassega from "../../components/cart-message/CartMassega";
import { useSelector } from "react-redux";
import CartNotFound from "../../components/cart-notfound/CartNotFound";

const Cart = () => {
  const carts = useSelector((state) => state?.cart?.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {carts?.length ? (
        <>
          <ProductCart />
          <CartMassega />
        </>
      ) : (
        <CartNotFound />
      )}
    </div>
  );
};

export default Cart;
