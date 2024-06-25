import React, { useEffect, useState } from 'react';
import './Countries.css';
import { Link } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((response) => {
        // Ordenar los países por nombre común alfabéticamente
        const sortedCountries = response.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      });
  }, []);
  return (
    <div className='countries'>
      <div className='teams-cards'>
        {countries.map((country) => (
          <Link
            to={`/countries/${country.cca2}`}
            className='team-card'
            key={country.cca2}
          >
            <img
              className='team-logo'
              src={country.flags.png}
              alt={country.name.common}
            />
            <h2 className='team-name'>{country.name.common}</h2>
            <p>{country.region}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
