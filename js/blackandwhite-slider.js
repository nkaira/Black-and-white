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
    if (container.clientWidth >= 660) {
        position += itemWidth * slidersToScroll;
        position = Math.min(position, 0)
        track.style.marginLeft = position + 'px';
    }
    sliderAnimation();
};

function btnNextHandler(event) {
    position -= itemWidth * slidersToScroll;
    position = Math.max(position, -itemWidth * (item.length - slidersToShow));
    track.style.marginLeft = position + 'px';
    sliderAnimation();
};

const sliderAnimation = () => {
    track.style.transition = `.35s ease-out`;
};

