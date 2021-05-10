import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.scss';

const TodoList = ({ listTodo, setListTodo }) => {
  const renderedListTodo = listTodo.map((item, idx) => {
    if (!listTodo.length) return;
    return (
      <TodoItem
        value={item.value}
        isCompleted={item.isCompleted}
        key={item.value}
        index={idx}
        listTodo={listTodo}
        setListTodo={setListTodo}
      />
    );
  });
  console.log(listTodo);
  return (
    <div className="todo__list">
      {renderedListTodo}
      <div className="todo__list-stats">
        <div className="todo__list-items-left">
          {listTodo.filter(item => !item.isCompleted).length} items left
        </div>
        <div className="todo__list-options">
          <div className="todo__list-all">All</div>
          <div className="todo__list-active">Active</div>
          <div className="todo__list-completed">Completed</div>
        </div>
        <div className="todo__list-clear-completed">Clear Completed</div>
      </div>
    </div>
  );
};

export default TodoList;
