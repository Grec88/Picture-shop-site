import {
    modals, sliders, form, mask, checkTextInputs,
    showMoreStyles, calc, filter, pictureSize,
    accordion, burger, scrolling
} from "./modules";

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
    showMoreStyles('.button-styles', '#styles .row');
    calc({
        size: '#size',
        material: '#material',
        options: '#options',
        promo: '.promocode',
        res: '.calc-price'
    });

    filter();

    pictureSize(".sizes-block");

    accordion('.accordion-heading');

    burger('.burger-menu', '.burger');

    scrolling({
        upSelector: '.pageup',
        stylesSelector: '[href="#styles"]',
        portfolioSelector: "[href='#portfolio']",
        oftenQuestionsSelector: "[href='#often-questions']",
        footerSelector: "[href='#footer']",
        schemeSelector:"[href='#scheme']"
    });

})