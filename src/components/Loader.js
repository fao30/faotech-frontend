import { BarLoader } from "react-spinners";
const logo = require("./assets/faoTech.png");

const Preloader = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center text-center">
      <img src={logo} alt="logo" className="mb-6 h-12 w-12" />
      <BarLoader size={100} color="#2D2B2B" width="150" speedMultiplier="1" />
    </div>
  );
};

export default Preloader;
