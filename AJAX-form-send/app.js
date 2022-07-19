function doLogin(){
    const ajax = new XMLHttpRequest();

    ajax.open("POST", "http://bsutpj71qszxzbjw.b.requestbin.net/");
    ajax.onload = function(){
        const response = document.getElementById("response");
        response.innerText = ajax.responseText;
    }
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    const form = new URLSearchParams();
    form.append("username", document.getElementById("username").value);
    form.append("password", document.getElementById("password").value);

    ajax.send(form);
}

document.getElementById("login").onclick = doLogin();