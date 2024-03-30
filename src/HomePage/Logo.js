import React from 'react';
import logo from './Logo.png';
function Logo() {
  return (
    <div className='logo' style={{ margin: '10px' }}>
      <img src={logo} alt="loading" height='150px' />
      <div id="logo-name">
        {/* <span>CTF</span>
        <span>A CYBER HACKATON</span> */}
      </div>
    </div>
  );
}

export default Logo;
