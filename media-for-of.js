
const numeros = [10,10,10];

let somaDosNumeros = 0;


for (let i = 0; i < numeros.length; i++) {

     somaDosNumeros += numeros[i];
}


console.log(somaDosNumeros);


const numeros2 = [10,10,10];

let somaNumeros = 0;


for (num of numeros2) {

    somaNumeros += num;
}

const media = somaNumeros / numeros2.length;

console.log(media);