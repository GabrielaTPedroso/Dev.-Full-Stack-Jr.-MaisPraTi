// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

const prompt = require ('prompt-sync') ()

let ladoA = Number(prompt('Insira a medida do lado A do triângulo:'))
let ladoB = Number(prompt('Insira a medida do lado B do triângulo:'))
let ladoC = Number(prompt('Insira a medida do lado C do triângulo:'))

let triangulo 

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    triangulo = true

} else {
    triangulo = false
    console.log('Não é um triângulo.')
}

if(triangulo){
    if(ladoA === ladoB && ladoB === ladoC){
        console.log('É um triângulo equilátero.')
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        console.log('É um triângulo Isóceles.')
    }else {
        console.log('É um triângulo escaleno.')
    }
    }
