import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="hero"
      className="min-h-screen flex items-center justify-center !px-6 !py-12 bg-gradient-to-br from-gray-50 to-gray-100 mt-16 md:mt-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Hi There
                </motion.h2>
                <motion.div
                  animate={{ rotate: [0, 20, -10, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FaHandPaper className="text-amber-600 w-8 h-8" />
                </motion.div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                I'm{" "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600"
                >
                  Faisal
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500"
                >
                  Zakari
                </motion.span>
              </h1>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 font-medium flex items-center gap-2"
            >
              I Am Into{" "}
              <span className="text-rose-500">
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Development",
                      "React.js",
                      "Web Development",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="!px-8 !py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white !rounded-4xl font-medium text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300"
            >
              About Me ↓
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              {[
                {
                  Icon: FaLinkedin,
                  color: "hover:bg-blue-600",
                  link: "https://www.linkedin.com/in/faisal-abu-zakari/",
                },
                {
                  Icon: FaGithub,
                  color: "hover:bg-gray-800",
                  link: "https://github.com/Faisal-M-S-Abu-Zakari",
                },
                {
                  Icon: FaInstagram,
                  color: "hover:bg-pink-500",
                  link: "https://www.instagram.com/abu._zean/",
                },
                {
                  Icon: FaEnvelope,
                  color: "hover:bg-red-500",
                  link: "mailto:zkryfysl@gmail.com",
                },
                {
                  Icon: FaWhatsapp,
                  color: "hover:bg-green-500",
                  link: "https://wa.me/00972-59-909-1546",
                },
                {
                  Icon: FaTelegram,
                  color: "hover:bg-blue-500",
                  link: "https://t.me/00970-59-909-1546",
                },
              ].map(({ Icon, color, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-gray-100 text-gray-600 hover:text-white ${color} transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="relative w-72 h-72 md:w-96 md:h-96 mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
              <div className="relative w-full h-full bg-gradient-to-br from-amber-300 to-orange-300 rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="/Leonardo_Phoenix_10_A_photorealistic_3D_render_of_a_23yearold_2-enhanced.png"
                  alt="Profile"
                  className="w-[85%] h-[85%] object-cover rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
