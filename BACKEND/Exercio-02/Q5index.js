async function fetcDataFromAPI(url){
    let response = await fetch(url);
    if(response.status !==200){
        throw new Error("Falha na comuniação com a API")
    }
     return await response.json();
}



fetcDataFromAPI("https://jsonplaceholder.typicode.com/users/1")
    .then((data)=>console.log(data))
    .catch((erro)=> console.log(erro.message))