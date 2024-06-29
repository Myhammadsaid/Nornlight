import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useGetProductsQuery } from "../../context/api/productApi";

const Category = () => {
  const { data } = useGetProductsQuery({});
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  let categoryItems = data?.map((category) => (
    <motion.li key={category.id}>
      <motion.span>{category.title}</motion.span>
    </motion.li>
  ));

  return (
    <div>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="product__category"
      >
        <motion.ul drag="x" dragConstraints={{ right: 0, left: -width }}>
          {categoryItems}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Category;
