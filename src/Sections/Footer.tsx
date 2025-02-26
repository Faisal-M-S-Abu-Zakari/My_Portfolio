import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";
const menuItems = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "About",
    link: "#",
  },
  {
    label: "Skills",
    link: "#",
  },
  {
    label: "Education",
    link: "#",
  },
  {
    label: "Projects",
    link: "#",
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#00012b] text-white py-8 px-4 !min-h-[50vh]">
      <div className="container mx-auto flex  md:flex-row justify-around items-start">
        {/* Faisal's Portfolio Section */}
        <div className="mb-6 md:mb-0 text-start md:text-left flex flex-col gap-2.5 ">
          <h3 className="text-xl font-semibold mb-2">Faisal's Portfolio</h3>
          <p className="text-sm w-[20vw] text-[#b7b7bb]">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p className="text-sm mt-2 text-[#b7b7bb]">
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0 flex flex-col justify-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-start items-center gap-2 w-[200px] mb-2 hover:text-[#ffae00] "
              >
                <IoIosArrowDroprightCircle size={20} />
                <a
                  href={item.link}
                  className="text-white  text-decoration-none  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="text-center md:text-left flex flex-col items-start justify-start">
          <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
          <p className="text-sm">+972 59-909-1546</p>
          <p className="text-sm">zkryfysl@gmail.com</p>
          <p className="text-sm">Palestine, Gaza</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-4 "
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
                className={`p-2 rounded-full bg-gray-100 text-gray-600 hover:text-white ${color} transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <Icon className="w-3 h-3" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      <hr />
      <div className="mt-8 text-center">
        <p className="text-sm">Designed With ❤️ By Faisal Zakari</p>
      </div>
    </footer>
  );
};

export default Footer;
