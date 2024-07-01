import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const ImgModel = ({ data, setToggle }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <div onClick={() => setToggle(false)} className="overflow"></div>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="carousel"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {data?.map((el) => (
            <motion.div className="inner-carousel__slide" key={el.id}>
              <motion.img src={el.url[0]} alt="url" />
            </motion.div>
          ))}
        </motion.div>
        <IoMdClose
          onClick={() => setToggle(false)}
          className="carousel__close"
        />
      </motion.div>
    </div>
  );
};

export default ImgModel;
