const puppeteer = require("puppeteer");

async function scrape_metro_ca () {

    //SCRAPING

    //LAUNCH VISIBLE BROWSER
    const browser = await puppeteer.launch();

    //get page instance
    const page = await browser.newPage();

    //GOES TO METRO CA IN FRUITS AND VEGETABLES SECTION
    await page.goto("https://www.metro.ca/en/online-grocery/aisles/fruits-vegetables");
    
    //Wait 1 second
    //await page.waitFor(1000);

    //SCRAPED CODE
    //await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img')
    //FINISH
    //await page.waitFor(1000);
    

    const result = await page.evaluate(() => {

        let data = [];

        let elements = document.querySelectorAll('.item-addToCart');

        //console.log('ELEMENTS ARE ... ')
        
        //console.log('*** '+ elements);

        
        for (var element of elements) {
            
            //Getting product image
            let img_url = element.children[0].children[0].children[0].children[0].children[0].srcset//.innerHTML//.getElementsByClassName("product-details-link");

            //Getting product title
            let title = element.children[0].children[1].children[0].children[0].innerHTML//.getElementsByClassName("product-details-link");
            
            //Getting product price
            let price = element.children[2].children[0].children[0].children[0].children[0].children[0].innerHTML//.getElementsByClassName("product-details-link");
            
            //console.log(image_url);
            console.log('PASSED');
            
            //let title = element.childNodes[5].innerText; // Select the title
            //let price = element.childNodes[7].children[0].innerText; // Select the price

            data.push({title, img_url, price}); 
        }
     
        return {
            data
        };

    });

       await browser.close();
    return result;
    //RETURNED VALUE

};

module.exports =  scrape_metro_ca;


//OPEN PROMISSE 
/*
scrape().then((value) => {
    //LOG RESULT
    console.log(value);
})*/