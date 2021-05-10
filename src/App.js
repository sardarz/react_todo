import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput'
import bgImg from './images/bg-desktop-dark.jpg';
import './App.scss';

const App = () => {
  const [darkTheme, setTheme] = useState(true);
  // const [list, setList] = useState([]);

  useEffect(() => {
    document.body.classList = `${!darkTheme ? 'light-theme' : ''}`
  })

  const arr = [<Header />, <Header />]

  console.log(<Header value="kek"/>);

  return (
    <>
      <img className="bgImg" src={bgImg} alt="" />
      <div className={`container`}>
        <Header onClick={setTheme} theme={darkTheme} />
        <TodoInput />
      </div>
    </>
  );
};

export default App;
