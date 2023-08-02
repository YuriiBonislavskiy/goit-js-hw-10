// import getRefs from './get-refs';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8hVzy0Cjfyi';
const Axios = require('axios').default;

function fetchBreeds(loadingText, url) {
  loadingText.classList.remove('isHidden');
  return Axios.get(url);
  //   const breedsString = breeds.join('');
  //   refs.catSearch.insertAdjacentHTML('afterbegin', breedsString);
  //   console.log(breedsString);
  //   //   response.json();
}

function fetchCatByBreed(loadingText, breedId) {
  loadingText.classList.remove('isHidden');
  return Axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
  //   const breedsString = breeds.join('');
  //   refs.catSearch.insertAdjacentHTML('afterbegin', breedsString);
  //   console.log(breedsString);
  //   //   response.json();
}

export { fetchBreeds, fetchCatByBreed };
