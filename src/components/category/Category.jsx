import React, { useState } from "react";
import { useGetCategoryQuery } from "../../context/api/productApi";

const Category = () => {
  const { data } = useGetCategoryQuery();
  const [category, setCategory] = useState("/");

  let categoryItems = data?.map((category) => (
    <li onClick={() => setCategory(category.title)} key={category.id}>
      <span>{category.title}</span>
    </li>
  ));

  return (
    <div>
      <div className="product__category">
        <ul>{categoryItems}</ul>
      </div>
    </div>
  );
};

export default Category;
