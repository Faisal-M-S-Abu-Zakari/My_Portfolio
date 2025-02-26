import { motion, useInView } from "framer-motion";
import { User } from "lucide-react";
import faisal from "/faisal.jpg";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="max-w-7xl mx-auto px-6 py-16 min-h-screen flex flex-col items-center justify-center"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-3 mb-8"
      >
        <User size={50} className="text-neutral-900" strokeWidth={3} />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          About <span className="text-purple-600">Me</span>
        </h1>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-6 w-full max-w-5xl">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-2/3 lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.img
            src={faisal}
            alt="Faisal Abu Zakari"
            className="w-56 sm:w-72 md:w-80 lg:w-96 h-auto object-cover rounded-2xl shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
        {/* Text Section */}
        <motion.div
          className="w-full md:w-2/3 lg:w-1/2 space-y-5 text-start lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-neutral-900">
            I'm Faisal Abu Zakari
          </h2>
          <p className="text-lg font-semibold text-purple-600">
            Front-End Developer
          </p>
          <p className="text-neutral-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
            I am a 23-year-old software engineering student at Palestine
            University in Gaza and an active member of Gaza Sky Geeks.
            Passionate about becoming a professional React.js developer, I have
            worked on several projects and am eager to showcase them. I thrive
            on coding and look forward to refining my skills and tackling new
            challenges.
          </p>

          {/* Contact Info */}
          <div className="space-y-2 ">
            <div className="flex justify-start lg:justify-start items-center gap-2">
              <span className="font-semibold text-purple-600">Email:</span>
              <a
                href="mailto:zkryfysl@gmail.com"
                className="text-neutral-700 hover:text-purple-600 transition-colors duration-300"
              >
                zkryfysl@gmail.com
              </a>
            </div>
            <div className="flex justify-start lg:justify-start items-center gap-2">
              <span className="font-semibold text-purple-600">Location:</span>
              <span className="text-neutral-700">Palestine - Gaza</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
