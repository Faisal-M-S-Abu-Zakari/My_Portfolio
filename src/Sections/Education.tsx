import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";
import university from "/university.jpg";

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 }); // Detects when 40% of section is in view

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-[#e5ecfb] min-h-[50vh] flex flex-col justify-start items-center py-5 px-3"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-3 mb-2"
      >
        <FaGraduationCap size={50} />
        <h2 className="text-black text-2xl !font-extrabold flex">
          MY <span className="text-[#7303a7] ml-1">Education</span>
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        Education is not the learning of facts, but the training of the mind to
        think.
      </motion.p>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="flex bg-white shadow-2xl rounded-2xl gap-4"
        >
          <div className="flex-shrink-0">
            <img
              src={university}
              className="rounded-l-2xl object-cover h-60 w-48 sm:h-64 sm:w-64 md:h-60 md:w-80"
              alt="University"
            />
          </div>
          <div className="flex flex-col p-1 gap-2 justify-center">
            <h3 className="!text-[#012970]">
              Bachelor of Software Engineering
            </h3>
            <span>
              College of Software Engineering and Artificial Intelligence
            </span>
            <div className="flex gap-2">
              <span className="border-r-2 pr-2.5 text-[#226d00]">
                2020-2025
              </span>
              <span className="text-[#226d00]">Completed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
