export const filter = () => {
    const menu = document.querySelector('.portfolio-menu');
    const buttons = menu.querySelectorAll('li');
    const wrapper = document.querySelector('.portfolio-wrapper');
    const markAll = wrapper.querySelectorAll('.all');
    const no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
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
                typeFilter();
            }
        });
    })

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            buttons.forEach(button => button.classList.remove('active'));
            target.classList.add('active');
        }
    });
};