import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import BackToTop from "./Sections/BackToTop";
import Skills from "./Sections/Skills";
import Education from "./Sections/Education";
import Work from "./Sections/Work";
import Footer from "./Sections/Footer";

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
      <Footer />
    </>
  );
}

export default App;
