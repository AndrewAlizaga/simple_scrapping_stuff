const mongoose = require("mongoose");

module.exports = async function connectDB(){

    try {
        await mongoose.connect('mongodb://simple_man:puropadomi2eswidosta1e5@ds121026.mlab.com:21026/ecommerce', {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false
        });
        console.log("mongodb connected...");
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
  } 

//CONNECTION
