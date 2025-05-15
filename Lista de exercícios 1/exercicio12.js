// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')()

let tabuada = Number(prompt('Insira o número que você deseja saber a tabuada: '))

for (let contador = 1 ; contador <= 10 ; contador ++ ) {
    let conta = (contador * tabuada)
    console.log (`${contador} x ${tabuada} = ${conta}`)
}