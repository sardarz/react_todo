import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList'
import bgImg from './images/bg-desktop-dark.jpg';
import './App.scss';

const App = () => {
  const [theme, setTheme] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    // console.log(theme);
    console.log(list);
  });

  return (
    <>
      <img className="bgImg" src={bgImg} alt="" />
      <div className="container">
        <Header onClick={setTheme} theme={theme} />
        <TodoAdd list={list} setList={setList} />
        <TodoList list={list} />
        {list}
      </div>
    </>
  );
};

export default App;
