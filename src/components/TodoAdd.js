import React, { useState, useEffect } from 'react';
import './TodoAdd.scss';

const TodoAdd = () => {
  const [value, setValue] = useState('');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // console.log(value);
  });
  return (
    <div className="todoadd">
      <div
        className={`circle ${clicked ? 'clicked' : ''}`}
        onClick={() => setClicked(!clicked)}
      >
        <i className="fas fa-check"></i>
      </div>
      <input
        className="todoadd__input"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        placeholder="Add your todo entry"
      />
    </div>
  );
};

export default TodoAdd;
