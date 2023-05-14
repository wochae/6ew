import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Time from './Time';
const today = function () {
  return new Date().toISOString();
};
const timeProps = {
  defaultDate: today(),
  message: "What Time is it? huh?"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Time {...timeProps} />
      </header>
    </div>
  );
}

export default App;
