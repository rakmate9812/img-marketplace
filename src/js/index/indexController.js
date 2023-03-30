import $ from "../../../node_modules/jquery/dist/jquery.min.js";
import * as model from "./indexModel.js";
import * as cfg from "../config.js";

// console.log($());

// getting 6 images from unsplash
model.getData(
  "https://api.unsplash.com/search/photos/?query=mountains&page=21&per_page=6",
  cfg.ACCESS_KEY
);
