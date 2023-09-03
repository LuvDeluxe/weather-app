const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const notFound = document.querySelector('.notfound');
const weather = document.querySelector('.weather');
const details = document.querySelector('.details');

search.addEventListener('click', () => {
    const APIKey = '15c07f3169d2ba456da4d3d4b7bdc418';
    const city = document.querySelector('search-box input').value;

    if (city === '') return;

    fetch().then(response => response.json()).then(json => {
        if (json.code === '404') {
            container.style.height = '400px';
            
        }
    })

});