'use strict';

let position = 0;
const itemWidth = 355;
const slidersToShow = 2;
const slidersToScroll = 1;
const container = document.getElementById('slider-container');
const track = document.getElementById('slider-track');
const item = document.querySelectorAll('.images__column');
const btnPrev = document.getElementById('arrow-prev');
const btnNext = document.getElementById('arrow-next');

console.log(container.clientWidth);

btnPrev.addEventListener('click', btnPrevHandler);
btnNext.addEventListener('click', btnNextHandler);

function btnPrevHandler(event) {
    if (container.clientWidth >= 600) {
        moveLeft(itemWidth);
    } else if (container.clientWidth <= 500) {
        const itemWidth = 243;
        moveLeft(itemWidth);
    }
    sliderAnimation();
};

function btnNextHandler(event) {
    if (container.clientWidth >= 600) {
        moveRight(itemWidth, slidersToShow);
    } else if (container.clientWidth === 485) {
        const itemWidth = 243;
        moveRight(itemWidth, slidersToShow);
    } else if (container.clientWidth === 245) {
        const itemWidth = 243;
        const slidersToShow = 1;
        moveRight(itemWidth, slidersToShow);
    };
    sliderAnimation();
};

const sliderAnimation = () => {
    track.style.transition = `.35s ease-out`;
};

const moveLeft = (itemWidth) => {
    position += itemWidth * slidersToScroll;
    position = Math.min(position, 0)
    track.style.marginLeft = position + 'px';
}

const moveRight = (itemWidth, slidersToShow) => {
    position -= itemWidth * slidersToScroll;
    position = Math.max(position, -itemWidth * (item.length - slidersToShow));
    track.style.marginLeft = position + 'px';
}
