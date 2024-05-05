import React, { useState } from 'react';

import './Navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">FOUND IT!</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul
          onClick={handleClick}
          className={clicked ? 'nav-menu active' : 'nav-menu'}></ul>
      </nav>
    </div>
  );
};

export default Navbar;
