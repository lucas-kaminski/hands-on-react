import About from "./components/About";
import Frontpage from "./components/Frontpage";
import Menu from "./components/Menu";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import TrackVisibility from 'react-on-screen';
import { useState } from "react";

function App() {
  const [visibility, setVisibility] = useState(true)
  return (
    <div className="App">
      <TrackVisibility partialVisibility>
        <Frontpage setVisibility={setVisibility} />
      </TrackVisibility>
      <Menu visibility={visibility} />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
