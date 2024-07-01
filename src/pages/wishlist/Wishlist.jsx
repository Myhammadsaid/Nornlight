import React from "react";
import ProductWishlist from "../../components/productWishlist/ProductWishlist";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  return (
    <div>
      {wishlist?.length ? (
        <ProductWishlist />
      ) : (
        <h2>Empty Wishlist Not Found</h2>
      )}
    </div>
  );
};

export default Wishlist;
