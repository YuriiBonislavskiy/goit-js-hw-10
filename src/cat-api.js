import axios from 'axios';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =

    'live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8hVzy0Cjfyi';

let url = `https://api.thecatapi.com/v1`;
// const api_key = "live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8";
let storedBreeds = [];

function fetchCatByBreed(breedId) {
    url = `${ url }${ breedId }`;
    return fetch(url, {
        headers: {
            'x-api-key': axios.defaults.headers.common['x-api-key'],
        },
    })
        .then(response => {
            response.json();
        })
    .then(data => {
      const breeds = data.map(({ id, name }) => ({ id, name }));
        console.log(breeds);
        return breeds;
      })
}

export default { fetchCatByBreed };
