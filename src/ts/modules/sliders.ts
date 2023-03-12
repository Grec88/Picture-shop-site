export interface ISlide {
    slidesSelector: string,
    dir: string,
    prev: string,
    next: string
}

export const sliders = (slider: ISlide) => {
    let slideIndex = 1;
    let paused: number = 0;
    const slides: NodeListOf<HTMLElement> = document.querySelectorAll(slider.slidesSelector);

    const showSlides = (n: number) => {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(slide => {
            slide.classList.add('animated');
            slide.style.display = "none";
        })

        slides[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    const changeSlides = (n: number) => {
        showSlides(slideIndex += n);
    }

    const prevBtn = document.querySelector(slider.prev);
    const nextBtn = document.querySelector(slider.next);
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            changeSlides(-1);
            slides[slideIndex - 1].classList.remove('slideInLeft');
            slides[slideIndex - 1].classList.add('slideInRight');
        });


        nextBtn.addEventListener('click', () => {
            changeSlides(1);
            slides[slideIndex - 1].classList.remove('slideInRight');
            slides[slideIndex - 1].classList.add('slideInLeft');
        });
    }

    const activateAnimation = () => {
        if (slider.dir === 'vertical') {
            paused = setInterval(() => {
                changeSlides(1);
                slides[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(() => {
                changeSlides(1);
                slides[slideIndex - 1].classList.remove('slideInRight');
                slides[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    (slides[0].parentNode as HTMLElement).addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    (slides[0].parentNode as HTMLElement).addEventListener('mouseleave', () => {
        activateAnimation();
    });

    activateAnimation();

}