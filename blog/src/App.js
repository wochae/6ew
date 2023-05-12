import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  function 함수() {
    return 100
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
        <h4>{ posts }</h4>
      </div>
    </div>
  );
}

export default App;
