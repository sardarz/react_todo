import React, { useState } from 'react';

const TodoItem = ({ value }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="todo__item">
      <div
        className={`circle ${checked ? 'checked' : ''}`}
        onClick={() => setChecked(!checked)}
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
    </div>
  );
};

export default TodoItem;
