import React, { useState, useEffect } from 'react';
import './UserById.css';
import { useParams } from 'react-router-dom';

const UserById = () => {
  const { id } = useParams();

  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }, []);

  return (
    <div className='countries'>
      {user && (
        <div className='country-container'>
          <h2>{user.name.first + ' ' + user.name.last}</h2>
          <img
            className='team-flag'
            src={user.picture.medium}
            alt={user.name.first + ' ' + user.name.last}
          />
          <div className='country-info'>
          <p className='capital'>
              <span className='label'>Email: </span>
              {user.email ? user.email : 'N/A'}
            </p>
            <p className='subregion'>
              <span className='label'>Género: </span>
              {user.gender ? user.gender : 'N/A'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserById;
