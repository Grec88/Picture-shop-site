export const sliders = ({ slidesSelector, dir, prev, next }) => {
    let slideIndex = 1;
    let paused = false;
    const slides = document.querySelectorAll(slidesSelector);

    const showSlides = (n) => {
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

    const changeSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);
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
        if (dir === 'vertical') {
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

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    })

    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    })

    activateAnimation();

}