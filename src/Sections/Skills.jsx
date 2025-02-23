import { FolderCode } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaJsSquare,
  FaGit,
  FaGithub,
  FaFigma,
  FaPython,
  FaJava,
} from "react-icons/fa"; // Example imports from react-icons
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiAdobexd } from "react-icons/si";
import { SiNetlify, SiVercel } from "react-icons/si";
const skills = [
  { icon: <FaHtml5 color="#E34F26" />, label: "HTML" }, // HTML
  { icon: <FaCss3Alt color="#1572B6" />, label: "CSS" }, // CSS
  { icon: <FaBootstrap color="#7952B3" />, label: "Bootstrap" }, // Bootstrap
  { icon: <RiTailwindCssFill color="#38B2AC" />, label: "Tailwind" }, // Tailwind
  { icon: <FaJsSquare color="#F7DF1E" />, label: "JavaScript" }, // JavaScript
  { icon: <FaReact color="#61DBFB" />, label: "React.js" }, // React.js
  { icon: <SiNextdotjs color="#fff" />, label: "Next.js" }, // Next.js
  { icon: <FaGit color="#F05032" />, label: "Git" }, // Git
  { icon: <FaGithub color="#fff" />, label: "GitHub" }, // GitHub
  { icon: <FaFigma color="#F24E1E" />, label: "Figma" }, // Figma
  { icon: <SiAdobexd color="#FF61F6" />, label: "XD" }, // XD
  { icon: <FaPython color="#3776AB" />, label: "Python" }, // Python
  { icon: <FaJava color="#007396" />, label: "Java" }, // Java
  { icon: <SiNetlify color="#00B140" />, label: "Netlify" }, // Netlify
  { icon: <SiVercel color="#fff" />, label: "Vercel" },
];

const Skills = () => {
  return (
    <section className="bg-[#5605a2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen flex items-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <FolderCode color="#ffffff" size={50} />
          <h2 className="text-white">Skills & Abilities</h2>
        </motion.div>
        <div className="grid grid-cols-4 gap-4 bg-[#33026d] w-[900px] p-10 rounded-2xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }} // Staggered animation
              className="flex flex-col items-center bg-[#05001f] p-3 rounded-2xl cursor-pointer"
              whileHover={{ scale: 1.1 }} // Scale up on hover
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-white mt-2">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
