export const modals = (): void => {

    let btnPressed: boolean = false;

    const calcScroll = ():number => {
        const div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        return div.offsetWidth - div.clientWidth;

    }

    const toggleModal = (selector:HTMLElement, display:string, overflow:string):void => {
        selector.style.display = display;
        document.body.style.overflow = overflow;
    };

    interface IBind {
        triggersSelector:string,
        modalSelector:string,
        closeSelector:string,
        destroy?: boolean

    }

    const bindModal = (modalToggle: IBind) => {
        const triggers:NodeListOf<HTMLElement> = document.querySelectorAll(modalToggle.triggersSelector);
        const modal = document.querySelector(modalToggle.modalSelector) as HTMLElement;
        const close = document.querySelector(modalToggle.closeSelector) as HTMLElement;
        const windows:NodeListOf<HTMLElement> = document.querySelectorAll("[data-modal]");
        const scroll = calcScroll();
        modalToggle.destroy = false;

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (modalToggle.destroy) {
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

    const showModalByTime = (selector:string, time:number):void => {
        setTimeout(() => {
            let display:boolean = false;
            document.querySelectorAll('[data-modal]').forEach(modal => {
                if (getComputedStyle(modal).display !== 'none') {
                    display = true;
                }
            });

            if (!display) {
                toggleModal((document.querySelector(selector) as HTMLElement), "block", "hidden");
                const scroll:number = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);

    }

    const openByScroll = (selector:string) => {
        const scrollHeight:number = Math.max(document.documentElement.scrollHeight,
            document.body.scrollHeight)
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >=
                scrollHeight)) {
                (document.querySelector(selector) as HTMLElement).click();
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
