import refs from './refs';
import { getList } from './markup';
import apiService from './apiService';
import debounce from 'lodash.debounce';

const { containerForm, buttonMore, containerGallery } = refs;
let searchQuery = '';

containerForm.addEventListener('input', debounce(searchImage, 1000));
buttonMore.addEventListener('click', getMoreBtn);

function searchImage(event) {
  if (event.target.nodeName !== 'INPUT') {
    return;
  }
  searchQuery = event.target.value;
  containerGallery.innerHTML = '';
  apiService.page = 1;
  if (searchQuery !== '') {
    apiService.getFetch(searchQuery).then(({ hits }) => getList(hits));
    buttonMore.classList.remove('is-hidden');
  } else {
    buttonMore.classList.add('is-hidden');
  }
}

function getMoreBtn() {
  apiService.getFetch(searchQuery).then(({ hits }) => {
    getList(hits);
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
    console.dir(document);
  });
}

export { searchImage, getMoreBtn };
