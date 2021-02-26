import refs from './refs';
import * as basicLightbox from 'basiclightbox';
import style from 'basiclightbox/dist/basicLightbox.min.css';

const { containerGallery } = refs;

containerGallery.addEventListener('click', showFull);

function showFull(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${event.target.dataset.src}" alt="${event.target.alt}">
	`,
    )
    .show();
}
