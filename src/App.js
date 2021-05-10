import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
import bgImg from './images/bg-desktop-dark.jpg';
import './App.scss';

const App = () => {
  const [darkTheme, setTheme] = useState(true);
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    document.body.classList = `${!darkTheme ? 'light-theme' : ''}`
  })

  const arr = [<Header />, <Header />]

  return (
    <>
      <img className="bgImg" src={bgImg} alt="" />
      <div className={`container`}>
        <Header onClick={setTheme} theme={darkTheme} />
        <TodoInput listTodo={listTodo} setListTodo={setListTodo} />
        <TodoList listTodo={listTodo} />
      </div>
    </>
  );
};

export default App;
