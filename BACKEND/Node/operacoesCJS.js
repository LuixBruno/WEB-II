/* console.log("operacoes CJS")


exports.soma = function(a,b){
    return a+b
}
 */

function soma(a,b){
    return a+b
}

function subtracao(a,b){
    return a-b
}
module.exports = {
    soma,
    subtracao
}