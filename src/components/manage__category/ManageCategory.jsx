import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  useGetCategoryQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "../../context/api/categoryApi";

const ManageCategory = () => {
  const { data: categories } = useGetCategoryQuery();
  const [DeleteCategory] = useDeleteCategoryMutation();
  const [] = useUpdateCategoryMutation();

  const handleDeleteCategory = (id) => {
    DeleteCategory(id);
  };

  let categoryItems = categories?.map((category) => (
    <li key={category.id}>
      {category.title} <BiEditAlt />
      <RiDeleteBin6Line onClick={() => handleDeleteCategory(category.id)} />
    </li>
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
