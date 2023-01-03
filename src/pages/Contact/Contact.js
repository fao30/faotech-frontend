import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import FormContact from "./components/FormContact";
import { motion } from "framer-motion";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col space-y-3 pb-20 sm:pb-96 px-[2.5rem] md:px-[5rem] lg:px-[9.5rem] border-b-2">
      <div className="flex justify-end mt-10 z-20 xl:w-[60rem] xl:mx-auto ">
        {/* Button Back to Homepage */}
        <button
          class="relative inline-flex items-center px-[3.5rem] py-[0.75rem] overflow-hidden text-md text-[#393737] shadow-md hover:text-white rounded-tr-3xl rounded-bl-3xl bg-[#FFFFFF] group"
          onClick={() => navigate("/")}
        >
          <span class="absolute left-0 block w-full h-0 transition-all bg-[#4C6BDC] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <Icon
              icon="material-symbols:arrow-right-alt-rounded"
              color="black"
              width="20"
              height="20"
            />
          </span>
          <span class="relative">Back to Homepage</span>
        </button>
      </div>
      <div className="flex flex-col z-10 xl:mx-auto pt-2">
        <motion.div
          initial={{ x: "-20%" }}
          animate={{ x: "calc(100% - 100%)" }}
        >
          <p className="text-[#4C6BDC] md:lg:text-5xl text-4xl font-bold leading-[1.1]">
            Let’s discuss your project with our team
          </p>
          <p className="text-[#A1A1A1] text-base md:lg:text-[1.25rem] leading-[1.4] mt-2">
            We would love to hear from you! Send us an email and we will respond
            within 24 hours.
          </p>
        </motion.div>
        {/* Background  */}
        <div class="flex absolute w-6/12 right-0 lg:-right-10 sm:mr-10 h-[90%] top-20 bg-[#eaf0fa] blur-3xl -z-10 rounded-tl-full rounded-bl-full"></div>

        {/* FORM */}
        <FormContact />
      </div>
    </section>
  );
};

export default Contact;
