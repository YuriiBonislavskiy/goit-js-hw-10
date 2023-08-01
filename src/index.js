import axios from 'axios';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] =
    'live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8hVzy0Cjfyi';
  
const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8";
let storedBreeds = [];

fetch(url, {
  headers: {
    'x-api-key': axios.defaults.headers.common['x-api-key'],
  },
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    const breeds = data.map(({ id, name }) => ({ id, name }));
    console.log(breeds);
  });


// function fetchBreeds(breeds) {
//   return fetch(
//     `https://api.thecatapi.com/v1/v1/breeds?api_key=live_B8OSCQ5VxA8A6jzoI9ViRvuQqj7cRhUSI2DCw8ixHFLrbBY78Sg2z8hVzy0Cjfyi`
//   ).then(response => response.json());
// }

// fetchBreeds().then(() => {
//   console.log(breeds);
// });

// const breeds = data;
// id name
