import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const imgMarkup = createImageMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imgMarkup);

function createImageMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img   
                    class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" />
            </a>
        </div>`
    }).join('');
}

const modal = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom' ,
    captionDelay: 250,
});







