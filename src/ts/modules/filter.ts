export const filter = ():void => {
    const menu = document.querySelector('.portfolio-menu') as HTMLElement;
    const buttons:NodeListOf<HTMLElement> = menu.querySelectorAll('li');
    const wrapper = document.querySelector('.portfolio-wrapper')as HTMLElement;
    const markAll:NodeListOf<HTMLElement> = wrapper.querySelectorAll('.all');
    const no = document.querySelector('.portfolio-no') as HTMLElement;

    const typeFilter = (markType:NodeListOf<HTMLElement> | null) => {
        markAll.forEach(mark => {
            mark.style.display = "none";
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = "block";
                mark.classList.add('animated', 'fadeIn');
            })
        } else {
            no.style.display = "block";
            no.classList.add('animated', 'fadeIn');
        }
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.className !== "grandmother" && button.className !== "granddad"){
            typeFilter( wrapper.querySelectorAll(`.${button.className}`));
            } else {
                typeFilter(null);
            }
        });
    })

    menu.addEventListener('click', (e:MouseEvent) => {
        let target = e.target as Element;

        if (target && target.tagName == "LI") {
            buttons.forEach(button => button.classList.remove('active'));
            target.classList.add('active');
        }
    });
};