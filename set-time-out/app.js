const addElement = () =>{
    const header = document.createElement("h1");
    header.textContent = "Yusuf Taqiyuddin";

    document.body.appendChild(header);
};

setTimeout(addElement, 5000);