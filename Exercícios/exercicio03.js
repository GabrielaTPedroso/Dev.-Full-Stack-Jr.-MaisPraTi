// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require ('prompt-sync') ()

let nota = prompt('Digite sua nota: ')

if (nota <= 5) {
    console.log('Reprovado')
} else if (nota >=6 && nota <= 7) {
    console.log('Recuperação')
} else if (nota >= 8 && nota <= 10) {
    console.log('Aprovado')
} else {
    console.log('Nota Inválida')
}
