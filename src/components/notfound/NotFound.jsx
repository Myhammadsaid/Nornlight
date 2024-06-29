import React from "react";
import "./NotFound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="notfound">
        <h1 className="notfound__title1">404</h1>
        <h3 className="notfound__title2">Похоже, ничего не нашлось :(</h3>
        <button onClick={() => navigate("/")} className="notfound__btn">
          На главную
        </button>
      </div>
    </div>
  );
};

export default NotFound;
