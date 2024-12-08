// src/App.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useCountryContext } from './context/CountryContext';
import CountryCard from './components/CountryCard';
import CountryDetails from './components/CountryDetails';

const App = () => {
  const { countries, setCountries } = useCountryContext();

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    };
    fetchCountries();
  }, [setCountries]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            {countries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        } />
        <Route path="/:countryName" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
};

export default App;


