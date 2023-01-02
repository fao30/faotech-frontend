import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
// import { motion } from "framer-motion";
import Portfolio from "./pages/Portfolio/Portfolio";
import LoadToTop from "./components/LoadToTop";
import Loading from "react-fullscreen-loading";

export default function Routing() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(true), 1.1 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <HashRouter>
      {loading ? (
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<App />} />
          </Routes>
          <Footer />
          <LoadToTop />
        </div>
      ) : (
        <Loading loading background="white" loaderColor="#4C6BDC" />
      )}
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
