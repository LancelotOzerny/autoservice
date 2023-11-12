let slides = document.getElementsByClassName('gallery-photo--wrapper') as HTMLCollectionOf<HTMLElement>;
let slidesWrapper : Element = document.getElementsByClassName('gallery-wrapper')[0];
let currentImage: number = 0;

for (let i = 0; i < slides.length; ++i) {
    slides[i].addEventListener('click', () => {
        slides[currentImage].style.gridRow = "auto";
        slides[currentImage].style.gridColumn = "auto";

        currentImage = i;

        slides[currentImage].style.gridRow = "1/3";
        slides[currentImage].style.gridColumn = "1/3";

        setTimeout(scrollToSlides, 200);
    });
}

function scrollToSlides() : void
{
    slidesWrapper.scrollIntoView({behavior: 'smooth', block: 'start'});
}