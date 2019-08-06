import './styles/Header.css';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className="leftHeader">
        <h2>12:00</h2>
        <h4>06.08.2019</h4>
      </div>
      <div className="centerHeader">
        <h1> To-Do-List </h1>
        <h5>(For Adam Grzegrzółka)</h5>
      </div>
    </>
  );
}

export default Header;