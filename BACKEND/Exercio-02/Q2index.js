async function buscarDadosDoJsonPlaceholder(entrada) {
    if (entrada === "luiz") {
        throw new Error("Erro ao buscar dados: entrada inválida.");
    }

    const url = `https://jsonplaceholder.typicode.com/users/${entrada}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Erro ao buscar dados do JSONPlaceholder.");
    }

    return await response.json();
}

//sem erro
buscarDadosDoJsonPlaceholder(1)
    .then((data) => console.log(data))
    .catch((erro) => console.log(erro.message));

//com erro
/* buscarDadosDoJsonPlaceholder("erro")
    .then((data) => console.log(data))
    .catch((erro) => console.log(erro.message));
 */