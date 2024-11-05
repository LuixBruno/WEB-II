//Primeira inmportação
import {soma, subtracao} from './operacoesESM.js'
console.log(soma(2,2))
console.log(subtracao(2,2))

// Segunda Importação
import * as operacoes  from './operacoesESM.js'
console.log(operacoes.soma(2,2))
console.log(operacoes.subtracao(2,2))

// Terceira Importação
import soma from './operacoesESM.js'
console.log(soma(4,4))
