const express = require("express");
const router = express.Router();
const scrap = require("../utils/scrapper.js");

//PUPPETEER IMPLEMENTATION
const puppeteer = require("puppeteer");



//Route definition
router.get("/", async (req, res) => {
    
    console.log("reached getting products route");
    
    //await getPic();

    let product = await scrap();


    return res.status(200).json({"message": "hello friend", "products": product});


});


//FUNCS

async function getPic(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    //SERVE SCRAPPING LINK
    await page.goto('https://google.com');

    //TAKING SCREENSHOT
    await page.screenshot({path: 'google.png'});

    //CLOSE BROWSER
    await browser.close();
}

module.exports = router;
