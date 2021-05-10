import React, { useState, useEffect } from 'react';
import './TodoAdd.scss';

const TodoAdd = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(value);
  });
  return (
    <div className="todoadd">
      <input
        className="todoadd__input"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
    </div>
  );
};

export default TodoAdd;
