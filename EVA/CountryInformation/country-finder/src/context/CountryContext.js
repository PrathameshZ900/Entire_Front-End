// src/context/CountryContext.js

import React, { createContext, useState, useContext } from 'react';

const CountryContext = createContext();

export const useCountryContext = () => useContext(CountryContext);

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <CountryContext.Provider value={{ countries, setCountries, selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
