import React, { useState } from 'react';
import './TodoInputAndTodoItem.scss';

const TodoInput = () => {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const onFormSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
  }

  return (
    <form className="todo__form" onSubmit={onFormSubmit}>
      <div className={`circle ${checked ? 'checked' : ''}`} onClick={() => setChecked(!checked)}>
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
