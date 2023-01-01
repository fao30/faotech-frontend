import { motion } from "framer-motion";
import React from "react";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Portfolio
    </motion.div>
  );
};

export default Portfolio;
