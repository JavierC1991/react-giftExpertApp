

export const getGifs = async(category) =>{
    const key = "WC4ThWFMy6W8C6LoHssSB89jKjb9lS25";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${key}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs  = data.map(img=>{
        return({
            id: img.id,
            title: img.title,
            url:img.images?.downsized_medium.url
        })
    });
    return gifs;
}