import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./Sections/Hero";
import About from "./Sections/About.tsx";
import BackToTop from "./Sections/BackToTop.tsx";
import Skills from "./Sections/Skills.tsx";
import Education from "./Sections/Education.tsx";
import Work from "./Sections/Work.tsx";
import Footer from "./Sections/Footer.tsx";
import Resume from "./Sections/Resume.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <BackToTop />
      <Skills />
      <Education />
      <Work />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
