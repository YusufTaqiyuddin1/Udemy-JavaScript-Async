const setTime = () =>{
    const header = document.createElement("h1");
    header.textContent = new Date().toString();

    document.body.appendChild(header);
};

setInterval(setTime, 1000);
