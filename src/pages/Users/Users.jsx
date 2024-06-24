import React, { useEffect, useState } from 'react';
import './Users.css';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/users')
      .then((response) => response.json())
      .then((response) => setUsers(response));
  }, []);
  return (
    <div className='teams'>
      <div className='teams-cards'>
        {users.map((user) => (
          <Link to={`/users/${user.id}`} className='team-card' key={user.id}>
            <img
              className='team-logo'
              src={user.avatar|| '/public/assets/default.png'}
              onError={(e) => { e.target.onerror = null; e.target.src = '/public/assets/default.png'; }}
              alt={user.name}
            />

            <h2 className='team-name'>{user.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
