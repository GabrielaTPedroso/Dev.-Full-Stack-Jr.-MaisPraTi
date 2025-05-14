// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()

let soma = 0

for (let contagem = 1 ; contagem <= 5; contagem ++) {
    let numeros = Number(prompt('Insira um número: '))
    soma += numeros
}
    console.log(`A soma total desses números é: ${soma}.`)