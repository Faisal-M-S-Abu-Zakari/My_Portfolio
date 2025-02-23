import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import BackToTop from "./Sections/BackToTop";
import Skills from "./Sections/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <BackToTop />
      <Skills />
    </>
  );
}

export default App;
