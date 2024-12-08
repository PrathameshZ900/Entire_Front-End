// src/components/CountryDetails.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCountryContext } from '../context/CountryContext';

const CountryDetails = () => {
  const { countryName } = useParams();
  const { countries } = useCountryContext();
  const country = countries.find(c => c.name.common.toLowerCase() === countryName.toLowerCase());

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <img src={country.flags[0]} alt={`${country.name.common} flag`} />
      <p>Native Name: {country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A'}</p>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Languages: {Object.values(country.languages).join(', ')}</p>
    </div>
  );
};

export default CountryDetails;
