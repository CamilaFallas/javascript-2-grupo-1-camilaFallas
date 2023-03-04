// Mini proyecto: Libreria
// Crear un programa que simule una librería. Debe tener las siguientes características:
// 1. Debe tener una clase Libreria que tenga las siguientes propiedades:
//      1.1 Nombre
//      1.2. Dirección
//      1.3. Libros // lista de libros
//      1.4. Comics // lista de comics
//      1.5. Debe contar un método que permita agregar libros y comics a la librería.

class Libreria {
  constructor (nombre, direccion, libros, comics) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.libros = libros || [];
    this.comics = comics || [];
  } 

  AgregarLibro (titulo) {
    this.libros.push(titulo)
}

AgregarComics (titulo) {
  this.comics.push(titulo)
}
  
  getInfo (busquedaLibro) {
    
    // const no funciona, no se puede renombrar
  //   let listaLibros= this.libros;
  //    const buscar = listaLibros.filter(function (nombreLibro) {
  //      return nombreLibro.titulo === busquedaLibro
  //   } )
  // }
    
    let listaLibros= this.libros;
    //return listaLibros;
    const buscar = listaLibros.filter(nombreLibro => nombreLibro.titulo === busquedaLibro);
//buscar porque ella itera sobre el objeto 
      if (buscar.getCantidad === undefined) {
        return 'No hay ejemplares disponibles'
      } else {return buscar}
    }
}



const libreria1 = new Libreria ('Historias', 'Cost Rica')


// 2. Debe tener una clase Libro que represente un libro y tenga las siguientes propiedades: título, autor, precio, cantidad y año.
// 4. ** Los usuarios no pueden modificar datos de los libros o comics, pero sí pueden modificar la cantidad de libros disponibles, o el año, de igual forma deben ser propiedades privadas
// // ** tener en cuenta que para poder acceder y modificar las propiedades privadas debe usar getters y setters
// 5. Debe haber un método que permita obtener la información completa de un libro o comic, este debe llamarse "getInfo".
// 6. En caso de que la cantidad de libros o comics sea 0, debe mostrar un mensaje que diga "No hay ejemplares disponibles". 

class Libro {
  #cantidad = 0;
  #anio = '';
  constructor (titulo, autor, precio, cantidad, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio;
    this.#cantidad = cantidad;
    this.#anio = anio;
  }
  
  set setCantidad (disponibles) {
    this.#cantidad = disponibles;
  }
  
  get getCantidad () {
    return this.#cantidad
  }
  
  set setAnio (fecha) {
    this.#cantidad = fecha;
  }
  get getAnio () {
    return this.#anio
  }
}

const libro1 = new Libro ('Aves', 'KS', 5000, 0, 2023);
const libro2 = new Libro ('Plantas', 'JSB', 11000, 4, 2000);
libreria1.AgregarLibro(libro1);
libreria1.AgregarLibro(libro2);
// console.log (libreria1.libros);

console.log (libreria1.getInfo('Aves'));
// console.log (libro1);
// libro1.setCantidad = 5;
// console.log ("Cantidad actualizada" , libro1.getCantidad);

// 3. Debe tener una clase Comic que herede de Libro y tenga las siguientes propiedades extras: dibujante, editorial, volumen.
class Comic extends Libro {
  constructor(titulo, autor, precio, cantidad, anio, dibujante, editorial, volumen){
    super(titulo, autor, precio, cantidad, anio);
    this.dibujante = dibujante;
    this.editorial = editorial;
    this.volumen = volumen;
  }
}

const comic1 = new Comic ('Batman', 'DC', 1000, 4, 2000, 'iasnisan', 'DC', 3);
libreria1.AgregarComics(comic1);
// console.log (libreria1.comics);

