// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let valorA = Number(prompt('Insira um valor:'))
let valorB = Number(prompt('Insira outro valor:'))

if (valorA === valorB) {
    console.log('Não aceito valores iguais.')
} else if (valorA > valorB) {
    console.log(valorB)
    console.log(valorA)
} else {
    console.log(valorA)
    console.log(valorB)
}