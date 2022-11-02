import { renderCountriesList } from "./dom.utils.js";
const API_URL_ALL = 'https://restcountries.com/v3.1/all';

let countries;


fetch(API_URL_ALL)
  .then((res) => res.json())
  .then((countriesRaw) => {
    countries = countriesRaw.map((country) => {
      return { //< tworzymy obiekt który pobierze nam dane ze API 
        capital: country.capital && country.capital[0], //<pierwszy element tablicy ale nie które nie mają stolicy i dlatego && country.capital 
        population: country.population,
        name: country.name.common,
        region: country.region,
        flagsUrl: country.flags.png,
      };
    });
    renderCountriesList(countries);
  });