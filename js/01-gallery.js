import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const imgMarkup = createImageMarkup(galleryItems);

function createImageMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">\
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`
    }).join('');
}

galleryEl.insertAdjacentHTML('beforeend', imgMarkup);

galleryEl.addEventListener('click', onImgClick);

let modalImg;

function onImgClick(e) {
    e.preventDefault();
    
    if(!e.target.classList.contains('gallery__image')) {
        return;
    }

    const largeImg = e.target.dataset.source;
    createModal(largeImg);
}

function createModal(largeImgSrc) {
    modalImg = basicLightbox.create(`
        <img src="${largeImgSrc}" width="800" height="600">
    `);

    modalImg.show(() => {
        document.addEventListener('keydown', onEscapeKeydown);
    });
}

function onEscapeKeydown({ code }) {    
    if(code === 'Escape') {
        modalImg.close(() => {
            document.removeEventListener('keydown', onEscapeKeydown);
        });
    }
}



