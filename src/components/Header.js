import './styles/Header.css';
import React from 'react';
import Clock from './Clock';

const Header = (props) => {
  return (
    <>
      <div className='Header'>
        <Clock />
        <div className="centerHeader">
          <h1> To-Do-List </h1>
          <h5>(For {props.name} {props.surname})</h5>
        </div >
        <div className="rightHeader">
          <button>Back</button>
        </div>
        <div style={{ clear: "both" }} > </div>
      </div>
      <div style={{ clear: "both" }} > </div>
    </>
  );
}

export default Header;