import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink activeclassname='active' className='h1' to='/'>CulturaViva🌍</NavLink>
          </li>
          <li>
            <NavLink activeclassname='active' to='/countries'>DESTINOS</NavLink>
          </li>
          <li>
            <NavLink  activeclassname='active' to='/users'>PARTICIPANTES</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
