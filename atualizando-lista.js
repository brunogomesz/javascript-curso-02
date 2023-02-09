const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
         // primeiro valor define o índice (nesse caso 1), segundo valor define quantidade de elementos para remover (nesse caso 2)
nomes.splice(1, 2, "Rodrigo");

console.log(nomes);

console.log("-----------------------------------------------------")

const nomes2 = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes2.splice(2, 1, "Rodrigo");

console.log(nomes2);
console.log("-----------------------------------------------------")

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

console.log("-----------------------------------------------------")
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]