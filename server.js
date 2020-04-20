const express = require("express");
const app = express();
let port = 8000;
const cors = require("cors");

//ROUTES
const router = require("./routes/router.js");

app.use(express.json({ extended: false}));
app.use(cors());
app.use("/api", router);

app.listen(port, (req, res)=> {

    console.log('alive at: '+port)
})