export default function getRefs() {
  return {
    breedSelect: document.querySelector('.breed-select'),
    loadingText: document.querySelector('.loader'),
    errorText: document.querySelector('.error'),
    selectOption: document.querySelector('.breed-select selected'),
    catInfo: document.querySelector('.cat-info'),
  };
}

