let images = document.getElementsByClassName('gallery-photo--wrapper') as HTMLCollectionOf<HTMLElement>;
let currentImage: number = 0;

for (let i = 0; i < images.length; ++i) {
    images[i].addEventListener('click', () => {
        images[currentImage].style.width = "33.333%";
        currentImage = i;
        images[currentImage].style.width = "66.666%";
    });
}