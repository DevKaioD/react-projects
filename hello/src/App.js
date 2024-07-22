import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';

function App() {
  return (
    <div className="App">
      <Greet name="Kaio" />
      <Greet name="Sammy" />
      <Greet name="Rubens" />
      <Greet name="Tailan" />
      <Greet name="Jovito" />
      { /*<Welcome />
      <Hello />*/ }
    </div>
  );
}

export default App;
