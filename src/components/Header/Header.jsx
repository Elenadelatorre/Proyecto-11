import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink activeclassname='active' className='h1' to='/'>INFIFOOT</NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/products'>PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink  activeclassname='active' to='/users'>USERS</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
