const express = require("express");
const app = express();
let port = 8000;
const cors = require("cors");

//ROUTES
const router = require("./routes/router.js");
const connectDB = require("./d/db.js");
const scrape_metro_ca = require("./utils/scrapper");

//DATABASE CONNECTION
connectDB();

//SETS METRO CA SCRAPPING FOR EVERY 2 MINUTES
setTimeout(async function(){
let data = await scrape_metro_ca();
console.log(data);

}, 120000);

app.use(express.json({ extended: false}));
app.use(cors());
app.use("/api", router);

app.listen(port, (req, res)=> {

    console.log('alive at: '+port)
})

