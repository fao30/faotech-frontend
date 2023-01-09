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
import Preloader from "./components/Loader";

export default function Routing() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <HashRouter>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes>
            {routesOptions.map((e) => {
              return <Route path={e.path} element={e.element} />;
            })}
          </Routes>
          <Footer />
          {/* <LoadToTop /> */}
        </>
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
