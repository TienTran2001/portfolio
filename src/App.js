import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contaxt";
import Header from "./components/header/Header";
import Getting from "./components/getting/Getting";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className="mt-8 mx-4 md:mx-[40px] lg:mx-[120px] md:mt-4 max-w-[1200px]">
      <Header />
      <Getting />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
