// import getRefs from './get-refs';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8hVzy0Cjfyi';
const Axios = require('axios').default;

function axiosBreeds(hiddenTag, url) {
  hiddenTag.classList.toggle('isHidden');
  return Axios.get(url);
}

function axiosCatByBreed(breedId) {

  return Axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
}

function fetchBreeds(hiddenTag, url) {
    hiddenTag.classList.toggle('isHidden');
    console.log(hiddenTag);
  return fetch(url, {
    headers: {
      'x-api-key': axios.defaults.headers.common['x-api-key'],
    },
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    {
      headers: {
        'x-api-key': axios.defaults.headers.common['x-api-key'],
      },
    }
  );
}

export { axiosBreeds, axiosCatByBreed, fetchBreeds, fetchCatByBreed };
