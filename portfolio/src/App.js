import { Box } from '@chakra-ui/react'
import Frontpage from './components/Frontpage'
import Menu from './components/Menu'

function App() {
  return (
    <Box className="App">
      <Menu />
      <Frontpage />
    </Box>
  )
}

export default App
