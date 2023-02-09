// Dessa forma o notas também recebe a mofificação feita, que no caso é a adição do número 10

// não clona array dessa forma

// const notas = [7, 7, 8, 9];

// const novasNotas =  notas;

// novasNotas.push(10);

// console.log(`As novas notas são ${novasNotas}`);
// console.log(`As notas originais são ${novasNotas}`);


const notas = [7, 7, 8, 9];

const novasNotas =  [...notas, 10];

// novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${novasNotas}`);