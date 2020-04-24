function performGetRequest1() { 

    axios.get ('http://localhost:8000/api/products', { 
          }) 
    .then(function(response){ 
      console.log(response.data.products); 

      let productList = renderProducts(response.data.products);
      console.log("product list: "+productList);
      var date = new Date();
      let renderedData = "<h1 style='font-size: 4vh; '>From Metro CA </h1> <br><h3 style='font-size: 2vh;'>Last updated at: "+date.toString()+" </h3> <br> <div style='display: flex; flex-direction: row; flex-wrap: wrap; width: 80%; height: 100%;'> "+ productList +" </div>";
      console.log(renderedData);

      $('#product_list').html(renderedData);

    }) 
    .catch(function(error){ 
        console.log(error);
        $('#product_list').html('INTERNAL ERROR');
    }); 
  }



function renderProducts(product_list){
  let renderedList = "";

  console.log("length: " + product_list.data.length);

  for (i = 0; i < product_list.data.length; i++) {

    var element = product_list.data[i];
    var img_array = element.img_url.split(",");
    var product_img = img_array[0];
    console.log('product img: '+product_img);
    renderedList += "<div style='padding: 2%; height: auto; border: 1px solid #bababa; width: 15vw; display: flex; flex-direction: column;'> <img src='"+product_img+"'/> <h1 style='font-size: 3vh'> "+ element.title +" </h1> <h2 style='font-size: 2vh'> price: "+ element.price +"<h2> </div>";
    //text += "The number is " + i + "<br>";
  }
  /*
  for(element of ){
    
  }
  */

  return renderedList;
}