import React, { useEffect } from "react";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../context/api/productApi";

const AllProducts = () => {
  let { data, isLoading } = useGetProductsQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Product data={data} isLoading={isLoading} isMarriade={false} />
    </div>
  );
};

export default AllProducts;
