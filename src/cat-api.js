// import getRefs from './get-refs';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8hVzy0Cjfyi';
const Axios = require('axios').default;

function axiosBreeds(url) {
  return Axios.get(url);
  //   const breedsString = breeds.join('');
  //   refs.catSearch.insertAdjacentHTML('afterbegin', breedsString);
  //   console.log(breedsString);
  //   //   response.json();
}

function axiosCatByBreed(breedId) {
  return Axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
  //   const breedsString = breeds.join('');
  //   refs.catSearch.insertAdjacentHTML('afterbegin', breedsString);
  //   console.log(breedsString);
  //   //   response.json();
}

function fetchBreeds(url) {
  return fetch(url, {
    headers: {
      'x-api-key': axios.defaults.headers.common['x-api-key'],
    },
  });
  //   const breedsString = breeds.join('');
  //   refs.catSearch.insertAdjacentHTML('afterbegin', breedsString);
  //   console.log(breedsString);
  //   //   response.json();
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
  //   const breedsString = breeds.join('');
  //   refs.catSearch.insertAdjacentHTML('afterbegin', breedsString);
  //   console.log(breedsString);
  //   //   response.json();
}

export { axiosBreeds, axiosCatByBreed, fetchBreeds, fetchCatByBreed };
