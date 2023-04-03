import * as cfg from "../config.js";

export const getDataHelper = async function (url, accessKey) {
  try {
    const resp = await fetch(`${url}&client_id=${accessKey}`);
    const data = await resp.json();
    return data.results; // returns an array of objects with the data
  } catch (err) {
    console.error("Something happened: " + err);
  }
};

export const getTrendingData = async function () {
  const dataForTrending = await getDataHelper(
    `https://api.unsplash.com/search/photos/?query=trending&page=${new Date().getDay()}&per_page=20`,
    cfg.ACCESS_KEY
  );
  console.log(dataForTrending[0].urls.regular);
  return dataForTrending;
};
