// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require ('prompt-sync') ()

let peso = Number(prompt('Qual é seu peso em kg?'))
let altura = Number(prompt('Qual é sua altura em metros?').replace(',','.'))

let imc = peso / (altura ** 2)

if (imc < 18.5) {
    console.log('Seu IMC é de:', imc.toFixed(2), 'Você está na categoria: Baixo peso.')
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Seu IMC é de:', imc.toFixed(2), 'Você está na categoria: Peso normal')
} else if (imc >= 25 && imc <= 29.9){
     console.log('Seu IMC é de:', imc.toFixed(2), 'Você está na categoria: Sobrepeso')
} else {
    console.log('Seu IMC é de:', imc.toFixed(2), 'Você está na categoria: Obesidade')
}
