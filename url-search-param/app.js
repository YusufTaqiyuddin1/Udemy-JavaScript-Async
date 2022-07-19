function doSearch(){
    const ajax = new XMLHttpRequest();
    const param = new URLSearchParams();

    param.append("search", document.getElementById("search").value);
    param.append("filter", document.getElementById("search").value);

    ajax.open(
      "GET",
      `http://bsutpj71qszxzbjw.b.requestbin.net?${param.toString()}`
    );
    ajax.onload = function(){
        const response = document.getElementById("response");
        response.innerText = ajax.responseText;
        console.log(param);
    }

    ajax.send();
}

document.getElementById("searchButton").onclick = doSearch();