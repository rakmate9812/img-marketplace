// https://api.unsplash.com/search/photos?client_id=YOUR_ACCESS_KEY?page=1&query=mountains

export const getData = async function (url, accessKey) {
  try {
    const resp = await fetch(`${url}&client_id=${accessKey}`);
    const data = await resp.json();
    console.log(data);
  } catch (err) {
    console.error("Something happened: " + err);
  }
};
