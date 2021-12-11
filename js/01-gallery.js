import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createMarkupOfImgCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMarkupOfImgCard(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}" target="_self">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    }).join('');
}

const onImageCardClick = (e) => {
    const isImgEl = e.target.classList.contains('gallery__image');
    if (!isImgEl) {
        return;
    }
    
}

galleryContainer.addEventListener('click', onImageCardClick);






