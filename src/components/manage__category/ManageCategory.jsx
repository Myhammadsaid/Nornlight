import React from "react";
import { useGetCategoryQuery } from "../../context/api/categoryApi";

const ManageCategory = () => {
  const { data: categories } = useGetCategoryQuery();

  let categoryItems = categories?.map((category) => (
    <li key={category.id}>{category.title}</li>
  ));
  return (
    <div>
      <div className="manega__category">
        <h1 className="manega__category__title">ManageCategory</h1>
        <ul>{categoryItems}</ul>
      </div>
    </div>
  );
};

export default ManageCategory;
