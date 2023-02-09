import { BarLoader } from "react-spinners";
const logo = require("./assets/faoTech.png");

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mx-auto text-center">
      <img src={logo} alt="logo" className="w-12 h-12 mb-6" />
      <BarLoader size={100} color="#2D2B2B" width="150" speedMultiplier="1" />
    </div>
  );
};

export default Preloader;
