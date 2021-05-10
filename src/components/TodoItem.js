import React, { useState, useEffect } from 'react';
import './TodoItem.scss';

const TodoItem = ({ setCurrentTodo, setValue, value }) => {
  const [clicked, setClicked] = useState(false);



  return (
    <div className="todo-item">
      <div
        className={`circle ${clicked ? 'clicked' : ''}`}
        onClick={() => setClicked(!clicked)}
      >
        <i className="fas fa-check"></i>
      </div>
      <input
        className="todo-item__input"
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value);

          if (setCurrentTodo) {
            setCurrentTodo(evt.target.value)
          }
        }}
        placeholder="Add your todo entry"
      />
    </div>
  );
};

export default TodoItem;
