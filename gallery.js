import galleryItems from './app.js';
// console.log(galleryItems);

const galleryList = document.querySelector(".js-gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
const modal = document.querySelector(".js-lightbox");
const bigImage = document.querySelector(".lightbox__image")

galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryList.addEventListener('click', onImageClick);

modal.addEventListener('click', onCloseModal)

//1. Cоздаем разметку, можно через .createElemen, но сейчас вариант через шаблонную строку. И рендерим ее.

function createGalleryMarkup (images) {
    return images
        .map(({ preview, original, description }) => {
        return `
          <li class="gallery__item">
            <a  class="gallery__link"
                href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"  
                 />
            </a>
          </li>`
        })
    .join('');
};

//Делегування, отримання великого зображення

function onImageClick(event) {
  window.addEventListener('keydown', onEscDown)
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  
  modal.classList.add('is-open')
  bigImage.setAttribute('src', event.target.dataset.source)
}

//Закриття модального вікна

function onCloseModal(event) {
  window.removeEventListener('keydown', onEscDown)
  if(event.target.dataset.action !== 'close-lightbox') {
  return;
  }
  modal.classList.remove('is-open')
  bigImage.removeAttribute('src')
}

//Закриття модального вікна після натискання клавіші `ESC`.

function onEscDown(e) {
  if (e.code === 'Escape') {
    modal.classList.remove('is-open');
  }
}