export const modals = () => {

    let btnPressed = false;

    const calcScroll = () => {
        const div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        return div.offsetWidth - div.clientWidth;

    }

    const toggleModal = (selec, disp, overfl) => {
        selec.style.display = disp;
        document.body.style.overflow = overfl;
    };


    const bindModal = ({ triggersSelector, modalSelector, closeSelector, destroy = false }) => {
        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll(['data-modal']);
        const scroll = calcScroll();

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if(destroy){
                    trigger.remove();
                }

                windows.forEach(window => {
                    window.style.display = "none";
                    window.classList.add('animated', 'fadeIn');
                });

                toggleModal(modal, "block", "hidden");
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(window => {
                window.style.display = "none";
            });

            toggleModal(modal, "none", "");
            document.body.style.marginRight = `0`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(window => {
                    window.style.display = "none";
                });
                toggleModal(modal, "none", "");
                document.body.style.marginRight = `0`;
            }
        });

        addEventListener("keydown", (e) => {
            if (e.code === "Escape") {
                toggleModal(modal, "none", "");
                document.body.style.marginRight = `0`;
            }
        });
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            let display = false;
            document.querySelectorAll('[data-modal]').forEach(modal => {
                if (getComputedStyle(modal).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                toggleModal(document.querySelector(selector), "block", "hidden");
                const scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);

    }

    const openByScroll = (selector) =>{
        const scrollHeight = Math.max(document.documentElement.scrollHeight,
            document.body.scrollHeight)
        window.addEventListener('scroll', () =>{
            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >=
                scrollHeight)){
                    document.querySelector(selector).click();
                }
        })
    }


    bindModal({
        triggersSelector: '.button-design',
        modalSelector: '.popup-design',
        closeSelector: '.popup-design .popup-close'
    });

    bindModal({
        triggersSelector: '.button-consultation',
        modalSelector: '.popup-consultation',
        closeSelector: '.popup-consultation .popup-close'
    });
    
    bindModal({
        triggersSelector: '.fixed-gift',
        modalSelector: '.popup-gift',
        closeSelector: '.popup-gift .popup-close',
        destroy: true
    });
    openByScroll('.fixed-gift');

    showModalByTime('.popup-consultation', 5000);

};
