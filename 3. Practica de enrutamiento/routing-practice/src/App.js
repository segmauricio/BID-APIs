import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Numbers from './components/Numbers';
import Home from './components/Home';
import ColoredMsg from './components/ColoredMsg'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Route path='/:id' exact render={ (routeProps) => <Numbers {...routeProps} />} />
          <Route path='/:id/:textcolor/:bgcolor' exact render={ (routeProps) => <ColoredMsg {...routeProps} />} />
        </div>
    </BrowserRouter>
  );
}

export default App;