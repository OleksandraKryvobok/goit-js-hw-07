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

function onImgClick(e) {
    e.preventDefault();
    
    if(!e.target.classList.contains('gallery__image')) {
        return;
    }

    const modalImg = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`, {
        onShow: () => document.addEventListener('keydown', onEscapePress),
        onClose: () => document.removeEventListener('keydown', onEscapePress),
    });

    modalImg.show();

    function onEscapePress({ code }) {    
        if(code === 'Escape') {
            modalImg.close();
        }
    }
}





