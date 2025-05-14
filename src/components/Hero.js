// src/components/Hero.js
import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/hero-lottie.json";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-bg text-white d-flex align-items-center justify-content-center flex-column text-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ duration: 1 }}
          className="profile-wrapper mb-4"
        >
          <img
            src="/preethi.jpg"
            alt="Preethi"
            className="img-fluid profile-img"
          />
        </motion.div>

        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold"
        >
          Hello, I'm <span className="highlight">Preethi!!</span>
        </motion.h1>

    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="hero-taglines mt-4"
      >
        
        <p className="hero-text">
          <span> Full-Stack Developer, Innovator. </span>
        </p>
        <p className="hero-text">
          <span> Crafting Seamless Experiences with Code. </span>
        </p>
        <p className="hero-text">
          <span> Let's Build Something Beautiful !! </span>
        </p>
      </motion.div>




      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
  className="mt-1"
>
  <Lottie
    animationData={animationData}
    loop
    style={{ width: 400, height: 300, margin: "0 auto" }}
  />
</motion.div>


      </Container>
    </div>
  );
};

export default Hero;
