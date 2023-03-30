import $ from "../../../node_modules/jquery/dist/jquery.min.js";
import * as model from "./indexModel.js";
import * as cfg from "../config.js";

// console.log($());

// model.getRandomImage(cfg.ACCESS_KEY);
model.getImageCollection(cfg.ACCESS_KEY);
