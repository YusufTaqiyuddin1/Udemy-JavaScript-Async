// return promise<string>

function getName(){
    const request = new Request("api/name.json",{
        method: "GET"
    });

    const response = fetch(request);
    return response.then((response) => response.json());
}

async function getNameAsync(){
    try{
        const name = await getName();
        return name.nama;
    } catch(error){
        return "Product Not Found";
    }
    
}

getNameAsync()
    .then((name) => console.log(name));