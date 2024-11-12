async function processarUsuariosEmSequencia(ids) {
    for (const id of ids) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error(`Erro ao buscar usuário ID ${id}: ${response.statusText}`);
            }
            const usuario = await response.json();
            console.log(`Usuário ${id}:`, usuario);
        } catch (erro) {
            console.error(erro.message);
        }
    }
}

const idsUsuarios = [1, 2, 3, 4, 5];
processarUsuariosEmSequencia(idsUsuarios);
