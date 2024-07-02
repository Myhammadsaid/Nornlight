import React, { useEffect } from "react";
import ProductWishlist from "../../components/productWishlist/ProductWishlist";
import { useSelector } from "react-redux";
import WishlistNotFound from "../../components/wishlist-notfound/WishlistNotFound";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>{wishlist?.length ? <ProductWishlist /> : <WishlistNotFound />}</div>
  );
};

export default Wishlist;
