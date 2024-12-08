// src/components/CountryCard.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${country.name.common}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={country.flags[0]} alt={`${country.name.common} flag`} />
      <h3>{country.name.common}</h3>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      <button>More Details</button>
    </div>
  );
};

export default CountryCard;
