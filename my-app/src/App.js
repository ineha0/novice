import React from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import Counterexample from './Components/Counterexample'
import Hedder from './Components/Hedder';

function App() {
  return (
    <div>
      <Hedder className='app-header'/>
      <HelloWorld name="WooHoo"/>
      </div>

);
}

export default App;
  