import { motion } from "framer-motion";
import { React } from "react";
import Header from "../Home/components/Header";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header></Header>
    </motion.div>
  );
};

export default AboutUs;
