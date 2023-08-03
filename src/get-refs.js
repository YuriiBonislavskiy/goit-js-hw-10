export default function getRefs() {
  return {
    axiosBreedSelect: document.querySelector('#axios-select'),
    fetchBreedSelect: document.querySelector('#fetch-select'),
    loadingText: document.querySelector('.loader'),
    errorText: document.querySelector('.error'),
    selectOption: document.querySelector('.breed-select selected'),
    catInfo: document.querySelector('.cat-info'),
  };
}

