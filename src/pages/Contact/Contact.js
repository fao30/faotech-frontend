import { motion } from "framer-motion";
import React from "react";
import NavbarContact from "./components/NavbarContact";

const Contact = () => {
  return (
    <div>
      <NavbarContact />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        CONTACT
      </motion.div>
    </div>
  );
};

export default Contact;
