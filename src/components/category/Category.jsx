import React, { useState, useEffect } from "react";
import { useGetCategoryQuery } from "../../context/api/categoryApi";

const Category = ({ products }) => {
  const { data: categories } = useGetCategoryQuery();
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category !== "all") {
      const filtered = products.filter((el) =>
        el.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  const handleCategoryClick = (title) => {
    setCategory(title);
  };

  let categoryItems = categories?.map((el) => (
    <li
      onClick={() => handleCategoryClick(el.title)}
      key={el.id}
      className={category === el.title ? "active" : ""}
      value={el.title}
    >
      {el.title}
    </li>
  ));

  return (
    <div>
      <div className="product__category">
        <ul>
          <li
            className={category === "all" ? "active" : ""}
            onClick={() => handleCategoryClick("all")}
            value="all"
          >
            All
          </li>
          {categoryItems}
        </ul>
      </div>
    </div>
  );
};

export default Category;
