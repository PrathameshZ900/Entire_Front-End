let data = [];
let filterChange = false;
let shortChange = false;

let fecthCountries = async () => {

  // make an API

  try {

    let res = await fetch('https://restcountries.com/v3.1/all')
    data = await res.json()

    renderData(data)

    return data

  } catch (error) {

    console.log(error);
  }

  return data;
};

let countryCard = (el) => {
  let cardDiv = document.createElement("div");
  cardDiv.innerHTML = `<img src="${el.flags.png}" alt="">
  <h2>${el.name.common}</h2>
  <p>population:${el.population}</p>
  <p>Region:${el.region}</p>
  <p>Capital:${el.capital}</p>`
  // create a div element for each card and append the details

  return cardDiv

};

let renderData = (data) => {
  let container = document.getElementById("all_countries");
  container.textContent = ""
  // loop through the cards and append to main container

  data.forEach((country) => {
    let cardDiv = countryCard(country);
    container.append(cardDiv);
  })

  return container
};

let sortLogic = (order, data) => {
  // handle sort logic here and return sorted data
  // it expectes two arguments type of sort (asc or desc) and data

  if (order === "asc") {
    data.sort((a, b) => a.population - b.population)
  }
  else if (order === "desc") {
    data.sort((a, b) => b.population - a.population)
  }
  renderData(data)
  return data;
};

let filterByRegionLogic = (data, regionName) => {
  // handle filter logic here and return filtered data
  // it expectes two arguments data and region
  // return filteredData

  if (regionName === "all") {

    renderData()
    return data
  }

  let filterData = data.filter((country) => country.region === regionName)
  return filterData
};
let handleSortAndFilter = async () => {

  try {

    let response = await fetch('https://restcountries.com/v3.1/all')
    let data = await response.json()

    if (shortChange == true) {
      sortLogic(document.getElementById('sort_population').value, data)
    }
    if (filterChange == true) {
      filterByRegionLogic(data, document.getElementById('filter_region').value)
    }

  } catch (error) {

    console.log(error);
  }
};
window.onload = function () {

  fecthCountries()

  // onload fetch Countries from the `https://restcountries.com/v3.1/all`
  // add change event listeners to sort and filter

  document.getElementById('sort_population').addEventListener('change', () => {

    shortChange = true
    handleSortAndFilter()
  })

  document.getElementById('filter_region').addEventListener('change', () => {
    filterChange = true;
    handleSortAndFilter()
  })

};

if (typeof exports !== "undefined") {
  module.exports = {
    renderData,
    handleSortAndFilter,
    sortLogic,
    filterByRegionLogic,
    fecthCountries,
  };
}
