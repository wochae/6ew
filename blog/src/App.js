import React, { Children } from 'react';
import Template from './components/Template';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return( 
    <Template>
      <TodoList />
    </Template>
  );
};

export default App;
