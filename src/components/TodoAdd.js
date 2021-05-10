import React, { useState, useEffect, useRef } from 'react';
import './TodoAdd.scss'
import TodoItem from './TodoItem';

const TodoAdd = ({setList, list}) => {
  const [currentTodo, setCurrentTodo] = useState(null);
  const [value, setValue] = useState('');
  const myAddItem = useRef(null)

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    let newList = [...list, currentTodo];
    setList(newList);

    setValue('')
  }



  useEffect(() => {
    // console.log(value);
  });
  return (
    <form onSubmit={onFormSubmit} className="todo-add">
      <TodoItem setCurrentTodo={setCurrentTodo} value={value} setValue={setValue}/>
    </form>
  );
};

export default TodoAdd;
