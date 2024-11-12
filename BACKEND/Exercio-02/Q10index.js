import fs from 'fs'
async function listarDiretorio(caminho) {
    try {
        const arquivos = await fs.readdir(caminho);
        console.log("Conteúdo do diretório:", arquivos);
    } catch (erro) {
        console.error("Erro ao ler diretório:", erro.message);
    }
}

listarDiretorio('./arquivos');