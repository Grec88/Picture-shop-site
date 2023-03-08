export const calc = ({ size, material, options, promo, res }) => {
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const promoBlock = document.querySelector(promo);
    const resBlock = document.querySelector(res);

    const calcFunc = () => {
        const sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resBlock.textContent = "Пожалуйста, выберите размер и материал картины.";
        } else if (promoBlock.value.toUpperCase() === "IWANTPOPART") {
            resBlock.textContent = Math.round(sum * 0.7);
        } else {
            resBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promoBlock.addEventListener('input', calcFunc);
}

