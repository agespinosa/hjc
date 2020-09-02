 console.log('Hola desde la consola');

// Tipos de datos en JS
// String: Cadena de caracteres: 'a', 'esto es un string' "hola yo tambien soy un string"
// Boolean: true o false
// Null: su valor es nulo
// Number: 32156 1 121 
// Undefined: Variable que no ha sido definida
// Object:  object

// Definicion de variables
//var 
//let 
//const

//var miPrimerVaribale= 'master';
let miPrimerVaribale= 'soy la variable let'
console.log('miPrimerVaribale');
// consepto de mutabilidad
miPrimerVaribale= 'esto ha cambiado';
console.log(miPrimerVaribale);
// boleanos
let miBoolean= true;
console.log(miBoolean);
// numeros
let miNumero= 557;
console.log(miNumero);
// undefined
let master
console.log(master);
// Nulo
let nulo= null
console.log(nulo);
// Object
const objetoVacio= {}

// objeto 2
const miObjeto={
    unNumero: 557,
    nombre: 'Gustavo',
    condicion: true,
    estado: null,
}
console.log(objetoVacio, miObjeto);
console.log(miObjeto.nombre);

// Arreglos
const vectorVacio=[];
const vector= [1,2,3,'hola', true, miObjeto];
console.log(vectorVacio, vector);
vector.push('colado');
console.log(vector);