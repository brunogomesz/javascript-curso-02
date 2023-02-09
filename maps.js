// const notas = [10, 9.5, 8, 7, 6];
// // alterando todos os valores dos array
// const notasAtualizadas = notas.map((nota) => {
//   return nota + 1 >= 10 ? 10 : nota + 1;
// });

// console.log(notasAtualizadas);



console.log("-------------------------------------------------")

// const arrayNums = [1, 2, 3, 4];

// // function multiplicaPorDez(num) {
// //     return num * 10
// // }

// // const arraySomada = arrayNums.map(multiplicaPorDez)

// // console.log(arraySomada)

// const arraySomada = arrayNums.map(num => num * 10)

// console.log(arraySomada)

const arrayNums = [1, 2, 3, 4];
const numerosNovos = [];

function multpli (num){
    for (let numero of arrayNums) {
        numerosNovos.push(numero * num);
    }
    return numerosNovos;
}

console.log(multpli(100));
