import { motion } from "framer-motion";
import React from "react";
import Introduction from "../Home/components/Introduction";

const Job = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Introduction />
    </motion.div>
  );
};

export default Job;
