const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const notFound = document.querySelector('.notfound');
const weather = document.querySelector('.weather');
const details = document.querySelector('.details');

search.addEventListener('click', () => {
    const APIKey = '15c07f3169d2ba456da4d3d4b7bdc418';
    const city = document.querySelector('.search-box input').value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        if (json.cod === '404') {
            container.style.height = '400px';
            weather.style.display = 'none';
            details.style.display = 'none';
            notFound.style.display = 'block';
            notFound.classList.add('fadeIn');
            return;
        }

        notFound.style.display = 'none';
        notFound.classList.remove('fadeIn');

        const weatherImage = document.querySelector('.weatherimg');
        const temperature = document.querySelector('.temp');
        const description = document.querySelector('.desc');
        const wind = document.querySelector('.windspeed span');
        const humidity = document.querySelector('.humidity span');

        temperature.innerText = `${json.main.temp} °C`;
        description.innerText = `${json.weather[0].main}`;
        humidity.innerText = `${json.main.humidity}%`;
        wind.innerText = `${json.wind.speed} m/s`;

        weather.classList.add('fadeIn');
        container.style.height = '600px';

        switch (json.weather[0].main) {
            case 'Clear':
                weatherImage.src = 'images/clear.png';
                break;
            case 'Clouds':
                weatherImage.src = 'images/cloud.png';
                break;
            case 'Mist':
                weatherImage.src = 'images/mist.png';
                break;
            case 'Rain':
                weatherImage.src = 'images/rain.png';
                break;
            case 'Snow':
                weatherImage.src = 'images/snow.png';
                break;
            default:
                weatherImage.src = '';
        }
    })
});