import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Contact
    </motion.div>
  );
};

export default Contact;
