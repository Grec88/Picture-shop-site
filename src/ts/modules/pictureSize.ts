export const pictureSize = (imgSelector: string): void => {
    const blocks: NodeListOf<HTMLElement> = document.querySelectorAll(imgSelector);

    const showImg = (block:HTMLElement):void => {
        const img = block.querySelector('img') as HTMLImageElement;

        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            (p as HTMLElement).style.display = 'none';
        })
    };

    const hideImg = (block:HTMLElement):void => {
        const img = block.querySelector('img') as HTMLImageElement;

        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            (p as HTMLElement).style.display = 'block';
        })
    };

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });

        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};