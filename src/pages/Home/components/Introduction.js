import { React, useState, useEffect } from "react";

const Introduction = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let imageTimer = setTimeout(() => setShow(true), 0.5 * 1000);
    return () => {
      clearTimeout(imageTimer);
    };
  }, []);
  return (
    <div class="from-primary to-secondary text-primary-content -mt-[5rem] grid place-items-center items-end bg-gradient-to-b pt-20">
      <div class="mt-20 w-11/12 md:w-4/5 lg:w-6/12 px-4">
        <h1 class="text-2xl sm:text-4xl lg:text-4xl font-bold mb-6 text-center ">
          Unlimited Ideas, <br />
          Unlimited Steps
        </h1>
        <h1 class="text-4xl sm:text-5xl lg:text-5xl font-bold text-center mb-2">
          Build, manage and deliver application with FaoTech
        </h1>
      </div>

      <div class="hero">
        <div class="hero-content text-center">
          <div>
            <button class="mt-2 btn btn-warning font-bold normal-case">
              Learn More
            </button>
            <div
              class={`${
                !show ? "animate-bounce" : ""
              } flex justify-center items-center`}
            >
              <img
                class="mt-10 max-w-l sm:max-w-xl lg:max-w-3xl rounded-lg shadow-xl image-hover"
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
