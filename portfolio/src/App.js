import About from "./components/About";
import Frontpage from "./components/Frontpage";
import Menu from "./components/Menu";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import MainContextProvider from "./contexts/MainContextProvider";

import TrackVisibility from 'react-on-screen';
import { Box } from '@chakra-ui/react'
import Leftbar from "./components/Leftbar";

function App() {
  return (
    <MainContextProvider>
      <Box className="App" bg="primaryDark" >
        <Menu />
        <Leftbar />
        <TrackVisibility partialVisibility>
          <Frontpage />
        </TrackVisibility>
        <Box ml="4vw" mt="10vh">
          <About />
          <Experience />
          <Projects />
          <Blog />
          <Contact />
        </Box>
      </Box>
    </MainContextProvider >
  )
}

export default App;
