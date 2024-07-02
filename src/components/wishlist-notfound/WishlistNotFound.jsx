import React from "react";
import Img from "../../assets/heart-notfound.webp";
import { useNavigate } from "react-router-dom";

const WishlistNotFound = () => {
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="cart__notfound">
        <img src={Img} alt="CartNotFound" />
        <h1 className="cart__notfound__text">
          There is nothing in the heart (
        </h1>
        <button onClick={() => navigate("/")} className="cart__notfound__btn">
          Home
        </button>
      </div>
    </div>
  );
};

export default WishlistNotFound;
