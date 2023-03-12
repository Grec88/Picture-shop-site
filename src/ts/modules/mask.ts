export const mask = (selector:string) => {

    const setCursorPosition = (pos: number, elem: HTMLInputElement) => {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos)
        } else if ((elem as any).createTextRange) {
            const range = (elem as any).createTextRange();

            range.collapse(true);
            range.moveEnd('charcater', pos);
            range.moveStart('charcater', pos);
            range.select()
        }
    };

    const createMask = (event: Event) => {
        const elem = event.target as HTMLInputElement;
        const matrix = '+7 (___) ___ __ __';
        let i = 0;
        const def:string = matrix.replace(/\D/g, '');
        let val:string = elem.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        elem.value = matrix.replace(/./g, (a) => {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++)
                : i >= val.length ? '' : a;
        })

        if (event.type === 'blur') {
            if (elem.value.length == 2) {
                elem.value = '';
            } else {
                setCursorPosition(elem.value.length, elem)
            }
        }
    }

    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('blur', createMask);
        input.addEventListener('focus', createMask);
    })
};