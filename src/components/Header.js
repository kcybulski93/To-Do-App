import './styles/Header.css';
import React from 'react';
import Clock from './Clock';
import LangButtons from './LangButtons';

const Header = () => {
  return (
    <>
      <div className='Header'>
        <Clock />
        <div className="centerHeader">
          <h1> To-Do-List </h1>
          <h5>(For Adam Grzegrzółka)</h5>
        </div>
        <LangButtons />
        <div style={{ clear: "both" }} > </div>
      </div>
    </>
  );
}

export default Header;