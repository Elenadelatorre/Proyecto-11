import React, { useEffect, useState } from 'react';
import './Countries.css';
import { Link } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [continentFilter, setContinentFilter] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((response) => {
        // Ordenar los países por nombre común alfabéticamente
        const sortedCountries = response.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
        setFilteredCountries(sortedCountries);
      });
  }, []);

  useEffect(() => {
    if (continentFilter === '') {
      setFilteredCountries(countries);
    } else {
      const results = countries.filter(country =>
        country.region.toLowerCase() === continentFilter.toLowerCase()
      );
      setFilteredCountries(results);
    }
  }, [continentFilter, countries]);

  const handleContinentChange = (event) => {
    setContinentFilter(event.target.value);
  };

  return (
    <div className='countries'>
      <div className='filter'>
        <select value={continentFilter} onChange={handleContinentChange}>
          <option value=''>Todos los continentes</option>
          <option value='Africa'>África</option>
          <option value='Americas'>América</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europa</option>
          <option value='Oceania'>Oceanía</option>
        </select>
      </div>
      <div className='teams-cards'>
        {filteredCountries.map((country) => (
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
