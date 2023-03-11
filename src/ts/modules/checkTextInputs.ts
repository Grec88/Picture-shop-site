export const checkTextInputs = (selector:string) => {
    const txtInputs:NodeListOf<HTMLElement> = document.querySelectorAll(selector);

    txtInputs.forEach(txtInput => {
        txtInput.addEventListener('keydown', (e: KeyboardEvent) => {
            const regRuText = /[^а-яё 0-9]/ig;
            if(e.key.match(regRuText)){
                e.preventDefault();
            }
        })
    });
};