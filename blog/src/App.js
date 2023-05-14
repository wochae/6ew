import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal.js';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>제목</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3> {글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h3>
        <p>5월 13일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>5월 14일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>5월 15일 발행</p>
        <hr />
      </div>
      <Modal />
    </div>
  );
}

export default App;
