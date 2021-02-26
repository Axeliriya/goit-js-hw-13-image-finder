import refs from './refs';
import { getList } from './markup';
import apiService from './apiService';
import debounce from 'lodash.debounce';

const { containerForm, buttonMore, containerGallery } = refs;
let searchQuery = '';

// containerForm.addEventListener('input', debounce(searchImage, 1000));
containerForm.addEventListener('submit', searchBtn);
containerForm.addEventListener('keydown', searchEnt);
buttonMore.addEventListener('click', getMoreBtn);

function searchImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'INPUT') {
    return;
  }
  searchQuery = event.target.value;
  addImg(searchQuery);
}

function searchBtn(event) {
  event.preventDefault();
  searchQuery = event.target.firstElementChild.value;
  addImg(searchQuery);
}

function searchEnt(event) {
  if (event.code === 'Enter') {
    searchImage(event);
  }
}

function getMoreBtn() {
  updateMarkup();
}

function addImg(searchQuery) {
  containerGallery.innerHTML = '';
  apiService.page = 1;
  if (searchQuery !== '') {
    updateMarkup();
    buttonMore.classList.remove('is-hidden');
  } else {
    buttonMore.classList.add('is-hidden');
  }
}

function updateMarkup() {
  apiService.getFetch(searchQuery).then(({ hits }) => {
    getList(hits);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}

export { searchImage, getMoreBtn };
