import React, { useEffect, useState } from 'react';
import './Users.css';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=25')
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);
  return (
    <div className='countries'>
      <div className='teams-cards'>
        {users.map((user) => (
          <Link
            to={`/user/${user.login.uuid}`}
            className='team-card'
            key={user.login.uuid}
          >
            <img
              className='img'
              src={user.picture.large}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/public/assets/default.png';
              }}
              alt={
                user.name.first + user.name.last
              }
            />

            <h2 className='name'>
              {user.name.first + ' ' + user.name.last}
            </h2>
            <p ></p>
            <p ></p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
