import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({listTodo}) => {
  const renderedListTodo = listTodo.map((item, idx) => {
    if (!listTodo.length) return
    return (
        <TodoItem value={item.value} isCompleted={item.isCompleted} key={item.value} />
    )
  })
  console.log(listTodo);
  return <div>
    {renderedListTodo}
  </div>;
};

export default TodoList;
