import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />  {/* o exact é para definir o caminho especifico, se não ele pega o começo */}
      <Route path='/rooms/new' component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
