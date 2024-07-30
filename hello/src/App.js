import React, { Component } from 'react';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';

class App extends Component {
  render() {
    return (
    <div className="App">
      <FunctionClick />
      {/*<Counter />
      <Message />    
      <Hello />
      <Welcome name="Sammy" nickname="Sammyamy"/>
      <Greet name="Kaio" nickname="Kai Caçimba" />*/}
    </div>
  );
  }
}

export default App;
