import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import around from "../../public/around.jpg";
import movie from "../../public/movie.jpg";
import food from "../../public/food.jpg";
import dessert from "../../public/dessert.jpg";
import nike from "../../public/nike.jpg";
import seo from "../../public/seo.jpg";
const projects = [
  {
    image: movie,
    title: "Phoneix Movie",
    description:
      "A movie website showcasing all genres, featuring trending movies and TV shows with detailed information and ratings.",
    github: "https://github.com/Faisal-M-S-Abu-Zakari/Phoenix-App",
    demo: "https://phoenix-app-ebon.vercel.app/",
  },
  {
    image: around,
    title: "Around The World!",
    description:
      "A travel application showcasing different destinations around the world with detailed information.",
    github: "https://github.com/Faisal-M-S-Abu-Zakari/Around-The-World",
    demo: "https://around-the-world-three-topaz.vercel.app/",
  },
  {
    image: food,
    title: "Food Ingredients",
    description:
      "Discover a vast collection of recipes tailored to your taste, with detailed ingredient breakdowns and nutritional insights.",
    github: "https://github.com/Faisal-M-S-Abu-Zakari/Food_App",
    demo: "https://faisal-food-app.netlify.app/",
  },
  {
    image: dessert,
    title: "Desserts Application",
    description:
      "A simple desserts application offering a variety of sweet treats from different categories. Browse through delicious options, view detailed descriptions, and place orders effortlessly to satisfy your cravings.",
    github: "https://github.com/Faisal-M-S-Abu-Zakari/desserts-ecommerce",
    demo: "https://desserts-ecommerce.vercel.app/",
  },
  {
    image: nike,
    title: " Nike Ecommerce",
    description:
      "A simple Nike e-commerce application featuring a variety of Nike shoe collections. Explore different styles, view detailed product information, and place orders effortlessly for your perfect pair.",
    github: "https://github.com/Faisal-M-S-Abu-Zakari/Nike-ecommerce",
    demo: "https://nike-ecommerce-lyart.vercel.app/",
  },
  {
    image: seo,
    title: "Landing Page",
    description:
      " Seonatomy provide top-quality SEO solutions with innovative designs and expert guidance. Enhance your online presence with our cutting-edge strategies and user-friendly experiences..",
    github: "https://github.com/Faisal-M-S-Abu-Zakari/Landing-Page",
    demo: "https://landing-page-ivory-three-89.vercel.app/",
  },
];
const Work = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });
  return (
    <section
      ref={sectionRef}
      className="bg-[#000030] min-h-screen flex flex-col justify-start items-center py-5"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-3 mb-8"
      >
        <LiaLaptopCodeSolid size={50} className="text-white" />
        <h2 className="text-white text-2xl !font-extrabold flex">
          Projects <span className="text-[#ffe600] ml-1">Made</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-[80vw]">
        {projects.map((pro) => {
          return (
            <motion.div
              className="group relative rounded-xl overflow-hidden shadow-xl transition-transform duration-200 hover:italic "
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-[400px] w-full">
                <img
                  src={pro.image}
                  alt="Phoneix WebSite"
                  className="w-full h-full object-cover"
                />

                {/* Expandable Bottom Section */}
                <motion.div
                  initial={{ height: "4rem" }} // Start with only h3 visible
                  whileHover={{ height: "auto" }} // Expand on hover
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-black/80 overflow-hidden text-center"
                >
                  <motion.h3
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#ffe600] font-bold text-xl p-3  cursor-pointer"
                  >
                    {pro.title}
                  </motion.h3>

                  <div className="p-4">
                    <p className="text-white/90 text-sm">{pro.description}</p>

                    <div className="flex gap-4 mt-4">
                      <motion.a
                        href={pro.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#ffe600] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#ffd700] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={20} />
                        GitHub
                      </motion.a>
                      <motion.a
                        href={pro.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink size={20} />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default Work;
