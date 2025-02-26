import { FolderCode } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiAdobexd,
  SiRedux,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 color="#E34F26" />, label: "HTML5" },
  { icon: <FaCss3Alt color="#1572B6" />, label: "CSS" },
  { icon: <FaBootstrap color="#7952B3" />, label: "Bootstrap" },
  { icon: <RiTailwindCssFill color="#38B2AC" />, label: "Tailwind" },
  { icon: <FaJsSquare color="#F7DF1E" />, label: "JavaScript" },
  { icon: <FaReact color="#61DBFB" />, label: "React.js" },
  { icon: <SiNextdotjs color="#fff" />, label: "Next.js" },
  { icon: <FaGit color="#F05032" />, label: "Git" },
  { icon: <FaGithub color="#fff" />, label: "GitHub" },
  { icon: <FaFigma color="#F24E1E" />, label: "Figma" },
  { icon: <SiAdobexd color="#FF61F6" />, label: "XD" },
  { icon: <FaPython color="#3776AB" />, label: "Python" },
  { icon: <FaJava color="#007396" />, label: "Java" },
  { icon: <SiNetlify color="#00B140" />, label: "Netlify" },
  { icon: <SiVercel color="#fff" />, label: "Vercel" },
  { icon: <SiRedux className="text-[#764ABC]" />, label: "Redux" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });

  return (
    <section id="skills" ref={sectionRef} className="bg-[#5605a2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <FolderCode color="#ffffff" size={50} />
          <h2 className="text-white text-2xl sm:text-3xl font-extrabold">
            Skills & <span className="text-amber-300">Abilities</span>
          </h2>
        </motion.div>

        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-w-4xl p-6 bg-[#33026d] rounded-2xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col items-center bg-[#05001f] p-4 rounded-2xl cursor-default"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-white mt-2 text-sm sm:text-base">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
