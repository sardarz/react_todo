import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import bgImgDark from './images/bg-desktop-dark.jpg';
import bgImgLight from './images/bg-desktop-light.jpg';
import './App.scss';

const App = () => {
  const [darkTheme, setTheme] = useState(true);
  const [listTodo, setListTodo] = useState([]);
  const [filters, setFilters] = useState('all');

  useEffect(() => {
    document.body.classList = `${!darkTheme ? 'light-theme' : ''}`;
  });

  const arr = [<Header />, <Header />];

  return (
    <>
      <div className="bg-image"></div>
      <img className={`bgImg`} alt="" />
      <div className={`container`}>
        <Header onClick={setTheme} theme={darkTheme} />
        <TodoInput listTodo={listTodo} setListTodo={setListTodo} />
        <TodoList
          listTodo={listTodo}
          setListTodo={setListTodo}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </>
  );
};

export default App;
