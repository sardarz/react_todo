import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoAdd from './components/TodoAdd';
import bgImg from './images/bg-desktop-dark.jpg';
import './App.scss';

const App = () => {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    console.log(theme);
  });

  return (
    <>
      <img className="bgImg" src={bgImg} alt="" />
      <div className="container">
        <Header onClick={setTheme} theme={theme} />
        <TodoAdd />
      </div>
    </>
  );
};

export default App;
