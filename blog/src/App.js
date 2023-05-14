import React, { useState } from "react";
import Time from './Time';
import './App.css';
const today = new Date().toISOString();

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
