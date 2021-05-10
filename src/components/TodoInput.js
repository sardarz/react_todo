import React, { useState } from 'react';
import './TodoInputAndTodoItem.scss';

const TodoInput = () => {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <form className="todo__form">
      <div className={`circle ${checked ? 'checked' : ''}`} onClick={() => setChecked(!checked)}>
      <i className="fas fa-check"></i>
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className={`todo__input ${checked ? 'checked' : ''}`}
      />
    </form>
  );
};

export default TodoInput;
