const express = require("express");
const router = express.Router();
const scrap = require("../utils/scrapper.js");
const ProductModel = require("../d/product.js");

//PUPPETEER IMPLEMENTATION
const puppeteer = require("puppeteer");



//Route definition
router.get("/", async (req, res) => {
    
    console.log("reached getting products route");
    
    //await getPic();

    let product = await scrap();


    return res.status(200).json({"message": "hello friend", "products": product});


});


//Get from specific provider

//METRO CA
router.get("/metro_ca", async (req, res) => {
    
    console.log("reached getting products route");
    
    //await getPic();

    let product = await scrap();


    return res.status(200).json({"message": "hello friend", "products": product});


});

module.exports = router;
