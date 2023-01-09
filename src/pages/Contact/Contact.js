import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import FormContact from "./components/FormContact";
import { motion } from "framer-motion";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col space-y-3 pb-20 sm:pb-96 px-[8vw]">
      <div className="flex justify-end mt-10 z-20 xl:w-[60rem] xl:mx-auto ">
        {/* Button Back to Homepage */}
        <button
          class="btn hover:bg-[#4C6BDC] border-none normal-case relative inline-flex items-center px-[3.5rem] py-[0.75rem] overflow-hidden  text-[#393737] shadow-[0_2px_3px_gray] hover:text-white rounded-br-none rounded-tl-none rounded-tr-3xl rounded-bl-3xl bg-[#FFFFFF] group"
          onClick={() => navigate("/")}
        >
          <span class="absolute right-0 flex items-center justify-start  w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-4 ease">
            <Icon
              icon="material-symbols:arrow-right-alt-rounded"
              color="white"
              width="25"
              height="25"
            />
          </span>
          <span class="relative  group-hover:-translate-x-2 ease duration-100 group-hover:transform">
            Back to Homepage
          </span>
        </button>
      </div>
      <motion.div
        class="flex flex-col z-10 xl:mx-auto pt-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-[#4C6BDC] md:lg:text-5xl text-4xl font-bold leading-[1.1]">
          Let’s discuss your project with our team
        </p>
        <p className="text-[#A1A1A1] text-[16px] md:text-[18px]  leading-[1.4] mt-2">
          We would love to hear from you! Send us an email and we will respond
          within 24 hours.
        </p>
      </motion.div>

      {/* Background  */}
      <div class="flex absolute w-6/12 right-0 lg:-right-10 sm:mr-10 h-[90%] top-20 bg-[#eaf0fa] blur-3xl -z-10 rounded-tl-full rounded-bl-full"></div>
      {/* FORM */}
      <FormContact />
    </section>
  );
};

export default Contact;
