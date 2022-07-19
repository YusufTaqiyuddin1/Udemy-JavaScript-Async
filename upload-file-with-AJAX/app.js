function doRegister(){
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "http://bsutpj71qszxzbjw.b.requestbin.net/");
    ajax.onload = function(){
        const response = document.getElementById("response");
        response.innerText = ajax.responseText;
    }

    const form = new FormData();
    form.append("username", document.getElementById("username").value);
    form.append("name", document.getElementById("name").value);

    const files = document.getElementById("profile").files;
    const firstFile = files.item(0);

    form.append("profile", firstFile);
    ajax.send(form);
}

document.getElementById("register").onclick = doRegister;