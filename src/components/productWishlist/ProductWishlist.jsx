import React from "react";
import { useSelector } from "react-redux";
import Product from "../product/Product";

const ProductWishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);

  return (
    <div>
      <Product data={wishlist} justifyContent="start" />
    </div>
  );
};

export default ProductWishlist;
