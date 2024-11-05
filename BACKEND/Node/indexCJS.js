// primeira forma
//const operacoes = require('./operacoesCJS.js')


//segunda forma
const {soma,subtracao} = require('./operacoesCJS.js')

console.log("Passou aqui")

//const soma = operacoes.soma(10,20)

console.log(soma(4,2))
console.log(subtracao(4,2))