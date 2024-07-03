import React from "react";
import Product from "../product/Product";
import { useGetProductsQuery } from "../../context/api/productApi";

const ManageProduct = () => {
  const { data } = useGetProductsQuery();
  return (
    <div>
      <Product data={data} />
    </div>
  );
};

export default ManageProduct;
