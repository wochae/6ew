import React, { useState } from 'react';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import './App.css';
import { MdAddCircle } from 'react-icons/md';

const App = () => {
  const [insertToggle, setInsertToggle] = useState(false); // 추가 버튼 클릭 시, TodoInsert 컴포넌트 보여주기 위한 상태
  const [todos, setTodos] = useState( [
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: false }
  ]); 
  
  const onInsertToggle = () => {
    setInsertToggle(prev => !prev);
  };

  return( 
    <Template todoLength={todos.length}>
      <TodoList todos={todos}/>
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle/>
      </div>
      {insertToggle && <TodoInsert />}
    </Template>
  );
};

export default App;
