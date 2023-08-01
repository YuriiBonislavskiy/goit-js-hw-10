export default function getRefs() {
  return {
    catSearch: document.querySelector('.breed-select'),
    loadingText: document.querySelector('.loader'),
    errorText: document.querySelector('.jerror'),
    selectOption: document.querySelector('.breed-select selected')
  };
}

