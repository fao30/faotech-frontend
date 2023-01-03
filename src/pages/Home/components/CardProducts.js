import React from "react";
import { Icon } from "@iconify/react";

const CardProducts = () => {
  return (
    <div class="flex justify-between items-center transition-all transform hover:scale-105 hover:cursor-pointer">
      <div class="bg-white text-ourWork-100 font-bold mx-5 my-3 shadow-2xl rounded-2xl">
        <div class="flex flex-row justify-start items-center w-37 h-16 sm:h-16 sm:w-60 lg:h-16 lg:w-72 ml-4 object-right-top">
          <div class="fixed">
            <Icon icon="ic:round-remove-red-eye" />
          </div>
          <div class="ml-10 text-s md:lg:text-base font-normal">
            <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
              <div className="flex items-left justify-left"></div>
              Automation{" "}
            </h2>
            <p className="flex-col space-y-4 text-sm text-gray-500">
              Every project includes free bug fixing up to 3 months after the
              handover time.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-white text-ourWork-100 font-bold mx-5 my-2 shadow-2xl rounded-2xl">
        <div class="flex flex-row justify-start items-center w-37 h-16 sm:h-16 sm:w-60 lg:h-16 lg:w-72 ml-4 object-right-top">
          <div class="fixed">
            <Icon icon="mdi:shield-bug" />
          </div>
          <div class="ml-10 text-s md:lg:text-base font-normal">
            <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
              <div className="flex items-left justify-left"></div>
              Bug Free Warranty
            </h2>
            <p className="flex-col space-y-4 text-sm text-gray-500">
              Every project includes free bug fixing up to 3 months after the
              handover time.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-white text-ourWork-100 font-bold mx-5 my-2 shadow-2xl rounded-2xl">
        <div class="flex flex-row justify-start items-center w-37 h-16 sm:h-16 sm:w-60 lg:h-16 lg:w-72 ml-4 object-right-top">
          <div class="fixed">
            <Icon icon="fluent-mdl2:connect-virtual-machine" />
          </div>
          <div class="ml-10 text-s md:lg:text-base font-normal">
            <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
              <div className="flex items-left justify-left"></div>
              Visibility
            </h2>
            <p className="flex-col space-y-4 text-sm text-gray-500">
              Help enterprises to improve business operation through
              digitalization by increasing visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div class="from-white to-blue-200 text-primary-content -mt-[5rem] grid place-items-center items-end bg-gradient-to-r pt-20">
    //   <div class="from-base-200 to-base-300 text-primary-content grid place-items-center items-end bg-gradient-to-b pt-20 pb-20">
    //     <div class="hero">
    //       <div class="hero-content text-center">
    //         <div>
    //           <h1 class="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 text-base-content">
    //             Unlimited Ideas, Simple Steps
    //           </h1>
    //           <h1 class="text-4xl sm:text-5xl lg:text-5xl font-bold  text-base-content">
    //             Build, manage and deliver
    //             <br />
    //             application with FaoTech
    //           </h1>
    //           <button class="mt-10 btn btn-warning font-bold normal-case">
    //             Learn More
    //           </button>
    //           <div class="flex justify-center items-center">
    //             <img
    //               class="mt-12 max-w-l sm:max-w-xl lg:max-w-3xl rounded-lg shadow-2xl"
    //               src="https://static.wixstatic.com/media/c837a6_604c6b86faf247e3b1060fdc0a80d6dc~mv2.png/v1/fill/w_1598,h_900,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/screen%201.png"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CardProducts;

{
  /* card */
}
{
  /* <div class="mx-10 rounded-box w-full lg:w-2/5 transition-all transform hover:scale-110 hover:cursor-ew-resize object-right-top ">
            <div class="card card-center w-full  rounded-box space-x-4 my-6">
              <div className="card w-30 bg-white 8px">
                <div className="card-body icon-start h-30 w-30">
                  <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
                    <Icon icon="ic:round-remove-red-eye" />
                    Automation
                  </h2>
                  <p className="text-sm text-gray-500">
                    Bring business operation productivity and efficiency by
                    implementing an automation engine.
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-10 rounded-box w-full lg:w-2/5 transition-all transform hover:scale-110 hover:cursor-ew-resize object-right">
            <div class="card card-center w-full  rounded-box space-x-4  my-6">
              <div className="card w-30 bg-white 8px">
                <div className="card-body icon h-30 w-30">
                  <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
                    <div className="flex items-left justify-left">
                      <Icon icon="mdi:shield-bug" />
                    </div>
                    Bug Free Warranty
                  </h2>
                  <p className="flex-col space-y-4 text-sm text-gray-500">
                    Every project includes free bug fixing up to 3 months after
                    the handover time.
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-10 rounded-box w-full lg:w-2/5 transition-all transform hover:scale-110 hover:cursor-ew-resize object-right-bottom">
            <div class="card card-center w-full  rounded-box space-x-4 my-6">
              {/* <div className="flex flex-col space-y-4"></div> */
}
{
  /* <div className="card w-30 bg-white 8px">
            <div className="card-body icon-end h-30 w-30">
              <h2 className="font-bold text-left md:text-left lg:text-left text-xl md:text-xl lg:text-xl text-black">
                <Icon icon="fluent-mdl2:connect-virtual-machine" /> Visibility
              </h2>
              <p className="text-sm text-gray-500">
                Help enterprises to improve business operation through
                digitalization by increasing visibility.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>{" "}
      */
}
//   </div>
//   </div>
// </div>
