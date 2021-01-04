import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import './sass/styles.scss';

const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate);

console.log(instance);
