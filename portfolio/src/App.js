import About from "./components/About";
import Frontpage from "./components/Frontpage";
import Menu from "./components/Menu";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Frontpage />
      <Menu />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
