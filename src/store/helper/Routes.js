import App from "../../App";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";

export const routesOptions = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "*",
    element: <App />,
  },
];
