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
  return <div className="todo__list">{renderedListTodo}</div>;
};

export default TodoList;
