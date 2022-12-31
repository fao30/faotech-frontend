import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Job from "./pages/Job/Job";
import { motion } from "framer-motion";

export default function Routing() {
  return (
    <HashRouter>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Job />} />
          <Route path="*" element={<App />} />
        </Routes>
        <Footer />
      </motion.div>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
