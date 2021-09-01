
import './App.css';
import {BrowserRouter , Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Gamescreen from './screens/Gamescreen';
import Cluesscreen from './screens/Cluesscreen';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/games" exact component={Gamescreen} />
        <Route path="/clues" exact component={Cluesscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
