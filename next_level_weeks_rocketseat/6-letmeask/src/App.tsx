import { createContext } from 'react'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';
import { BrowserRouter, Route } from 'react-router-dom'

export const TestContext = createContext('')

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={'teste'} >
        <Route path='/' exact component={Home} />  {/* o exact é para definir o caminho especifico, se não ele pega o começo */}
        <Route path='/rooms/new' component={NewRoom} />
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
