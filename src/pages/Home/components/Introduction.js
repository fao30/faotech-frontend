import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import { React, useState, useEffect, useRef } from "react";

const Introduction = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), 0.5 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <div class="from-primary to-secondary text-primary-content -mt-[5rem] grid place-items-center items-end bg-gradient-to-b pt-20">
      <div class="hero">
        <div class="hero-content mt-20 text-center">
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 ">
              Unlimited Ideas,
              <br />
              Simple Steps
            </h1>
            <h1 class="text-4xl sm:text-5xl lg:text-5xl font-bold">
              Build, manage and deliver
              <br />
              application with FaoTech
            </h1>
            <button class="mt-10 btn btn-warning font-bold normal-case">
              Learn More
            </button>
            <div
              class={`${
                !show ? "animate-bounce" : ""
              } flex justify-center items-center`}
            >
              <img
                class="mt-16 max-w-l sm:max-w-xl lg:max-w-3xl rounded-lg shadow-xl image-hover"
                src={require("./photos/screen1.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
