// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require ('prompt-sync') ()

let choice = Number(prompt('Como você quer o seu café? Digite o número da opção escolhida: 1. Puro / 2. Com leite / 3. Com açúcar: '))

switch(choice){
    case 1:
        console.log('Aqui está seu café puro.')
        break
    case 2:
        console.log('Aqui está seu café com leite.')
        break
    case 3:
        console.log('Aqui está seu café com açúcar.')
        break
    default: 
    console.log('Resposta inválida.')
}