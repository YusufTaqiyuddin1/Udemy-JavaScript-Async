function getProduct(){
    return new Promise(function (resolve, reject) {

      const ajax = new XMLHttpRequest();
      ajax.open("GET", "api/product.json");
      ajax.onload = function () {
        if (ajax.status === 200) {
          resolve(ajax.responseText);
        } else {
          reject(`Error get product with response : ${ajax.status}`);
        }
      };

      ajax.send();
    });
}

getProduct()
    .then(function(response){
        return JSON.parse(response);
    })
    .then(function (json){
        document.getElementById("id").textContent = json.id;
        document.getElementById("name").textContent = json.name;
        document.getElementById("price").textContent = json.price;
    })
    .catch(function (error){
        document.getElementById("id").textContent = error;
        document.getElementById("name").textContent = error;
        document.getElementById("price").textContent = error;
    })
    .finally(function(){
        console.log("Finally");
    })