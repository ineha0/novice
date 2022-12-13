import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Counterexample from './Components/Counterexample'
import Header from './Components/Hedder';
import Footer from './Components/Fotter';
import Navigation from './Components/Naivgation';

function App() {
  return (
    <div>
      <Header/>
      <HelloWorld name="WooHoo"/>
      <Navigation/>
      <Footer/>
      </div>

);
}

export default App;
  