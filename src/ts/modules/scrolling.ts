export interface IBtns {
    upSelector: string,
    stylesSelector: string,
    portfolioSelector: string,
    oftenQuestionsSelector: string, 
    footerSelector:string,
    schemeSelector:string
}

export const scrolling = (btns: IBtns): void => {
    const upBtn = document.querySelectorAll(btns.upSelector) as NodeListOf<HTMLAnchorElement>;
    const stylesBtns = document.querySelectorAll(btns.stylesSelector) as NodeListOf<HTMLAnchorElement>;
    const footerBtns = document.querySelectorAll(btns.footerSelector) as NodeListOf<HTMLAnchorElement>;
    const schemeBtns = document.querySelectorAll(btns.schemeSelector) as NodeListOf<HTMLAnchorElement>;
    const portfolioBtns = document.querySelectorAll(btns.portfolioSelector) as NodeListOf<HTMLAnchorElement>;
    const oftenQuestionsBtns = document.querySelectorAll(btns.oftenQuestionsSelector) as NodeListOf<HTMLAnchorElement>;

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1550) {
            upBtn[0].classList.add('animated', 'fadeIn');
            upBtn[0].classList.remove('fadeOut');
        } else if (upBtn[0].classList.contains('animated')) {
            upBtn[0].classList.add('animated', 'fadeOut');
            upBtn[0].classList.remove('fadeIn');
        }
    });

    const scrollToElement = (btns: NodeListOf<HTMLAnchorElement>): void => {
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const hashElement = document.getElementById((btn.getAttribute('href') as string).substring(1)) as HTMLElement;
                hashElement.scrollIntoView({ behavior: "smooth" });
            })
        })
    }

    scrollToElement(upBtn);
    scrollToElement(stylesBtns);
    scrollToElement(footerBtns);
    scrollToElement(schemeBtns);
    scrollToElement(portfolioBtns);
    scrollToElement(oftenQuestionsBtns);

};

