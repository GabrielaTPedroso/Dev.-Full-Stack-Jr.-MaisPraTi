// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()
let soma = 0 
let contador = 0
let numerosDecimais = undefined

do {
    numerosDecimais = Number(prompt('Insira números decimais para o cálculo da média (quando terminar, aperte 0): '))
    contador ++
    soma += numerosDecimais
}
while (numerosDecimais !== 0)

    let media = soma / (contador - 1)

    console.log(`A média artmética dos números inseridos é: ${media}.`)