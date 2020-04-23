var mongoose = require('mongoose');

//PRODUCT SCHEMA
var productSchema = new mongoose.Schema({
  title: String,
  price: String,
  img_url: String
});

//MODEL SEGREGATION
module.exports = ProductModel = new mongoose.model('product', productSchema);
