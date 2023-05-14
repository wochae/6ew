import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Time from './Time';

const today = function() {
  return new Date().toISOString();
};

function App() {
  let myName = "My Name";
  return (
    <div className="App">
      <header className="App-header">
        <h2>{myName}</h2>
        <Time init={ today }/>
      </header>
    </div>
  );
}

export default App;
