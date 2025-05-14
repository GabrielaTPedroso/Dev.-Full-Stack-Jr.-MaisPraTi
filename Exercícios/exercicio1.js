// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const PromptSync = require("prompt-sync");

const prompt = require ('prompt-sync') ()

let numero = prompt('Digite um número inteiro:')

if (numero %2 === 0) {
    console.log('Este é um número par.')
}
else {
    console.log('Este é um número ímpar.')
}