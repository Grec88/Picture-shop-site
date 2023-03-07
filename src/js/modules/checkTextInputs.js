export const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(txtInput => {
        txtInput.addEventListener('keypress', (e) => {
            const regRuText = /[^а-яё 0-9]/ig;
            if(e.key.match(regRuText)){
                e.preventDefault();
            }
        })
    });
};