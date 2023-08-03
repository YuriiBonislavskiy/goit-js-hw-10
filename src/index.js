import getRefs from './get-refs';
const refs = getRefs();
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import './css/common.css';
import './css/slimselect.css';
import * as API from './cat-api.js';

const errorMassage = `Oops! Something went wrong! Try reloading the page!`;

// refs.loadingText.classList.add('isHidden');
// refs.errorText.classList.add('isHidden');

function isHidden(evt) {
  //   console.log('uoouipoipipipi');
  evt.classList.toggle('isHidden');
  //   console.log(evt);
}

function selectBuilds(selectElement) {
  new SlimSelect({
    select: selectElement,
    settings: {
      showSearch: false,
      placeholderText: 'Choose a breed',
    },
  });
}

API.axiosBreeds(refs.loadingText, 'https://api.thecatapi.com/v1/breeds')
  .then(renderAxiosBreedsList)
  .catch(error => {
    Notiflix.Notify.failure(errorMassage, {
      timeout: 2000,
    });
  })
  .finally(isHidden(refs.loadingText));

API.fetchBreeds(refs.loadingText, 'https://api.thecatapi.com/v1/breeds')
  .then(response => response.json())
  .then(renderFetchBreedsList)
  .catch(error => {
    Notiflix.Notify.failure(errorMassage, {
      timeout: 2000,
    });
  })
  .finally(() => {
    isHidden(refs.loadingText);
  });

function renderAxiosBreedsList(breedsList) {
  // console.log(breedsList);
  const breeds = breedsList.data.map(
    ({ id, name }) => `<option value="${id}">${name}</option>`
  );
  const breedsString =
    `<option data-placeholder="true"></option><option value="qwqwq">Error Positionn</option>` +
    breeds.join('');
  refs.axiosBreedSelect.insertAdjacentHTML('afterbegin', breedsString);
  // refs.fetchBreedSelect.insertAdjacentHTML('afterbegin', breedsString);
  selectBuilds(refs.axiosBreedSelect);
  isHidden(refs.axiosBreedSelect);
}

function renderFetchBreedsList(breedsList) {
  //   console.log(breedsList);
  const breeds = breedsList.map(
    ({ id, name }) => `<option value="${id}">${name}</option>`
  );
  const breedsString =
    `<option data-placeholder="true"></option><option value="qwqwq">Error Positionn</option>` +
    breeds.join('');
  // refs.axiosBreedSelect.insertAdjacentHTML('afterbegin', breedsString);
  refs.fetchBreedSelect.insertAdjacentHTML('afterbegin', breedsString);
  selectBuilds(refs.fetchBreedSelect);
  isHidden(refs.fetchBreedSelect);
}

refs.axiosBreedSelect.addEventListener('change', onAxiosBreedsSelected);
refs.fetchBreedSelect.addEventListener('change', onFetchBreedsSelected);

function onAxiosBreedsSelected(evt) {
  refs.catInfo.innerHTML = '';
  isHidden(refs.loadingText);
  const breedId = evt.target.value;
  API.axiosCatByBreed(breedId)
    .then(axiosRenderSelectBreed)
    .catch(error => {
      Notiflix.Notify.failure(errorMassage, {
        timeout: 2000,
      });
      isHidden(refs.loadingText);
    })
    .finally();
}

function onFetchBreedsSelected(evt) {
  refs.catInfo.innerHTML = '';
  isHidden(refs.loadingText);
  const breedId = evt.target.value;
  API.fetchCatByBreed(breedId)
    .then(response => response.json())
    .then(fetchRenderSelectBreed)
    .catch(error => {
      Notiflix.Notify.failure(errorMassage, {
        timeout: 2000,
      });
      isHidden(refs.loadingText);
    })
    .finally();
}

function axiosRenderSelectBreed(breed) {
  //   console.log(breed);
  const { url } = breed.data[0];
  const { name, description, temperament } = breed.data[0].breeds[0];
  const catInfoString = makecatInfoString(url, name, description, temperament);
  outputBreed(catInfoString);
}

function fetchRenderSelectBreed(breed) {
  //   console.log(breed);
  const { url } = breed[0];
  const { name, description, temperament } = breed[0].breeds[0];
  const catInfoString = makecatInfoString(url, name, description, temperament);
  outputBreed(catInfoString);
}

function makecatInfoString(url, name, description, temperament) {
  return `<ul style="list-style-type: none; display: flex;">
  <li>
  <img id="current-cat-img" src="${url}" alt="${name}" width="460px" />
  </li>
  <li style="padding-left: 30px;">
  <h2>${name}</h2>
  <p>${description}</p>
  <p><strong>Temperament: </strong>${temperament}</p>
  </li>
  </ul>`;
}

function outputBreed(catInfoString) {
  refs.catInfo.innerHTML = catInfoString;
  const currentCatImg = document.querySelector('#current-cat-img');
  currentCatImg.addEventListener('load', event => {
    isHidden(refs.loadingText);
  });
}
