import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center space-x-3 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/F (2).png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Faisal
            </span>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative !px-3 !py-2 text-gray-700 hover:text-gray-900 font-medium rounded-md transition-colors text-decoration-none group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-indigo-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>
          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};
export default NavBar;
