export const accordion = (triggersSelector: string, itemsSelector: string): void => {
    const buttons: NodeListOf<HTMLElement> = document.querySelectorAll(triggersSelector);

    buttons.forEach(button => {
        button.addEventListener('click', (e: MouseEvent) => {
            const target = (e.target as HTMLElement).parentNode as HTMLElement;

            target.classList.toggle('active-style');
            (target.nextElementSibling as HTMLElement).classList.toggle('active-content');

            if (target.classList.contains('active-style')) {
                (target.nextElementSibling as HTMLElement).style.maxHeight = (target.nextElementSibling as HTMLElement).scrollHeight + 80 + "px";
            } else {
                (target.nextElementSibling as HTMLElement).style.maxHeight = '0';
            }
        });
    });
};