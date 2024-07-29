import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';

function App() {
  return (
    <div className="App">
      <Message />
      { /*
      <Greet name="Kaio" nickname="Kai Caçimba">
        <p>This is a children</p>
      </Greet>
      <Greet name="Sammy" nickname="Sammyamy"/>
      <Greet name="Rubens" nickname="Rubes"/>
      <Greet name="Tailan" nickname="Colombiano"/>
      <Greet name="João Vitor" nickname="Jovi"/>
      <Welcome />
      <Hello />*/ 
      }
    </div>
  );
}

export default App;
