export const scrolling = (upSelector: string): void => {
    const upElem = document.querySelector(upSelector) as HTMLElement;
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('animated', 'fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    const element: HTMLElement = document.documentElement;
    const body: HTMLElement = document.body;

    const calcScroll = ():void => {
        upElem.addEventListener('click', (e:Event) => {
            const target = (e.target as HTMLElement).parentElement?.parentElement as HTMLAnchorElement;
            const scrollTop:number = Math.round(body.scrollTop || element.scrollTop);

            if(target.hash != ''){
                e.preventDefault();
                let hashElement = document.querySelector(target.hash) as HTMLElement;
                let hashElementTop:number = 0;

                while(hashElement.offsetParent){
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent as HTMLElement || null;
                }

                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, target.hash);
            }
    });
};

const smoothScroll = (from:number, to:number, hash:string):void => {
    const timeInterval:number = 1;
    let prevScrollTop:number = 0;
    let speed:number = 0;

    if(to > from){
        speed = 30;
    }else{
        speed = -30;
    }

    const move = setInterval(() => {
        const scrollTop:number = Math.round(body.scrollTop || element.scrollTop);

        if(prevScrollTop == scrollTop ||
            (to > from && scrollTop >= to) ||
            (to < from && scrollTop <= to)){
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
        } else{
            body.scrollTop += speed;
            element.scrollTop += speed;
            prevScrollTop = scrollTop;
        }
    }, timeInterval);
};

calcScroll();

};
