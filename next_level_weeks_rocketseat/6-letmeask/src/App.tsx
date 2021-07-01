import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';
import { BrowserRouter, Route } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path='/' exact component={Home} />  {/* o exact é para definir o caminho especifico, se não ele pega o começo */}
        <Route path='/rooms/new' component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
