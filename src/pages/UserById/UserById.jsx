import React, { useState, useEffect } from 'react';
import './UserById.css';
import { useParams } from 'react-router-dom';

const UserById = () => {
  const { id } = useParams();

  const [user, setUser] = useState();

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users'));
    if (savedUsers) {
      const foundUser = savedUsers.find((user) => user.login.uuid === id);
      if (foundUser) {
        setUser(foundUser);
      }
    }
  }, [id]);

  return (
    <div className='user'>
      {user && (
        <div className='user-container'>
          <h2>{user.name.first + ' ' + user.name.last}</h2>
          <img
            className='img'
            src={user.picture.large}
            alt={user.name.first + ' ' + user.name.last}
          />
          <div className='user-info'>
            <p className='capital'>
              <span className='label'>Email: </span>
              {user.email ? user.email : 'N/A'}
            </p>
            <div className='user-info'>
            <p>
                <span className='label'>Edad: </span>
                {user.dob.age? user.dob.age : 'N/A'}
              </p>
              <p>
                <span className='label'>País: </span>
                {user.location.country ? user.location.country : 'N/A'}
              </p>
              <p>
                <span className='label'>Ciudad: </span>
                {user.location.city ? user.location.city : 'N/A'}
              </p>
              <p>
                <span className='label'>Código postal: </span>
                {user.location.postcode? user.location.postcode : 'N/A'}
              </p>
              <p>
                <span className='label'>Nacionalidad: </span>
                {user.nat? user.nat : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserById;
