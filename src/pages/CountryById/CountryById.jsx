import React, { useState, useEffect } from 'react';
import './CountryById.css';
import { useParams } from 'react-router-dom';
const CountryById = () => {
  const { id } = useParams();

  const [country, setCountry] = useState();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountry(data);
      });
  }, []);

  return (
    <div className='countries'>
      {country && (
        <div className='country-container'>
          <h2>{country[0].name.common}</h2>
          <img
            className='team-flag'
            src={country[0].flags.png}
            alt={country[0].name.common}
          />
          <div className='country-info'>
            <p className='capital'>
              {' '}
              <span className='label'>Capital: </span>
              {country[0].capital ? country[0].capital : 'N/A'}
            </p>
            <p className='subregion'>
              <span className='label'>Subregion: </span>
              {country[0].subregion ? country[0].subregion : 'N/A'}
            </p>
            <p className='languages'>
              <span className='label'>Languages: </span>
              {country[0].languages ? Object.values(country[0].languages).join(', ') : 'N/A'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryById;
