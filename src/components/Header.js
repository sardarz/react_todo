import React from 'react';
import './Header.scss';
import logo from '../images/icon-sun.svg';

const Header = ({ onClick, theme }) => {
  return (
    <header className="header">
      <h1 className="header__title">TODO</h1>
      <div
        className="header__logo"
        onClick={() => {
          onClick(!theme);
        }}
      >
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
