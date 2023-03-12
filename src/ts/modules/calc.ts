interface ICalc  {
    size:string,
    material:string,
    options:string,
    promo:string,
    res:string
}

export const calc = ( cost:ICalc) => {
    const sizeBlock = document.querySelector(cost.size) as HTMLInputElement;
    const materialBlock = document.querySelector(cost.material) as HTMLInputElement;
    const optionsBlock = document.querySelector(cost.options) as HTMLInputElement;
    const promoBlock = document.querySelector(cost.promo) as HTMLInputElement;
    const resBlock = document.querySelector(cost.res) as HTMLInputElement;

    const calcFunc = ():void => {
        const sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resBlock.textContent = "Пожалуйста, выберите размер и материал картины.";
        } else if (promoBlock.value.toUpperCase() === "IWANTPOPART") {
            resBlock.textContent = Math.round(sum * 0.7).toString();
        } else {
            resBlock.textContent = sum.toString();
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promoBlock.addEventListener('input', calcFunc);
}

