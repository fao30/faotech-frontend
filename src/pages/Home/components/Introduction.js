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
    <div class="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-b pt-20">
      <div class="hero">
        <div class="hero-content mt-20 text-center">
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 ">
              Unlimited Ideas, Simple Steps
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
                class="mt-12 max-w-l sm:max-w-xl lg:max-w-3xl rounded-lg shadow-2xl"
                src="https://static.wixstatic.com/media/c837a6_604c6b86faf247e3b1060fdc0a80d6dc~mv2.png/v1/fill/w_1598,h_900,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/screen%201.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
