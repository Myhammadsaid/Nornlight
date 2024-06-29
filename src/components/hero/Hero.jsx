import React from "react";
import heroImg from "../../assets/hero__img.png";
import { motion } from "framer-motion";
import "./Hero.scss";

const Hero = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hero"
      >
        <div className="container">
          <div className="hero__style">
            <div className="hero__style__content">
              <h1 className="hero__text">
                Скидка 15% на все подвесные светильники
                <br />
                <span>до 5 февраля</span>
              </h1>
            </div>
            <img src={heroImg} alt="heroImg" />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
