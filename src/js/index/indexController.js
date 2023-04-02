import $ from "../../../node_modules/jquery/dist/jquery.min.js";
import * as model from "./indexModel.js";
import * as view from "./indexView.js";
import * as cfg from "../config.js";

// console.log($());

// model.getData(
//   "https://api.unsplash.com/search/photos/?query=mountains&page=21&per_page=6",
//   cfg.ACCESS_KEY
// );

view.trendingSwiper();
