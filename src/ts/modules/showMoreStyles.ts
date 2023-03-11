import { getResource } from "../services/requests";


export const showMoreStyles = (trigger:string, wrapper:string): void => {
    const btn = document.querySelector(trigger) as HTMLElement;

    interface ICard {
        src:string, 
        title:string,
        link:string
    }

    const createCards = (responses: NodeListOf<any>) :void => {
        (responses).forEach((newCard: ICard) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
            card.innerHTML = `
            <div class=styles-block>
                <img src=${newCard.src} alt>
                <h4>${newCard.title}</h4>
                <a href=${newCard.link}>Подробнее</a>
        </div>
            `;


            (document.querySelector(wrapper) as HTMLElement).appendChild(card);
        });
    };

    btn.addEventListener('click', (e : MouseEvent) => {
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => console.log(error));
        (e.target as HTMLElement).remove();
    });
};
