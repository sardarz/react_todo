import React, { useState } from 'react';
import './TodoInputAndTodoItem.scss';

const TodoInput = ({ listTodo, setListTodo }) => {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (!value) return;
    if (listTodo.some((item) => item.value === value)) return null;
    const tempArr = [...listTodo, { value, isCompleted: false }];
    setValue('');
    setListTodo(tempArr);
  };

  return (
    <form className="todo__form" onSubmit={onFormSubmit}>
      <div className={`circle circle-add`}>
        <i className="fas fa-check"></i>
      </div>
      <input
        placeholder="Add todo entry"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className={`todo__input ${checked ? 'checked' : ''}`}
      />
    </form>
  );
};

export default TodoInput;
