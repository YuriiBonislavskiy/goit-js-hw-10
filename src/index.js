// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   'live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8hVzy0Cjfyi';
import getRefs from './get-refs';
import * as API from './cat-api.js';


const refs = getRefs();
// const Axios = require('axios').default;

API.fetchBreeds('https://api.thecatapi.com/v1/breeds')
.then(renderBreedSelect);

function renderBreedSelect(response) {
      // return response.data.map(({ id, name }) => ({ id, name }));
    const breeds = response.data.map(
      ({ id, name }) => `<option value="${id}">${name}</option>`
    );
    const breedsString = breeds.join('');
    refs.catSearch.insertAdjacentHTML('afterbegin', breedsString);
    // console.log(breedsString);
}

refs.catSearch.addEventListener('change', onBreesSelected);

function onBreesSelected(evt) {
  console.log(refs.catSearch.value);
}

// Axios.get('https://api.thecatapi.com/v1/breeds').then(response => {
//   const breeds = response.data.map(
//     ({ id, name }) => `<option value="${id}">${name}</option>`
//   );
//   const breedsString = breeds.join('');
//   refs.catSearch.insertAdjacentHTML('afterbegin', breedsString);
//   console.log(breedsString);
//   //   response.json();
// });
