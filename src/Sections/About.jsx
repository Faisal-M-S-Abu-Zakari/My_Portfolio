import { motion, useInView } from "framer-motion";
import { User } from "lucide-react";
import faisal from "../../public/faisal.jpg";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 py-16 min-h-screen flex items-center"
    >
      <div className="w-full flex flex-col gap-12">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          <User size={50} className="text-neutral-900" strokeWidth={3} />
          <h1 className="text-4xl font-bold tracking-tight">
            About <span className="text-purple-600">Me</span>
          </h1>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.img
              src={faisal}
              alt="Faisal Abu Zakari"
              className="w-full h-[550px] object-cover object-center max-w-md mx-auto rounded-2xl shadow-lg grayscale hover:shadow-xl transition-shadow duration-300"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
                filter: "grayscale(0%)",
              }}
              style={{
                filter: "grayscale(100%)",
                WebkitFilter: "grayscale(100%)",
              }}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-neutral-900">
                I'm Faisal Abu Zakari
              </h2>
              <p className="text-xl font-semibold text-purple-600">
                Front-End Developer
              </p>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              I am a 23-year-old software engineering student at Palestine
              University in Gaza and an active member of Gaza Sky Geeks.
              Passionate about becoming a professional React.js developer, I
              have worked on several projects that I’m eager to showcase. I
              thrive on coding and am excited to refine my skills, take on new
              challenges, and turn my aspirations into reality.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-purple-600">Email:</span>
                <a
                  href="mailto:zkryfysl@gmail.com"
                  className="text-neutral-700 hover:text-purple-600 transition-colors duration-300"
                >
                  zkryfysl@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-purple-600">Place:</span>
                <span className="text-neutral-700">Palestine-Gaza</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold 
                      hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2"
            >
              Resume <span className="text-lg">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
