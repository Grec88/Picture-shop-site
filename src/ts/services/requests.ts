const postData = async (url:string, data: FormData) => {
    const res:Response = await fetch(url, {
        method: "POST",
        body: data
    });
    return await res.text();
};

const getResource = async (url:string) => {
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export{postData, getResource};
