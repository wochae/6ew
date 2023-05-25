import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({todos, onCheckToggle, onInsertToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoItem 
                    todo={todo} 
                    key={todo.id} 
                    onCheckToggle={onCheckToggle}
                    onInsertToggle={onInsertToggle}
                />
            ))}
        </div>
    );
};

export default TodoList; 