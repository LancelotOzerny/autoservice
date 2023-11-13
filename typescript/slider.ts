let slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>;
let slideLeft: HTMLElement = document.getElementById("left-slider-arrow");
let slideRight: HTMLElement = document.getElementById("right-slider-arrow");
let currentSlideIndex: number = 0;
let lastSlide: number = 0;
let slideActive : boolean = false;

slideLeft.addEventListener("click", SlideLeft);
slideRight.addEventListener("click", SlideRight);

let slideInterval : number = setInterval(SlideLeft, 5000);

function SlideRight() : void
{
    clearInterval(slideInterval);
    slideInterval = setInterval(SlideRight, 5000);

    if (slideActive)
    {
        return;
    }
    slideActive = true;

    let lastSlide: number = currentSlideIndex;

    if (--currentSlideIndex < 0)
    {
        currentSlideIndex = slides.length - 1;
    }

    slides[currentSlideIndex].style.zIndex = "-1";
    slides[lastSlide].style.left = "100%";
    slides[lastSlide].style.opacity = "0";

    setTimeout(() => {
        slides[currentSlideIndex].style.zIndex = "-1";
        slides[lastSlide].style.zIndex = "-5";

        setTimeout(() => {
            slides[lastSlide].style.left = "0";
            slides[lastSlide].style.opacity = "1";
            slideActive = false;
        }, 50);
    }, 500);
}

function SlideLeft() : void
{
    clearInterval(slideInterval);
    slideInterval = setInterval(SlideLeft, 5000);

    if (slideActive)
    {
        return;
    }
    slideActive = true;

    lastSlide = currentSlideIndex;

    if (++currentSlideIndex >= slides.length)
    {
        currentSlideIndex = 0;
    }

    slides[currentSlideIndex].style.zIndex = "-1";
    slides[lastSlide].style.left = "-100%";
    slides[lastSlide].style.opacity = "0";

    setTimeout(() => {
        slides[currentSlideIndex].style.zIndex = "-1";
        slides[lastSlide].style.zIndex = "-5";

        setTimeout(() => {
            slides[lastSlide].style.left = "0";
            slides[lastSlide].style.opacity = "1";
            slideActive = false;
        }, 50);
    }, 500);
}