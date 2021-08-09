import logo from './logo.svg';
import './App.css';
import Pokedex from "./Pokedex.js";

function App() {
  return (
    ReactDOM.render(<Pokedex/>, 
      document.getElementById("root"))
  )
}

export default App;
