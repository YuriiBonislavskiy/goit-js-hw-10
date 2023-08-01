import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8hVzy0Cjfyi';
import getRefs from './get-refs';

const refs = getRefs();

// refs.catSearch.setAttribute('size', 10);
// import axiosConfig from './axios-config.js';

// const AXIOSCONFIG = axiosConfig();

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/breeds';

// const url = `https://api.thecatapi.com/v1`;
// const api_key =
//   'live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8hVzy0Cjfyi';
// let storedBreeds = [];

// fetch(axios.defaults.baseURL, {
//   headers: {
//     'x-api-key': axios.defaults.headers.common['x-api-key'],
//   },
// })
//     .then(response => {
//               console.log(response);

//     return response.json();
//   })
//   .then(data => {
//     const breeds = data.map(({ id, name }) => ({ id, name }));
//     // console.log(breeds);
//     return breeds;
//   });
// // }
const Axios = require('axios').default;




// function fetchAllBreed() {
//   return (
    // Axios
    //   .get()
    //   .then(response => {
    //     const breeds = response.data.map(({ id, name }) => ({ id, name }));
    //     console.log(breeds);
    //     //   response.json();
    //   })
//   );
// }


    Axios.get().then(response => {
      const breeds = response.data.map(({ id, name }) => (`<option id="${id}">${name}</option>`));
        const breedsString = breeds.join('');
        refs.catSearch.insertAdjacentHTML("afterbegin", breedsString);
        console.log(breedsString);
      //   response.json();
    });
