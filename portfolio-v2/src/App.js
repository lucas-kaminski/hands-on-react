import { Box } from '@chakra-ui/react'
import Frontpage from './components/Frontpage'
import Life from './components/Life'
import Menu from './components/Menu'
import Study from './components/Study'
import Work from './components/Work'

function App() {
  return (
    <Box className="App" overflowX="hidden">
      <Menu />
      <Frontpage />
      <Life />
      <Study />
      <Work />
    </Box>
  )
}

export default App
