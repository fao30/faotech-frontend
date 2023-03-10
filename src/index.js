import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadToTop from "./components/LoadToTop";
import { routesOptions } from "./store/helper/Routes";
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
    <BrowserRouter>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes>
            {routesOptions?.map((e) => {
              return <Route path={e.path} element={e.element} />;
            })}
          </Routes>
          <Footer />
          <LoadToTop />
        </>
      )}
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
