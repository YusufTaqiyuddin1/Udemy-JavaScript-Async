const ajax = new XMLHttpRequest();
ajax.open("GET", "./api/hello.json");
// ajax.open('GET', 'http://localhost:8080/api/hello.json');

function displayResponse(json){
    const header = document.getElementById("header");
    header.textContent = json.response;
};

// ajax.send();

// Menerima Data dari AJAX

// ajax.addEventListener("load", function(){
//     const json = JSON.parse(ajax.responseText);
//     const header = document.getElementById("header");
//     header.textContent = json.response;
// });

// response status di ajax
ajax.addEventListener("load", function () {
    if(ajax.status === 200){
        const json = JSON.parse(ajax.responseText);
        displayResponse(json);
    } else{
        displayResponse({
            response: `Terjadi Kesalahan dengan status ${ajax.status}`
        })
    }
  
});

ajax.send();