import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route ,Link ,Switch} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Gamescreen from './screens/Gamescreen';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/games" exact component={Gamescreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
