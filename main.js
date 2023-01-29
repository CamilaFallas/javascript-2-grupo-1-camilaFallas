// 1. Escriba una function que escriba un número a la inversa

const numero = 123456;
function inversa (n) {
  const stringUnir = n.toString().split("").reverse().join("");
  return Number(stringUnir); 
}
console.log(inversa(numero)); 

// 2. Escriba una function que acepte un string como parámetro y convierta cada primer letra de cada palabra en mayúscula

function mayuscula (frase) {
  return frase[0].toUpperCase() + frase.slice(1);
}
console.log(mayuscula("hola como estas"));
