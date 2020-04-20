const express = require("express");

const product = require("./product.js");

const route = express.Router();

//FOR PRODUCTS
route.use("/products", product);


module.exports = route;
