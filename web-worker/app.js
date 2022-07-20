const worker = new Worker("worker.js");

worker.addEventListener("message", function(message){
    console.log(message.data);
})

document.getElementById("buttonTask").onclick = function(){
    worker.postMessage(100000);
};