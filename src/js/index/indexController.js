import { getTrendingData } from "./indexModel.js";
import { TrendingView } from "./indexView.js";
import { swiper } from "../swiper.js";

const init = async function () {
  swiper();
  const trendingData = await getTrendingData();
  const trendingView = new TrendingView();
  trendingView.render(trendingData);
};

init();
