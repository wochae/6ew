import React from "react";
import logo from './logo.svg';
import './App.css';

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

function Time(props) {
  return (
    <div>
      <h2>What Time is it?</h2>
      <p>{props.today}</p>
    </div>
  );
}

export default App;
