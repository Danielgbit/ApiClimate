import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY;

const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

const buttonSubmit = document.querySelector('.button-submit');
const inputCity = document.querySelector('.input-city');


buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!inputCity.value) {
        alert('ingresa alguna ciudad');
        return
    }

    fetchApi(inputCity.value);
    
});

async function fetchApi(city){
    const completeUrl = `${baseUrl}?q=${city}&appid=${apiKey}`
    const called = await fetch(completeUrl);

    if (!called.ok) {
        alert('error del servidor 500')
        return
    };

    const res = await called.json();
    showWeatherData(res);
};

function showWeatherData(data){

    const response = document.querySelector('.response');
    const responseData = document.createElement('article');
    response.appendChild(responseData);
    responseData.classList.add('response-data');

    const name = data.name;
    const country = data.sys.country;
    const humidity = data.main.humidity;
    const sky = data.weather[0].description;
    const icon = data.weather[0].icon;
    const coord = {
        lon: data.coord.lon,
        lat: data.coord.lat
    };

    const countryAndCity = document.createElement('h3');
    countryAndCity.textContent = `${name} - ${country}`;

    const weatherData = document.createElement('span');
    weatherData.textContent = `Humidity: ${humidity} - sky: ${sky}`;

    const coordData = document.createElement('p');
    coordData.textContent = `lon: ${coord.lon} - lat: ${coord.lat}`;

    const iconData = document.createElement('img');
    iconData.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    responseData.appendChild(countryAndCity);
    responseData.appendChild(weatherData);
    responseData.appendChild(coordData);
    responseData.appendChild(iconData);    

};


