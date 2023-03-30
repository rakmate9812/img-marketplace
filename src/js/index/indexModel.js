export const getRandomImage = function (accessToken) {
  const url = `https://api.unsplash.com/photos/random/?client_id=${accessToken}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
