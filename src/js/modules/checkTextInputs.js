export const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(txtInput => {
        txtInput.addEventListener('keypress', (e) => {
            if(e.key.match(/[^а-яё 0-9]/ig)){
                e.preventDefault();
            }
        })
    });
};