import React, { useEffect, useState } from 'react';
import './Users.css';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=25')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setFilteredUsers(data.results);
        localStorage.setItem('users', JSON.stringify(data.results)); // Guardar usuarios en localStorage
      });
  }, []);

  useEffect(() => {
    const results = users.filter(user =>
      user.location.country.toLowerCase().includes(countryFilter.toLowerCase())
    );
    setFilteredUsers(results);
  }, [countryFilter, users]);

  return (
    <div className='users'>
      <div className='filter'>
        <input
          type='text'
          placeholder='Filtrar por país...'
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
        />
      </div>
      <div className='users-container'>
        {filteredUsers.map((user) => (
          <Link
            to={`/user/${user.login.uuid}`}
            className='user-card'
            key={user.login.uuid}
          >
            <img
              className='img'
              src={user.picture.large}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/public/assets/default.png';
              }}
              alt={user.name.first + ' ' + user.name.last}
            />
            <h2 className='name'>{user.name.first + ' ' + user.name.last}</h2>
            <p className='country-p'>🌍 {user.location.country}</p>
            <p className='city'>📍 {user.location.city}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
