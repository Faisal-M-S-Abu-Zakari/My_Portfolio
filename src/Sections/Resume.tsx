import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
const Resume = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleDownload = () => {
    setLoading(true);
    const link = document.createElement("a");
    link.href = "../../public/FaisalMAbuZakari.pdf"; // Set the path to your resume
    link.download = "Faisal_Resume.pdf"; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setLoading(false);
  };
  const handlePreview = () => {
    window.open("../../public/FaisalMAbuZakari.pdf", "_blank");
  };
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });
  return (
    <section
      ref={sectionRef}
      className="bg-[#e5ecfb] !min-h-[50vh] flex  justify-center items-center py-5"
      id="resume"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-center flex gap-5"
      >
        {error && <p className="text-red-500">Error downloading the resume.</p>}
        <motion.button
          onClick={handleDownload}
          disabled={loading}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Downloading..." : "Download Resume"}
        </motion.button>
        <motion.button
          onClick={handlePreview}
          className="ml-4 bg-green-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-green-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Preview Resume
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Resume;
