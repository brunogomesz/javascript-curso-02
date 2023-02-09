const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

// os "..." está abrindo o array
const numeros = [...numerosPares, ...numerosImpares];

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];

console.log(num1, num2, outrosNumeros);

console.log("------------------------------------------------------")
// colocando valor pré definido
const [nome1 = 'Ju'] = [1];

console.log(nome1);

console.log("------------------------------------------------------")

const pessoa = {
    nome: 'Ju',
    idade: 25
}

const pessoaComTelefone = {
    ...pessoa, telefone: 12121212
}

console.log(pessoa, pessoaComTelefone);

console.log("------------------------------------------------------")

//const nome = pessoa.nome;
const { nome } = pessoa // pega o valor de nome e coloca na variável escrito nome

console.log("------------------------------------------------------")

// function imprimeDados (dados){
//     const { nome, idade } = dados
//     console.log(nome, idade)
// }

function imprimeDados ({ nome, idade }){
    console.log(nome, idade)
}

imprimeDados(pessoa);