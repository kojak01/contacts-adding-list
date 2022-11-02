const createCountryItemElement = (country) => {
    const countryElement = document.createElement('li');

    return countryElement;
};

const createListElement = (countries) => {
    const ListElement = document.createElement('ul');
    //ListElement.innerText = 'lista';
    countries.forEach(country => {
        ListElement.appendChild(createCountryItemElement(country));
    })
    return ListElement;
};

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector('#root');
    rootElement.appendChild(createListElement(countries));


    console.log(countries);
    //render country items into main element
};