function getProduct(product){
    return new Promise(function (resolve, reject) {

      const ajax = new XMLHttpRequest();
      ajax.open("GET", `api/${product}.json`);
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

// const promise = Promise.any([
//   getProduct("product1"),
//   getProduct("product2"),
//   getProduct("product3"),
// ]);

// mengambil product tercepat tetapi dicek apakah datanya benar atau tidak
// const promise = Promise.race([
//   getProduct("productsalah"),
//   getProduct("product2"),
//   getProduct("product3"),
// ]);

const promise = Promise.all([
  getProduct("product1"),
  getProduct("product2"),
  getProduct("product3")
]);

promise.then(function(products){
  console.log(products);
})
