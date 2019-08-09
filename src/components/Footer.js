import React from 'react';
import './styles/Footer.css';

const Footer = (props) => {
  return (
    <>
      <div className='Footer'>
        <p> {props.name}<a href="https://gist.github.com/shprink/bf9599e1d66b9dc4d151e89c1199ccb8">Start</a> </p>
      </div>
    </>
  );
}

export default Footer;