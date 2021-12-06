'use strict';

let position = 0;
const ITEM_WIDTH = 355;
const MOBILE_ITEM_WIDTH = 243;
const SLIDERS_TO_SHOW = 2;
const SLIDERS_TO_SCROLL = 1;
const MOBILES_SLIDERS_TO_SHOW = 1;
const SLIDER_CONTAINER = 600;
const SLIDER_CONTAINER_MOBILE = 485;
const SLIDER_CONTAINER_MINI_MOBILE = 245;
const container = document.getElementById('slider-container');
const track = document.getElementById('slider-track');
const item = document.querySelectorAll('.images__column');
const btnPrev = document.getElementById('arrow-prev');
const btnNext = document.getElementById('arrow-next');

btnPrev.addEventListener('click', btnPrevHandler);
btnNext.addEventListener('click', btnNextHandler);

function btnPrevHandler(event) {
    if (container.clientWidth >= SLIDER_CONTAINER) {
        moveLeft(ITEM_WIDTH);
    } else if (container.clientWidth <= SLIDER_CONTAINER_MOBILE) {
        moveLeft(MOBILE_ITEM_WIDTH);
    }
};

function btnNextHandler(event) {
    if (container.clientWidth >= SLIDER_CONTAINER) {
        moveRight(ITEM_WIDTH, SLIDERS_TO_SHOW);
    } else if (container.clientWidth === SLIDER_CONTAINER_MOBILE) {
        moveRight(MOBILE_ITEM_WIDTH, SLIDERS_TO_SHOW);
    } else if (container.clientWidth === SLIDER_CONTAINER_MINI_MOBILE) {
        moveRight(MOBILE_ITEM_WIDTH, MOBILES_SLIDERS_TO_SHOW);
    };
};

const moveLeft = (ITEM_WIDTH) => {
    position += ITEM_WIDTH * SLIDERS_TO_SCROLL;
    position = Math.min(position, 0)
    track.style.marginLeft = position + 'px';
}

const moveRight = (ITEM_WIDTH, SLIDERS_TO_SHOW) => {
    position -= ITEM_WIDTH * SLIDERS_TO_SCROLL;
    position = Math.max(position, - ITEM_WIDTH * (item.length - SLIDERS_TO_SHOW));
    track.style.marginLeft = position + 'px';
}
