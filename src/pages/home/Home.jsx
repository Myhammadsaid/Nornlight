import React from "react";
import Hero from "../../components/hero/Hero";
import { useGetProductsQuery } from "../../context/api/productApi";
import Katalog from "../../components/katalog/Katalog";
import Company from "../../components/company/Company";
import Product from "../../components/product/Product";
import Brand from "../../components/brand/Brand";
import Blog from "../../components/blog/Blog";

const Home = () => {
  let { data, isLoading } = useGetProductsQuery({ page: 1, limit: 8 });

  return (
    <div>
      <Hero />
      <Katalog />
      <Company />
      <Product data={data} isLoading={isLoading} isMarriade={true} />
      <Brand />
      <Blog isMarriade={true} />
    </div>
  );
};

export default Home;
