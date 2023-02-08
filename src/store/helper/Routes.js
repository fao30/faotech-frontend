import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Portfolio from "../../pages/Portfolio/Portfolio";

export const routesOptions = [
  {
    path: "/",
    element: <Home title="faoTech — Homepage" />,
  },
  {
    path: "/contact",
    element: <Contact title="Contact Us" />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/about",
    element: <About title="About Us" />,
  },
  {
    path: "*",
    element: <Home title="faoTech — Homepage" />,
  },
];
