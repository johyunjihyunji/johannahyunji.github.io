import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../style/About.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "-100%" }
};

const pageTransition = {
  duration: 0.8
};

const About = () => {
  return (
    <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
    background='black'
    >

      <div className="about">
      <h1>Playground</h1>
      </div>
    </motion.div>
  );
};

export default About;
