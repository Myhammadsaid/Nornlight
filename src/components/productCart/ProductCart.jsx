import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCart,
  decrementCart,
  deleteAllCart,
} from "../../context/slices/cartSlice";
import { Link } from "react-router-dom";
import CartNotFound from "../cart-notfound/CartNotFound";

const ProductCart = () => {
  const carts = useSelector((state) => state?.cart?.value);
  let dispatch = useDispatch();

  let totalPrice = carts?.reduce((sum, el) => sum + el.price * el.quantity, 0);

  let cartItems = carts?.map((el) => (
    <div key={el.id} className="product__card">
      <img width={200} height={200} src={el.url[0]} alt="productImg" />
      <div className="product__content">
        <Link to={`/products/${el.id}`}>
          <h3 className="product__content__text" title={el.title}>
            {el.title}
          </h3>
        </Link>
        <div className="product__content__items">
          <ul>
            <li>
              <s>${el.price * 2}</s>
            </li>
            <li>${el.price}</li>
          </ul>
        </div>
        <button
          disabled={el.quantity === 10}
          onClick={() => dispatch(incrementCart(el))}
        >
          inc
        </button>
        <button>{el.quantity}</button>
        <button
          disabled={el.quantity === 1}
          onClick={() => dispatch(decrementCart(el))}
        >
          dec
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      {carts?.length ? (
        <>
          <h1>${totalPrice}</h1>
          <button onClick={() => dispatch(deleteAllCart())}>Remove All</button>
          <div className="cart__cards">{cartItems}</div>
        </>
      ) : (
        <CartNotFound />
      )}
    </div>
  );
};

export default ProductCart;
