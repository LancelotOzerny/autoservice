let images = document.getElementsByClassName('gallery-photo--wrapper') as HTMLCollectionOf<HTMLElement>;
let galleryWrapper : Element = document.getElementsByClassName('gallery-wrapper')[0];
let currentImage: number = 0;

for (let i = 0; i < images.length; ++i) {
    images[i].addEventListener('click', () => {
        images[currentImage].style.gridRow = "auto";
        images[currentImage].style.gridColumn = "auto";

        currentImage = i;

        images[currentImage].style.gridRow = "1/3";
        images[currentImage].style.gridColumn = "1/3";

        setTimeout(scrollToSlides, 200);
    });
}

function scrollToSlides() : void
{
    galleryWrapper.scrollIntoView({behavior: 'smooth', block: 'start'});
}