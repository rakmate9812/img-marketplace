// https://api.unsplash.com/search/photos?client_id=YOUR_ACCESS_KEY?page=1&query=mountains

export const getRandomImage = async function (accessToken) {
  const url = `https://api.unsplash.com/photos/random/?client_id=${accessToken}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.urls.regular));
};

export const getImageCollection = function (accessToken) {
  const url = `https://api.unsplash.com/search/photos/?client_id=${accessToken}&query=mountains&page=21&per_page=6`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
