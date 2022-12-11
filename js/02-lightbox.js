import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', onImgClick);

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

function onImgClick(e) {
    e.preventDefault();
    
    if(!e.target.classList.contains('gallery__image')) {
        return;
    }

    createModal();
}

function createModal() {
    const modal = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

    modal.on('show.simplelightbox', {});

}






