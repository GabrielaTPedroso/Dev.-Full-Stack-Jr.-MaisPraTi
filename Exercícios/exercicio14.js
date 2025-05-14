// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()

let number = Number(prompt("Insira um número para saber seu valor fatorial: "))
let fatorial = 1

while (number > 1){
    fatorial *= number
    number--
    
}
    console.log(`O valor fatorial deste número é: ${fatorial}.`)