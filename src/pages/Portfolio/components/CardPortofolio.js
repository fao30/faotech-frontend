import React from "react";
import belinsky1 from "../assets/frame1.jpg";
import belinsky2 from "../assets/frame2.jpg";

import CardProfileBelinsky from "./CardProfileBelinsky";

export const cardImage = [
  {
    id: "0",
    img1: belinsky1,
    img2: belinsky2,
    title: "Belinsky Production",
    desc: "Given that Belinsky is both a production house and a creative studio, its areas of expertise include producing both photography and filmmaking",
    label: "UI Design & Web Development",
  },
  {
    id: "0",
    img1: belinsky1,
    img2: belinsky2,
    title: "Belinsky Production",
    desc: "Given that Belinsky is both a production house and a creative studio, its areas of expertise include producing both photography and filmmaking",
    label: "UI Design & Web Development",
  },
];

const CardPortofolio = ({ img1, img2, title, desc, label }) => {
  return (
    <section className="h-[55rem] flex justify-between mt-20">
      <div className="w-[47.5%]">
        <img className="object-cover h-full w-full rounded-2xl" src={img1} />
      </div>
      <div className="w-[47.5%] flex flex-col justify-between">
        <img className="object-cover rounded-2xl h-[65%]" src={img2} />
        <div className="gap-2 px-10 py-8 flex flex-col bg-white rounded-xl shadow-[0px_0px_24px_2px_#bfdbfe] ">
          <h1 className="text-3xl text-black font-bold">{title}</h1>
          <p className="text-[#858282] text-xl font-normal">{desc}</p>
          <div className="flex justify-between items-center">
            <label className="text-[#1361DE] text-xl font-semibold">
              {label}
            </label>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://belinskyproduction.com"
              className="text-white bg-[#1361DE] hover:bg-[#1361DE] border-none normal-case rounded-xl shadow-md font-semibold text-lg px-5 py-2"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPortofolio;

//  <div className="md:w-[30%] lg:w-[60%] w-full flex justify-between">
//         <img className="object-cover" src={image2} alt="Belinsky" />
//       </div>
//       <div className="w-full mt-4 flex justify-end flex-wrap">
//         <div className="md:w-[30%] lg:w-[50%] w-full flex justify-between">
//           <img className="object-cover" src={image1} alt="Belinsky" />
//         </div>
//         <div class="p-2 w-[35rem] h-[12rem] my-5 flex flex-col space-x-4 flex-wrap justify-around items-center bg-[#FFFFFF] text-ourWork-100 font-bold shadow-xl shadow-blue-100 rounded-2xl">
//           <div class="text-s sm:text-base md:lg:text-base font-normal">
//             <div class="p-8 text-s sm:text-base md:lg:text-base font-normal ">
//               <h1 class="text-[#363636] text-start text-2xl font-[600] pb-2">
//                 Belinsky Production
//               </h1>
//               <p class="font-[400] text-[14px] text-[#858282] text-left ">
//                 Given that Belinsky is both a production house and a creative
//                 studio, its areas of expertise include producing both
//                 photography and filmmaking
//               </p>
//               <div class="flex justify-between">
//                 <h2 className=" text-lg text-[#1361DE] text-start pt-2">
//                   UI Design & Development
//                 </h2>
//                 <button className="btn hover:bg-none bg-[#1361DE] text-end rounded-2xl px-6">
//                   Visit Website
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
