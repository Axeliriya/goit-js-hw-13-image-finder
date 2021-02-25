import refs from './refs';
import formTpl from '../templates/imgSearch.hbs';
import galleryTpl from '../templates/imgGallery.hbs';
import apiService from './apiService';
import { searchImage, getMoreBtn } from './searchImg';

const formInput = refs.containerForm;
const listImg = refs.containerGallery;

const addMarkup = (elem, markup) => {
  elem.insertAdjacentHTML('beforeend', markup);
};

function getSearchForm(data) {
  const form = formTpl(data);
  addMarkup(formInput, form);
}

function getList(data) {
  const card = galleryTpl(data);

  addMarkup(listImg, card);
}

apiService.getFetch().then(({ hits }) => getSearchForm(hits));

export { getList };
