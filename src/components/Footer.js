import React from 'react';
import './styles/Footer.css';

const Footer = (props) => {
  return (
    <>
      <div className='Footer'>
        <p>Made with <i class="icon-heart"></i> by {props.name} Cybulski <a className="anchor" href="https://www.facebook.com/kamil.cybulski.9"><i class="icon-facebook-rect"></i></a></p>
      </div>
    </>
  );
}

export default Footer;