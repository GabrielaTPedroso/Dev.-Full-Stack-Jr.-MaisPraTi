// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let A = 0
let B = 1

console.log(A)
console.log(B)



for (let contagem = 3 ; contagem <= 10 ; contagem++){
    let fibonacci = A + B 
    
    console.log(fibonacci)

    A = B 
    B = fibonacci

}