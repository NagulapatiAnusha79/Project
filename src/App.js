import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

class App extends Component{
  render(){

  
  return (
    <div className="App">
      <Counter />
      {/*<Message />*/}
      { /*<Greet  name="Anusha" surname="nagulapati"/>
      <p>This is children props</p>
      <Greet name="sindhu" surname="padhuri"/>
      <button>Click</button>
      <Greet name="Manisha" surname="vudugu"/>
      <Greet name="Sunitha"surname="Nagulapati"/>
      <Welcome name="Anusha" surname="nagulapati"/>
     {/*<Hello/>*/}
       
      

    </div>
  );
}
}

export default App;
