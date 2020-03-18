import React, { Component } from 'react';
import Sketch from './sketch';
import './App.css';


function App(){

  return (
    <div className="App">
      <h1>Audio Visualisation</h1>
   
      <Sketch /> 
    </div>
  );
}


  

export default App;

// create button as seperate component?
// how do i trigger changes (different visualisations=functions) in p5 by using button?
// should i just have 2 or more seperate sketch childrens?
