// Prueba Diagnostico

// I Parte: Teoría

// 1. Respuesta pregunta 1

// Numero: Se escribe sin comillas, representa un valor y estos pueden ser enteros Ej 3 o decimales Ej 3.3
//String: Son letras, se escriben dentro de comillas, sino serian valores predeterminados de js, caracteres en general de texto. Ej:'Hola'
//Buleano: Tiene valor de verdadero o falso. true false
//Undefine: No conocemos el valor de la variable. 

// ====================================================================================================


// 2. Respuesta pregunta 2

// let personas = { nombre: "Sofia", nombre: "Pedro", nombre: "Carlos" };
//personas.nombre = 'Ericka';

// let personas = { nombre: "Sofia", nombre: "Pedro", nombre: "Carlos" };
// personas['nombre'] = "Ericka";

// ====================================================================================================


// 3. Respuesta pregunta 3

// +=: Aca el console.log de list me va a mostrar la suma del valor de la variable declarada arriba con el valor del numero agregado con += 
// el segundo console.log me va a mostrar el resultado nuevamente de la suma anterior junto con el texto agregado de 'textoDePrueba', todo esto como un string.

// ====================================================================================================


// 4. Respuesta pregunta 4

//!= y !== me compara la negacion por decirlo de una forma, a diferencia de que != no es estricto, o sea no le importan si compara 10 con '10', el 
// lo hace, en cambio !== si toma en cuenta como este ingresado el dato.

// != : No es estricto asi que daria false
//!== : Daria False

// != : Daria False ya que compara numero ignorando que este entre comillas como un string
// !== :Daria  True ya que compara el number con string


// ====================================================================================================


// 5. Respuesta pregunta 5

// Funciones que se encuentran almacenadas dentro de una variable y solo se pueden utilizar llamando esa variable

// ====================================================================================================


// 6. Respuesta pregunta 6

// Una funcion declarada es aquella que hago en termino generales, fuera de funciones por ejemplo que me va a aplicar con el mismo valor y
//no la puedo volver a declarar mas adelante dentro del js, en cambio las de expresion estan dentro de las funciones y tiene ese valor para
//ese espacio en especifico y se puede declarar mas adelante dentro de otra funcion.

// ====================================================================================================


// 7. Respuesta pregunta 7

// Funciones o sea porciones de codigo que estan dentro de un objeto en especifico

// ====================================================================================================


// 8. Respuesta pregunta 8

// La recursividad es cuando desgrano un problema de atras para adelante, la intencion es que la funcion se pueda llamar e ir desgranando 

// ====================================================================================================


// II Parte: Ejercicios

// Crear un programa que permita separar una lista de números aleatorios en
// dos listas nuevas, de manera que se separen los valores en pares e impares.
// Dicho programa debe recibir una lista de números como parámetro e iterar
// dicha lista, de manera que se pueda verificar si el número es par o impar y
// agrupar correctamente en la lista de números pares o impares. Al final debe
// imprimirse ambas listas.

// 1. Respuesta pregunta 1

let lista= [1,2,3,345,45,23,12,34,38,37,8,6,16];
let pares = [];
let impares = [];

function parImpar (lista) {
  for (let i=0; i<lista.length;i++) {
      if (lista[i]%2==0)
      {
          pares.push(lista[i]);
      }
      else
      {
          impares.push(lista[i]);
      }
  }
console.log ('Lista de numeros pares es ' + pares)
console.log ('Lista de numeros impares es ' + impares)
  }
parImpar (lista,pares,impares);

// ====================================================================================================


// 2. Respuesta pregunta 2

// Colocar el código acá

// ====================================================================================================