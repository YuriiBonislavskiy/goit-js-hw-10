import getRefs from './get-refs';
const refs = getRefs();
import SlimSelect from 'slim-select';
import './css/common.css';
import './css/slimselect.css';
import * as API from './cat-api.js';

// refs.loadingText.classList.add('isHidden');
// refs.errorText.classList.add('isHidden');

function isReady() {
    console.log('uoouipoipipipi');
    refs.loadingText.classList.toggle('isHidden');
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


API.fetchBreeds(refs.loadingText, 'https://api.thecatapi.com/v1/breeds').then(
  renderBreedsList
);

function renderBreedsList(breedsList) {
  const breeds = breedsList.data.map(
    ({ id, name }) => `<option value="${id}">${name}</option>`
  );
  const breedsString =
    `<option data-placeholder="true"></option><option value="qwqwq">Error Positionn</option>` +
    breeds.join('');
    refs.axiosBreedSelect.insertAdjacentHTML('afterbegin', breedsString);
    refs.fetchBreedSelect.insertAdjacentHTML('afterbegin', breedsString);
  refs.loadingText.classList.toggle('isHidden');
    selectBuilds(refs.axiosBreedSelect);
    selectBuilds(refs.fetchBreedSelect);
}

refs.axiosBreedSelect.addEventListener('change', onBreesSelected);
refs.fetchBreedSelect.addEventListener('change', onBreesSelected);

function onBreesSelected(evt) {
  const breedId = evt.target.value;
  API.fetchCatByBreed(refs.loadingText, breedId).then(renderSelectBreed);
}

function renderSelectBreed(breed) {
  console.log(breed);
  const { url } = breed.data[0];
  const { name, description, temperament } = breed.data[0].breeds[0];
  const catInfoString = makecatInfoString(url, name, description, temperament);
    refs.catInfo.innerHTML = catInfoString;
    
    const currentCatImg = document.querySelector('#current-cat-img')
    currentCatImg.addEventListener('load', isReady);
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
