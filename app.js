const diffKelvin = 273.15;
const apiKey = 'f217b689280b69b88cd5456a4e1aa443';

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
    const res = await called.json();
    console.log(res);   
}


