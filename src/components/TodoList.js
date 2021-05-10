import React, { useEffect, useState } from 'react';
import './TodoList.scss'
import TodoItem from './TodoItem';

const TodoList = ({list}) => {

  const renderedList = list.map(item => {
    return <TodoItem value={item} key={item}/>
  })

  return (
    <div className="todo-list">
      {renderedList}
    </div>
  )
};

export default TodoList;
