import galleryItems from './app.js';
// console.log(galleryItems);

const galleryList = document.querySelector(".js-gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryList.addEventListener('click', onImageClick);

// galleryList.addEventListener('click', onOpenModal)

//1. Cоздаем разметку, можно через .createElemen, но сейчас вариант через шаблонную строку. И рендерим ее.

// console.log(createGalleryMarkup(galleryItems));

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

function onImageClick(event) {
    console.log(event.target);
}


// function onOpenModal(event) {
// event.preventDefault();
//   modalBoxRef.classList.add('is-open')
// }