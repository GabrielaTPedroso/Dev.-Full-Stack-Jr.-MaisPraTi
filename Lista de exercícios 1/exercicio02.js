// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

const prompt = require ('prompt-sync') ()

let idade = prompt('Digite sua idade: ')

if (idade < 12) {
    console.log('Criança')
} else if (idade > 12 && idade < 18) {
    console.log('Adolescente')
} else if (idade > 18 && idade < 65) {
    console.log('Adulto')
} else if (idade > 65 && idade < 120) {
    console.log('Idoso')
} else {
    console.log('Idade não identificada')
}
