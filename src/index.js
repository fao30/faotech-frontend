import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoadToTop from "./components/LoadToTop";
import Loading from "react-fullscreen-loading";
import { routesOptions } from "./store/helper/Routes";
import { motion } from "framer-motion";

export default function Routing() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let loadingTimer = setTimeout(() => setLoading(true), 1 * 1000);
    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);
  return (
    <HashRouter>
      {loading ? (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
          <Routes>
            {routesOptions.map((e) => {
              return <Route path={e.path} element={e.element} />;
            })}
          </Routes>
          <Footer />
          <LoadToTop />
        </motion.div>
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
