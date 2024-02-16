export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=V4hRx3vG3lHEcqxaANXe6e1S5AVx1IF1&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.ul,
    }));
    return gifs;
};