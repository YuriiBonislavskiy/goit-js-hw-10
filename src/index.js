
import getRefs from './get-refs';
import * as API from './cat-api.js';

const refs = getRefs();

API.fetchBreeds('https://api.thecatapi.com/v1/breeds').then(renderBreedsList);

function renderBreedsList(breedsList) {
  const breeds = breedsList.data.map(
    ({ id, name }) => `<option value="${id}">${name}</option>`
  );
  const breedsString = breeds.join('');
  refs.catSearch.insertAdjacentHTML('afterbegin', breedsString);
}

refs.catSearch.addEventListener('change', onBreesSelected);

function onBreesSelected(evt) {
  const breedId = refs.catSearch.value;
  API.fetchCatByBreed(breedId).then(renderSelectBreed);
}

function renderSelectBreed(breed) {
  const { url } = breed.data[0];
  const { name, description, temperament } = breed.data[0].breeds[0];
  const catInfoString = makecatInfoString(url, name, description, temperament);
  refs.catInfo.insertAdjacentHTML('afterbegin', catInfoString);
}

function makecatInfoString(url, name, description, temperament) {
return `<ul style="list-style-type: none; display: flex;">
  <li style="width: "50%"">
  <img src="${url}" alt="${name}" width="460px" />
  </li>
  <li style="padding-left: '80px'">
  <h2>${name}</h2>
  <p>${description}</p>
  <p><strong>Temperament: </strong>${temperament}</p>
  </li>
  </ul>`;
 }

