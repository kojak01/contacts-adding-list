const API_URL_ALL = 'https://restcountries.com/v3.1/all';

let countries;


fetch(API_URL_ALL)
  .then((res) => res.json())
//.then((res) => console.log(res)); //<== pobiera informacje
  .then((countriesRaw) => 
    countriesRaw.map((country) => {
      return { // tworzymy obiekt
        capital: country.capital,
        population: country.population,
        name: country.name.common,
        region: country.region,
        flagsUrl: country.flags.png,
      };
    })
  );


