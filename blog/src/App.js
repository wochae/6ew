import React, { useState } from 'react';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import './App.css';
import { MdAddCircle } from 'react-icons/md';
import './components/TodoInsert.css'
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false); // 추가 버튼 클릭 시, TodoInsert 컴포넌트 보여주기 위한 상태
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [todos, setTodos] = useState([
    { id: userId, text: userName, checked: true },
  ]);

  useEffect(() => {
    axios.get('http://localhost:8080/user/', {
      params: { userId: 1 }
    })
      .then(response => {
        const { userId, userName } = response.data;
        setUserId(userId);
        setUserName(userName);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  

  
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert('할 일을 입력해주세요.');
    } 
    // else {
    //   const todo = {
    //     id: nextId,
    //     text,
    //     checked: false
    //   }
    //   setTodos(todos => todos.concat(todo));
    //   nextId++;
    // }
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

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => 
      todos.map(todo => (todo.id === id ? { ...todo , text } : todo))
      );
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
        onUpdate={onUpdate}
        />
      )}
    </Template>
  );
};

export default App;
