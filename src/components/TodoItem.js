import React, { useState, useEffect } from 'react';

const TodoItem = ({
  value,
  isCompleted,
  setListTodo,
  listTodo,
  index,
  showActive,
  showCompleted,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const checkedTodos = [...listTodo];
    checkedTodos[index].isCompleted = checked;
    setListTodo(checkedTodos);
  }, [checked]);

  if (showCompleted && !isCompleted) return null;
  if (showActive && isCompleted) return null;

  return (
    <div className={`todo__item `}>
      <div
        className={`circle ${checked ? 'checked' : ''}`}
        onClick={() => {
          setChecked(!checked);
        }}
      >
        <i className="fas fa-check"></i>
      </div>
      <div
        className={`todo__text ${checked ? 'checked' : ''}`}
        onClick={() => {
          setChecked(!checked);
        }}
      >
        {value}
      </div>
      <div
        className="todo__remove"
        onClick={() => {
          const newTodos = [...listTodo];
          newTodos.splice(index, 1);
          setListTodo(newTodos);
        }}
      >
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
};

export default TodoItem;
