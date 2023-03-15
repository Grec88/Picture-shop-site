export const drop = ():void => {
    const fileInputs:NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="upload"]');

    const preventDefaults = (e:Event):void => {
        e.preventDefault();
        e.stopPropagation();
    };

    ["drageneter", "dragleave", "dragover", "drop"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        })
    });

    const highlight = (element:HTMLElement):void => {
        (element.closest('.file_upload') as HTMLElement).style.border = "5px solid yellow"; 
        (element.closest('.file_upload') as HTMLElement).style.backgroundColor = "rgb(0, 0, 0, .7)"; 
    }

    const unhighlight = (element:HTMLElement):void => {
        (element.closest('.file_upload') as HTMLElement).style.border = "none"; 
        element.closest('.calc_form') ? (element.closest('.file_upload') as HTMLElement).style.backgroundColor = "#fff" :
        (element.closest('.file_upload') as HTMLElement).style.backgroundColor = "#ededed";
    }

    ["drageneter", "dragover"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        })
    });

    ["dragleave", "drop"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        })
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = (e.dataTransfer as DataTransfer).files;
            const file = input.files[0];
            const [fileName, fileExt] = file.name.split('.');
            const dots = fileName.length > 6 ? '...' : '.';
            const name = `${fileName.substring(0, 6)} ${dots} ${fileExt}`;
            (input.previousElementSibling as HTMLElement).textContent = name;
        })
    })
};