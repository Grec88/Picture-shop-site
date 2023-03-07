import { modals, sliders, form, mask, checkTextInputs } from "./modules";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders({
        slidesSelector: '.feedback-slider-item',
        dir: '',
        prev: '.main-prev-btn',
        next: '.main-next-btn'
    });

    sliders({
        slidesSelector: '.main-slider-item',
        dir: 'vertical',
        prev: '.main-prev-btn',
        next: '.main-next-btn'
    });
    form();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
})