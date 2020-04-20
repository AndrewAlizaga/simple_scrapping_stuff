const puppeteer = require("puppeteer");

async function scrape () {

    //SCRAPING

    //LAUNCH VISIBLE BROWSER
    const browser = await puppeteer.launch();

    //get page instance
    const page = await browser.newPage();

    await page.goto("http://books.toscrape.com/");
    
    //Wait 1 second
    //await page.waitFor(1000);

    //SCRAPED CODE
    //await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img')
    //FINISH
    //await page.waitFor(1000);
    

    const result = await page.evaluate(() => {

        let data = [];

        let elements = document.querySelectorAll('.product_pod');


        for (var element of elements) {
            let title = element.childNodes[5].innerText; // Select the title
            let price = element.childNodes[7].children[0].innerText; // Select the price

            data.push({title, price}); 
        }
        
        //LOGS THE DATA ARRAY
        console.log(data)

        // return something
        //let title = document.querySelector('h3 a').innerText;
        //let price = document.querySelector('.price_color').innerText;
        return {
            data
        };
    });

    browser.close();
    return result;
    //RETURNED VALUE

};

module.exports = scrape;

//OPEN PROMISSE 
/*
scrape().then((value) => {
    //LOG RESULT
    console.log(value);
})*/