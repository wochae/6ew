import React, { useState } from 'react';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import './App.css';
import { MdAddCircle } from 'react-icons/md';
import './components/TodoInsert.css'

let nextId = 4; // 함수가 증가할 때마다 저장하고 새로고침 해도 영속성을 잃지 않기 위해
const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false); // 추가 버튼 클릭 시, TodoInsert 컴포넌트 보여주기 위한 상태
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: false }
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert('할 일을 입력해주세요.');
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };
  const onCheckToggle = (id) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = todo => {
    setSelectedTodo(todo);
  };

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList
        todos={todos} 
        onCheckToggle={onCheckToggle} 
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert 
        selectedTodo={selectedTodo}
        onInsertToggle={onInsertToggle} 
        onInsertTodo={onInsertTodo} 
        onRemove={onRemove}
        />
      )}
    </Template>
  );
};

export default App;
