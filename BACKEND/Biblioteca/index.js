import fs from 'fs'
async function lerMultiplosArquivos(arrayDeCaminhos){
    try{
        const arrayDePomessas = arrayDeCaminhos.map((caminho)=> fs.promises.readFile(caminho,'utf-8'));

        console.log(arrayDePomessas);

        const listaDeDados = await Promise.all(arrayDePomessas);
        return listaDeDados;
    } catch(erro){
        throw erro
    }
}

const caminhos = [
    "./arquivos/texto-kanban.txt",
    "./arquivos/texto-web.txt",
    "./arquivos/texto-aprendizado.txt"
]

lerMultiplosArquivos(caminhos)
    .then((conteudoDosArquivos)=>{
        console.log(conteudoDosArquivos);
    })
    .catch((erro)=>
    console.error('Erro ao ler os arquivos', erro.message)
)



